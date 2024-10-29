---
name: 'page'
root: './src/app'
output: '.'
ignore: []
questions:
  name: 'Please enter name of page'
---

# Variables

- PageTitle: `{{ inputs.name | kebab }}Page`

# `{{ inputs.name }}/page.tsx`

```typescript
import { Navigation } from '@/components/Navigation'

export const {{ PageTitle }} = () => {
  return (
    <>
      <Navigation />
      <p>Hello page</p>
    </>
  )
}

export default {{ PageTitle }}
```
