import { API, DataStore, Predicates, SortDirection } from 'aws-amplify';
import { ConversationParticipant } from '@/models';

export const fetchConversationParticipants = async (sorted?: SortDirection, maxElements?: number) => {
    return await DataStore.query(ConversationParticipant, 
        Predicates.ALL, 
        {sort: sorted? (s) => s.createdAt(sorted): undefined,
         limit: maxElements? maxElements: undefined })
  }

export const fetchConversationParticipant = async (id: string) => {
    const result = await DataStore.query(ConversationParticipant, 
        (c) => c.id.eq(id)) 
    return result[0]
  }

export const fetchLatestConversationParticipant = async () => {
    const result = await DataStore.query(ConversationParticipant,  
        (c) => c.id.ne(""),
        {sort: (s) => s.createdAt(SortDirection.DESCENDING), 
         limit: 1})
    return result[0]
}

export const createConversationParticipant = async (participant: ConversationParticipant) => {
    await DataStore.save(participant);
}

export const updateConversationParticipant = async (participant: ConversationParticipant) => {
    await DataStore.save(participant);
}

export const deleteConversationParticipant = async (participant: ConversationParticipant) => {
    await DataStore.delete(participant);
}
