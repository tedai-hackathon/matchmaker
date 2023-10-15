import { useState, useEffect, useRef } from 'react';
import { DataStore, SortDirection } from 'aws-amplify';
import { Reminder, LazyReminder } from '@/models/index'; 
import { DataStoreSnapshot, RecursiveModelPredicate } from '@aws-amplify/datastore';
import Observable from 'zen-observable-ts';


const useRemindersSubscription = (maxElements?: number, startDate?: Date, endDate?: Date, searchText?: string) => {
    const [reminders, setReminders] = useState<LazyReminder[]>([]);
    const [isSynced, setIsSynced] = useState<boolean>(false);
    const subscription = useRef<any>();

    const DEFAULT_TARGETDATE_RANGE = 1; // days
    const DEFAULT_WEEK_RANGE = 7; // days

    useEffect(() => {
        refreshReminderQuery();
        return () => {if( subscription.current ) subscription.current.unsubscribe()};
    }, []);


    function refreshReminderQuery() {
        if( subscription.current ) subscription.current.unsubscribe();
        subscription.current = observeReminders();
    }

    function observeReminders() {
        const isToBeFiltered = ( startDate && endDate ) || searchText? true : false;

        // Set up the subscription for real-time updates
        const subscription = DataStore.observeQuery(Reminder,
            isToBeFiltered ?
                element => applyFilters_Predicate(element, startDate!, endDate!, searchText!) :
                element => isOpenNewOrFuture_Predicate(element),
            { sort: s => s.ErfassungsZeitpunkt(SortDirection.DESCENDING) })
            .subscribe(snapshot => {
                const { items, isSynced } = snapshot;
                setIsSynced(isSynced);
                setReminders(items);
            });
        return subscription;
    }

    function isOpenNewOrFuture_Predicate(element: RecursiveModelPredicate<LazyReminder>) {
        const _starTragetDate = new Date();
        _starTragetDate.setDate(_starTragetDate.getDate() - DEFAULT_TARGETDATE_RANGE);
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - DEFAULT_WEEK_RANGE);

        return element.or(m => [m.Done.eq(false),
        m.Termin.gt(_starTragetDate.toISOString()),
        m.ErfassungsZeitpunkt.gt(weekAgo.toISOString())]);
    }

    function containsSearchText_Predicate(element: RecursiveModelPredicate<LazyReminder>, searchText: string) {
        return element.or(t => [
            t.Details.contains(searchText),
            t.Thema.contains(searchText),
            t.HumanRequest.StatementText.contains(searchText),
        ]);
    }

    function createdInDateRange_Predicate(element: RecursiveModelPredicate<LazyReminder>, startDate: Date, endDate: Date) {
        return element.and(d => [
            d.ErfassungsZeitpunkt.gt(startDate.toISOString()),
            d.ErfassungsZeitpunkt.lt(endDate.toISOString())
        ]);
    }

    function targetDateInRange_Predicate(element: RecursiveModelPredicate<LazyReminder>, startDate: Date, endDate: Date) {
        return element.and(d => [
            d.Termin.gt(startDate.toISOString()),
            d.Termin.lt(endDate.toISOString())
        ]);
    }

    function inDateRange_Predicate(element: RecursiveModelPredicate<LazyReminder>, startDate: Date, endDate: Date) {
        return element.or(d => [
            targetDateInRange_Predicate(d, startDate, endDate),
            createdInDateRange_Predicate(d, startDate, endDate)
        ]);
    }

    function applyFilters_Predicate(element: RecursiveModelPredicate<LazyReminder>, startDate: Date, endDate: Date, searchText: string) {
        return element.and(m => [
            searchText ? containsSearchText_Predicate(m, searchText) : m.id.ne(""),
            startDate && endDate ? inDateRange_Predicate(m, startDate, endDate) : m.id.ne("")
        ]);
    }    

    return {reminders, isSynced, refreshReminderQuery};
};

export default useRemindersSubscription;
