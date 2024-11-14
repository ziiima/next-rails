---
name: 'component'
root: 'src/app'
output: '**/*'
ignore: []
questions:
  name: 'Please enter name of component'
  style:
    confirm: 'do you need css?'
    initial: false
  directory:
    confirm: 'do you need _components?'
    initial: false
---

# Variables

- ComponentName: `{{ inputs.name | pascal }}`
- OutputFeatureDirectory: `{{ ComponentName }}`
- OutputDirectory: `{{ if inputs.directory }}_components/{{ end }}{{ OutputFeatureDirectory }}`

# `{{ OutputDirectory }}/index.tsx`

```typescript
export * from './{{ ComponentName }}'
```

# `{{ OutputDirectory }}/{{ ComponentName }}.tsx`

```typescript
import type { FC } from 'react'
{{ if inputs.style }}import styles from "./{{ ComponentName | kebab }}.module.css"{{ end }}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type {{ ComponentName }}Props = {}

export const {{ ComponentName }}: FC<{{ ComponentName }}Props> = () => {
  return (
    <div{{ if inputs.style }} className={styles.main}{{ end }}>
      <h1>Geneated {{ ComponentName }}</h1>
    </div>
  )
}
```

# `{{ !inputs.style && '!' }}{{ OutputDirectory }}/{{ ComponentName | kebab }}.module.css`

```
.main {
}
```
