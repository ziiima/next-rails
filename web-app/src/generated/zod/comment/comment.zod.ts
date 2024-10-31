/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * (title)
 * OpenAPI spec version: 0.0.0
 */
import {
  z as zod
} from 'zod'

export const getArticleCommentsParams = zod.object({
  "id": zod.number()
})

export const getArticleCommentsResponseItemsItemCommenterMax = 255;


export const getArticleCommentsResponse = zod.object({
  "items": zod.array(zod.object({
  "id": zod.number(),
  "commenter": zod.string().min(1).max(getArticleCommentsResponseItemsItemCommenterMax),
  "body": zod.string().min(1),
  "status": zod.enum(['public', 'private', 'archived']).nullable()
}))
})

export const createArticleCommentParams = zod.object({
  "id": zod.number()
})

export const createArticleCommentBodyDtoCommenterMax = 255;


export const createArticleCommentBody = zod.object({
  "dto": zod.object({
  "body": zod.string().min(1),
  "commenter": zod.string().min(1).max(createArticleCommentBodyDtoCommenterMax),
  "status": zod.enum(['public', 'private', 'archived']).optional()
})
})

export const createArticleCommentResponseCommentCommenterMax = 255;


export const createArticleCommentResponse = zod.object({
  "comment": zod.object({
  "id": zod.number(),
  "commenter": zod.string().min(1).max(createArticleCommentResponseCommentCommenterMax),
  "body": zod.string().min(1),
  "status": zod.enum(['public', 'private', 'archived']).nullable()
})
})

