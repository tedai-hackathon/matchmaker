
import { Behandlung, 
         ConversationParticipant, 
         ConversationStatementType, 
         ErkannteBehandlungsElemente, 
         IntentType, 
         KundenTermin, 
         LazyConversationParticipant, 
         LazyConversationStatement, 
         ParticipantType, 
         Reminder, 
         LazyReminder } from '@/models';

import useConversationStatementsSubscription from '@/app_lib/hooks/use_conversation_statement_subscription';
import { use } from 'i18next';
import { useEffect, useRef } from 'react';
import {  getIntent as getGPTIntent } from '@/app_lib/services/ai/initent_classification_service';
import { ChatCompletionRequestMessage } from 'openai';
import { CaptureResult, captureReminder, captureReminder as extractReminderDetails } from '@/app_lib/services/ai/reminder_erfassungs_service';
import { captureBehandlung } from '@/app_lib/services/ai/behandlungs_erfassungs_service';
import { replyGeneralQuestion } from '@/app_lib/services/ai/general_chit_chat_service';
import { addMsgToConversation } from '@/app_lib/services/conversation_statement_service';
// import { useControlledAudio } from '../use_controled_audio_player';
import { useUserAndAIParticipants } from '../use_conversation_participants';
import { DataStore } from 'aws-amplify';
import { createVetCase } from '@/app_lib/services/vetcase_service';
import { Candidate, searchSimilarEntries } from '@/app_lib/services/fetch_similar_records_service';


