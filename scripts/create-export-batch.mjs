import { getBatchEntries, readRegistry, validateRegistry } from './lib/registry-utils.mjs'

const args = new Set(process.argv.slice(2))
const statusesArg = [...args].find((arg) => arg.startsWith('--status='))
const statuses = statusesArg
  ? statusesArg.replace('--status=', '').split(',').filter(Boolean)
  : ['ready']
const asJson = args.has('--json')

const entries = readRegistry()
const { errors } = validateRegistry(entries)

if (errors.length > 0) {
  console.error('Registry validation failed. Run `npm run export:validate` first.')
  process.exit(1)
}

const batch = getBatchEntries(entries, statuses)

if (asJson) {
  console.log(JSON.stringify(batch, null, 2))
  process.exit(0)
}

console.log(`Export batch for status: ${statuses.join(', ')}`)

if (batch.length === 0) {
  console.log('- No slides matched the requested status filter.')
  process.exit(0)
}

for (const entry of batch) {
  console.log(
    `- ${entry.exportName} | id=${entry.exportId} | figmaPage=${entry.figmaPageName}`,
  )
}
