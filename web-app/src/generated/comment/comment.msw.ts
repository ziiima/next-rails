/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * (title)
 * OpenAPI spec version: 0.0.0
 */
import { faker } from '@faker-js/faker'
import { HttpResponse, delay, http } from 'msw'
import { CommentStatus } from '.././model'
import type {
  ArticleCommentAPIArticleCommentListResponse,
  ArticleCommentAPIArticleCommentResponses,
} from '.././model'

export const getGetArticleCommentsResponseMock = (
  overrideResponse: Partial<ArticleCommentAPIArticleCommentListResponse> = {},
): ArticleCommentAPIArticleCommentListResponse => ({
  items: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    body: faker.word.sample(),
    commenter: faker.word.sample(),
    id: faker.number.int({ min: undefined, max: undefined }),
    status: faker.helpers.arrayElement([
      faker.helpers.arrayElement(Object.values(CommentStatus)),
    ]),
  })),
  ...overrideResponse,
})

export const getCreateArticleCommentResponseMock = (
  overrideResponse: Partial<ArticleCommentAPIArticleCommentResponses> = {},
): ArticleCommentAPIArticleCommentResponses => ({
  comment: {
    body: faker.word.sample(),
    commenter: faker.word.sample(),
    id: faker.number.int({ min: undefined, max: undefined }),
    status: faker.helpers.arrayElement([
      faker.helpers.arrayElement(Object.values(CommentStatus)),
    ]),
  },
  ...overrideResponse,
})

export const getGetArticleCommentsMockHandler = (
  overrideResponse?:
    | ArticleCommentAPIArticleCommentListResponse
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) =>
        | Promise<ArticleCommentAPIArticleCommentListResponse>
        | ArticleCommentAPIArticleCommentListResponse),
) => {
  return http.get('*/articles/:id/comments', async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getGetArticleCommentsResponseMock(),
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    )
  })
}

export const getCreateArticleCommentMockHandler = (
  overrideResponse?:
    | ArticleCommentAPIArticleCommentResponses
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) =>
        | Promise<ArticleCommentAPIArticleCommentResponses>
        | ArticleCommentAPIArticleCommentResponses),
) => {
  return http.post('*/articles/:id/comments', async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getCreateArticleCommentResponseMock(),
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    )
  })
}
export const getCommentMock = () => [
  getGetArticleCommentsMockHandler(),
  getCreateArticleCommentMockHandler(),
]
