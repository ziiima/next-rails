/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * (title)
 * OpenAPI spec version: 0.0.0
 */
import {
  z as zod
} from 'zod'

export const listPostsResponseItemsItemTitleMax = 255;


export const listPostsResponse = zod.object({
  "items": zod.array(zod.object({
  "id": zod.number(),
  "title": zod.string().min(1).max(listPostsResponseItemsItemTitleMax),
  "body": zod.string()
}))
})

