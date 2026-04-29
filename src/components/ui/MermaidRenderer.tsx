import { useEffect, useState } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: 'monospace',
})

interface MermaidRendererProps {
  chart: string
  id?: string
}

export default function MermaidRenderer({ chart, id = 'mermaid-chart' }: MermaidRendererProps) {
  const [svgContent, setSvgContent] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    let isMounted = true

    const renderChart = async () => {
      try {
        setError('')
        // Need wait for DOM and pass pure id mapping
        const { svg } = await mermaid.render(id, chart)
        if (isMounted) {
          setSvgContent(svg)
        }
      } catch (err) {
        console.error('Mermaid rendering error:', err)
        if (isMounted) {
          setError('Syntax Error in Mermaid Code')
        }
      }
    }

    if (chart) {
      renderChart()
    }

    return () => {
      isMounted = false
    }
  }, [chart, id])

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-sm p-4 rounded-lg">
        {error}
      </div>
    )
  }

  return (
    <div 
      className="mermaid-wrapper w-full flex justify-center [&>svg]:max-w-full [&>svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: svgContent }} 
    />
  )
}
