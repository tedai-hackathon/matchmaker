import React, { use, useEffect } from 'react';
import { formatDateToReadable } from '@/utils/common';
import { ConversationStatement, LazyConversationParticipant, LazyConversationStatement, LazyErkannteBehandlungsElemente as LazyVetCase, LazyReminder, ParticipantType } from '@/models';
import { deleteConversationStatement, updateConversationStatement } from '@/app_lib/services/conversation_statement_service';
import { Storage } from 'aws-amplify';
import { encodeToBase64, sendAudioToWhisper } from '@/utils/client_side_utils/recordingUtils';
import { fetchConvStmtReminder } from '@/app_lib/services/reminder_service';
import Image from "next/image";
import { fetchConvStmtVetCase } from '@/app_lib/services/vetcase_service';
import PrettyJson from '@/components/common/pretty_json';


export interface Props {
  convStmt: LazyConversationStatement;
  onReSendToAI?: (value: { msg: LazyConversationStatement; DateTime?: Date }) => void;
  participant?: LazyConversationParticipant;
  className?: string; // Add this line
}

const ChatBubble: React.FC<Props> = ({ 
  convStmt,
  onReSendToAI,
  participant,
  className
}) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const [chatSide, setChatSide] = React.useState<string>("chat-start");
  const [chatUserName, setChatUserName] = React.useState<string>("");
  const [avatar, setAvatar] = React.useState<string>("");
  const [audioUrl, setAudioUrl] = React.useState<string>("");
  const [participantType, setParticipantType] = React.useState<ParticipantType>(ParticipantType.AI);
  const [reminder, setReminder] = React.useState<LazyReminder>();
  const [vetCase, setVetCase] = React.useState<LazyVetCase>();


  useEffect(() => {
    const fetchData = async () => {
      const _participant = participant? participant: await convStmt.Participant;
      if(!_participant) return;
      setParticipantType(_participant.Type as ParticipantType);
      setChatSide(_participant.Type  == ParticipantType.AI ? "chat-start" : "chat-end");
      setChatUserName(_participant.Name);
      setAvatar(_participant.Type == ParticipantType.AI? 
        'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' :
        '/avatar_user_male.png'
      );
      setAudioUrl(await fetchAudioUrl(convStmt));
      setReminder(await fetchConvStmtReminder(convStmt.id));
      setVetCase(await fetchConvStmtVetCase(convStmt.id));
    } 

    fetchData();
  }, [convStmt]);


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

  const onReSend = (e: any) => {
    const date = new Date(convStmt.DateTime);
    date.setSeconds(date.getSeconds() + 10);
    onReSendToAI?.({ msg: convStmt, DateTime: date });
    e.stopPropagation();
  }

  const onEdit = (e: any) => {
    console.log('TODO: onEdit')
    e.stopPropagation();
  }

  const onExpandFunctions = (e: any) => {
    setIsClicked(!isClicked)
    e.stopPropagation();
  }

  return (
    <div>
    {avatar && chatUserName && chatSide && 
      <div>
        <div className={`chat overflow-x-auto ${chatSide} ${className}`}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={avatar} className="w-10" alt={chatUserName}/>
            </div>
          </div>

          <div className="chat-header">
            {chatUserName} <span> </span>
            <time className="text-xs opacity-50">{formatDateToReadable(convStmt?.DateTime, false, false, true)}</time>
          </div>

          <div className="chat-bubble max-w-xs md:max-w-md lg:max-w-lg break-words" 
              style={{wordWrap: 'break-word', overflowWrap: 'break-word'}}
              onClick={onExpandFunctions}
              onDoubleClick={onEdit}>
            {convStmt?.StatementText}

            { ( isClicked || convStmt?.StatementText.startsWith("[Sorry, transcription failed!]") ) && 
              <div>
                {convStmt?.id && <div className="flex flex-row justify-between pb-1">
                  <div className="button bg-red-600 p-1 rounded-md text-xs cursor-pointer" onClick={onDelete}>DEL</div>

                  {audioUrl && <div className="button bg-blue-600 p-1 rounded-md text-xs cursor-pointer" onClick={onTranscribe}>Transcribe</div> }

                  {participantType == ParticipantType.HUMAN && onReSendToAI && 
                    <div className="button bg-purple-600 p-1 rounded-md text-xs cursor-pointer" 
                        onClick={onReSend}>Send
                    </div>
                  }
                </div>}

                {audioUrl && <audio controls src={audioUrl} className='w-full h-4'/>}
              </div>
            }

        {/* {<div className="chat-footer opacity-50">{status}</div>} */}
        </div>
        </div>

        <div>
          {( isClicked || convStmt?.StatementText.startsWith("[Sorry, transcription failed!]") )&& 
            <div className='bg-slate-400 w-[85%] max-w-xs sm:max-w-none sm:w-full smd:items-center sm:flex sm:justify-center'>
              {reminder && <div className="flex flex-col p-4">
                  <p><b>Thema : </b>{reminder.Thema}</p>
                  <p><b>Wann : </b>{(new Date(reminder.Termin)).toDateString()} {(new Date(reminder.Termin)).toLocaleTimeString()}</p>
                  <p><b>Details : </b>{reminder.Details}</p>
                </div>}
              {vetCase && 
                <div className="flex flex-col justify-between p-4 overflow-x-auto w-[95%] sm:w-full">
                  <PrettyJson title="Vorbericht" data={vetCase.Vorbericht} withLeafeTable={false}/>
                  <PrettyJson title="Befunde" data={vetCase.Befunde} />
                  <PrettyJson title="Diagnosen" data={vetCase.Diagnosen} />
                  <PrettyJson title="Massnahmen" data={vetCase.TherapieMassnahmen} withLeafeTable={false}/>
                  <PrettyJson title="Verwendet" data={vetCase.VerwendeteTherapieMittel} />
                  <PrettyJson title="Abgegeben" data={vetCase.AbgegebeneTherapieMittel} />
                </div>
                }
            </div>
          }
        </div>
      </div>
    }
    </div>
  );
}

export default ChatBubble;
