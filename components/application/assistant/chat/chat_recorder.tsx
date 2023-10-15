import React, { useEffect, useRef, useState } from 'react';
import RecorderIcon from '@/components/common/recording_swap';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useAudioRecorder } from '@/app_lib/hooks/use_audio_recorder';
import PendingUploadsToast from './pending_uploads_toast';

interface Props {
  onSend: (message: string, audioFormat: string, recordingFile: string, datetime: Date) => void;
  onSwitchToText: () => void;
  state?: boolean;
  onTyping?: (message: string) => void;
  onClick?: () => void,  
  className?: string;
  onError?: (msg: string) => void;
}

const ChatRecorder: React.FC<Props> = ({ 
  onSend,
  onTyping,
  state,
  onSwitchToText,
  onClick,
  className,
  onError }) => {
  
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { onStart, 
          onStop, 
          isRecording, 
          isUploading, 
          pendingUploads, 
          transcription } = useAudioRecorder( onError, onSend );

  useEffect(() => {
    if( transcription && onTyping && isRecording && !isUploading) {
      onTyping(transcription);
    }
  }, [transcription]);

  const onRecordClicked = (state: boolean) => {
    if( isRecording && !state ) {
      onStop();
    } else if( !isRecording && state ) {
      if(onClick) onClick();
      onStart();
    } else {
      console.log("onRecordClicked: state is not changed");
    }
  }
  
  return (
    <div>
      <style>
      {`
          @keyframes pulsate {
              0% { transform: scale(1); opacity: 0.5; }
              50% { transform: scale(1.01); opacity: 1; }
              100% { transform: scale(1); opacity: 0.5; }
          }
          .pulsating {
            animation: pulsate 3s infinite;
          }
      `}
      </style>

      <RecorderIcon onRecord={onRecordClicked} 
                        onSwitchToText={onSwitchToText} 
                        state={isRecording}
                        className={`${isRecording ? "animate-pulse" : ""}`}>
          {isUploading && (
          <div className="absolute top-0 right-0 w-10 h-10 opacity-90 animate-bounce">
            <FaCloudUploadAlt className="fill-current w-full h-full text-blue-600"/>
          </div>
        )}      
      </RecorderIcon>
      <PendingUploadsToast pendingUploads={pendingUploads} />
    </div>
  );
}

export default ChatRecorder;
