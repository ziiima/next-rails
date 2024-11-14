---
name: 'page'
root: 'src/app'
output: '**/*'
ignore: []
questions:
  name: 'Please enter name of page'
  style:
    confirm: 'do you need css?'
    initial: false
---

# Variables

- PageTitle: `{{ inputs.name | pascal }}Page`
- FileName: `{{ inputs.name | kebab }}`

# `{{ FileName }}/page.tsx`

```typescript
import { type FC } from 'react'
{{ if inputs.style }}import styles from "./{{ FileName }}.module.css"{{ end }}

type {{ PageTitle }}Props = {
  params: Promise<{ [key:string]: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const {{ PageTitle }}: FC<{{ PageTitle }}Props> = async () => {
  return (
    <div className="grid grid-cols-4">
      <div>
        <h1>{{ PageTitle }}</h1>
      </div>
    </div>
  )
}

export default {{ PageTitle }}

```

# `{{ !inputs.style && '!' }}{{ FileName }}/{{ FileName }}.module.css`

```
.main {
}
```
