import { motion } from 'framer-motion'
import { Bot, Terminal, FolderOpen, ArrowRightLeft } from 'lucide-react'
import SlideLayout from '../layout/SlideLayout'

export default function ObsidianAIAgentsSlide() {
  return (
    <SlideLayout>
      <div className="w-full h-full flex flex-col justify-center gap-10">
        
        <div className="text-center mx-auto max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(59,130,246,0.15)] mb-4">
             <Bot className="w-4 h-4" /> The Synergy
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-head tracking-tight leading-tight mb-4 text-white">
            Obsidian × <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">AI Agents</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Weil Obsidian-Vaults reine Mac/Windows-Ordner sind, entsperren sie die größte Superkraft von System-Agenten (wie Claude Desktop, Cursor oder Anti-Gravity): <strong>Lokaler Kontext.</strong>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 relative">
          
          {/* Background Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-fhgr-petrol/20 via-blue-500/50 to-fhgr-petrol/20 border-t border-dashed border-white/20 -translate-y-1/2 z-0" />

          {/* Obsidian Vault */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }} 
             animate={{ opacity: 1, x: 0 }} 
             transition={{ delay: 0.1 }}
             className="w-full lg:w-1/3 bg-black/40 border border-fhgr-petrol/30 p-6 rounded-2xl relative z-10 shadow-[0_0_30px_rgba(131,197,190,0.1)] backdrop-blur-md"
          >
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-fhgr-petrol/20 text-fhgr-petrol-light flex items-center justify-center border border-fhgr-petrol/30">
                  <FolderOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Dein lokales Vault</h3>
             </div>
             <ul className="space-y-3">
               <li className="text-white/60 text-sm flex items-center gap-2 max-w-[250px]">
                 <span className="w-1.5 h-1.5 rounded-full bg-fhgr-petrol-light" /> Vorlesungsnotizen (`.md`)
               </li>
               <li className="text-white/60 text-sm flex items-center gap-2 max-w-[250px]">
                 <span className="w-1.5 h-1.5 rounded-full bg-fhgr-petrol-light" /> Projektideen & Skripte
               </li>
               <li className="text-white/60 text-sm flex items-center gap-2 max-w-[250px]">
                 <span className="w-1.5 h-1.5 rounded-full bg-fhgr-petrol-light" /> Forschung & Code (`.ts`, `.py`)
               </li>
             </ul>
          </motion.div>

          {/* Sync Arrows */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.5 }} 
             animate={{ opacity: 1, scale: 1 }} 
             transition={{ delay: 0.3 }}
             className="relative z-10 w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)] my-4 lg:my-0"
          >
             <ArrowRightLeft className="w-8 h-8" />
          </motion.div>

          {/* AI Agents */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }} 
             animate={{ opacity: 1, x: 0 }} 
             transition={{ delay: 0.2 }}
             className="w-full lg:w-1/3 bg-black/40 border border-blue-500/30 p-6 rounded-2xl relative z-10 shadow-[0_0_30px_rgba(59,130,246,0.1)] backdrop-blur-md"
          >
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">System-Agents</h3>
             </div>
             <p className="text-white/60 text-sm leading-relaxed mb-4">
               Agenten wie <strong>Claude Desktop</strong> oder <strong>Anti-Gravity</strong> laufen auf deinem Betriebssystem. Du kannst ihnen den Befehl geben:
             </p>
             <div className="bg-black/60 border border-white/10 rounded-lg p-3 text-xs font-mono text-green-400 leading-snug">
               <span className="text-blue-400">@agent</span> Lese mein Vault in `/Documents` und generiere aus den "Lektionen 1-4" ein Quiz. Speichere das Ergebnis als neue Notiz.
             </div>
          </motion.div>

        </div>

      </div>
    </SlideLayout>
  )
}
