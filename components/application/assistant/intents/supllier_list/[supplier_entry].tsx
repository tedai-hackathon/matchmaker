import { deleteConversationStatement, updateConversationStatement } from '@/app_lib/services/conversation_statement_service';
import DoneIcon from '@/components/common/done_swap';
import { ConversationStatement, LazyConversationParticipant, LazyConversationStatement, ParticipantType, Reminder, LazyErkannteBehandlungsElemente as LazyVetCaseRecord, ErkannteBehandlungsElemente as VetCaseRecord } from '@/models';
import { encodeToBase64, sendAudioToWhisper } from '@/utils/client_side_utils/recordingUtils';
import React, { useEffect } from 'react';
import { Storage } from 'aws-amplify';
import { get } from 'http';
import getConfig from 'next/config';
import { fetchConvStmtReminder, updateReminder } from '@/app_lib/services/reminder_service';
import { fetchConvStmtVetCase, updateBehandlung } from '@/app_lib/services/vetcase_service';

interface Props {
  convStmt: LazyConversationStatement;
  participant?: LazyConversationParticipant;
  className?: string; // Add this line
}

const Transcription: React.FC<Props> = ({ 
  convStmt,
  participant,
  className
}) => {
  const [chatUserName, setChatUserName] = React.useState<string>("");
  const [avatar, setAvatar] = React.useState<string>("");
  const [audioUrl, setAudioUrl] = React.useState<string>("");
  const [participantType, setParticipantType] = React.useState<ParticipantType>(ParticipantType.AI);
  const [summary, setSummary] = React.useState<string>('');
  
  useEffect(() => {
    const fetchData = async () => {
      setSummary(await summarize(convStmt.StatementText));
      const _participant = participant? participant: await convStmt.Participant;
      setParticipantType(_participant.Type as ParticipantType);
      setAudioUrl(await fetchAudioUrl(convStmt));
    } 

    fetchData();
  }, [convStmt]);
  
  function summarize(StatementText: string): React.SetStateAction<string> | PromiseLike<React.SetStateAction<string>> {
    const len = StatementText.length;
    return convStmt.StatementText?.slice(0, len > 50? 50: len) + (len > 50?"...":"") || ''
  }
  
  const fetchAudioUrl = async (stmt: LazyConversationStatement) => {
    const audioFileName = (await stmt.AudioSpeechRecording)?.Filename || '';
    if(!audioFileName) return '';
    try {
      const audioUrl = await Storage.get(audioFileName, { level: 'protected' });
      return audioUrl;
    } catch (error) {
      console.log('fetchAudioUrl error: ', error);
    }
    return '';
  }

  const onDelete = () => {
    deleteConversationStatement(convStmt)
  }

  const onDone = () => {
    const updatedStmt = ConversationStatement.copyOf(convStmt, (updated) => {
      updated.Done = !updated.Done;
    });
    updateConversationStatement(updatedStmt)
    convStmt = updatedStmt;
    
    let intentUpdated = false;
    fetchConvStmtReminder(convStmt.id).then((reminder) => {
      if(!reminder) return;
      const updatedReminder = Reminder.copyOf(reminder, (updated) => {
        updated.Done = !updated.Done;
      });
      updateReminder(updatedReminder);
      intentUpdated = true;
    }
    );
    if(!intentUpdated) {
      fetchConvStmtVetCase(convStmt.id).then((vetCase) => {
        if(!vetCase) return;
        const updatedVetCase = VetCaseRecord.copyOf(vetCase, (updated) => {
          updated.InPegassusErfasst = updated.InPegassusErfasst? null: (new Date()).toISOString();
        });
        updateBehandlung(updatedVetCase);
        intentUpdated = true;
      });
    }      

  }

  const onTranscribe = async (e: any) => {
    e.stopPropagation();
    const audioFileName = (await convStmt.AudioSpeechRecording)?.Filename || '';
    if(audioFileName) {
      try {
        const mp3S3Response = await Storage.get(audioFileName, { level: 'protected', download: true });
        if(mp3S3Response) {
          const fileBlob = mp3S3Response.Body as Blob;
          const base64Audio = await encodeToBase64(fileBlob);
          const audioFormat = `audio/${audioFileName.split('.').pop()}`
          const transcript = await sendAudioToWhisper(base64Audio, audioFormat);
          if(confirm(`Do you want to replace current transcript for ${audioFileName} with this:\n"${transcript}"?`)) {
            const updatedStmt = ConversationStatement.copyOf(convStmt, (updated) => {
              updated.StatementText = transcript;
            });
            updateConversationStatement(updatedStmt)
          }
        }
      } catch (error) {
        console.error('Error transcribing audio:', error);
      }
    }
  }  

  function toTime(AWSDateTime: string) {
    const date = new Date(AWSDateTime);
    return `${date.getHours()}:${date.getMinutes()}`    
  }

  return (
    
    <div className="flex flex-row items-center pb-4 ">
        <div className="collapse bg-slate-500 w-11/12">
            <input type="checkbox" /> 
            <div className="collapse-title font-medium text-white h-fit
                            flex justify-between">
                <div className='flex font-medium'>{summary}</div>
                <div className='text-sm'>{toTime(convStmt?.DateTime)}</div>
            </div>
            <div className="collapse-content bg-slate-400"> 
               <p>{convStmt?.StatementText}</p>
                {<audio controls  src={audioUrl}/>}
            </div>    
        </div>    

        <DoneIcon className='w-6 h-6 pl-0.5 pr-0.5'
            state={convStmt.Done? true: false}
            onChange={onDone} />
    </div>

  );
}

export default Transcription;

