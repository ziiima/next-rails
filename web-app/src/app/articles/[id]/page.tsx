import { readArticle } from '@/generated/article/article'
import { ArticleDetail } from '../components/article-detail'

const ArticlePage = async ({ params }: { params: Promise<{ id: number }> }) => {
  const id = (await params).id
  const res = await readArticle(id)
  return (
    <div>
      <ArticleDetail article={res.article} linkVisibility={true} />
    </div>
  )
}

export default ArticlePage