export const useAIAssistant = (currentMessage: {msg?: LazyConversationStatement, DateTime?: Date},                                
                               onTyping: (text: string, participantType: ParticipantType) => void) => 
{
  const newIntentReqStmt = useRef<LazyConversationStatement>();
  const prevIntent = useRef<IntentType>();

  const { userParticipant, aiParticipant } = useUserAndAIParticipants()
  const { statements: conversationStatements, isSynced} = useConversationStatementsSubscription();
  // const { play: audioPlayer_play, pause: audioPlayer_pause, setSrc: setAudioPlayerSrc, state: isAudioPlayerOn } = useControlledAudio();

  function getRandomThinkingStmt() {
    const thinkingStmts = ["Hmm, lass mich mal nachdenken...",  
                            "Moment, ich check das...",
                            "Ok...",
                            "Moment...",
                            "Verstehe...",
                            "Aha...",
                            "Jup...",
                            "Also...",
                            "Versuche zu verstehen WORUM es geht..."]
    return thinkingStmts[Math.floor(Math.random() * thinkingStmts.length)];
  }

  useEffect(() => {
    const reactOnContext = async () => {
      if(!aiParticipant) return;
      //Identify intent
      try {
        thinkLoudly(getRandomThinkingStmt());
        const currentStmt = currentMessage.msg;
        if( !currentMessage.DateTime ) currentMessage.DateTime = new Date();
        const currentStmtTxt = currentStmt?.StatementText;
        if( !currentStmtTxt || currentStmtTxt.trim().length == 0 ) return;

        let chatContext; 
        const curTime = currentMessage.DateTime.getTime()
        const prevStmt = conversationStatements.at(1)
        if( prevStmt ) {
          const prevTime = (new Date(prevStmt.DateTime)).getTime()
          const delta = curTime - prevTime 
          if(delta < 1000*60*5) {
            chatContext = await getChatContext();
          }
        }
        let intentRes = await getIntent(currentStmtTxt? currentStmtTxt: "", chatContext);

        const isConfirmation = intentRes == "CONFIRMATION";
        const isDenial = intentRes == "DENIAL";
        //in case of confirmation or denial, keep the intentRes as the previous one, and lat the prev intent decide how to proceed
        if( isConfirmation || isDenial ) {
          intentRes = prevIntent.current;
        }

        if(intentRes != prevIntent.current ) {
          newIntentReqStmt.current = currentStmt;
          prevIntent.current = intentRes.intent;
        }

        const timestampedUsrPrompt = currentStmtTxt;//`[${(new Date()).toISOString()}] ${currentStmtTxt}`;
        currentMessage.DateTime = laterThanOrNow(currentMessage.DateTime);
        switch (intentRes) {
          case "UPDATE_BEHANDLUNG": 
          case IntentType.CAPTURE_BEHANDLUNG: {
              thinkLoudly("Alles klar, ich strukturiere das mal zu einem Behandlungs-Eintrag....");
              //Identify entities
              const behandlungsDetailsRes: CaptureResult = await captureBehandlung(timestampedUsrPrompt, createNewBehandlung, chatContext);
              thinkLoudly("");
              if(!behandlungsDetailsRes.deliverable) 
                await speakOut(behandlungsDetailsRes.reply, aiParticipant, laterThanOrNow(currentMessage.DateTime));
              else {
                // const savedReminder = await DataStore.save(updatedReminder);
                const savedBehandlung = await DataStore.save(behandlungsDetailsRes.deliverable);
                const newStmt = await speakOut(behandlungsDetailsRes.reply, aiParticipant, laterThanOrNow(currentMessage.DateTime));
                
                const updatedReminder = ErkannteBehandlungsElemente.copyOf(savedBehandlung, (updated) => {
                   updated.HumanRequest = newIntentReqStmt.current;
                   updated.AIExecutionResponse = newStmt;
                });
                const finalReminderRecord = await DataStore.save(updatedReminder);

              }            }
            break;

            case "UPDATE_REMINDER": 
            case IntentType.CAPTURE_REMINDER: {
              thinkLoudly("Alles klar, ich ermittle die Reminder details....");
              const reminderDetailsRes: CaptureResult[] = await captureReminder(timestampedUsrPrompt, createReminder, chatContext);
              thinkLoudly("");
              if(!reminderDetailsRes[0].deliverable) 
                await speakOut(reminderDetailsRes[0].reply, aiParticipant, laterThanOrNow(currentMessage.DateTime));
              else {
                reminderDetailsRes.forEach( async (result: CaptureResult) => {
                  if(!result.deliverable) return;
                  const resOnSimilarRemindersFound = await onSimilarRemindersFound(result, aiParticipant);
                  if(!resOnSimilarRemindersFound) {
                    const savedReminder = await DataStore.save(result.deliverable);
                    const newStmt = await speakOut(result.reply, aiParticipant, laterThanOrNow(currentMessage.DateTime));
                    
                    const updatedReminder = Reminder.copyOf(savedReminder, (updated) => {
                      updated.HumanRequest = newIntentReqStmt.current;
                      updated.AIExecutionResponse = newStmt;
                    });
                    const finalReminderRecord = await DataStore.save(updatedReminder);
                  }
                })
              }
            }
            break;

            
            case "QUERY_MEMORY":{
              const request = `Antworte auf diese nachricht so ähnlich wie "Huh, willst du mein Gedächtnis herausfordern?... das kann ich noch nicht, aber wir arbeiten daran 😁". Die NACHRICHT: "${timestampedUsrPrompt}"`
              await speakOut(await replyGeneralQuestion(request,[]), aiParticipant, currentMessage.DateTime);
              // //Identify entities
              // const arbeitsEntities = await getArbeitsEntities(currentMessage);
              // //Create result
              // const arbeitsResult = await createArbeitsResult(arbeitsEntities);
              // //Speak result
              // await onSpeak(arbeitsResult);
            }
            break;

          case "CONFIRMATION": break;
          case "DENIAL": break;

          case IntentType.CHITCHAT: {
            //onSpeak("Moment, ich check das.");
            //Speak result
              await speakOut(await replyGeneralQuestion(timestampedUsrPrompt, await getChatContext( 2000, 0.5 )), aiParticipant, currentMessage.DateTime);
            }
            break;

          case IntentType.CONTROL_APPLICATION:{
              const request = `Antworte auf diese Nachricht so ähnlich wie "Huh, willst du das ich die Anwendung steuere?... das kann ich noch nicht, aber wir arbeiten daran 😁". Die NACHRICHT: "${timestampedUsrPrompt}"`
              await speakOut(await replyGeneralQuestion(request,[]), aiParticipant, currentMessage.DateTime);
            }

          default: {
              const request = `Antworte auf diese Nachricht so ähnlich wie "Aha, ist sicher interessant, aber das kann ich noch nicht richtig einordnen/verstehen, sorry 😁. Villeicht anders formulieren oder einfach bei den Arbeitsthemen bleiben.". Die NACHRICHT: "${timestampedUsrPrompt}"`
              await speakOut(await replyGeneralQuestion(request,[]), aiParticipant, currentMessage.DateTime);
            }
            break;
        }
      } catch (thrownObject: any) {
        const { cause, gptAnswer } = thrownObject;
        console.error('Error while processing AI assistant request :', cause);
        thinkLoudly("");
        //await onSpeak("Argh, es gab schwierigkeiten. Vielleicht kannst du das nochmal anders formulieren, oder in kleineren Häpchen versuchen.", currentMessage.DateTime);
        await speakOut(gptAnswer, aiParticipant, currentMessage.DateTime);
      }
    };

    if (currentMessage && currentMessage.msg && currentMessage.msg.StatementText.trim().length > 0) reactOnContext();
  }, [currentMessage]);

  async function onSimilarRemindersFound(newReminder: CaptureResult, aiParticipant: LazyConversationParticipant) {
    if(!newReminder || !newReminder.deliverable) return false;

    const newTermin = new Date(newReminder.deliverable.Termin);
    const newThema = newReminder.deliverable.Thema;
    const newDetails = newReminder.deliverable.Details;

    let similarEntries: any = []
    try {
      similarEntries = await searchSimilarEntries<LazyReminder>(Reminder as any, 'id', 'Thema', 'Termin', 'Done', newTermin, newThema );
    } catch (error) {
      console.error(error);
    }

    if(similarEntries && similarEntries.length > 0) {
      const targetDay = newTermin.toLocaleDateString();
      const similarReminderTopics = () => {
        const total = similarEntries.length;
        const max = total>3? 3: total;
        const displaySamples = similarEntries.slice(0,max)
        return displaySamples.map((c: Candidate) => `"${c.text}"`).join(", ")                      
      };
      
      return await speakOut(`Ziemlich ähnliche reminder gibt es für den Tag[${targetDay}] schon.\
                     z.B. ${similarReminderTopics()}. Formuliere das Anliegen anders falls nötig.`, 
                     aiParticipant, 
                     laterThanOrNow(currentMessage.DateTime));
    }

    return false;
  }

  function laterThanOrNow(date?: Date){
    if(date && date instanceof Date ) {
      date.setSeconds(date.getSeconds() + 1);
      return date;
    } 
    date = new Date();
    return date;
  }

  const getIntent = async (message: string, chat_context_list?: ChatCompletionRequestMessage[]) => {
    const intent: any = await getGPTIntent(message, chat_context_list);
    console.log(intent);
    return intent.intent;
  }

  async function createNewBehandlung(fnArguments: any){
    const vorbericht = {KundenAnfrage: fnArguments.KundenAnfrage? fnArguments.KundenAnfrage: "",
             TerminVreinbarung: fnArguments.TerminVreinbarung? fnArguments.TerminVreinbarung: "",
             OrtsVereinbarung: fnArguments.OrtsVereinbarung? fnArguments.OrtsVereinbarung: "", 
             AertztlicherVorbericht: fnArguments.AertztlicherVorbericht? fnArguments.AertztlicherVorbericht: ""}
    
    const verwendeteTherapieMittel = fnArguments.BehandlungsMittel? fnArguments.BehandlungsMittel.map( (mittel: any) => { if(mittel && !mittel.NurAbgegeben) return mittel }): []
    const abgegebeneTherapieMittel = fnArguments.BehandlungsMittel? fnArguments.BehandlungsMittel.map( (mittel: any) => { if(mittel && mittel.NurAbgegeben) return mittel }): []

    const newBehandlung = new ErkannteBehandlungsElemente({
      ErfassungsZeitpunkt: (new Date()).toISOString(),
      Kunde: fnArguments.Kunde? fnArguments.Kunde: "",
      Tiere: fnArguments.Tiere? JSON.stringify(fnArguments.Tiere): "",
      Vorbericht: JSON.stringify(vorbericht),
      Befunde: fnArguments.Befunde? JSON.stringify(fnArguments.Befunde): "",
      Diagnosen: fnArguments.Diagnosen? JSON.stringify(fnArguments.Diagnosen): "",
      TherapieMassnahmen: fnArguments.Behandlungen? JSON.stringify(fnArguments.Behandlungen): "",
      VerwendeteTherapieMittel: verwendeteTherapieMittel? JSON.stringify(verwendeteTherapieMittel): "",
      AbgegebeneTherapieMittel: abgegebeneTherapieMittel? JSON.stringify(abgegebeneTherapieMittel): ""
    });

    return newBehandlung;
  }

  // async function createNewBehandlung1(vorbericht: any, befunde: any, diagnose: any, behandlung: any){
  //   //Create Behandlung Body
  //   const newBehandlung = await createBehandlung( new Behandlung({
  //         ErfassungsZeitpunkt: (new Date()).toISOString(),
  //     }))
    
  //     if(newBehandlung && vorbericht) {
  //       //Create KundenTermin Body
  //       const newVorbericht = await DataStore.save(new KundenTermin({
  //         KundenName: vorbericht.KundenName,
  //         KundenAnfrage: vorbericht.KundenAnfrage,
  //         TerminVreinbarung: vorbericht.TerminVreinbarung,
  //         OrtsVereinbarung: vorbericht.OrtsVereinbarung,
  //         AertztlicherVorbericht: vorbericht.AertztlicherVorbericht,
  //         //attach to new Behandlung
  //         kundenTerminBehandlungId: newBehandlung.id
  //     }))

  //     if(newVorbericht && vorbericht.NotwendigeVorbereitungen) {}
  //   }
  // }

  function createReminder(thema: string, termin: Date, details?: string, humanReqStmt?: LazyConversationStatement, aiExecRespStmt?: LazyConversationStatement) {
    const newReminder = new Reminder({
      ErfassungsZeitpunkt: (new Date()).toISOString(),
      Thema: thema,
      Termin: termin.toISOString(),
      Details: details? details: "",
      Done: false
    });
    return newReminder;
  }
  const createTerminResult1 = async (entities: any, humanReqStmt: LazyConversationStatement, aiExecRespStmt: LazyConversationStatement) => {
    const confirmation =  entities["confirmation"];
    const clarification = entities["clarification"];
    if(!clarification) {
      if( entities.termine && entities.termine.length > 0 ) {
        entities.termine.forEach( (termin: any) => {
          if( termin.thema && termin.termin ) {
            const newReminder = new Reminder({
              ErfassungsZeitpunkt: (new Date()).toISOString(),
              Thema: termin.thema,
              Termin: termin.termin,
              Details: termin.details,
              Done: false,
              AIExecutionResponse: aiExecRespStmt,
              HumanRequest: humanReqStmt
            });
          }
        } )
      }
    }
    return {confirmation, clarification};
  }


  async function speakOut(message: string, aiParticipant: LazyConversationParticipant, date?: Date){
    thinkLoudly(message)
    const ttsRecodingFilename = await streamAudio(message);

    if( processTypingQuePromise.current ) await processTypingQuePromise.current 

    onTyping("", ParticipantType.AI);
    if(aiParticipant){
      currentMessage.msg = undefined
      return addMsgToConversation(message, aiParticipant, ttsRecodingFilename, date);
    } 
  }

  const typingQue = useRef<string[]>([])
  const typingInProgress = useRef<boolean>(false)
  const processTypingQuePromise = useRef<Promise<void>>()
  async function processTypingQue(){
      typingInProgress.current = true
      while( typingQue.current.length > 0 ) {
        const currentMessage = typingQue.current[0];
        for (let i = 0; currentMessage && i < currentMessage.length; i++) {
          onTyping(currentMessage.substring(0, i), ParticipantType.AI);
          await new Promise(resolve => setTimeout(resolve, 50));
        }
        await new Promise(resolve => setTimeout(resolve, 300));
        typingQue.current.shift()
      }
      typingInProgress.current = false
  }

  async function thinkLoudly(message: string) {
    typingQue.current.push(message)
    if(!typingInProgress.current){
      processTypingQuePromise.current = processTypingQue()
    } 
  }

  const streamAudio = async (text: string) => {
    let recordingFileName = "";
    // try {
    //     // if( text && isAudioPlayerOn) {
    //     //   // setAudioPlayerSrc('/api/text-to-speech?text=' + encodeURIComponent(text));
    //     //   // audioPlayer_play();
    //     //   ////recordingFileName = await uploadTTSAudio(audioPlayer);
    //     // }
    // } catch (error) {
    //     console.error('Error fetching audio', error);
    // }
    return recordingFileName;
  };

  
  const getChatContext = async (timeWindow: number = 1, maxWordCount: number = 2000, summarizedLongTailProportion: number = 0.5 ) => {
    if( conversationStatements && conversationStatements.length > 0){
          const maxWords = maxWordCount;
          const longTailWordsThreshold = maxWords * summarizedLongTailProportion
          let wordsCount = 0;
          const wordSplitter = /[\s\W]+/;

          let longTailChatText = ""
          const latest_interactions: ChatCompletionRequestMessage[] = [];
        
          const curTime = currentMessage.DateTime? currentMessage.DateTime.getTime(): (new Date()).getTime()
          const maxTimeDelta = 1000 * 60 * timeWindow
          
          for (let i = conversationStatements.length - 1; i >= 0; i--) {
            const stmt = conversationStatements[i];
            const prevTime = (new Date(stmt.DateTime)).getTime()
            const delta = curTime - prevTime 
  
            if( delta >  maxTimeDelta ) continue;
            if( currentMessage.msg?.StatementText == stmt.StatementText ) break;
            const wordCountInMessage = stmt.StatementText.split(wordSplitter).length; 
        
            if (wordsCount + wordCountInMessage <= maxWords && wordCountInMessage > 0) {
              // if(wordsCount + wordCountInMessage <= longTailWordsThreshold) {
              //   longTailChatText += (await stmt.Participant).Type == ParticipantType.HUMAN ? "user:": "assistant: ",
              //   longTailChatText += stmt.StatementText
              // } else 
              {
                latest_interactions.push({  
                  "role": (await stmt.Participant).Type == ParticipantType.HUMAN ? "user": "assistant",
                  "content": stmt.StatementText
                });
              }
        
              wordsCount += wordCountInMessage;
            } else {
              break;
            }
          }

          // TODO: rethink this (currently not so beneficial, but cost generating)
          // let longTailSummary = ""
          // if( longTailChatText && longTailChatText.length > 0 ){ 
          //   const system_content = "Du bist ein zusammenfassungs assistent und lieferst nur die zusammenfassung um die du gebeten wurdest.";
          //   const user_content =  "Bitte fasse mir diese Konversation so zusammen dass die wesentlichen Themen, Fakten und Zusammenhänge in maximal 5 Sätzen erfasst werden:\n###\n"+ longTailChatText + "\n###\n";
          //   longTailSummary = await requestChatGptAnswer(user_content, system_content);
          //   latest_interactions.unshift({  // Verwende unshift, um die Reihenfolge der Nachrichten beizubehalten
          //     "role": "system",
          //     "content": "Also consider this recent conversation context:\n" + longTailSummary
          //   });
          // }

          return latest_interactions;
        }
    return [];
  };        

  return { speakOut, thinkLoudly }
};
