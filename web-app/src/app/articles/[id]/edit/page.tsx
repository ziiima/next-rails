import { readArticle } from '@/generated/articles/articles'
import { ArticleEditForm } from '../../components/article-edit-form'

const ArticleEditPage = async ({
  params,
}: {
  params: Promise<{ id: number }>
}) => {
  const id = (await params).id
  const res = await readArticle(id)
  return (
    <div>
      <h1>編集ページ</h1>
      <ArticleEditForm article={res.article} />
    </div>
  )
}

export default ArticleEditPage
