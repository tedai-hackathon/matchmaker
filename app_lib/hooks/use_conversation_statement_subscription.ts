import { useState, useEffect, useRef } from 'react';
import { DataStore, SortDirection } from 'aws-amplify';
import { ConversationStatement, LazyConversationStatement } from '@/models/index'; 
import { RecursiveModelPredicate } from '@aws-amplify/datastore';

const useConversationStatementsSubscription = (maxElements?: number, startDate?: Date, endDate?: Date, searchText?: string) => {
    const [statements, setStatements] = useState<LazyConversationStatement[]>([]);
    const [isSynced, setIsSynced] = useState<boolean>(false);
    const subscription = useRef<any>();

    const DEFAULT_TIME_RANGE = 2; // days


    useEffect(() => {
        refreshConvStmts()
    
        return () => {if( subscription.current ) subscription.current.unsubscribe()};
    }, []);

    function observeConvStmts() {
        const isToBeFiltered = ( startDate && endDate ) || searchText? true : false;

        // Set up the subscription for real-time updates
        subscription.current = DataStore.observeQuery(ConversationStatement, 
            isToBeFiltered?
                element => applyFilters_Predicate(element, startDate!, endDate!, searchText!) :
                element => isNotDoneOrNew_Predicate(element),
            { sort: s => s.DateTime(SortDirection.DESCENDING) })
            .subscribe(snapshot => {
                const { items, isSynced } = snapshot;
                setIsSynced(isSynced);
                setStatements(items);
            });
        
        return subscription.current;
    }

    function refreshConvStmts() {
        if( subscription.current ) subscription.current.unsubscribe();
        subscription.current = observeConvStmts();
    }

    function isNotDoneOrNew_Predicate(element: RecursiveModelPredicate<LazyConversationStatement>) {
        const _startDate = new Date();
        _startDate.setDate(_startDate.getDate() - DEFAULT_TIME_RANGE);

        return element.or(m => [m.Done.eq(false),
        m.DateTime.gt(_startDate.toISOString())]);
    }

    function containsSearchText_Predicate(element: RecursiveModelPredicate<LazyConversationStatement>, searchText: string) {
        return element.or(t => [
            t.StatementText.contains(searchText),
        ]);
    }

    function createdInDateRange_Predicate(element: RecursiveModelPredicate<LazyConversationStatement>, startDate: Date, endDate: Date) {
        return element.and(d => [
            d.DateTime.gt(startDate.toISOString()),
            d.DateTime.lt(endDate.toISOString())
        ]);
    }

    function applyFilters_Predicate(element: RecursiveModelPredicate<LazyConversationStatement>, startDate: Date, endDate: Date, searchText: string) {
        return element.and(m => [
            searchText ? containsSearchText_Predicate(m, searchText) : m.id.ne(""),
            startDate && endDate ? createdInDateRange_Predicate(m, startDate, endDate) : m.id.ne("")
        ]);
    }    

    return {statements, isSynced, refreshConvStmts};
};

export default useConversationStatementsSubscription;
