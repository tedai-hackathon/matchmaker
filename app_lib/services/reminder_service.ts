import { API, DataStore, Predicates, SortDirection } from 'aws-amplify';
import { Reminder } from '@/models';

export const fetchReminders = async (sorted?: SortDirection, maxElements?: number) => {
    return await DataStore.query(Reminder, 
        Predicates.ALL, 
        {sort: sorted? (s) => s.createdAt(sorted): undefined,
         limit: maxElements? maxElements: undefined })
  }

export const fetchReminder = async (id: string) => {
    const result = await DataStore.query(Reminder, 
        (c) => c.id.eq(id)) 
    return result[0]
  }

export const fetchConvStmtReminder = async (stmtId: string) => {
    const result = await DataStore.query(Reminder, 
        (c) => c.or( d => [d.reminderHumanRequestId.eq(stmtId), 
            d.reminderAIExecutionResponseId.eq(stmtId)]) )        
    return result[0]
}

export const fetchLatestReminder = async () => {
    const result = await DataStore.query(Reminder,  
        (c) => c.id.ne(""),
        {sort: (s) => s.createdAt(SortDirection.DESCENDING), 
         limit: 1})
    return result[0]
}

export const createReminder = async (participant: Reminder) => {
    await DataStore.save(participant);
}

export const updateReminder = async (participant: Reminder) => {
    await DataStore.save(participant);
}

export const deleteReminder = async (participant: Reminder) => {
    await DataStore.delete(participant);
}
