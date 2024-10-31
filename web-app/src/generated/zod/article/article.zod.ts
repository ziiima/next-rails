/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * (title)
 * OpenAPI spec version: 0.0.0
 */
import {
  z as zod
} from 'zod'

export const listArticlesResponseItemsItemTitleMax = 255;
export const listArticlesResponseItemsItemBodyMin = 10;


export const listArticlesResponse = zod.object({
  "items": zod.array(zod.object({
  "id": zod.number(),
  "title": zod.string().min(1).max(listArticlesResponseItemsItemTitleMax),
  "body": zod.string().min(listArticlesResponseItemsItemBodyMin),
  "status": zod.enum(['public', 'private', 'archived']).nullable()
}))
})

export const createArticleBodyDtoTitleMax = 255;
export const createArticleBodyDtoBodyMin = 10;


export const createArticleBody = zod.object({
  "dto": zod.object({
  "title": zod.string().min(1).max(createArticleBodyDtoTitleMax),
  "body": zod.string().min(createArticleBodyDtoBodyMin),
  "status": zod.enum(['public', 'private', 'archived']).nullable()
})
})

export const createArticleResponseArticleTitleMax = 255;
export const createArticleResponseArticleBodyMin = 10;


export const createArticleResponse = zod.object({
  "article": zod.object({
  "id": zod.number(),
  "title": zod.string().min(1).max(createArticleResponseArticleTitleMax),
  "body": zod.string().min(createArticleResponseArticleBodyMin),
  "status": zod.enum(['public', 'private', 'archived']).nullable()
})
})

export const readArticleParams = zod.object({
  "id": zod.number()
})

export const readArticleResponseArticleTitleMax = 255;
export const readArticleResponseArticleBodyMin = 10;


export const readArticleResponse = zod.object({
  "article": zod.object({
  "id": zod.number(),
  "title": zod.string().min(1).max(readArticleResponseArticleTitleMax),
  "body": zod.string().min(readArticleResponseArticleBodyMin),
  "status": zod.enum(['public', 'private', 'archived']).nullable()
})
})

export const updateArticleParams = zod.object({
  "id": zod.number()
})

export const updateArticleBodyDtoTitleMax = 255;
export const updateArticleBodyDtoBodyMin = 10;


export const updateArticleBody = zod.object({
  "dto": zod.object({
  "title": zod.string().min(1).max(updateArticleBodyDtoTitleMax),
  "body": zod.string().min(updateArticleBodyDtoBodyMin)
})
})

export const updateArticleResponseArticleTitleMax = 255;
export const updateArticleResponseArticleBodyMin = 10;


export const updateArticleResponse = zod.object({
  "article": zod.object({
  "id": zod.number(),
  "title": zod.string().min(1).max(updateArticleResponseArticleTitleMax),
  "body": zod.string().min(updateArticleResponseArticleBodyMin),
  "status": zod.enum(['public', 'private', 'archived']).nullable()
})
})

export const deleteArticleParams = zod.object({
  "id": zod.number()
})

export const deleteArticleResponse = zod.object({
  "id": zod.number()
})

