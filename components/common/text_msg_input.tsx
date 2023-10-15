import React, { useEffect, useRef, useState } from 'react';
import { PiMicrophoneFill, PiMicrophoneSlashFill } from 'react-icons/pi';
import { IoIosSend } from 'react-icons/io';

interface ChatInputAreaProps {
  onSend: (message: string) => void;
  onRecord: (state: boolean) => void;
  onTyping?: (message: string) => void;
  onFocus?: () => void;
  placeholderText?: string;
  className?: string;
}

const TextMsgInput: React.FC<ChatInputAreaProps> = ({ 
  onSend,
  onRecord,
  onTyping,
  onFocus,
  placeholderText = 'Type a message', 
  className 
}) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null); 

  const handleTyping = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSend(message);
      setMessage(''); 
    } else {
      if(onTyping) onTyping(message);
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  }

  const handleSendClick = () => {
    onSend(message);
    setMessage(''); 

    if(inputRef.current) {
      inputRef.current.value = '';
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);   

  return (
    <div className={`flex w-full flex-nowrap justify-center items-center gap-1 ${className}`}>
      <button className="btn btn-md pr-4" onClick={() => {onRecord(true)}}>
        <PiMicrophoneSlashFill className="fill-current w-8 h-8 text-red-600" />
      </button>
      <input
        ref={inputRef} 
        className="w-1/2 h-12 pl-2 pr-2 border rounded" 
        placeholder={placeholderText} 
        onKeyUp={handleTyping}
        value={message}
        onChange={handleInputChange}
        onFocus={onFocus}
      />
      <button className="btn btn-md" onClick={handleSendClick}>
        <IoIosSend className="fill-current w-8 h-8 text-blue-400" />
      </button>
    </div>
  );
}

export default TextMsgInput;
