import type { FC, ReactNode } from 'react'
import style from './post.module.css'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type PostProps = {
  title: string
  children: ReactNode
}

export const Post: FC<PostProps> = ({ title, children }) => {
  return (
    <div className={style.main}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}
