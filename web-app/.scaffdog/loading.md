---
name: 'loading'
root: 'src/app'
output: '**/*'
ignore: []
questions:
  name: 'Please enter the name of feature.'
---

# Variables

- FeatureName: `{{ inputs.name | kebab }}`
- ComponentName: `{{ inputs.name | pascal }}`

# `{{ FeatureName }}/loading.tsx`

```typescript
import type { FC } from 'react'

const {{ ComponentName }}Loading: FC = () => {
  return (<div>Loading...</div>)
}

export default {{ ComponentName }}Loading
```
