import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import styles from './whisper.module.css'; // Import styles
import { encodeToBase64, sendAudioToWhisper, extractFacts, uploadRecordingAudioFile, uploadTranscription, uploadFacts, uploadProcessingStatus } from '@/utils/client_side_utils/recordingUtils';
import { IDBPDatabase, openDB } from 'idb';
import { useOnlineStatus } from '@/contexts/is_online';

// Configure retries
axiosRetry(axios, { 
  retries: 3,
  retryDelay: (retryCount) => {
    console.log(`Retrying request (${retryCount})...`);
    return retryCount * 1000; // time interval between retries
  }
});

interface SpeechRecognitionProps {
  setRecordingStopped: React.Dispatch<React.SetStateAction<boolean>>;
}

const SpeechRecognition = ({ setRecordingStopped }: SpeechRecognitionProps): JSX.Element => {
  const [transcript, setTranscript] = useState<string>("");
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [pendingUploads, setPendingUploads] = useState<any[]>([]);
  const [recordingDuration, setRecordingDuration] = useState<number>(0);
  const [pendingAudioDB, setPendingAudioDB] = useState<IDBPDatabase<unknown> | null>(null);
  
  const isOnline = useOnlineStatus();

  let timerId: NodeJS.Timeout | null = null; 
  const maxRecordingTime = 120000; // 2 minutes

  useEffect(() => {
    const connectToPendingAudioDB = async () => {

      const db = await openDB('RecordingsDB', 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains('pendingUploads')) {
            db.createObjectStore('pendingUploads', { autoIncrement : true });
          }
        },
      });
      setPendingAudioDB(db);
      await listPendingUploads(db);
    }
    connectToPendingAudioDB();    
    return () => {
      if (pendingAudioDB) {
        pendingAudioDB.close();
      }
    };
  });

  useEffect(() => {
    listPendingUploads(pendingAudioDB);
  })

  useEffect(() => {
    if(!isOnline) return;
    retryPendingUploads();
  }, [isOnline])

  const saveToPendingUploads = async (audioBlob: Blob, now: Date ) => {
    if(pendingAudioDB !== null) {  
      const uploadData = {
        audioBlob,
        date: now,
      };
    
      await pendingAudioDB.add('pendingUploads', uploadData);
    }
  }
  
  
  const retryPendingUploads = async () => {
    if(pendingAudioDB !== null) {
      let uploadKeys = await pendingAudioDB.getAllKeys('pendingUploads');

      setRecordingStopped(false);
      for (const key of uploadKeys) {
        try {
          let upload = await pendingAudioDB.get('pendingUploads', key);
          upload.key = key;
          await processAndUpload(upload, key);
        } catch (error) {
          console.error('Retry failed:', error);
        }
      }
      setRecordingStopped(true);
    }
  }


  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(stream => {
      const recorder = new MediaRecorder(stream);

      const audioChunks: BlobPart[] = [];
      let audioBlob: Blob = new Blob();
      let base64Audio = "";
      let transcription = "";

      recorder.onstart = () => {
        stream.getTracks()[0].enabled = true;
        audioChunks.length = 0;
        setTranscript("");
        setRecordingStopped(false);
        setIsRecording(true);
      };

      recorder.onstop = async () => {
        stream.getTracks().forEach(track => {track.stop(); stream.removeTrack(track)});
        setIsUploading(true);
        try{
          audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
          const now = new Date();
          let isAudioUploaded = false;
          if (isOnline) {        
              try{
                await uploadRecordingAudioFile(audioBlob, 'audio/mp3', now);
                isAudioUploaded = true;
              } catch (error) {
                console.error('Error uploading audio file:', error);
              }
          } 
          
          if(!isAudioUploaded) {
            await saveToPendingUploads(audioBlob, now)
          }

          let isTranscriptionDone = false;
          if(isAudioUploaded && isOnline) {
            try {
              base64Audio = await encodeToBase64(audioBlob);
              transcription = await sendAudioToWhisper(base64Audio, "audio/mp3");
              await uploadTranscription(transcription, now);
              isTranscriptionDone = true;
            } catch (error) {
              console.error('Error transcribing audio:', error);
            }
          }

          let isFactsExtracted = false;
          if(isTranscriptionDone && isOnline) {
            try {
              //const facts = await extractFacts(transcription);
              //await uploadFacts(facts, now);
              isFactsExtracted = true;
            } catch (error) {
              console.error('Error extracting facts:', error);
            }
          }

          let isStatusInitialized = false;
          if(isFactsExtracted && isOnline) {
            try {
              const status = {done: false};
              await uploadProcessingStatus(JSON.stringify(status), now);
              isStatusInitialized = true;
            } catch (error) {
              console.error('Error initializing status:', error);
            }
          }

          let count = await listPendingUploads(pendingAudioDB);
          console.log(`Found ${count} pending uploads`);
          if( count > 0 ) {
            await retryPendingUploads();
          }
            
        } catch (error) {
          console.error('Error processing recording:', error);
        }

        setTranscript("");
        setIsUploading(false);
        setIsRecording(false);
        setRecordingStopped(true);
        setRecordingDuration(0);
        audioChunks.length = 0;
      };

      const recordingInterval = 100;
      recorder.ondataavailable = async event => {
        audioChunks.push(event.data);

        const duration: number = audioChunks.length * recordingInterval / 1000; // in seconds
        setRecordingDuration(parseFloat(duration.toFixed(2))); // Convert string to number and display up to two decimal places
      
        if (audioChunks.length % 50 === 0 && isOnline) {
          audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
          base64Audio = await encodeToBase64(audioBlob);
          transcription = await sendAudioToWhisper(base64Audio, 'audio/mp3') 
          setTranscript(transcription);
        }
      }


      setMediaRecorder(recorder);
      recorder.start(recordingInterval);
      if (timerId) {
        clearTimeout(timerId); // Cancel the previous timer if it exists
      }
      timerId = setTimeout(() => {
        if (mediaRecorder) {
          mediaRecorder.stop();
        }
      }, 60000);      
    });
  }

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  }

  const listPendingUploads = async (db: IDBPDatabase | null) => {
    let count = 0;
    if(db) {
      let uploadKeys = await db.getAllKeys('pendingUploads');
      let uploads = [];
      for (const key of uploadKeys) {
        const upload = await db.get('pendingUploads', key);
        upload.key = key;
        uploads.push(upload);
      }
      setPendingUploads(uploads);
      count = uploads.length;
      console.log(`Found ${count} pending uploads`);
    }
    return count;
  };
  
  const processAndUpload = async (uploadData: any, key: IDBValidKey ) => {
    if( !isOnline ) return;
    if(pendingAudioDB !== null) {
      await uploadRecordingAudioFile(uploadData.audioBlob, 'audio/mp3', uploadData.date);
      await pendingAudioDB.delete('pendingUploads', key);
      await listPendingUploads(pendingAudioDB); // Update pending uploads
    }
  }
    
  const retryPendingUpload = async (key: IDBValidKey) => {
    if( !isOnline ) return;
    if(pendingAudioDB !== null) {
      setRecordingStopped(false);
      const uploadData = await pendingAudioDB.get('pendingUploads', key);
    
      try {
        await processAndUpload(uploadData, key);
      } catch (error) {
        console.error('Retry failed:', error);
      }
      setRecordingStopped(true);      
    }
  }
    
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={startRecording} disabled={isRecording || isUploading}>START</button>
        <button className={styles.button} onClick={stopRecording} disabled={!isRecording}>STOP</button>
      </div>
      {recordingDuration > 0 && <div>Recording duration: {recordingDuration} seconds (max: {maxRecordingTime/1000}s )</div>}
      {recordingDuration > 0 && <progress  className="w-full h-2 bg-gray-200"
          max={maxRecordingTime/1000}
          value={recordingDuration}
      ></progress>}
      {isRecording && <div className={styles.recordingIndicator}></div>}
      {isUploading && <p>Uploading, Transcribing...</p>}
      {isUploading && <div className={styles.transcribingIndicator}></div>}
      {isRecording && <div>
        <p>{transcript}</p>
      </div>}
      <div className="py-4" >
      {pendingUploads.length > 0 && <h2>Pending uploads:</h2>}
      {pendingUploads.map((uploadData, i) => (
        <div key={uploadData.key} className="flex items-center justify-between">
          <audio controls src={URL.createObjectURL(uploadData.audioBlob)} style={{width: '300px', height: '50px', paddingTop:'4px', paddingBottom:'4px', paddingRight:'8px'}}></audio>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-2 rounded" 
                  onClick={() => retryPendingUpload(uploadData.key)}>
                    Retry Upload
          </button>
        </div>
      ))}
    </div>
  </div>
  );}

export default SpeechRecognition;

