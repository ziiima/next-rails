import type { FC } from 'react'
import styles from './delete-button.module.css'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type DeleteButtonProps = {}

export const DeleteButton: FC<DeleteButtonProps> = () => {
  return (
    <div className={styles.main}>
      <h1>Geneeated DeleteButton</h1>
    </div>
  )
}
