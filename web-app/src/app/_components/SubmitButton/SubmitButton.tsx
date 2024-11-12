'use client'
import type { FC } from 'react'
import { useFormStatus } from 'react-dom'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type SubmitButtonProps = {
  onClick: VoidFunction
}

export const SubmitButton: FC<SubmitButtonProps> = ({ onClick }) => {
  const { pending } = useFormStatus()
  return (
    <button type="button" aria-disabled={pending} onClick={onClick}>
      Add
    </button>
  )
}
