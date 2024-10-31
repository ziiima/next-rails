'use client'

import { updateArticle } from '@/generated/article/article'
import { Article, UpdateArticleBody } from '@/generated/model'
import { updateArticleBody } from '@/generated/zod/article/article.zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { FC, useCallback } from 'react'
import { useForm } from 'react-hook-form'

type ArticleEditFormProps = {
  article: Article
}

export const ArticleEditForm: FC<ArticleEditFormProps> = ({ article }) => {
  const { push } = useRouter()
  const onSubmit = useCallback(
    async (dto: UpdateArticleBody) => {
      try {
        const res = await updateArticle(article.id, dto)
        push(`/articles/${res.article.id}`)
      } catch (error: unknown) {
        console.log(error)
      }
    },
    [push, article.id],
  )

  const {
    handleSubmit,
    register,
    formState: { errors, isLoading },
  } = useForm<UpdateArticleBody>({
    resolver: zodResolver(updateArticleBody),
    values: {
      dto: article,
    },
  })

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div>
          <label className="block text-sm font-bold mb-2" htmlFor="title">
            タイトル
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="title"
            {...register('dto.title')}
          />
          <p className="text-red-500 text-xs italic">
            {errors.dto?.title?.message}
          </p>
        </div>
        <div>
          <label className="block text-sm font-bold mb-2" htmlFor="content">
            コンテンツ
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            {...register('dto.body')}
          />
          <p className="text-red-500 text-xs italic">
            {errors.dto?.body?.message}
          </p>
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isLoading}
          >
            更新
          </button>
        </div>
      </form>
    </div>
  )
}
