import { getArticleComments } from '@/generated/comment/comment'
import { FC } from 'react'

type ArticleCommentListProps = {
  articleId: number
}

export const ArticleCommentList: FC<ArticleCommentListProps> = async ({
  articleId,
}) => {
  const result = await getArticleComments(articleId)

  return (
    <div>
      <ul>
        {result.items.reverse().map((comment) => (
          <li key={comment.id}>
            <p>commenter: {comment.commenter}</p>
            <p>body: {comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
