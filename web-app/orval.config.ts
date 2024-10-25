import { defineConfig } from 'orval'

const OpenAPIFilePath = './src/generated/openapi.yaml'
const OutPutDir = './src/generated'

export default defineConfig({
  pestore: {
    input: {
      target: OpenAPIFilePath,
    },
    output: {
      mode: 'tags-split',
      target: `${OutPutDir}/petstore.ts`,
      schemas: `${OutPutDir}/model`,
      client: 'react-query',
      mock: true,
      override: {
        mutator: {
          path: './src/utils/rest-client.ts',
          name: 'restclient',
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
  petstoreZod: {
    input: {
      target: OpenAPIFilePath,
    },
    output: {
      client: 'zod',
      mode: 'tags-split',
      target: `${OutPutDir}/zod`,
      fileExtension: '.zod.ts',
    },
  },
})
