import { useState, useRef, useEffect } from 'react';
import { usePendingUploads } from './use_pending_uploads'; // Assuming this is the path
import { useOnlineStatus } from '@/contexts/is_online';
import { encodeToBase64, sendAudioToWhisper, uploadRecordingAudioFile } from '@/utils/client_side_utils/recordingUtils';
import RecordRTC from 'recordrtc';
import { on } from 'events';

export const useAudioRecorder = (
  onError?: (msg: string) => void, 
  onSend?: (msg: string, recordingFile: string, datetime: Date) => void
) => {
  const browserRTCRecorder = useRef<RecordRTC | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [recordingDuration, setRecordingDuration] = useState<number>(0);
  const transcript = useRef<string>("");

  const {
    pendingUploads, 
    saveToPendingUploads 
  } = usePendingUploads(uploadTranscribeAndSend);

  const isOnline = useOnlineStatus();
  const timerId = useRef<NodeJS.Timeout | null>(null);
  const maxRecordingTime = 120000; // 2 minutes

  useEffect(() => {
    return () => {
      // cleanup code here
      if (browserRTCRecorder.current) {
        browserRTCRecorder.current.stopRecording();
      }
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    }
  }, []);  

  const onStart = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {            
        navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(stream => {

          const options: RecordRTC.Options = {
            type: 'audio',
            mimeType: "audio/wav",
            numberOfAudioChannels: 1,
            recorderType: RecordRTC.StereoAudioRecorder,
            checkForInactiveTracks: true,
            timeSlice: 1000,
            ondataavailable: (blob: Blob) => {
            },
          }

            const audioChunks: BlobPart[] = [];
            const onstart = () => {
                stream.getTracks()[0].enabled = true;
                audioChunks.length = 0;
                transcript.current = "";
                //setRecordingStopped(false);
                setIsRecording(true);
            };

            const onstop = onRecoorderStoped(stream, audioChunks, options.mimeType || "audio/wav");

            const recordingInterval = 100; //in ms
            let transcriptStreamInterval = 2; //in seconds
            options.ondataavailable = async (blob) => {
              audioChunks.push(blob);

              const duration: number = audioChunks.length * recordingInterval / (options.timeSlice || 1000); // in seconds
                setRecordingDuration(parseFloat(duration.toFixed(2))); // Convert string to number and display up to two decimal places
            
                if (audioChunks.length % (10*transcriptStreamInterval) === 0 && isOnline) {
                  transcriptStreamInterval = 1;
                  const audioBlob = new Blob(audioChunks, { type: options.mimeType });
                  const base64Audio = await encodeToBase64(audioBlob);
                  let transcription = await sendAudioToWhisper(base64Audio, options.mimeType || "audio/mp3"); 
                  if(transcription.startsWith("[Sorry,")) {
                    if(!transcript.current.endsWith("...")) transcription = transcript.current + "...";
                  }
                  transcript.current = transcription;
                } else {
                  if(!transcript.current.endsWith("...")) transcript.current = transcript.current + "...";
                }            
            }

            // remember only existing recorder
            const recorder = new RecordRTC(stream, options)
            if (recorder) {        
                browserRTCRecorder.current = recorder;
            }

            let recordingReActivated = false;
            let timeout = maxRecordingTime;

            if (recorder && recorder.state === 'inactive') {
                recorder.startRecording();
                onstart();
                recordingReActivated = true;
            } else if (recorder && recorder.state === 'paused') {
                recorder.resumeRecording();
                recordingReActivated = true;
                timeout = maxRecordingTime - (recordingDuration * (options.timeSlice || 1000));
            }

            if (recorder && recorder.state === 'recording' && recordingReActivated) {
                if (timerId.current) {
                    clearTimeout(timerId.current); // Cancel the previous timer if it exists
                }
                timerId.current = setTimeout(() => {
                if (browserRTCRecorder.current && browserRTCRecorder.current.state === 'recording') {
                    browserRTCRecorder.current.stopRecording();
                    onstop();
                }
                }, timeout);
            }
        }).catch(error => {
            console.error("Error accessing media devices.", error);
            if(onError) onError("Error accessing media devices(microphone).");
        });
    } else {
      console.error("Media devices API not supported.");
      if(onError) onError("Can't access the microphone.");
    };
  }

  const onStop = () => {
    if (browserRTCRecorder.current) {
      browserRTCRecorder.current.stopRecording();
      setIsRecording(false);
    }
  }

  async function uploadTranscribeAndSend(audioBlob: Blob, audioFormat: string, now?: Date) {
    const _now = now? now: new Date();
    const uploadedRecordingFilename = await uploadRecordingFile(audioBlob, audioFormat, _now);
    let transcription = "";
  
    if (!uploadedRecordingFilename) {
      await saveToPendingUploads(audioBlob, audioFormat, _now);
    } else {
      transcription = await transcribeAndSend(audioBlob, audioFormat, uploadedRecordingFilename, _now, transcript.current);
    }
    return { uploadedRecordingFilename, transcription };
  }
  
  async function transcribeAndSend(audioBlob: Blob, audioFormat: string, uploadedRecordingFilename: string, now: Date, transcriptStream?: string) {
    const transcription = await transcribeRecording(audioBlob, audioFormat, transcriptStream);

    if (onSend) onSend(transcription, uploadedRecordingFilename, now);
    return transcription;
  }

  async function transcribeRecording(audioBlob: Blob, audioFormat: string, transcriptStream?: string) {
    let transcription = "";
    if (isOnline) {
      try {
        const base64Audio = await encodeToBase64(audioBlob);
        transcription = await sendAudioToWhisper(base64Audio, audioFormat);
        if (transcription.startsWith("[Sorry,") && transcriptStream && transcriptStream.length > 0) {
          transcription = transcriptStream;
        }

      } catch (error) {
        if (transcriptStream && transcriptStream.length > 0) {
          transcription = transcriptStream;
        }

        console.error('Error transcribing audio:', error);
      }
    }
    return transcription;
  }

  async function uploadRecordingFile(audioBlob: Blob, audioFormat: string, now: Date) {
    let uploadedRecordingFilename = "";
    if (isOnline) {
      try {
        uploadedRecordingFilename = await uploadRecordingAudioFile(audioBlob, audioFormat, now);
      } catch (error) {
        console.error('Error uploading audio file:', error);
      }
    }
    return uploadedRecordingFilename;
  }

  function onRecoorderStoped(stream: MediaStream, audioChunks: BlobPart[], mimeType: string) {
    return async () => {
      stream.getTracks().forEach(track => {
        track.enabled = false;
        track.stop();
        stream.removeTrack(track);
      });
  
      if (audioChunks && audioChunks.length > 0) {
        setIsUploading(true);
  
        try {
          const audioBlob = new Blob(audioChunks, { type: mimeType });
          setIsRecording(false);
          audioChunks.length = 0;
          const { uploadedRecordingFilename, transcription } = await uploadTranscribeAndSend(audioBlob, mimeType);
        } catch (error) {
          console.error('Error processing recording:', error);
        }
  
        transcript.current = "";
        setIsUploading(false);
        setRecordingDuration(0);
      }
  
    };
  }
  

  return { 
    onStart, 
    onStop, 
    isRecording, 
    isUploading,
    pendingUploads, 
    transcription: transcript.current,
  };
}


