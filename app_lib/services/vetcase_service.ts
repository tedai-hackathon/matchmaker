import { API, DataStore, Predicates, SortDirection } from 'aws-amplify';
import { ErkannteBehandlungsElemente as VetCaseRec } from '@/models';

export const fetchVetCases = async (sorted?: SortDirection, maxElements?: number) => {
    return await DataStore.query(VetCaseRec, 
        Predicates.ALL, 
        {sort: sorted? (s) => s.createdAt(sorted): undefined,
         limit: maxElements? maxElements: undefined })
  }

export const fetchVetCase = async (id: string) => {
    const result = await DataStore.query(VetCaseRec, 
        (c) => c.id.eq(id)) 
    return result[0]
  }

export const fetchConvStmtVetCase = async (stmtId: string) => {
    const result = await DataStore.query(VetCaseRec, 
        (c) => c.or( d => [d.erkannteBehandlungsElementeHumanRequestId.eq(stmtId), 
            d.erkannteBehandlungsElementeAIExecutionResponseId.eq(stmtId)]) )        
    return result[0]
}

export const fetchLatestVetCases = async () => {
    const result = await DataStore.query(VetCaseRec,  
        (c) => c.id.ne(""),
        {sort: (s) => s.createdAt(SortDirection.DESCENDING), 
         limit: 1})
    return result[0]
}

export const createVetCase = async (vetCase: VetCaseRec) => {
    return await DataStore.save(vetCase);
}

export const updateBehandlung = async (behandlung: VetCaseRec) => {
    return await DataStore.save(behandlung);
}

export const deleteBehandlung = async (behandlung: VetCaseRec) => {
    return await DataStore.delete(behandlung);
}
