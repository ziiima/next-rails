---
name: 'page'
root: 'src/app'
output: '.'
ignore: []
questions:
  name: 'Please enter name of page ex: sample/sample'
  style:
    confirm: 'do you need css?'
    initial: false
---

# Variables

- BaseName: `{{ inputs.name | split "/" | slice -1 }}`
- BasePath: `{{ join(slice(split(inputs.name, "/"), 0, len(split(inputs.name, "/")) - 1), "/") }}`
- AppDir: `{{ "src/app" }}`
- E2EDir: `{{ "e2e" }}`

- PageTitle: `{{ BaseName | pascal }}Page`
- FileName: `{{ BaseName | kebab }}`

# `{{ resolve AppDir BasePath FileName }}/page.tsx`

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

# `{{ !inputs.style && '!' }}{{ resolve AppDir BasePath FileName }}/{{ FileName }}.module.css`

```
.main {
}
```

# `{{ resolve E2EDir BasePath }}/{{ FileName }}.spec.ts`

```typescript
import { test, expect } from '@playwright/test'

test('should navigate to the page', async ({ page }) => {
  await page.goto('{{ BasePath }}/{{ FileName }}')
  await expect(page).toHaveURL('{{ BasePath }}/{{ FileName }}')
})
```
