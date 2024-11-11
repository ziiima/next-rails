'use client'

import { NotFoundError } from '@/utils/rest-client'
import type { FC } from 'react'
import { useEffect } from 'react'

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

const DashboardError: FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.log(error)
    console.error(error instanceof NotFoundError)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  )
}

export default DashboardError
