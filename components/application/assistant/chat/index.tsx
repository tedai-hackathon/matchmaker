import React, { useEffect, useRef, useState } from 'react';
import ChatInputArea from './chat_input_area';
import ToggleIcon from '@/components/common/toggle_icon_swap'; 
import ChatBubble from './chat_bubble';
import useConversationStatementsSubscription from '@/app_lib/hooks/use_conversation_statement_subscription';
import { LazyConversationStatement, ParticipantType } from '@/models';
import { addMsgToConversation } from '@/app_lib/services/conversation_statement_service';
import { useUserAndAIParticipants } from '@/app_lib/hooks/use_conversation_participants';
import { __modelMeta__ } from '@aws-amplify/datastore';
import { use } from 'i18next';
import { useAIAssistant } from '@/app_lib/hooks/ai/use_ai_assistant';
import { justSaying, replyGeneralQuestion } from '@/app_lib/services/ai/general_chit_chat_service';
import  useCasesSubscription from '@/app_lib/hooks/use_vetcase_subscription';
import useRemindersSubscription from '@/app_lib/hooks/use_reminder_subscription';
import { on } from 'events';
import SideBar from '@/contexts/layouts/sidebar';

interface Props {
  maxMessages?: number;
  position: 'left' | 'right';
  onToggle: () => void;
  onMinMax: () => void;
  expanded: boolean;
  closed: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Chat: React.FC<Props> = ({
  maxMessages = 30,
  position,
  onToggle,
  onMinMax,
  expanded,
  closed, 
  children,
  className = "", 
  }) => {
  
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentTyper, setCurrentTyper] = useState<ParticipantType>();
  const helloDone = useRef(false);
  const [newStatement, setNewStatement] = useState<{msg: LazyConversationStatement, DateTime?: Date}>({msg: null as any, DateTime: null as any});
  const [isThinking, setIsThinking] = useState(false);
  const [displayedConvStmts, setDisplayedConvStmts] = useState<LazyConversationStatement[]>([]);

  const { userParticipant, aiParticipant } = useUserAndAIParticipants()
  const { statements: conversationStatements, isSynced} = useConversationStatementsSubscription(maxMessages);

  const {speakOut: letVettaAnswer, thinkLoudly} = useAIAssistant(newStatement, onTyping);
  const { vetCases, isSynced: isSyncedBehandlungen} = useCasesSubscription();
  const { reminders, isSynced: isSyncedReminder} = useRemindersSubscription();
  const [openItems, setOpenItems] = useState(0); // id -> open


  useEffect(() => {
    if( conversationStatements && conversationStatements.length > 0 ){
      setDisplayedConvStmts(conversationStatements.slice(0,maxMessages));
    }
  }, [conversationStatements]);


  function getRandomHelloPrompt() {
    const time = (new Date());
    const prompts = [
      "Begrüße den Herr'n Doctor mit etw. witzig-motivierendes. Aber halte es sehr kurz und nicht zu bombastisch auftreten.",
      "Ein kurzer Gruß reicht.",
      "Mach einen herben Gruß auf Friesisch.",
      "Ein kurzer Gruß reicht.",
      "Formuliere ein Chuck Norris Gruß. Aber gib nur den Gruß aus nichts anderes.",
      "Ein kurzer Gruß reicht.",
      "Formuliere ein Dilbert Witz als Gruß. Halt dich kurz und gib nur den Gruß aus nichts anderes.",
      "Ein kurzer Gruß reicht.",
      "Ein Zitat aus marc uwe kling känguru chroniken. Halt dich kurz und gib nur den Zitat aus nichts anderes. Füge am Ende ein 'Gruß vom Känguru ' hinzu.",
    ];
    return prompts[Math.floor(Math.random() * prompts.length)];
  }

  useEffect(() => {
    if (aiParticipant && !helloDone.current) {
      const sayHello = async () => {
        helloDone.current = true
        const time = (new Date());

        const hour = time.getHours();
        if( hour < 12 ) thinkLoudly("Moin...");
        else if( hour < 18 ) thinkLoudly("Tach...");
        else thinkLoudly("N'Abend...");

        try {
          const hello = await justSaying(`Es ist ${time.toLocaleString()} Uhr. ${getRandomHelloPrompt()}`, []);
          if( hello ) {
            thinkLoudly(hello);
          }
          
        } catch (error) {
          console.log("Error in sayHello: " + error);
        } 
     }
      sayHello();
    }
  }, [aiParticipant]);

