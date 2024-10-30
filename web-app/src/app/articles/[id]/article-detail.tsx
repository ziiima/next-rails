import { Article } from '@/generated/model'
import { FC } from 'react'

type ArticleDetailProps = {
  article: Article
}

export const ArticleDetail: FC<ArticleDetailProps> = ({ article }) => {
  return <div>sample {article.id}</div>
}
