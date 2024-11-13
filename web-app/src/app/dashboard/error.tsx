'use client'

import type { FC } from 'react'

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

const DashboardError: FC<ErrorProps> = ({ reset }) => {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  )
}

export default DashboardError
