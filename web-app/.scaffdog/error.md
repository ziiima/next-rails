---
name: 'error'
root: 'src/app'
output: '**/*'
ignore: []
questions:
  name: 'Please enter path'
---

# Variables

- ComponentName: `{{ inputs.name | pascal }}`
- FeatureFileName: `{{ inputs.name | kebab }}`

# `{{FeatureFileName}}/error.tsx`

```typescript
'use client'

import type { FC } from 'react'
import { useEffect } from 'react'

type ErrorProps = {
  error: Error & { digest?: string },
  reset: () => void
}

const {{ ComponentName }}Error: FC<ErrorProps> = ({
  error,
  reset
}) => {
   useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>
        Try again
      </button>
    </div>
  )
}

export default {{ ComponentName }}Error
```
