---
name: 'layout'
root: 'src/app'
output: '**/*'
ignore: []
questions:
  name: 'Please enter name of layout'
  style:
    confirm: 'do you need css?'
    initial: false
---

# Variables

- PageTitle: `{{ inputs.name | pascal }}Layout`
- RoutingName: `{{ inputs.name | kebab }}`
- FileName: `{{ RoutingName }}-layout`

# `{{ RoutingName }}/layout.tsx`

```typescript
import type { FC, ReactNode } from "react"
{{ if inputs.style }}import styles from "./{{ FileName }}.module.css"{{ end }}

type {{ PageTitle }}Props = {
  children: ReactNode
}

const {{ PageTitle }}: FC<{{ PageTitle }}Props> = ({
  children
}) => {
  return (
    <section className="grid grid-cols-4">
      <nav></nav>
      <div>
        { children }
      </div>
    </section>
  )
}

export default {{ PageTitle }}

```

# `{{ !inputs.style && '!' }}{{ RoutingName }}/{{ FileName }}.module.css`

```
.main {
}
```
