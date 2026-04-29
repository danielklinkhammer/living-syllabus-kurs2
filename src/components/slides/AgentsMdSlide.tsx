import { motion } from 'framer-motion'
import { Bot, Terminal, Target, BookOpen } from 'lucide-react'

export default function AgentsMdSlide() {
  const markdownExample = `
---
titel: "UX Researcher Agent"
typ: agent-config
status: active
---

# AGENTS.md

> Konfiguriert das Verhalten und den Kontext von KI-Agenten im Workspace.

## Deine Rolle
- Du bist analytisch, strukturiert und objektiv.
- Dein Ziel: Komplexe Logik-Aufgaben in System-Strukturen überführen.

## Deine Ressourcen
Du hast direkten Lese-Zugriff auf:
- \`Assets/Guidelines/\` (Designsystem-Regeln)
- \`_PROTOCOL.md\` (Globale Workspace-Konventionen)

## Deine Pipeline
1. Lade alle relevanten Dateien in den Kontext.
2. Identifiziere Lücken im Design oder Code.
3. Frage den User gezielt nach Freigabe.
4. Generiere das Update.

## Output Constraints
- Formatiere alle Ausgaben als valides Markdown.
- Generiere Dateien mit dem Suffix \`_generiert.md\`.
- Halte dich strikt an das 60-30-10 Farbschema.
`.trim()

  const sections = [
    { title: "Rollen & System-Prompt", icon: <Bot className="w-5 h-5" />, desc: "Wer ist der Agent? Welchen Tonfall nutzt er und was ist seine direkte Zielsetzung?" },
    { title: "Ressourcen & Kontext", icon: <BookOpen className="w-5 h-5" />, desc: "Welche Dateien darf die KI lesen? (z.B. Pfade zum Projekt, globale Vault-Manifeste)." },
    { title: "Agentic Workflows", icon: <Terminal className="w-5 h-5" />, desc: "Eine strikte Schritt-für-Schritt Anleitung, in welcher Reihenfolge Aufgaben abgearbeitet werden." },
    { title: "Output Constraints", icon: <Target className="w-5 h-5" />, desc: "Harte Formalitäten: Dateinamen, Formate (JSON/Markdown) und einzuhaltende Standards." }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 lg:mt-0 items-start pb-12 pt-8">
        
        {/* Left Column: Sections Explained */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-pink-500 text-xs font-mono uppercase tracking-widest mb-3">Format Specification</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Agenten orchestrieren</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-6">
              Während <code>DESIGN.md</code> das visuelle System definiert, steuert die <code>AGENTS.md</code> das Gehirn der Prozesse. Sie sagt den KIs, <em>wie</em> sie im Workspace agieren sollen.
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
                 <div className="p-2 rounded bg-black/40 text-pink-500 group-hover:bg-pink-500/10 transition-colors h-fit">
                    {sec.icon}
                 </div>
                 <div>
                   <h3 className="font-bold text-white mb-1">{sec.title}</h3>
                   <p className="text-sm text-white/50 leading-relaxed">{sec.desc}</p>
                 </div>
               </motion.div>
            ))}
          </div>

        </div>

        {/* Right Column: Code Mockup */}
        <div className="lg:col-span-6 flex items-center justify-center pt-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-lg rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(236,72,153,0.1)] bg-[#0A1220] flex flex-col"
          >
            {/* Window Header */}
            <div className="h-10 bg-[#060B14] flex items-center px-4 gap-3 border-b border-white/10 shrink-0">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="text-[11px] font-mono text-white/40 tracking-widest pl-2">AGENTS.md</div>
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

// Simple regex highlighter for markdown presentation
function highlightMarkdown(text: string) {
  let highlighted = text;
  // Frontmatter
  highlighted = highlighted.replace(/^---([\s\S]*?)---/gm, '<span class="text-white/30">---$1---</span>');
  // Headlines
  highlighted = highlighted.replace(/^(##? .+)$/gm, '<span class="text-pink-500 font-bold">$1</span>');
  // Lists
  highlighted = highlighted.replace(/^- /gm, '<span class="text-white/40">- </span>');
  // Bold Text
  highlighted = highlighted.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">**$1**</strong>');
  return highlighted;
}
