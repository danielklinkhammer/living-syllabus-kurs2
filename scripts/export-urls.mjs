import { getBatchEntries, readRegistry, sortRegistry, validateRegistry } from './lib/registry-utils.mjs'

const args = new Set(process.argv.slice(2))
const baseArg = [...args].find((arg) => arg.startsWith('--base='))
const statusesArg = [...args].find((arg) => arg.startsWith('--status='))
const baseUrl = baseArg ? baseArg.replace('--base=', '') : 'http://127.0.0.1:4173/'
const statuses = statusesArg
  ? statusesArg.replace('--status=', '').split(',').filter(Boolean)
  : ['draft', 'ready']

const entries = readRegistry()
const { errors } = validateRegistry(entries)

if (errors.length > 0) {
  console.error('Registry validation failed. Run `npm run export:validate` first.')
  process.exit(1)
}

const allEntries = sortRegistry(entries)
const selectedEntries =
  statuses.length === 3 ? allEntries : getBatchEntries(entries, statuses)

for (const entry of selectedEntries) {
  const url = new URL(baseUrl)
  url.searchParams.set('slide', entry.slideId)
  console.log(`${entry.exportName} ${url.toString()}`)
}
