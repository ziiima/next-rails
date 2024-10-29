import { useArticlesList } from '@/generated/article/article'
import { FC } from 'react'

export const ArticleList: FC = () => {
  const queryResult = useArticlesList()
  return (
    <div>
      <ul>
        {queryResult.data?.items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}
