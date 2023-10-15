import { API, DataStore, Predicates, SortDirection } from 'aws-amplify';
import { Behandlung } from '@/models';

export const fetchBehandlungen = async (sorted?: SortDirection, maxElements?: number) => {
    return await DataStore.query(Behandlung, 
        Predicates.ALL, 
        {sort: sorted? (s) => s.createdAt(sorted): undefined,
         limit: maxElements? maxElements: undefined })
  }

export const fetchBehandlung = async (id: string) => {
    const result = await DataStore.query(Behandlung, 
        (c) => c.id.eq(id)) 
    return result[0]
  }

export const fetchConvStmtBehandlung = async (stmtId: string) => {
    const result = await DataStore.query(Behandlung, 
        (c) => c.or( d => [d.behandlungHumanRequestId.eq(stmtId), 
            d.behandlungAIExecutionResponseId.eq(stmtId)]) )        
    return result[0]
}

export const fetchLatestBehandlung = async () => {
    const result = await DataStore.query(Behandlung,  
        (c) => c.id.ne(""),
        {sort: (s) => s.createdAt(SortDirection.DESCENDING), 
         limit: 1})
    return result[0]
}

export const createBehandlung = async (behandlung: Behandlung) => {
    return await DataStore.save(behandlung);
}

export const updateBehandlung = async (behandlung: Behandlung) => {
    return await DataStore.save(behandlung);
}

export const deleteBehandlung = async (behandlung: Behandlung) => {
    return await DataStore.delete(behandlung);
}
