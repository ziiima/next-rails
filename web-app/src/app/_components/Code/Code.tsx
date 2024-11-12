import type { FC } from 'react'
import styles from './code.module.css'

export type CodeProps = {
  children: React.ReactNode
}

export const Code: FC<CodeProps> = ({ children }) => {
  return <code className={styles.inlineCode}>{children}</code>
}
