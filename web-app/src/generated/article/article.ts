/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * (title)
 * OpenAPI spec version: 0.0.0
 */
import { useQuery } from '@tanstack/react-query'
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import type { ArticleResponse, ListArticles } from '.././model'
import { restclient } from '../../utils/rest-client'

export const listArticles = (signal?: AbortSignal) => {
  return restclient<ListArticles>({ url: `/articles`, method: 'GET', signal })
}

export const getListArticlesQueryKey = () => {
  return [`/articles`] as const
}

export const getListArticlesQueryOptions = <
  TData = Awaited<ReturnType<typeof listArticles>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof listArticles>>, TError, TData>
  >
}) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getListArticlesQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof listArticles>>> = ({
    signal,
  }) => listArticles(signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof listArticles>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type ListArticlesQueryResult = NonNullable<
  Awaited<ReturnType<typeof listArticles>>
>
export type ListArticlesQueryError = unknown

export function useListArticles<
  TData = Awaited<ReturnType<typeof listArticles>>,
  TError = unknown,
>(options: {
  query: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof listArticles>>, TError, TData>
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof listArticles>>,
        TError,
        TData
      >,
      'initialData'
    >
}): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useListArticles<
  TData = Awaited<ReturnType<typeof listArticles>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof listArticles>>, TError, TData>
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof listArticles>>,
        TError,
        TData
      >,
      'initialData'
    >
}): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useListArticles<
  TData = Awaited<ReturnType<typeof listArticles>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof listArticles>>, TError, TData>
  >
}): UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useListArticles<
  TData = Awaited<ReturnType<typeof listArticles>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof listArticles>>, TError, TData>
  >
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getListArticlesQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const readArticle = (id: number, signal?: AbortSignal) => {
  return restclient<ArticleResponse>({
    url: `/articles/${id}`,
    method: 'GET',
    signal,
  })
}

export const getReadArticleQueryKey = (id: number) => {
  return [`/articles/${id}`] as const
}

export const getReadArticleQueryOptions = <
  TData = Awaited<ReturnType<typeof readArticle>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof readArticle>>, TError, TData>
    >
  },
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getReadArticleQueryKey(id)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof readArticle>>> = ({
    signal,
  }) => readArticle(id, signal)

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof readArticle>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type ReadArticleQueryResult = NonNullable<
  Awaited<ReturnType<typeof readArticle>>
>
export type ReadArticleQueryError = unknown

export function useReadArticle<
  TData = Awaited<ReturnType<typeof readArticle>>,
  TError = unknown,
>(
  id: number,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof readArticle>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof readArticle>>,
          TError,
          TData
        >,
        'initialData'
      >
  },
): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useReadArticle<
  TData = Awaited<ReturnType<typeof readArticle>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof readArticle>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof readArticle>>,
          TError,
          TData
        >,
        'initialData'
      >
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useReadArticle<
  TData = Awaited<ReturnType<typeof readArticle>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof readArticle>>, TError, TData>
    >
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useReadArticle<
  TData = Awaited<ReturnType<typeof readArticle>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof readArticle>>, TError, TData>
    >
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getReadArticleQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}
