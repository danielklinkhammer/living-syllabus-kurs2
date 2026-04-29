import {
  assertProjectFile,
  readRegistry,
  registryPath,
  summarizeRegistry,
  validateRegistry,
} from './lib/registry-utils.mjs'

assertProjectFile(registryPath)

const entries = readRegistry()
const { errors, warnings } = validateRegistry(entries)
const summary = summarizeRegistry(entries)

console.log('Export registry summary')
console.log(`Total slides: ${summary.total}`)
console.log(`Ready: ${summary.ready} · Draft: ${summary.draft} · Hold: ${summary.hold}`)

for (const block of summary.blocks) {
  console.log(
    `${block.block}: total=${block.total}, ready=${block.ready}, draft=${block.draft}, hold=${block.hold}`,
  )
}

if (warnings.length > 0) {
  console.log('')
  console.log('Warnings')
  for (const warning of warnings) {
    console.log(`- ${warning}`)
  }
}

if (errors.length > 0) {
  console.error('')
  console.error('Errors')
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}
