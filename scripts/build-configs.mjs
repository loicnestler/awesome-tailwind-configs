#!/usr/bin/env zx

import { resolveConfig } from "tailwind-config-viewer/lib/tailwindConfigUtils.js"
import { join } from "path"
import glob from "fast-glob"

const fakeRequire = async (path) => {
   return eval(
      "(function (exports, require, module, __filename, __dirname) {" +
         (await fs.readFile(path, "utf-8")) +
         "\n});"
   )
}

const resolveConfigName = (path) =>
   path.match(/\.\/configs\/([a-zA-Z-_]+)\/tailwind.config.js/)[1]

const configs = await glob("./configs/**/tailwind.config.js")

for (const configPath of configs) {
   const start = Date.now()

   const configName = resolveConfigName(configPath)
   const config = resolveConfig(await fakeRequire(configPath))

   await fs.writeFile(
      join("public", "configs", configName + ".json"),
      JSON.stringify(config)
   )

   const end = Date.now()

   console.log(
      `✅ Built ${configName} (${configPath} -> public/configs/${
         configName + ".json"
      }) in ${end - start}ms`
   )
}
