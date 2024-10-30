const clientBaseURL = 'http://127.0.0.1:3000' // use your own URL here or environment variable
const apiBaseURL = 'http://host.docker.internal:3000'

export const restclient = async <T>({
  url,
  method,
  params,
  data,
  headers = {},
}: {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  params?: string[][] | Record<string, string> | string | URLSearchParams
  data?: unknown
  responseType?: string
  headers?: HeadersInit
  signal?: AbortSignal
}): Promise<T> => {
  const baseURL = typeof window === 'undefined' ? apiBaseURL : clientBaseURL
  let targetUrl = `${baseURL}${url}`

  if (params) {
    targetUrl += '?' + new URLSearchParams(params)
  }

  const response = await fetch(targetUrl, {
    method,
    headers,
    ...(data ? { body: JSON.stringify(data) } : {}),
  })

  return response.json()
}

export default restclient

//  // In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
//  export type ErrorType<Error> = AxiosError<Error>;
//  // In case you want to wrap the body type (optional)
//  // (if the custom instance is processing data before sending it, like changing the case for example)
//  export type BodyType<BodyData> = CamelCase<BodyType>;
