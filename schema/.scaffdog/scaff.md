---
name: 'scaff'
root: './src'
output: 'src/*'
ignore: []
questions:
  name: 'Please enter name of model'
  # schema:
  #   message: 'select schema rest or graphql'
  #   choices:
  #     - 'rest'
  #     - 'graphql'
---

# Variables

- featurename: `{{ inputs.name | kebab }}`
- modelname: `{{ inputs.name | pascal }}`

# `{{ featurename }}/model.tsp`

```markdown
/**
 * Generated by scaffdog
 * feature name is {{ featurename }}
 * created at {{ date "YYYY/MM/DD" }}
 **/

model {{ modelname }} {
}
```

<!-- # `{{ filename }}/graphql.tsp`

```markdown
``` -->

# `{{ featurename }}/route.tsp`

```markdown
/**
 * Generated by scaffdog
 * feature name is {{ featurename }}
 * created at {{ date "YYYY/MM/DD" }}
 **/
import "@typespec/http";
import "./model.tsp";

using TypeSpec.Http;

@tag("{{ inputs.name }}")
@route("/{{ inputs.name | kebab | plur }}")
interface {{ modelname | plur }} {
}
```

# `main.tsp`

```
/**
 * Generated by scaffdog
 * feature name is {{ featurename }}
 * created at {{ date "YYYY/MM/DD" }}
 **/
{{ read output.abs }}
import "./{{ featurename }}/route.tsp";
```