import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import { publicDir, srcDir } from './lib/registry-utils.mjs'

const assetPattern = /['"`](\/[^'"`]+\.(?:png|jpe?g|svg|webp|gif))['"`]/g

function walk(dir) {
  const entries = readdirSync(dir)
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry)
    const stats = statSync(fullPath)

    if (stats.isDirectory()) {
      files.push(...walk(fullPath))
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
      files.push(fullPath)
    }
  }

  return files
}

const sourceFiles = walk(srcDir)
const missing = []

for (const filePath of sourceFiles) {
  const content = readFileSync(filePath, 'utf8')
  const matches = [...content.matchAll(assetPattern)]

  for (const match of matches) {
    const referencedAsset = match[1]

    if (referencedAsset.startsWith('//')) {
      continue
    }

    const publicPath = path.join(publicDir, referencedAsset.replace(/^\//, ''))

    if (!existsSync(publicPath)) {
      missing.push({
        source: path.relative(srcDir, filePath),
        asset: referencedAsset,
      })
    }
  }
}

if (missing.length > 0) {
  console.error('Missing public assets')
  for (const item of missing) {
    console.error(`- ${item.asset} referenced in ${item.source}`)
  }
  process.exit(1)
}

console.log(`Asset check passed (${sourceFiles.length} source files scanned).`)
