import { spawnSync } from 'node:child_process'

const steps = [
  {
    label: 'Build',
    command: 'npm',
    args: ['run', 'build'],
  },
  {
    label: 'Export registry validation',
    command: 'node',
    args: ['scripts/validate-export-registry.mjs'],
  },
  {
    label: 'Public asset check',
    command: 'node',
    args: ['scripts/check-public-assets.mjs'],
  },
]

for (const step of steps) {
  console.log(`\n== ${step.label} ==`)
  const result = spawnSync(step.command, step.args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  })

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

console.log('\nManual export preflight')
console.log('- Check navigation, sidebar toggle, slide changes and keyboard controls in the browser.')
console.log('- Review all slides marked as ready for overflow, clipping, spacing and missing assets.')
console.log('- After the batch export, compare a few ready slides in browser vs. Figma.')
