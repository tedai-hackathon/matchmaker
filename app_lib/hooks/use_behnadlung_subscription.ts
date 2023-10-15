import { useState, useEffect } from 'react';
import { DataStore, SortDirection } from 'aws-amplify';
import { Behandlung, LazyBehandlung } from '@/models/index'; 

const useBehandlungsSubscription = (maxElements?: number) => {
    const [reminders, setBehandlungs] = useState<LazyBehandlung[]>([]);
    const [isSynced, setIsSynced] = useState<boolean>(false);

    useEffect(() => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);

        // Set up the subscription for real-time updates
        const subscription = DataStore.observeQuery(Behandlung, element =>
            element.or( m => [element.InPegassusErfasst.ne(""),
                element.ErfassungsZeitpunkt.gt(weekAgo.toISOString())]),
            {sort: s => s.ErfassungsZeitpunkt(SortDirection.DESCENDING)})
        .subscribe(snapshot => {
            const { items, isSynced } = snapshot;
            setIsSynced(isSynced);
            setBehandlungs(items); });
    
        return () => subscription.unsubscribe();
    },[]);

    return {reminders, isSynced};
};

export default useBehandlungsSubscription;
