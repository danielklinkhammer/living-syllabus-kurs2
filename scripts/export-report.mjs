import {
  getBatchEntries,
  readRegistry,
  summarizeRegistry,
  validateRegistry,
} from './lib/registry-utils.mjs'

const entries = readRegistry()
const { errors } = validateRegistry(entries)

if (errors.length > 0) {
  console.error('Registry validation failed. Run `npm run export:validate` first.')
  process.exit(1)
}

const summary = summarizeRegistry(entries)
const readyEntries = getBatchEntries(entries, ['ready'])

console.log('Living Syllabus export report')
console.log(`Total: ${summary.total}`)
console.log(`Ready: ${summary.ready}`)
console.log(`Draft: ${summary.draft}`)
console.log(`Hold: ${summary.hold}`)
console.log('')

for (const block of summary.blocks) {
  console.log(
    `${block.block}: total=${block.total}, ready=${block.ready}, draft=${block.draft}, hold=${block.hold}`,
  )
}

console.log('')
console.log('Ready for next batch')

if (readyEntries.length === 0) {
  console.log('- No slides are marked as ready yet.')
  process.exit(0)
}

for (const entry of readyEntries) {
  console.log(`- ${entry.exportName} -> ${entry.figmaPageName}`)
}
