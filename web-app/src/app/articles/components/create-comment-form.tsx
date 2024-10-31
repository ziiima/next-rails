'use client'

import { createArticleComment } from '@/generated/comment/comment'
import { CreateArticleCommentBody } from '@/generated/model'
import { createArticleCommentBody } from '@/generated/zod/comment/comment.zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useCallback } from 'react'
import { useForm } from 'react-hook-form'

type CreateCommentFormProps = {
  articleId: number
}

export const CreateCommentForm: FC<CreateCommentFormProps> = ({
  articleId,
}) => {
  const onSubmit = useCallback(
    async (dto: CreateArticleCommentBody) => {
      try {
        await createArticleComment(articleId, dto)
      } catch (error: unknown) {
        console.trace(error)
      }
    },
    [articleId],
  )

  const {
    handleSubmit,
    register,
    formState: { errors, isLoading },
  } = useForm<CreateArticleCommentBody>({
    resolver: zodResolver(createArticleCommentBody),
  })

  return (
    <div>
      <h2>Add a comment:</h2>
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
            {...register('dto.commenter')}
          />
          <p className="text-red-500 text-xs italic">
            {errors.dto?.commenter?.message}
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
            作成
          </button>
        </div>
      </form>
    </div>
  )
}
