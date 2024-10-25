import { join } from "path"
import { copyFileSync, mkdirSync } from "fs"
import { cwd } from "process";

const main = () => {
  try {
    const openApiFile = join(cwd(), "tsp-output/@typespec/openapi3/openapi.yaml")
  
    const distUIDir = join(cwd(), "..", "web-app/src/generated")
    const distUIFile = join(distUIDir, "openapi.yaml")

    const distAPIDir = join(cwd(), "..", "api/schema")
    const distAPIFile = join(distAPIDir, "openapi.yaml")

    Array.from([distAPIDir, distUIDir]).forEach(dir => {
      mkdirSync(dir, { recursive: true })
    });

    Array.from([distUIFile, distAPIFile]).forEach(filePath => {
      copyFileSync(openApiFile, filePath)
    })

  } catch (error: unknown) {
    console.error(error)
  }
}

main();
