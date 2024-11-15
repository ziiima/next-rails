/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * (title)
 * OpenAPI spec version: 0.0.0
 */
import {
  z as zod
} from 'zod'

export const createBlogBodyDtoTitleMax = 255;


export const createBlogBody = zod.object({
  "dto": zod.object({
  "title": zod.string().min(1).max(createBlogBodyDtoTitleMax)
})
})

export const createBlogResponse = zod.object({
  "id": zod.number()
})

export const resourceReadBlogsResponse = zod.object({
  "currentPage": zod.number(),
  "perPage": zod.number(),
  "totalCount": zod.number(),
  "items": zod.array(zod.object({
  "id": zod.number()
}))
})

