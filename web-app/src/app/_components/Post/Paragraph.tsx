import { FC, ReactNode } from 'react'

type ParagraphProps = {
  children: ReactNode
}

export const Paragraph: FC<ParagraphProps> = ({ children }) => {
  return <p>{children}</p>
}
