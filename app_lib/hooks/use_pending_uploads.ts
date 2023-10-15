import { useRef, useState, useEffect } from 'react';
import { IDBPDatabase, openDB } from 'idb';
import { uploadRecordingAudioFile } from '@/utils/client_side_utils/recordingUtils';
import { useOnlineStatus } from '@/contexts/is_online';
import { on } from 'events';

export const usePendingUploads = (onRetryPendingUpload: (audioBlob: Blob, audioFormat: string, now?: Date | undefined) => Promise<{ uploadedRecordingFilename: string; transcription: string; }> ) => {
  const [pendingUploads, setPendingUploads] = useState<any[]>([]);
  const pendingAudioDB = useRef<IDBPDatabase<unknown> | null>(null);
  const isOnline = useOnlineStatus();
  const retryInProgress = useRef<boolean>(false);

  useEffect(() => {
    const connectToPendingAudioDB = async () => {
      try {
        const db = await openDB('RecordingsDB', 1, {
          upgrade(db) {
            if (!db.objectStoreNames.contains('pendingUploads')) {
              db.createObjectStore('pendingUploads', { autoIncrement: true });
            }
          },
        });
        pendingAudioDB.current = db;
        const nPendingUploads = await listPendingUploads();
        if (nPendingUploads > 0 && isOnline && !retryInProgress.current) {
          await retryPendingUploads();
        }

      } catch (error) {
        console.error('Failed to connect to the database:', error);
      }
    };

    connectToPendingAudioDB();

    return () => {
      pendingAudioDB.current?.close();
    };
  }, []);

  useEffect(() => {
    const tryRetryIfOnline = async () => {
      if (isOnline && pendingUploads.length > 0 && !retryInProgress.current) {
        await retryPendingUploads();
      }
    }

    tryRetryIfOnline();

  }, [isOnline]);

  const saveToPendingUploads = async (audioBlob: Blob, audioFormat: string, now: Date) => {
    try {
      if (pendingAudioDB.current) {
        const uploadData = {
          audioBlob,
          audioFormat,
          date: now,
        };
        await pendingAudioDB.current.add('pendingUploads', uploadData);
        await listPendingUploads();
      }
    } catch (error) {
      console.error('Failed to save pending upload:', error);
    }
  }

  const listPendingUploads = async () => {
    let count = 0;
    if (pendingAudioDB.current) {
      try {
        const uploadKeys = await pendingAudioDB.current.getAllKeys('pendingUploads');
        const uploads = [];
        for (const key of uploadKeys) {
          const upload = await pendingAudioDB.current.get('pendingUploads', key);
          if (upload) {
            upload.key = key;
            uploads.push(upload);
          }
        }
        count = uploads.length;
        setPendingUploads(uploads);
      } catch (error) {
        console.error('Failed to list pending uploads:', error);
      }
    }
    return count;
  };

  const processAndUpload = async (uploadData: any, key: IDBValidKey) => {
    if (!isOnline) return;
    try {
      const {uploadedRecordingFilename, transcription}  = await onRetryPendingUpload(uploadData.audioBlob, uploadData.audioFormat, uploadData.date)

      if (uploadedRecordingFilename && pendingAudioDB.current) {
        await pendingAudioDB.current.delete('pendingUploads', key);
      }
      await listPendingUploads();
    } catch (error) {
      console.error('Failed to process and upload:', error);
    }
  }

  const retryPendingUpload = async (key: IDBValidKey) => {
    if (!isOnline) return;
    if (pendingAudioDB.current) {
      try {
        const uploadData = await pendingAudioDB.current.get('pendingUploads', key);
        if (uploadData) {
          await processAndUpload(uploadData, key);
        }
      } catch (error) {
        console.error('Retry upload failed:', error);
      }
    }
  }

  const retryPendingUploads = async () => {
    if(pendingAudioDB.current && !retryInProgress.current) {
      retryInProgress.current = true;
      try {
        let uploadKeys = await pendingAudioDB.current.getAllKeys('pendingUploads');
  
        for (const key of uploadKeys) {
          try {
            let upload = await pendingAudioDB.current.get('pendingUploads', key);
            upload.key = key;
            await processAndUpload(upload, key);
          } catch (error) {
            console.error('Retry failed:', error);
          }
        }
        
      } catch (error) {
        console.error('Retry failed:', error);
      }
      retryInProgress.current = false;    
    }
  }

  return { pendingUploads, saveToPendingUploads, retryPendingUpload, retryPendingUploads, listPendingUploads };
}
