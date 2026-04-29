import exportRegistryData from './export-registry.json'

export type ExportStatus = 'draft' | 'ready' | 'hold'

export interface ExportRegistryEntry {
  slideId: string
  title: string
  block: string
  order: number
  exportId: string
  exportName: string
  figmaPageName: string
  exportStatus: ExportStatus
}

export interface SlideExportMeta {
  exportId: string
  exportName: string
  block: string
  order: number
  figmaPageName: string
  exportStatus: ExportStatus
}

export const DEFAULT_FIGMA_PAGE_NAME = 'Living Syllabus'

export const exportRegistry = exportRegistryData as ExportRegistryEntry[]

const exportRegistryMap = new Map<string, ExportRegistryEntry>()

for (const entry of exportRegistry) {
  if (exportRegistryMap.has(entry.slideId)) {
    throw new Error(`Duplicate export registry entry for slide "${entry.slideId}"`)
  }

  exportRegistryMap.set(entry.slideId, entry)
}

export const readyExportRegistry = exportRegistry.filter(
  (entry) => entry.exportStatus === 'ready',
)

export function getSlideExportMeta(
  slideId: string,
  title: string,
): SlideExportMeta {
  const entry = exportRegistryMap.get(slideId)

  if (!entry) {
    throw new Error(`Missing export registry entry for slide "${slideId}"`)
  }

  if (entry.title !== title) {
    throw new Error(
      `Export registry title mismatch for slide "${slideId}": "${entry.title}" vs "${title}"`,
    )
  }

  return {
    exportId: entry.exportId,
    exportName: entry.exportName,
    block: entry.block,
    order: entry.order,
    figmaPageName: entry.figmaPageName,
    exportStatus: entry.exportStatus,
  }
}
