---
name: 'component'
root: 'src/app'
output: '**/*'
ignore: []
questions:
  name: 'Please enter name of component'
  path:
    message: 'Please enter dist directory with /'
    initial: '_components'
  style:
    confirm: 'do you need css?'
    initial: false
---

# Variables

- ComponentName: `{{ inputs.name | pascal }}`
- OutputFeatureDirectory: `{{ ComponentName }}`
- OutputDirectory: `{{ resolve "./src/app" inputs.path OutputFeatureDirectory }}`

# `{{ OutputDirectory }}/index.tsx`

```typescript
export * from './{{ ComponentName }}'
```

# `{{ OutputDirectory }}/{{ ComponentName }}.tsx`

```typescript
import type { FC } from 'react'
{{ if inputs.style }}import style from "./{{ ComponentName | camel }}.module.css"{{ end }}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type {{ ComponentName }}Props = {}

export const {{ ComponentName }}: FC<{{ ComponentName }}Props> = () => {
  return (
    <div{{ if inputs.style }} className={style.main}{{ end }}>
      <h1>Geneeated {{ ComponentName }}</h1>
    </div>
  )
}
```

# `{{ !inputs.style && '!' }}{{ OutputDirectory }}/{{ ComponentName | camel }}.module.css`

```
.main {
}
```
