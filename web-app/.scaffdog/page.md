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
{{ if inputs.style }}import styles from "./{{ FileName }}.module.css"{{ end }}

const {{ PageTitle }} = async () => {
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

# `{{ !inputs.style && '!' }}{{ FileName }}/{{ FileName }}.module.css`

```
.main {
}
```
