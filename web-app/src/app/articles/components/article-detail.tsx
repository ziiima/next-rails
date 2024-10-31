import { Article } from '@/generated/model'
import Link from 'next/link'
import { FC } from 'react'

type ArticleDetailProps = {
  article: Article
  linkVisibility: boolean
}

export const ArticleDetail: FC<ArticleDetailProps> = ({
  article,
  linkVisibility,
}) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      {linkVisibility && (
        <ul>
          <li>
            <Link href={`/articles/${article.id}/edit`}>編集</Link>
          </li>
          <li>
            <Link href={`/articles/${article.id}/delete`}>削除</Link>
          </li>
        </ul>
      )}
    </div>
  )
}