   useEffect(() => {
    const openVetCases = vetCases? vetCases.filter((b) => !b.InPegassusErfasst || b.InPegassusErfasst == "").length: 0;
    const openReminder = reminders? reminders.filter((r) => !r.Done).length: 0;
    setOpenItems(openVetCases + openReminder);
   }, [vetCases, reminders]);

  function onTyping(message: string, who: ParticipantType) {
    setCurrentTyper(who);
    setCurrentMessage(message);
  }
  function onTypingNewMessage(message: string) {
    onTyping(message, ParticipantType.HUMAN);
  }

  const onSendTextMessage = (message: string, audioFormat?: string, recordingFile?: string, datetime?: Date, reqAIAnswer?: boolean) => {
    if( !userParticipant) return;
    const newStatement = addMsgToConversation(message, userParticipant, recordingFile, datetime);
    if( newStatement ) setNewStatement({msg: newStatement, DateTime: datetime});
    setCurrentMessage("");
  }

  const onError = (msg: string, now?: Date) => {
    console.log(msg);
    if( !aiParticipant) return;	
    letVettaAnswer("Oh, it seems there was an error: " + msg, aiParticipant, now );
  }


  const groupConvStmtsByDate = (stmts: LazyConversationStatement[]) => {
    return stmts.reduce((groups: {[date: string]: LazyConversationStatement[]}, stmt: LazyConversationStatement) => {
        const date = new Date(stmt.DateTime).toDateString(); 
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(stmt);
        return groups;
    }, {});
  }
  
  const renderGroupedConvStmts = (groupedStmts: {[date: string]: LazyConversationStatement[]}) => {
      let dates = Object.keys(groupedStmts);
      console.log("renderGroupedMessages: " + dates.length);
      // Sort dates in descending order
      dates = dates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

      return (
        <div>
        <div>
          {currentMessage && userParticipant && 
            <ChatBubble 
              convStmt={ {
                id: "",
                AudioSpeechRecording: null as any, 
                [__modelMeta__]: {} as any,
                StatementText: currentMessage,
                Participant: (currentTyper == ParticipantType.HUMAN? userParticipant: aiParticipant) as any,
                DateTime: (new Date()).toISOString(),
                conversationParticipantConversationStatementsId: userParticipant.id,
                Done: false,
              }}
              participant={currentTyper == ParticipantType.HUMAN? userParticipant: aiParticipant} />
            }
        </div>
        <div>     
          {dates.map((date: string, index: number) => (
            <div key={index}>
                <div className="divider sticky top-0 z-10 bg-gradient-radial from-gray-100 to-transparent font-semibold">
                  {date}
                </div>

                {groupedStmts[date].map((stmt: LazyConversationStatement, msgIndex: number) => (
                    <ChatBubble key={stmt.id} convStmt={stmt} onReSendToAI={setNewStatement}/>
                ))}
            </div>
        ))}
      </div>
      </div>
      );
  }

 // const groupedMessages = groupMessagesByDate(transformedMessages.slice(0, maxMessages));
 const groupedConvStmts = groupConvStmtsByDate(displayedConvStmts);

  const myChatRef = useRef<HTMLDivElement>(null);
  const onInputFocus = () => {
    if( myChatRef.current ){
      myChatRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  
  const justify = 'justify-between';

  return (
    <SideBar 
      position={position} 
      expanded={expanded} 
      closed={closed}
      onToggle={onToggle}
      onMinMax={onMinMax}
      className="overflow-y-auto h-full"
    >

  <div className="relative flex flex-col flex-grow max-h-full items-center">      

      <div  className={`flex-grow \
                      overflow-y-auto overflow-x-auto\
                      w-full pt-8 pr-4 pl-4`}
            ref={myChatRef} >

        {isThinking && <div><p>Thinking...</p></div>}
        
        {renderGroupedConvStmts(groupedConvStmts)}

        {!isSynced && <div><p>Loading</p></div>}
        <div className="h-1/4 min-h-fit max-h-1/5 z-20"> </div>
       </div>


      {/* <ChatInputArea  className="h-1/4 min-h-fit max-h-1/5 z-20" 
                      onSend={onSendTextMessage} 
                      onTyping={onTypingNewMessage}
                      onClick={onInputFocus}
                      asRecorder={true}
                      onError={onError}/> */}

    </div>
    </SideBar>
  );
}

export default Chat;
