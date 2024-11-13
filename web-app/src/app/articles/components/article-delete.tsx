'use client'
import { FC } from 'react'
import { ArticleDetail } from './article-detail'
import { Article } from '@/generated/model'
import { useRouter } from 'next/navigation'
import { deleteArticle } from '@/generated/articles/articles'

export type ArticleDeleteProps = {
  article: Article
}

export const ArticleDelete: FC<ArticleDeleteProps> = ({ article }) => {
  const { push } = useRouter()
  const deleteOne = async () => {
    await deleteArticle(article.id)
    push(`/articles`)
  }
  return (
    <div>
      <ArticleDetail linkVisibility={false} article={article} />
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={deleteOne}
        >
          削除
        </button>
      </div>
    </div>
  )
}
