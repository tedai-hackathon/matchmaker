import { API, DataStore, Predicates, SortDirection } from 'aws-amplify';
import { AudioSpeechRecording } from '@/models';

export const fetchAudioSpeechRecordings = async (sorted?: SortDirection, maxElements?: number) => {
    return await DataStore.query(AudioSpeechRecording, 
        Predicates.ALL, 
        {sort: sorted? (s) => s.createdAt(sorted): undefined,
         limit: maxElements? maxElements: undefined })
  }

export const fetchAudioSpeechRecording = async (id: string) => {
    const result = await DataStore.query(AudioSpeechRecording, 
        (c) => c.id.eq(id)) 
    return result[0]
  }

export const fetchLatestAudioSpeechRecording = async () => {
    const result = await DataStore.query(AudioSpeechRecording,  
        (c) => c.id.ne(""),
        {sort: (s) => s.createdAt(SortDirection.DESCENDING), 
         limit: 1})
    return result[0]
}

export const createAudioSpeechRecording = async (recording: AudioSpeechRecording) => {
    return await DataStore.save(recording);
}

export const updateAudioSpeechRecording = async (recording: AudioSpeechRecording) => {
    return await DataStore.save(recording);
}

export const deleteAudioSpeechRecording = async (recording: AudioSpeechRecording) => {
    return await DataStore.delete(recording);
}
