import { useState, useEffect, useRef } from 'react';
import { DataStore, SortDirection } from 'aws-amplify';
import { ErkannteBehandlungsElemente as VetCaseRecord, LazyErkannteBehandlungsElemente as LazyVetCaseRecord } from '@/models/index'; 
import { RecursiveModelPredicate } from '@aws-amplify/datastore';

const useCasesSubscription = (maxElements?: number, startDate?: Date, endDate?: Date, searchText?: string) => {
    const [vetCases, setCases] = useState<LazyVetCaseRecord[]>([]);
    const [isSynced, setIsSynced] = useState<boolean>(false);
    const subscription = useRef<any>();

    const DEFAULT_WEEK_RANGE = 7; // days


    useEffect(() => {
        observeVetCases();
        return () => {if( subscription.current ) subscription.current.unsubscribe()};
    },[]);

    function refreshVetCases() {
        if( subscription.current ) subscription.current.unsubscribe();
        subscription.current = observeVetCases();
    }

    function observeVetCases() {
        const isToBeFiltered = ( startDate && endDate ) || searchText? true : false;

        // Set up the subscription for real-time updates
        const subscription = DataStore.observeQuery(VetCaseRecord, 
            isToBeFiltered?
                element => applyFilters_Predicate(element, startDate!, endDate!, searchText!) :
                element => isNotDoneOrNew_Predicate(element),
            { sort: s => s.ErfassungsZeitpunkt(SortDirection.DESCENDING) })
            .subscribe(snapshot => {
                const { items, isSynced } = snapshot;
                setIsSynced(isSynced);
                setCases(items);
            });
        return subscription;
    }

    function isNotDoneOrNew_Predicate(element: RecursiveModelPredicate<LazyVetCaseRecord>) {
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - DEFAULT_WEEK_RANGE);

        return element.or(m => [m.HumanRequest.Done.eq(false),
        m.ErfassungsZeitpunkt.gt(weekAgo.toISOString())]);
    }

    function containsSearchText_Predicate(element: RecursiveModelPredicate<LazyVetCaseRecord>, searchText: string) {
        return element.or(t => [
            t.HumanRequest.StatementText.contains(searchText),
            t.Kunde.contains(searchText),
            t.Vorbericht.contains(searchText),
            t.Befunde.contains(searchText),
            t.Diagnosen.contains(searchText),
            t.TherapieMassnahmen.contains(searchText),
            t.Tiere.contains(searchText),
            t.VerwendeteTherapieMittel.contains(searchText)
        ]);
    }

    function createdInDateRange_Predicate(element: RecursiveModelPredicate<LazyVetCaseRecord>, startDate: Date, endDate: Date) {
        return element.and(d => [
            d.ErfassungsZeitpunkt.gt(startDate.toISOString()),
            d.ErfassungsZeitpunkt.lt(endDate.toISOString())
        ]);
    }

    function applyFilters_Predicate(element: RecursiveModelPredicate<LazyVetCaseRecord>, startDate: Date, endDate: Date, searchText: string) {
        return element.and(m => [
            searchText ? containsSearchText_Predicate(m, searchText) : m.id.ne(""),
            startDate && endDate ? createdInDateRange_Predicate(m, startDate, endDate) : m.id.ne("")
        ]);
    }    
    

    return {vetCases, isSynced, refreshVetCases};
};

export default useCasesSubscription;
