const clientBaseURL = 'http://127.0.0.1:3000' // use your own URL here or environment variable
const apiBaseURL = 'http://host.docker.internal:3000'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export const restclient = async <T>({
  url,
  method,
  params,
  data,
  headers = {},
}: {
  url: string
  method: HttpMethod
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
    cache: method === 'GET' ? 'default' : 'no-store',
    headers,
    ...(data ? { body: JSON.stringify(data) } : {}),
  })
  if (!response.ok) {
    const statusText = `${response.status}`
    if (/404/i.test(statusText)) {
      throw new NotFoundError(url)
    }
    throw new ApiError({ path: url, status: 500 })
  }
  return response.json()
}

export default restclient

//  // In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
//  export type ErrorType<Error> = AxiosError<Error>;
//  // In case you want to wrap the body type (optional)
//  // (if the custom instance is processing data before sending it, like changing the case for example)
//  export type BodyType<BodyData> = CamelCase<BodyType>;

type API_ERROR = {
  path: string
  status: number
}

export class ApiError extends Error {
  private readonly apiError: API_ERROR
  get status() {
    return this.apiError.status
  }
  get path() {
    return this.apiError.path
  }
  constructor(apiError: API_ERROR, message?: string, options?: ErrorOptions) {
    super(message, options)
    this.apiError = apiError
  }
}

export class NotFoundError extends ApiError {
  constructor(path: string, message?: string, options?: ErrorOptions) {
    super({ status: 404, path }, message, options)
  }
}

export class BadRequestError extends ApiError {
  constructor(path: string, message?: string, options?: ErrorOptions) {
    super({ status: 400, path }, message, options)
  }
}
