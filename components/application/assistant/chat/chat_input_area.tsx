import TextMsgInput from '@/components/common/text_msg_input';
import RecorderIcon from '@/components/common/recording_swap';
import React, { useRef, useState } from 'react';
import ChatRecorder from './chat_recorder';

interface ChatInputAreaProps {
  onSend: (message: string, audioFormat?: string, recordingFile?: string, datetime?: Date) => void;
  onTyping?: (message: string) => void;
  onClick?: () => void,  
  placeholderText?: string;
  asRecorder?: boolean;
  className?: string;
  onError?: (msg: string) => void;
}

const ChatInputArea: React.FC<ChatInputAreaProps> = ({ 
  onSend,
  onTyping,
  onClick,
  placeholderText = 'Type a message', 
  asRecorder = false,
  className,
  onError }) => {
  const [isRecorder, setIsRecorder] = useState(asRecorder);
  const [isRecording, setIsRecording] = useState(false);


  const handleSwitchToRecorder = () => {
    setIsRecorder(true);
  } 

  const handleSwitchToText = () => {
    setIsRecorder(false);
  } 

  return (
    <div className={`absolute bottom-0 left-0 w-full flex ${className}`}>
      <div className="flex w-full h-full items-center justify-center bg-gradient-to-t from-gray-100 to-transparent">
        {isRecorder && <ChatRecorder  onSend={onSend}
                                      onTyping={onTyping}
                                      onSwitchToText={handleSwitchToText} 
                                      onClick={onClick}
                                      state={isRecording}
                                      onError={onError}/>}
        {!isRecorder && <TextMsgInput 
              onRecord={handleSwitchToRecorder} 
              onSend={onSend} 
              onTyping={onTyping}
              onFocus={onClick}/>}
      </div>
    </div>
  );
}

export default ChatInputArea;
