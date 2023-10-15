import {authenticatedAxios,authenticatedAxiosPost, authenticatedAxiosDelete, authenticatedAxiosGet, authenticatedAxiosPut } from './authApiRequest';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import {AxiosResponse} from 'axios';

import { Storage } from 'aws-amplify';
import { PutResult } from '@aws-amplify/storage';
import { openDB } from 'idb';
import { ChatCompletionFunctions, ChatCompletionRequestMessage } from 'openai';

export type PROCESSING_STATUS = {
  done: boolean
} 

// Configure retries
axiosRetry(axios, { 
  retries: 3,
  retryDelay: (retryCount) => {
    console.log(`Retrying request (${retryCount})...`);
    return retryCount * 1000; // time interval between retries
  }
});

export const getTranscription = async (fileName: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;

    Storage.get(fileName, { level: 'protected', download: true }).then((result) => {
      console.log('Transcription file downloaded:', result);
      const fileContent = result.Body as Blob;
      reader.readAsText(fileContent)
    }).catch((err) => { 
      console.log('Error downloading transcription file:', err);
      reject(err);
    });
  });
}

export const extractFacts =async (transcript:string) => {
  let facts = ""
  try{
    
    type ResData = {
      facts: string
      error: string
    }

    // const response = await authenticatedAxiosPost('/api/extract_facts', {
    //    transcript: transcript 
    // });
    const response = await axios.post('/api/extract_facts', { transcript: transcript, model_name: "gpt-3.5-turbo" });
    facts = response.data.facts;
  } catch (error) {
    console.error('Data extraction request failed :', error);
    facts='<data extraction request failed>'
  } 

  return facts;  
}

export const encodeToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export const getRecordingBaseName = (now: Date): string => {
  const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const formattedTime = `${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}-${String(now.getSeconds()).padStart(2, '0')}`;
  return `${formattedDate}_${formattedTime}`;
}

export const getRecordingTodayPrefix = (): string => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    return `${formattedDate}_`;
  }
  
export const getRecordingAudioFileName = (date: Date, audioFormat: string): string => {
  return `${getRecordingBaseName(date)}.${audioFormat.split('/')[1]}`;
}

export const getTranscriptionFileName = (date: Date): string => {
  return `${getRecordingBaseName(date)}_transcript.txt`;
}

export const getFactsFileName = (date: Date): string => {
  return `${getRecordingBaseName(date)}_facts.txt`;
}

export const getProcessingStatusFileName = (date: Date): string => {
  return `${getRecordingBaseName(date)}_status.txt`;
}

export const getFactsFileNameForRecording = (recordingFileName: string): string => {
  const baseName = recordingFileName.substring(0, recordingFileName.length - 4); // Remove '.mp3'
  return `${baseName}_facts.txt`;
}

export const uploadTranscription = async (transcription: string, date: Date) => {
  return await Storage.put(getTranscriptionFileName(date), transcription, {
    contentType: 'text/plain',
    level: 'protected',
  });
}

export const uploadRecordingAudioFile = async (audioBlob: Blob, audioFormat: string, date: Date) => {
  const fileName = getRecordingAudioFileName(date, audioFormat)
  const putRes: PutResult = await Storage.put(fileName, audioBlob, {
    contentType: audioFormat,
    level: 'protected',
  });
  return fileName;
} 

export const uploadFacts = async (facts: string, date: Date) => {
  return await Storage.put(getFactsFileName(date), facts, {
    contentType: 'text/plain',
    level: 'protected',
  });
}

export const uploadProcessingStatus = async (status: string, date: Date) => {
  return await Storage.put(getProcessingStatusFileName(date), status, {
    contentType: 'text/plain',
    level: 'protected',
  });
}

export const sendAudioToWhisper = async (base64Audio: string, audioFormat: string) => {
  let transcription = "";
  try{
    //const response = await authenticatedAxiosPost('/api/transcription', { audio: base64Audio });
    const response = await axios.post('/api/transcription', { audio: base64Audio, mediatype: audioFormat });

    if (response.status === 200) {
      transcription = response.data
    }
  } catch (error) {
    console.error('Failed to send audio to Whisper:', error);
    transcription = "[Sorry, transcription failed!]";
  } 

  return transcription;
}

export const requestChatGptAnswer =async (user_content:string, 
                                          system_content?: string, 
                                          chat_context_list?: ChatCompletionRequestMessage[], 
                                          chatFunctions?: ChatCompletionFunctions[],
                                          model_name?: string, 
                                          temperature?: number) => {
  let gptResponse = ""
  try{
    
    type ResData = {
      response: string
      error: string
    }

    const response = await axios.post('/api/get_chatgpt_answer', {
      system_content: system_content,
      user_content: user_content,
      chat_context_list: chat_context_list,
      functions: chatFunctions,
      model_name: model_name,
      temperature: temperature
    });

    gptResponse = response.data.response;
  } catch (error) {
    console.error('ChatGPT request failed :', error);
    gptResponse='<Assistant request failed>'
  } 

  return gptResponse;  
}

export const requestChatSummary =async (chat_history: {role: string, content: string}[]) => {
  let gptResponse = ""
  try{
    
    type ResData = {
      response: string
      error: string
    }

    const response = await axios.post('/api/get_chatgpt_summary', {
       chat_history: chat_history
    });

    gptResponse = response.data.response;
  } catch (error) {
    console.error('ChtGPT summary request failed :', error);
    gptResponse='<ChatGPT summary request failed>'
  } 

  return gptResponse;  
}
