#!/usr/bin/env zx

import fm from "front-matter"
import glob from "fast-glob"

const README_HEADER = `# awesome-tailwind-configs 
> A curated list of awesome tailwindcss configs 🚀✨

### Contribute
To contribute, simply create a directory inside \`configs/\`, add your \`tailwind.config.js\` into it and create a file that (at least) consists of the following frontmatter attributes:
| attribute | description |
|---|---|
|name|The name of your tailwind config (should be kebab case)|
|description|A short description / headline of the config|
|author|Your GitHub username|

⚠️ Note: the \`name\` attribute *must* be the same as the name of the directory you created!

Have a look into \`configs/minimal-starter/\` for an example configuration.

|Name|Description|Live View|Author|
|---|---|---|---|
`

const rows = []

const readmes = await glob("./configs/**/README.md")
for (const readmePath of readmes) {
   const readme = await fs.readFile(readmePath, "utf-8")

   const {
      body: _,
      attributes: { name, description, author },
   } = fm(readme)
   rows.push(
      `|[${name}](/configs/${name})|${description}|[View Config](https://awesome-tailwind-configs.vercel.app/config?config=${name})|[${author}](https://github.com/${author})`
   )
}

await fs.writeFile("./README.md", README_HEADER + rows.join("\n"))
