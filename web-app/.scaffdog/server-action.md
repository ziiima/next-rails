---
name: 'server-action'
root: 'src/app'
output: '**/*'
ignore: []
questions:
  name: 'Please Enter Server Action Name'
---

# Variables

- FileName: `{{ inputs.name | kebab }}`
- ActionName: `{{ inputs.name | camel }}`

# `_actions/{{ FileName }}.ts`

```typescript
'use server'

export async function {{ ActionName }}() {}
```
