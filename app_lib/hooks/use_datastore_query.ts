import {
    DataStore,
    PersistentModel,
    PersistentModelConstructor,
    ProducerModelPredicate,
    SortPredicate,
    ProducerPaginationInput
  } from '@aws-amplify/datastore'
  import { useCallback, useEffect, useState } from 'react'
  
  export interface QueryReturn<TData extends PersistentModel | PersistentModel[]> {
    refetch: () => Promise<TData | undefined>
    data: TData | undefined
    isLoading: boolean
    error?: Error
  }
  
  export type QueryModelContructorInputParam<T extends PersistentModel> =
    | PersistentModelConstructor<T>
    | null
    | undefined
    | false
  
  
  /**
   * React hook to read from the [Amplify DataStore](https://docs.amplify.aws/lib/datastore/getting-started/q/platform/js).
   * Built-in supports for real-time update using subscriptions.
   *
   * Note that `Predicates.ALL` is not supported as it's use leads to unnecessary re-renders. Simply use `undefined`
   * instead, if you want to query for all data records without any filter.
   *
   * @example
   * // To read from the database, the simplest approach is to query for all records of a given model type.
   * const { data, isLoading, error } = useDataStoreQuery(Post).current)
   *
   * @example
   * // To query for a single item, pass in the ID of the item as the second argument to the query.
   * const { data, isLoading, error } = useDataStoreQuery(Post, "1234567").current)
   *
   * @example
   * // Predicates are supported as well. For example if you wanted a list of all Post Models that have a rating greater than 4:
   * const { data, isLoading, error } = useDataStoreQuery(Post, c => c.rating("gt", 4));
   *
   * @example
   * // Query results can also be sorted by one or more fields.
   * const { data, isLoading, error } = useDataStoreQuery(Post, undefined, useRef({ sort: s => s.rating(SortDirection.ASCENDING) }).current)
   */
  function useDataStoreQuery<T extends PersistentModel>(
    modelConstructor: QueryModelContructorInputParam<T>,
    id: string
  ): QueryReturn<T>
  function useDataStoreQuery<T extends PersistentModel>(
    modelConstructor: QueryModelContructorInputParam<T>,
    criteria?: ProducerModelPredicate<T>,
    paginationProducer?: ProducerPaginationInput<T>
  ): QueryReturn<T[]>
  function useDataStoreQuery<T extends PersistentModel>(
    modelConstructor: QueryModelContructorInputParam<T>,
    criteria?: string | ProducerModelPredicate<T>,
    paginationProducer?: ProducerPaginationInput<T>
  ): QueryReturn<any> {
    const shouldFetch = typeof modelConstructor === 'function'
    const [isLoading, setIsLoading] = useState(shouldFetch)
    const [error, setError] = useState<Error | undefined>()
    const [data, setData] = useState<T[] | T | undefined>()
  
    const fetchAsync = useCallback(async () => {
      try {
        setIsLoading(true)
        if (typeof modelConstructor === 'function') {
          const data =
            typeof criteria === 'string'
              ? await DataStore.query<T>(modelConstructor/*, criteria*/)
              : await DataStore.query<T>(modelConstructor/*, criteria, paginationProducer*/)
          setData(data)
          setError(undefined)
          return data
        }
        return undefined
      } catch (error) {
        console.error('Error fetching data', { error })
        //setError(error)
      } finally {
        setIsLoading(false)
      }
    }, [modelConstructor, criteria, paginationProducer])
  
    useEffect(() => {
      fetchAsync().catch(null)
    }, [fetchAsync])
  
    useEffect(() => {
      if (typeof modelConstructor === 'function') {
        const subscription = DataStore.observe<T>(modelConstructor/*, criteria*/).subscribe(msg => {
          // For now we don't bother doing a merge update. We just fetch the data again instead
          fetchAsync().catch(null)
        })
        return () => {
          subscription.unsubscribe()
        }
      }
    }, [modelConstructor, criteria, fetchAsync])
  
    return { data, isLoading, error, refetch: fetchAsync }
  }
  
  export default useDataStoreQuery