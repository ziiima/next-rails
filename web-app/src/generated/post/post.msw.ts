/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * (title)
 * OpenAPI spec version: 0.0.0
 */
import { faker } from '@faker-js/faker'
import { HttpResponse, delay, http } from 'msw'
import type { PostAPIPostListResponse } from '.././model'

export const getListPostsResponseMock = (
  overrideResponse: Partial<PostAPIPostListResponse> = {},
): PostAPIPostListResponse => ({
  items: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    body: faker.word.sample(),
    id: faker.number.int({ min: undefined, max: undefined }),
    title: faker.word.sample(),
  })),
  ...overrideResponse,
})

export const getListPostsMockHandler = (
  overrideResponse?:
    | PostAPIPostListResponse
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<PostAPIPostListResponse> | PostAPIPostListResponse),
) => {
  return http.get('*/posts', async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getListPostsResponseMock(),
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    )
  })
}
export const getPostMock = () => [getListPostsMockHandler()]
