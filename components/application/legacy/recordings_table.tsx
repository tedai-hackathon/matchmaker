import React, { useEffect, useState } from 'react';
import { Storage } from 'aws-amplify';
import { getRecordingBaseName, getRecordingTodayPrefix } from '@/utils/client_side_utils/recordingUtils';
import { encodeToBase64, sendAudioToWhisper, extractFacts, uploadFacts, PROCESSING_STATUS } from '@/utils/client_side_utils/recordingUtils';
import { S3ProviderListOutputItem } from "@aws-amplify/storage";
import { useOnlineStatus } from '@/contexts/is_online';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faDownload } from '@fortawesome/free-solid-svg-icons';

interface FileTableProps {
  recordingStopped: boolean;
  setRecordingStopped: React.Dispatch<React.SetStateAction<boolean>>;
  recordingsStartDate: Date;
  recordingsEndDate: Date;
}

interface FACTS {
  day: string;
  customer: string;
  animals: { id: string; type: string }[];
  diagnose: string;
  services: { 
    name: string;
    products: { 
      name: string;
      amount: string;
      unit: string;
      usage: string;
    }[]
  }[];
}

interface TEXT_RECORD {
  fileName: string;
  text?: string;
  fileLastModified?: Date;
}

interface PROCESSING_STATUS_RECORD {
  text_record: TEXT_RECORD;
  status?: PROCESSING_STATUS;
}

interface FACTS_RECORD {
  text_record: TEXT_RECORD;
  facts?: FACTS[];
}

interface Audio_Record {
  fileName: string;
  fileBytesSize?: number;
  audioUrlData?: string;
  audioFileLastModified?: Date;
  audioLastLoaded?: Date;
}

interface RECORDING {
  createdAt: Date;
  baseFileName: string;
  audioRecording: Audio_Record;
  transcription?: TEXT_RECORD;
  facts?: FACTS_RECORD;
  status?: PROCESSING_STATUS_RECORD;
}

