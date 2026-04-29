import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const projectRoot = path.resolve(__dirname, '..', '..')
export const registryPath = path.join(
  projectRoot,
  'src/config/export-registry.json',
)
export const syllabusConfigPath = path.join(
  projectRoot,
  'src/config/syllabus.config.tsx',
)
export const publicDir = path.join(projectRoot, 'public')
export const srcDir = path.join(projectRoot, 'src')

const VALID_STATUSES = new Set(['draft', 'ready', 'hold'])
const EXPORT_NAME_PATTERN = /^B\d{2}-\d{2} · /

export function readRegistry() {
  return JSON.parse(readFileSync(registryPath, 'utf8'))
}

export function extractSlidesFromConfig() {
  const text = readFileSync(syllabusConfigPath, 'utf8')
  const matches = text.matchAll(/id:\s*'([^']+)'\s*,\s*title:\s*'([^']+)'/g)

  return [...matches].map(([, slideId, title]) => ({
    slideId,
    title,
  }))
}

function countBy(items, getKey) {
  return items.reduce((acc, item) => {
    const key = getKey(item)
    acc[key] = (acc[key] ?? 0) + 1
    return acc
  }, {})
}

function expectedExportName(entry) {
  return `${entry.block}-${String(entry.order).padStart(2, '0')} · ${entry.title}`
}

export function sortRegistry(entries) {
  return [...entries].sort((a, b) => {
    if (a.block !== b.block) {
      return a.block.localeCompare(b.block)
    }

    return a.order - b.order
  })
}

export function validateRegistry(entries, configSlides = extractSlidesFromConfig()) {
  const errors = []
  const warnings = []

  const bySlideId = new Map()
  const byExportId = new Map()
  const byExportName = new Map()

  for (const entry of entries) {
    if (bySlideId.has(entry.slideId)) {
      errors.push(`Duplicate slideId in registry: ${entry.slideId}`)
    } else {
      bySlideId.set(entry.slideId, entry)
    }

    if (byExportId.has(entry.exportId)) {
      errors.push(`Duplicate exportId in registry: ${entry.exportId}`)
    } else {
      byExportId.set(entry.exportId, entry)
    }

    if (byExportName.has(entry.exportName)) {
      errors.push(`Duplicate exportName in registry: ${entry.exportName}`)
    } else {
      byExportName.set(entry.exportName, entry)
    }

    if (!VALID_STATUSES.has(entry.exportStatus)) {
      errors.push(
        `Invalid exportStatus for ${entry.slideId}: ${entry.exportStatus}`,
      )
    }

    if (!/^B\d{2}$/.test(entry.block)) {
      errors.push(`Invalid block format for ${entry.slideId}: ${entry.block}`)
    }

    if (!Number.isInteger(entry.order) || entry.order < 1) {
      errors.push(`Invalid order for ${entry.slideId}: ${entry.order}`)
    }

    if (entry.exportId !== `living-syllabus:${entry.slideId}`) {
      errors.push(`Unexpected exportId for ${entry.slideId}: ${entry.exportId}`)
    }

    if (!EXPORT_NAME_PATTERN.test(entry.exportName)) {
      errors.push(
        `Invalid exportName format for ${entry.slideId}: ${entry.exportName}`,
      )
    }

    if (entry.exportName !== expectedExportName(entry)) {
      errors.push(
        `exportName mismatch for ${entry.slideId}: expected "${expectedExportName(entry)}"`,
      )
    }

    if (!entry.figmaPageName?.trim()) {
      errors.push(`Missing figmaPageName for ${entry.slideId}`)
    }
  }

  const configMap = new Map(
    configSlides.map((slide) => [slide.slideId, slide.title]),
  )

  for (const slide of configSlides) {
    const entry = bySlideId.get(slide.slideId)

    if (!entry) {
      errors.push(`Missing registry entry for slide ${slide.slideId}`)
      continue
    }

    if (entry.title !== slide.title) {
      errors.push(
        `Title mismatch for ${slide.slideId}: config="${slide.title}" registry="${entry.title}"`,
      )
    }
  }

  for (const entry of entries) {
    if (!configMap.has(entry.slideId)) {
      warnings.push(`Registry entry without matching slide in config: ${entry.slideId}`)
    }
  }

  const groupedOrders = entries.reduce((acc, entry) => {
    acc[entry.block] ??= []
    acc[entry.block].push(entry.order)
    return acc
  }, {})

  for (const [block, orders] of Object.entries(groupedOrders)) {
    const sorted = [...orders].sort((a, b) => a - b)
    sorted.forEach((order, index) => {
      const expected = index + 1
      if (order !== expected) {
        errors.push(
          `Non-contiguous order in ${block}: expected ${expected}, found ${order}`,
        )
      }
    })
  }

  return { errors, warnings }
}

export function summarizeRegistry(entries) {
  const sortedEntries = sortRegistry(entries)
  const statusCounts = countBy(sortedEntries, (entry) => entry.exportStatus)
  const blockCounts = Object.entries(
    sortedEntries.reduce((acc, entry) => {
      acc[entry.block] ??= { total: 0, ready: 0, draft: 0, hold: 0 }
      acc[entry.block].total += 1
      acc[entry.block][entry.exportStatus] += 1
      return acc
    }, {}),
  )
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([block, counts]) => ({ block, ...counts }))

  return {
    total: sortedEntries.length,
    ready: statusCounts.ready ?? 0,
    draft: statusCounts.draft ?? 0,
    hold: statusCounts.hold ?? 0,
    blocks: blockCounts,
  }
}

export function getBatchEntries(entries, statuses = ['ready']) {
  const allowed = new Set(statuses)
  return sortRegistry(entries).filter((entry) => allowed.has(entry.exportStatus))
}

export function assertProjectFile(filePath) {
  if (!existsSync(filePath)) {
    throw new Error(`Missing required project file: ${filePath}`)
  }
}
