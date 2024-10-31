'use client'
import { useListArticles } from '@/generated/article/article'
import Link from 'next/link'
import { FC } from 'react'

export const ArticleList: FC = () => {
  const queryResult = useListArticles()
  return (
    <div>
      <div>
        <ul>
          {queryResult.data?.items.map((item) => (
            <li key={item.id}>
              <Link href={`/articles/${item.id}`}>{item.title}</Link>
            </li>
          ))}
          <li>
            <Link href={`/articles/new`}>新規作成</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