const FileTable: React.FC<FileTableProps> = ({ recordingStopped, setRecordingStopped, recordingsStartDate, recordingsEndDate }) => {
  const [files, setFiles] = useState<any[]>([]);
  const [recordingsPerDayState, setRecordingsPerDayState] = useState<{ [day: string]: {[rec_date_time: string]: RECORDING} }>({});
  const [audioUrls, setAudioUrls] = useState<{ [key: string]: string }>({});
  const [transcriptions, setTranscriptions] = useState<{ [key: string]: string }>({});
  const [facts, setFacts] = useState<{ [key: string]: string }>({});
  const [processingStatusList, setProcessingStatusList] = useState<{ [key: string]: PROCESSING_STATUS }>({});

  const isOnline = useOnlineStatus();

  const getDateObjFromRecordingFileName = (fileName: string) => {
    const dateStrA = fileName.split("_")[0].split("-").join("/"); // extract date part and replace '-' with '/'
    const timeStrA = fileName.split("_")[1].split("-").join(":").split('.')[0]; // extract time part and replace '-' with ':'
    return new Date(`${dateStrA} ${timeStrA}`)  ; // construct date object
  }

  const formatDateForPrefix = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  const fetchRecordings = async (fromDate: Date=new Date(), toDate: Date=new Date(), lazy_text: boolean=true, lazy_audio: boolean = true) => {
      if( !isOnline ) return;
      //reject if more then 100 days
      if(toDate.getTime() - fromDate.getTime() > 100 * 24 * 60 * 60 * 1000){
        alert("Please select a time range less then 100 days");
        return;
      }

      let currentDate = fromDate;
      let endDate = toDate;

      //remove all records from recordingsPerDayState that are not in the range
      Object.keys(recordingsPerDayState).forEach((recordingDay: string) => {
        const recordingDate = new Date(recordingDay);
        if(recordingDate < fromDate || recordingDate > toDate) {
          delete recordingsPerDayState[recordingDay];
        }
      });
      
      while(currentDate <= endDate) {
        await fetchRecordingsOfDay(currentDate, lazy_text, lazy_audio);
        currentDate.setDate(currentDate.getDate() + 1);
      }

      let updatedState = {...recordingsPerDayState};
      setRecordingsPerDayState(updatedState);
      /*let allFiles: any[] = [];
      const sortedResults = allFiles.sort((a: any, b: any) => {
        const dateTimeA = getDateObjFromRecordingFileName(a.key);
        const dateTimeB = getDateObjFromRecordingFileName(b.key);
        return dateTimeB.getTime() - dateTimeA.getTime(); // sort in descending order
      });*/
  };

  const toDayDateOnly = (date: Date): Date => {
    let dayDateOnly = new Date(date);
    dayDateOnly.setHours(0,0,0,0);
    return dayDateOnly;
  }

  const isSameDay = (date1: Date, date2: Date): boolean => {
    return toDayDateOnly(date1).getTime() === toDayDateOnly(date2).getTime();
  }

  const hasRecordingOfSameDay = (date: Date): boolean => {
    const strDayDate = formatDateForPrefix(date);
    return recordingsPerDayState[strDayDate]? true: false;
  }

  const lazyLoadTextContent = async (recordingTextElementRecord: TEXT_RECORD,
                                     fileName: string, 
                                     fileSize?: number, 
                                     fileLastModified?: Date,
                                     lazy: boolean = true) => {
    /*if (fileName && 
      (!lazy || !recordingTextElementRecord.fileLastModified || !fileLastModified ||
      (fileLastModified > recordingTextElementRecord.fileLastModified)) ) {
*/
            recordingTextElementRecord.text = await downloadTextFileContent(fileName);
            if (recordingTextElementRecord.text) {
              recordingTextElementRecord.fileLastModified = fileLastModified;
            }
  //  }
  }

  const addRecordingPrototype = (recordingsOfDay: { [filename: string]: RECORDING } = {}, baseName: string = '') => {
    recordingsOfDay[baseName] = {
      createdAt: getDateObjFromRecordingFileName(baseName),
      baseFileName: baseName,
      audioRecording: {
        fileName: '',
      },
      transcription: {
        fileName: ''
      },
      facts: {
        text_record: {
          fileName: ''
        } as TEXT_RECORD,
        facts: [],
      },
      status: {
        text_record: {
          fileName: ''
        } as TEXT_RECORD,
        status: { done: false } as PROCESSING_STATUS,
      }
    } as RECORDING;

    return recordingsOfDay[baseName];
  }

  const updateAudioRecordingRecord = async (recording: RECORDING, fileName: string, fileSize?: number, fileLastModified?: Date, lazy: boolean = false) => {
    recording.audioRecording.fileName = fileName;
    recording.audioRecording.fileBytesSize = fileSize;
    recording.audioRecording.audioFileLastModified = fileLastModified;
    if (!lazy) await loadAudioRecordingRecord(recording, fileName);
  }

  const loadAudioRecordingRecord = async (recording: RECORDING, fileName: string) => {
    if(!isOnline) return;
    recording.audioRecording.audioUrlData = await Storage.get(fileName, { level: 'protected' });;
    recording.audioRecording.audioLastLoaded = new Date();
}
  
  const updateTranscriptionRecord = async (recording: RECORDING, fileName: string, fileSize?: number, fileLastModified?: Date, lazy: boolean = false) => {
    let transcriptionElement = recording.transcription || {} as TEXT_RECORD;
    transcriptionElement.fileName = fileName;
    await lazyLoadTextContent(transcriptionElement, fileName, fileSize, fileLastModified, lazy);
    recording.transcription = transcriptionElement;
  }

  const updateFactsRecord = async (recording: RECORDING, fileName: string, fileSize?: number, fileLastModified?: Date, lazy: boolean = false) => {
    let factsElement = recording.facts || {} as FACTS_RECORD;
    let factsElement_text_record: TEXT_RECORD = factsElement.text_record || {fileName: fileName} as TEXT_RECORD;
    factsElement_text_record.fileName = fileName;
    await lazyLoadTextContent(factsElement_text_record, fileName, fileSize, fileLastModified, lazy);
    factsElement.text_record = factsElement_text_record;
    const isValidFactsJSONString = factsElement.text_record.text &&
      factsElement.text_record.text.length > 0 &&
      factsElement.text_record.text.startsWith('{"vet_customer_service_records":') &&
      factsElement.text_record.text.endsWith("}");
    const emptyDefaultFactsJson = '{"vet_customer_service_records": [ { "day": "", "customer": "", "diagnose": "", "services": [] } ] }'
    factsElement.facts = JSON.parse(isValidFactsJSONString? factsElement.text_record.text ||  emptyDefaultFactsJson:  emptyDefaultFactsJson) as FACTS[];
    recording.facts = factsElement;    
  }

  const updateStatusRecord = async (recording: RECORDING, fileName: string, fileSize?: number, fileLastModified?: Date, lazy: boolean = false) => {
    let statusElement = recording.status || {} as PROCESSING_STATUS_RECORD;
    let statusElement_text_record: TEXT_RECORD = statusElement.text_record || {fileName: fileName} as TEXT_RECORD;
    await lazyLoadTextContent(statusElement_text_record, fileName, fileSize, fileLastModified, lazy);
    statusElement.text_record = statusElement_text_record;
    const isValidStatusJSONString = statusElement.text_record.text &&
      statusElement.text_record.text.length > 0 &&
      statusElement.text_record.text.startsWith('{"done":') &&
      statusElement.text_record.text.endsWith("}");
    let emptyDefaultStatusJSONString = '{"done": "false"}';
    let jsonText = isValidStatusJSONString? statusElement.text_record.text: emptyDefaultStatusJSONString;
    statusElement.status = JSON.parse(jsonText || emptyDefaultStatusJSONString) as PROCESSING_STATUS;
    recording.status = statusElement;
  }

  const refreshRecordingsState = () => {
    let updatedState = {...recordingsPerDayState};
    setRecordingsPerDayState(updatedState);
  }

  const fetchRecordingsOfDay = async (day: Date=new Date(), lazy_text: boolean=true, lazy_audio: boolean = true) => {
    //is day already loaded
    const prefix = formatDateForPrefix(day);
    let recordingsOfDay = recordingsPerDayState[prefix]

    if(!recordingsOfDay) {
      recordingsOfDay = {};
      recordingsPerDayState[prefix] = recordingsOfDay
    }

    const s3FileList = await Storage.list(`${prefix}`, { level: 'protected', pageSize: 200 });

    if(s3FileList.results.length === 0 && Object.keys(recordingsOfDay).length > 0) {
      delete recordingsPerDayState[prefix];
    } else if(s3FileList.results.length > 0) {
      //remove all files from the day that are no longer in the s3FileList
      Object.keys(recordingsOfDay).forEach((rec_date_time: string) => {
          if(!s3FileList.results.find((file: S3ProviderListOutputItem) => file.key?.startsWith(rec_date_time))) {
            delete recordingsOfDay[rec_date_time];
          }
      });
      refreshRecordingsState();

      s3FileList.results.forEach( async (file: S3ProviderListOutputItem) => {
        const fileName = file.key || '';
        const fileSize = file.size;
        const fileLastModified = file.lastModified;
        const baseName = fileName.split('.')[0].split('_').slice(0,2).join('_');
        let recording = recordingsOfDay[baseName] || addRecordingPrototype( recordingsOfDay, baseName);

        try{
          if(fileName.endsWith('.mp3')) {
              await updateAudioRecordingRecord(recording, fileName, fileSize, fileLastModified, lazy_audio);
          } else if(fileName.endsWith('_transcript.txt')) {
              await updateTranscriptionRecord(recording, fileName, fileSize, fileLastModified, lazy_text);
          } else if(fileName.endsWith('_facts.txt')) {
              await updateFactsRecord(recording, fileName, fileSize, fileLastModified, lazy_text);
          } else if(fileName.endsWith('_status.txt')) {
              await updateStatusRecord(recording, fileName, fileSize, fileLastModified, lazy_text);
          }
        } catch(e) {
          console.log(e);
        }
      });
    }
    refreshRecordingsState();
  };

  const handleDelete = async (baseName: string) => {
    if( !isOnline ) return;
    if(confirm(`Are you sure you want to delete this recording: ${baseName}?`)) {
    const filePromises: Promise<any>[] = [];
    filePromises.push(Storage.remove(`${baseName}.mp3`, { level: 'protected' }));
    filePromises.push(Storage.remove(`${baseName}_transcript.txt`, { level: 'protected' }));
    filePromises.push(Storage.remove(`${baseName}_facts.txt`, { level: 'protected' }));
    filePromises.push(Storage.remove(`${baseName}_status.txt`, { level: 'protected' }));
    await Promise.all(filePromises);
    fetchRecordings();
    }
  };

  const handleTranscribe = async (baseName: string) => {
    if( !isOnline ) return;
    const mp3S3Response = await Storage.get(`${baseName}.mp3`, { level: 'protected', download: true });
    const fileBlob = mp3S3Response.Body as Blob;
    const base64Audio = await encodeToBase64(fileBlob);
    const audioFormat = `audio/mp3`
    const transcript = await sendAudioToWhisper(base64Audio, audioFormat);
    if(confirm(`Do you want to replace current transcript for ${baseName} with this:\n"${transcript}"?`)) {
      const transcriptFileName = `${baseName}_transcript.txt`;
      await Storage.remove(transcriptFileName, { level: 'protected' });
      await Storage.put(transcriptFileName, transcript, { level: 'protected' });

      const factsFileName = `${baseName}_facts.txt`;
      await Storage.remove(factsFileName, { level: 'protected' });
      const facts = await extractFacts(transcriptFileName)
      await Storage.put(factsFileName, transcript, { level: 'protected' });

      fetchRecordings();
    }
  };

  const handleLoadRecording =async (recording:RECORDING) => {
    if( !isOnline ) return;
    await loadAudioRecordingRecord(recording, recording.audioRecording.fileName);
    refreshRecordingsState();
  }

  const handleExtractFacts = async (transcript?: string, baseFileName?: string) => {
    if( !isOnline || !transcript || !baseFileName) return;
    const facts = await extractFacts(transcript)
    if(confirm(`Save this Facts:\n"${facts}"?`)) {
      const factsFileName = `${baseFileName}_facts.txt`;
      await Storage.remove(factsFileName, { level: 'protected' });
      await Storage.put(factsFileName, facts, { level: 'protected' });

      refreshRecordingsState();
    }
  };

  const handleStatus = async (status: PROCESSING_STATUS, recordingDay: string, recordingBasename: string) => {
      if( !isOnline ) return;
      let defaultStatusRecord: PROCESSING_STATUS_RECORD = { 
        text_record: {fileName: `${recordingBasename}_status.txt`} as TEXT_RECORD,
        status: status
        };
      
      let recordingStatusElement = recordingsPerDayState[recordingDay][recordingBasename].status
      if(!recordingStatusElement) {
        recordingsPerDayState[recordingDay][recordingBasename].status = defaultStatusRecord;
        recordingStatusElement = recordingsPerDayState[recordingDay][recordingBasename].status;
      }

      let fileName = defaultStatusRecord.text_record.fileName;
      if( recordingStatusElement ){
        recordingStatusElement.status = status;
        recordingStatusElement.text_record.fileName = recordingStatusElement.text_record.fileName || `${recordingBasename}_status.txt`;
        fileName = recordingStatusElement.text_record.fileName;
        recordingStatusElement.text_record.fileLastModified = new Date();
        recordingStatusElement.text_record.text = JSON.stringify(status);
      }
      await Storage.put(fileName, status, { level: 'protected' });
      refreshRecordingsState();
  };

  useEffect(() => {
    if( !isOnline ) return;
    fetchRecordings(recordingsStartDate, recordingsEndDate);
  }, []);

  useEffect(() => {
    if( !isOnline ) return;
    fetchRecordings(recordingsStartDate, recordingsEndDate);
  }, [isOnline, recordingStopped, recordingsStartDate, recordingsEndDate]);

  const downloadTextFileContent = async (fileName: string) => {
    let result = "";
    const fileContent = await Storage.get(fileName, { level: 'protected', download: true });
    if (fileContent && 'Body' in fileContent) {
      const blob = fileContent.Body as Blob;
      const arrayBuffer = await blob.arrayBuffer();
      const decoder = new TextDecoder('utf-8');
      const text = decoder.decode(arrayBuffer);
      result = text;
    }    
    return result;
  }

  return (
    <div className="">
    <div className="table-container inline-block lg:overflow-visible lg:max-w-fit lg:max-h-fit sm:max-w-2xl max-w-lg max-h-lg">
        <table className="divide-gray-200 divide-y">
        <thead className="bg-gray-500 bg-opacity-70 sticky top-0">
        <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase text-white tracking-wider">Recording</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase text-white tracking-wider">Transcript</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase text-white tracking-wider">Facts</th>
        </tr>
        </thead> 
        <tbody className="divide-y divide-gray-200 -top-10">
        {Object.keys(recordingsPerDayState).map((day) => 
            Object.keys(recordingsPerDayState[day]).map((fileName, index) => {
                    const recordingDay = day;
                const recordingFilename = fileName;
                const recording = recordingsPerDayState[recordingDay][recordingFilename];
                const audioUrl = recording.audioRecording.audioUrlData;
                const baseName = recording.baseFileName;

                // Only create rows for audio files
                const transcriptFileName = recording.transcription?.fileName;
                let transcript = recording.transcription?.text;

                const factsFileName = recording.facts?.text_record.fileName;
                let factsTxt = recording.facts?.text_record.text;

                factsTxt = factsTxt ? factsTxt : "";
                let data = { vet_customer_service_records: [ { day: baseName,
                  customer: "",
                  diagnose: factsTxt}]};
                if(factsTxt.startsWith('{"vet_customer_service_records":') && factsTxt.endsWith("}")){
                  try{
                    data = JSON.parse(factsTxt);
                  }
                  catch(e){
                    console.log(e);
                  }
                }

                const statusFileName = recording.status?.text_record.fileName;
                const statusDone = recording.status?.status?.done;

                const dateTime = recording.createdAt.toLocaleString('de-DE', { timeZone: 'Europe/Berlin' });
                return (
                    <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap align-top">
                        
                        <div className="flex justify-between items-center w-full bottom-10">
                          {dateTime}
                        </div>

                        {audioUrl && 
                        <div className="flex justify-between items-center w-full bottom-10">
                          <audio controls src={audioUrl} style={{width: '200px', height: '45px', paddingTop:'5px', paddingBottom:'8px'}}>
                              Your browser does not support the audio tag.
                          </audio> 
                        </div>}

                          {!audioUrl && 
                          <div className="flex justify-between items-center w-full bottom-10">
                            <button onClick={() => handleLoadRecording(recording)} className="px-1 py-1 bg-purple-800 p-4 text-white rounded flex items-center">
                              <FontAwesomeIcon icon={faPlay} className="mr-2" />
                            </button>
                            ...load Recording
                          </div>
                          }

                        <div className="flex justify-between w-full">
                          <button onClick={() => handleDelete(baseName)} className="text-red-500 hover:text-red-700 underline underline-offset-2 py-1 px-2">
                              Delete
                          </button>
                          <button onClick={() => handleTranscribe(baseName)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                              Transcribe
                          </button>
                        </div>
                        
                    </td>
                    <td className="px-6 py-4 align-top">
                      <div className="flex flex-col items-start">
                        <div className="mb-4">
                          {transcript}
                        </div>
                        <div className="flex justify-between w-full">
                          <button 
                            onClick={() => {
                              const newStatus: PROCESSING_STATUS = {done: !statusDone}
                              handleStatus(newStatus, recordingDay, baseName)}} 
                            className={`font-bold py-1 px-2 rounded ${statusDone ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 hover:bg-red-700'} text-white`}
                          >
                            {statusDone ? 'ERLEDIGT' : 'TODO'}
                          </button>
                          {transcript && <button 
                            onClick={() => handleExtractFacts(transcript, baseName)} 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                          >
                            Facts
                          </button>}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap align-top">
                    {data &&
    <table className="table-auto border-collapse w-full">
        <thead>
            <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
                <th className="px-4 py-2 bg-gray-200">Date</th>
                <th className="px-4 py-2 bg-gray-200">Customer</th>
                <th className="px-4 py-2 bg-gray-200">Animals</th>
                <th className="px-4 py-2 bg-gray-200">Diagnose</th>
                <th className="px-4 py-2 bg-gray-200">Services</th>
            </tr>
        </thead>
        <tbody className="text-sm font-normal text-gray-700">
            {
                  (data.vet_customer_service_records as FACTS[]).map((record, recordIndex) => (
                      <tr key={recordIndex} className="hover:bg-gray-100 border-b border-gray-200 py-10">
                          <td className="px-4 py-4 whitespace-normal align-top">{record.day || ''}</td>
                          <td className="px-4 py-4 align-top">{record.customer || ''}</td>
                          <td className="px-4 py-4 whitespace-normal align-top">{record.animals && record.animals.map((animal) => `${animal.id} | ${animal.type}`).join(', ')}</td>
                          <td className="px-4 py-4 whitespace-normal align-top">{record.diagnose || ''}</td>
                          <td className="px-4 py-4 align-top">
                              {record.services && record.services.map((service, serviceIndex) => (
                                  <table key={serviceIndex} className="table-auto border-collapse w-full">
                                      <thead>
                                          <tr className="rounded-lg text-sm font-medium text-gray-500 text-left">
                                              <th className="px-2 py-2 bg-gray-200 align-top">{service.name || ''}</th>
                                          </tr>
                                          <tr className="text-sm font-medium text-gray-500 text-left">
                                              <th className="px-2 py-2 bg-gray-200">Product</th>
                                              <th className="px-2 py-2 bg-gray-200">Amount</th>
                                              <th className="px-2 py-2 bg-gray-200">Unit</th>
                                              <th className="px-2 py-2 bg-gray-200">Usage</th>
                                          </tr>
                                      </thead>
                                      <tbody className="text-sm font-normal text-gray-700">
                                          {service.products && service.products.map((product, productIndex) => (
                                              <tr key={productIndex} className="border-b border-gray-200">
                                                  <td className="px-2 py-2">{product.name || ''}</td>
                                                  <td className="px-2 py-2">{product.amount || ''}</td>
                                                  <td className="px-2 py-2">{product.unit || ''}</td>
                                                  <td className="px-2 py-2">{product.usage || ''}</td>
                                              </tr>
                                          ))}
                                      </tbody>
                                  </table>
                              ))
                      }
                    </td>
                </tr>
            ))
          }
        </tbody>
    </table>
}

</td>

                    </tr>
                );
              }))}
        </tbody>
    </table>
    </div>
  </div>  
  );
};

export default FileTable;
