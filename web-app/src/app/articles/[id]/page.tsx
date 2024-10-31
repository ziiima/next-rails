import { readArticle } from '@/generated/articles/articles'
import { ArticleDetail } from '../components/article-detail'
import { CreateCommentForm } from '../components/create-comment-form'
import { ArticleCommentList } from '../components/article-comment-list'

type ArticlePageProps = {
  params: Promise<{ id: number }>
}

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const id = (await params).id
  const res = await readArticle(id)
  return (
    <div>
      <ArticleDetail article={res.article} linkVisibility={true} />
      <div>
        <ArticleCommentList articleId={res.article.id} />
        <CreateCommentForm articleId={res.article.id} />
      </div>
    </div>
  )
}

export default ArticlePage
