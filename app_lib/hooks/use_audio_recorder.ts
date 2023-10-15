import { useState, useRef, useEffect } from 'react';
import { usePendingUploads } from './use_pending_uploads'; // Assuming this is the path
import { useOnlineStatus } from '@/contexts/is_online';
import { encodeToBase64, sendAudioToWhisper, uploadRecordingAudioFile } from '@/utils/client_side_utils/recordingUtils';

export const useAudioRecorder = (
  onError?: (msg: string) => void, 
  onSend?: (msg: string, audioFormat: string, recordingFile: string, datetime: Date) => void
) => {
  const browserMediaRecorder = useRef<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [recordingDuration, setRecordingDuration] = useState<number>(0);
  const transcript = useRef<string>("");
  const audioChunks = useRef<BlobPart[]>([]);

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
      if (browserMediaRecorder.current && browserMediaRecorder.current.state === 'recording') {
        browserMediaRecorder.current.stop();
      }
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    }
  }, []);  

  function getBrowserBasedAudioFormat() {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    return isSafari? 'audio/mp4': 'audio/webm';
  }

  const onStart = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia && !isUploading) {            
        navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(stream => {
            const audioFormat = getBrowserBasedAudioFormat();
            const recorder = new MediaRecorder(stream, { mimeType: audioFormat });
            recorder.onstart = () => {
                stream.getTracks()[0].enabled = true;
                audioChunks.current.length = 0;
                transcript.current = "";
                setIsRecording(true);
            };

            recorder.onstop = async () => {
                stream.getTracks().forEach(track => {
                    track.enabled = false;
                    track.stop(); 
                    stream.removeTrack(track)});
            };

            const recordingInterval = 100;
            let transcriptStreamInterval = 2; //in seconds
            recorder.ondataavailable = async event => {
                audioChunks.current.push(event.data);

                const duration: number = audioChunks.current.length * recordingInterval / 1000; // in seconds
                setRecordingDuration(parseFloat(duration.toFixed(2))); // Convert string to number and display up to two decimal places
            
                if (audioChunks.current.length % (10*transcriptStreamInterval) === 0 && isOnline) {
                  transcriptStreamInterval = 1;
                  const audioBlob = new Blob(audioChunks.current, { type: audioFormat });
                  const base64Audio = await encodeToBase64(audioBlob);
                  let transcription = await sendAudioToWhisper(base64Audio,  audioFormat) 
                  if(transcription.startsWith("[Sorry,")) {
                    if(!transcript.current.endsWith("...")) transcription = transcript.current + "...";
                  }
                  transcript.current = transcription;
                } else {
                  if(!transcript.current.endsWith("...")) transcript.current = transcript.current + "...";
                }            
            }

            // remember only existing recorder
            if (recorder) {        
                browserMediaRecorder.current = recorder;
            }

            let recordingReActivated = false;
            let timeout = maxRecordingTime;

            if (recorder && recorder.state === 'inactive') {
                recorder.start(recordingInterval);
                recordingReActivated = true;
            } else if (recorder && recorder.state === 'paused') {
                recorder.resume();
                recordingReActivated = true;
                timeout = maxRecordingTime - (recordingDuration * 1000);
            }

            if (recorder && recorder.state === 'recording' && recordingReActivated) {
                if (timerId.current) {
                    clearTimeout(timerId.current); // Cancel the previous timer if it exists
                }
                timerId.current = setTimeout(() => {
                if (browserMediaRecorder.current && browserMediaRecorder.current.state === 'recording') {
                    browserMediaRecorder.current.stop();
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
    if (browserMediaRecorder.current && browserMediaRecorder.current.state === 'recording') {
      browserMediaRecorder.current.stop();
      setIsRecording(false);

      if(audioChunks && audioChunks.current.length > 0 ) {
        setIsUploading(true);
        
        try{
          const audioFormat = getBrowserBasedAudioFormat();
          const audioBlob = new Blob(audioChunks.current, { type: audioFormat });
          setIsRecording(false);
          audioChunks.current.length = 0;
          uploadTranscribeAndSend(audioBlob, audioFormat).then(() => {
            transcript.current = ""
            setIsUploading(false);
            setRecordingDuration(0);
          });
        } catch (error) {
          console.error('Error processing recording:', error);
          transcript.current = ""
          setIsUploading(false);
          setRecordingDuration(0);
          }
      }

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

    if (onSend) onSend(transcription, audioFormat, uploadedRecordingFilename, now);
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


  return { 
    onStart, 
    onStop, 
    isRecording, 
    isUploading,
    pendingUploads, 
    transcription: transcript.current,
  };
}

