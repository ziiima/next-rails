import { readArticle } from '@/generated/article/article'
import { FC } from 'react'
import { ArticleDelete } from '../../components/article-delete'

type ArticleDeletePageProps = {
  params: Promise<{ id: number }>
}

const ArticleDeletePage: FC<ArticleDeletePageProps> = async ({ params }) => {
  const articleId = (await params).id
  const result = await readArticle(articleId)
  return (
    <div>
      <ArticleDelete article={result.article} />
    </div>
  )
}

export default ArticleDeletePage
