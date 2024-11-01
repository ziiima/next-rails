---
name: 'page'
root: 'src/app'
output: '**/*'
ignore: []
questions:
  name: 'Please enter name of page'
---

# Variables

- PageTitle: `{{ inputs.name | pascal }}Page`
- FileName: `{{ inputs.name | kebab }}`

# `{{ FileName }}/page.tsx`

```typescript
import { Navigation } from '@/components/Navigation'

export const {{ PageTitle }} = () => {
  return (
    <div className="grid grid-cols-4">
      <div>
        <Navigation />
      </div>
      <div>
        <h1>{{ PageTitle }}</h1>
      </div>
    </div>
  )
}

export default {{ PageTitle }}

```
