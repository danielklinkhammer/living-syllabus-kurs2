import { motion } from 'framer-motion'
import { PenTool, LayoutTemplate, BoxSelect, CircleSlash } from 'lucide-react'

export default function DesignMdFormatSlide() {
  const markdownExample = `
# Design System

## Overview
A focused, minimal dark interface for a developer 
productivity tool. Clean lines, low visual noise, 
high information density.

## Colors
- **Primary** (#2665fd): CTAs, active states
- **Secondary** (#475569): Supporting UI, chips
- **Surface** (#0b1326): Page backgrounds
- **On-surface** (#dae2fd): Primary text
- **Error** (#ffb4ab): Destructive actions

## Typography
- **Headlines**: Inter, semi-bold
- **Body**: Inter, regular, 14–16px
- **Labels**: Inter, medium, 12px, uppercase

## Components
- **Buttons**: Rounded (8px), brand blue fill
- **Inputs**: 1px border, surface-variant background

## Do's and Don'ts
- Do use the primary color sparingly
- Don't mix rounded and sharp corners
- Do maintain 4:1 contrast ratio
`.trim()

  const sections = [
    { title: "Overview", icon: <LayoutTemplate />, desc: "Der holistische Vibe und Charakter. Führt die KI bei abstrakten Design-Entscheidungen." },
    { title: "Colors", icon: <PaletteIcon />, desc: "Farbpalette (HEX) mit semantischen Beschreibungen (z.B. Primary, Surface, Error)." },
    { title: "Typography", icon: <TypographyIcon />, desc: "Schriftfamilien, Weights und Sizes für Headlines und Fließtexte (z.B. Inter, 14px)." },
    { title: "Components", icon: <BoxSelect />, desc: "Harte Styling-Regeln für atomare Elemente wie Buttons (Radius), Inputs und Cards." },
    { title: "Do's & Don'ts", icon: <CircleSlash />, desc: "Absolute Leitplanken. Verhindert visuelle Halluzinationen in generierten Screens." }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 lg:mt-0 items-start pb-12 pt-8">
        
        {/* Left Column: Sections Explained */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Format Specification</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Klartext-Design</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-6">
              Eine <code>DESIGN.md</code> Datei hat keine komplexe Syntax. Es ist reines, menschenlesbares Markdown. 
              Die KI parst daraus strukturierte Tokens.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {sections.map((sec, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.1 * idx }}
                 className="flex gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group"
               >
                 <div className="p-2 rounded bg-black/40 text-fhgr-petrol-light group-hover:bg-fhgr-petrol/10 transition-colors h-fit">
                    {sec.icon}
                 </div>
                 <div>
                   <h3 className="font-bold text-white mb-1">{sec.title}</h3>
                   <p className="text-sm text-white/50 leading-relaxed">{sec.desc}</p>
                 </div>
               </motion.div>
            ))}
          </div>

          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 0.6}} className="mt-8 flex items-center gap-3">
             <a href="https://designmd.ai/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-fhgr-petrol/20 border border-fhgr-petrol/40 text-fhgr-petrol-light rounded-lg font-mono text-xs hover:bg-fhgr-petrol/30 transition-colors">
                designmd.ai Dokumentation &rarr;
             </a>
          </motion.div>
        </div>

        {/* Right Column: Code Mockup */}
        <div className="lg:col-span-6 flex items-center justify-center pt-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-lg rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(38,101,253,0.1)] bg-[#0A1220] flex flex-col"
          >
            {/* Window Header */}
            <div className="h-10 bg-[#060B14] flex items-center px-4 gap-3 border-b border-white/10 shrink-0">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="text-[11px] font-mono text-white/40 tracking-widest pl-2">DESIGN.md</div>
            </div>
            
            {/* Code Content */}
            <div className="p-6 bg-[#0D1525] overflow-y-auto max-h-[500px] custom-scrollbar">
              <pre className="font-mono text-[13px] leading-relaxed text-indigo-300">
                <code dangerouslySetInnerHTML={{ __html: highlightMarkdown(markdownExample) }} />
              </pre>
            </div>
            
          </motion.div>
        </div>

      </div>
    </div>
  )
}

function PaletteIcon() {
  return <PenTool className="w-5 h-5" />
}

function TypographyIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>
}

// Simple regex highlighter for markdown presentation
function highlightMarkdown(text: string) {
  let highlighted = text;
  // Headlines
  highlighted = highlighted.replace(/^(##? .+)$/gm, '<span class="text-fhgr-petrol-light font-bold">$1</span>');
  // Lists
  highlighted = highlighted.replace(/^- /gm, '<span class="text-white/40">- </span>');
  // Bold Text
  highlighted = highlighted.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">**$1**</strong>');
  return highlighted;
}
