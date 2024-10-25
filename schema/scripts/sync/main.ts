import { join } from "path"
import { copyFileSync, mkdirSync } from "fs"
import { cwd } from "process";

const main = () => {
  try {
    const openApiFile = join(cwd(), "tsp-output/@typespec/openapi3/openapi.yaml")
    const distDir = join(cwd(), "..", "web-app/src/generated")
    const distFile = join(distDir, "openapi.yaml")

    mkdirSync(distDir, { recursive: true })
    copyFileSync(openApiFile, distFile)
  } catch (error: unknown) {
    console.error(error)
  }
}

main();
