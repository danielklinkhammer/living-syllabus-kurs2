import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import { FileText, Type, Bot, TerminalSquare } from 'lucide-react'

export default function DataFormatMarkdownSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16 items-center">
        
        {/* Left Column: Context & Syntax */}
        <div className="flex-1 w-full space-y-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-orange-400 text-xs font-mono uppercase tracking-widest mb-3">Auszeichnungssprache</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Markdown: Text für Mensch & KI</h2>
            <p className="text-white/60 leading-relaxed max-w-lg mb-6">
              Markdown (.md) ist eine "Markup Language" (Auszeichnungssprache). Anders als reiner Text (Plaintext) ermöglicht Markdown durch simple Sonderzeichen (Tags), dem Text eine saubere Semantik (Überschriften, Listen, Fettung) zu geben – perfekt lesbar für Menschen im Editor, perfekt strukturierbar für Algorithmen.
            </p>
          </motion.div>

          <div className="space-y-4 max-w-lg">
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.1}} className="bg-white/5 p-4 rounded-xl border border-white/10 flex gap-4 items-start">
                <TerminalSquare className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Semantische Strukturierung</h4>
                  <p className="text-sm text-white/50">Durch Zeichenketten wie <code>#</code> für Titel oder <code>-</code> für Listen wird der Text "ge-markup-t" (ausgezeichnet). Konverter (wie GitHub oder Obsidian) verwandeln das sofort in reiches HTML.</p>
                </div>
             </motion.div>
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.2}} className="bg-white/5 p-4 rounded-xl border border-white/10 flex gap-4 items-start">
                <Bot className="w-5 h-5 text-fhgr-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Die Sprache der LLMs</h4>
                  <p className="text-sm text-white/50">Heute ist Markdown weit mehr als nur README-Dateien. KI-Modelle geben Code und Antworten standardmäßig in Markdown aus und "verstehen" Markdown-Systemprompts (wie dein <code>GEMINI.md</code>) instinktiv.</p>
                </div>
             </motion.div>
          </div>
        </div>

        {/* Right Column: Code Example */}
        <div className="flex-1 w-full flex flex-col gap-4">
           {/* Editor View */}
           <motion.div 
             initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.3}}
             className="w-full rounded-2xl bg-[#0D1117] border border-white/10 overflow-hidden shadow-xl"
           >
              <div className="bg-black/50 px-4 py-2 border-b border-white/10 flex items-center gap-2">
                <FileText className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-mono text-white/60">Analyse_Prompt.md (Raw Input)</span>
              </div>
              <div className="p-5 overflow-x-auto text-sm font-mono text-white/60 leading-relaxed whitespace-pre-wrap">
                <span className="text-orange-300 font-bold"># System Prompt: UX Assistent</span>{"\n\n"}
                Du agierst als UX-Copilot. Achte auf folgende <span className="text-white opacity-100">**Regeln**</span>:{"\n\n"}
                <span className="text-orange-300">## Fokus-Bereiche</span>{"\n"}
                <span className="text-orange-300">-</span> Accessibility (A11y){"\n"}
                <span className="text-orange-300">-</span> Responsive Design{"\n"}
                <span className="text-orange-300">-</span> <span className="italic text-white/80">*Micro-Interactions*</span>{"\n\n"}
                <span className="text-orange-300 font-bold">&gt; Blockquote: Wichtige Instruktion hervorheben!</span>
              </div>
           </motion.div>

           {/* Rendered View */}
           <motion.div 
             initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.4}}
             className="w-full rounded-2xl bg-white border border-white/10 overflow-hidden shadow-xl text-black"
           >
              <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                <Type className="w-4 h-4 text-gray-500" />
                <span className="text-xs font-mono text-gray-500">Rendered Output (Wie es User & KI sehen)</span>
              </div>
              <div className="p-6">
                <h1 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-3">System Prompt: UX Assistent</h1>
                <p className="mb-4">Du agierst als UX-Copilot. Achte auf folgende <strong>Regeln</strong>:</p>
                <h2 className="text-lg font-bold mb-2">Fokus-Bereiche</h2>
                <ul className="list-disc pl-5 mb-4">
                  <li>Accessibility (A11y)</li>
                  <li>Responsive Design</li>
                  <li><em>Micro-Interactions</em></li>
                </ul>
                <blockquote className="border-l-4 border-gray-300 pl-4 py-1 text-gray-600 bg-gray-50 italic">
                  Blockquote: Wichtige Instruktion hervorheben!
                </blockquote>
              </div>
           </motion.div>
        </div>

      </div>
    </SlideLayout>
  )
}
