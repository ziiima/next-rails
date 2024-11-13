'use client'
import { CreateArticleBody } from '@/generated/model'
import { CreateForm } from '../components/create-form'
import { createArticle } from '@/generated/article/article'
import { useRouter } from 'next/navigation'

const ArticleCreatePage = () => {
  const { push } = useRouter()
  const onSubmit = async (dto: CreateArticleBody) => {
    const res = await createArticle(dto)
    push(`/articles/${res.article.id}`)
  }
  return (
    <div>
      <h1>New Article</h1>
      <CreateForm onSubmit={onSubmit} />
    </div>
  )
}

export default ArticleCreatePage
