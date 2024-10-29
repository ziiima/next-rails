/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * (title)
 * OpenAPI spec version: 0.0.0
 */
import { useQuery } from '@tanstack/react-query'
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import type { ListArticles } from '.././model'
import { restclient } from '../../utils/rest-client'

export const articlesList = (signal?: AbortSignal) => {
  return restclient<ListArticles>({ url: `/articles`, method: 'GET', signal })
}

export const getArticlesListQueryKey = () => {
  return [`/articles`] as const
}

export const getArticlesListQueryOptions = <
  TData = Awaited<ReturnType<typeof articlesList>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof articlesList>>,
    TError,
    TData
  >
}) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getArticlesListQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof articlesList>>> = ({
    signal,
  }) => articlesList(signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof articlesList>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type ArticlesListQueryResult = NonNullable<
  Awaited<ReturnType<typeof articlesList>>
>
export type ArticlesListQueryError = unknown

export function useArticlesList<
  TData = Awaited<ReturnType<typeof articlesList>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof articlesList>>,
    TError,
    TData
  >
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getArticlesListQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}
