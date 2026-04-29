import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import { LayoutTemplate, ShieldCheck, Sparkles, Cpu } from 'lucide-react'

export default function DesignSystemIntroSlide() {
  return (
    <SlideLayout>
      <div className="w-full flex flex-col h-full justify-center py-6">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-10 max-w-4xl">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2">
            <LayoutTemplate className="w-4 h-4" /> Grundlagen
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Fundamente & Design Systeme</h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Design Systeme bilden die strukturelle Basis digitaler Produkte. Sie sind unerlässlich für große Design-Teams und fungieren heute gleichzeitig als präziser <strong>System-Prompt</strong>, der KIs davor bewahrt, in generische Templates zu verfallen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full flex-1">
          
          {/* Was sind sie? */}
          <motion.div 
            initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1}}
            className="flex-1 bg-black/40 p-6 rounded-2xl border border-white/10 flex flex-col hover:border-white/30 transition-colors relative overflow-hidden"
          >
             <div className="w-10 h-10 bg-white/10 text-white rounded-xl flex items-center justify-center border border-white/20 shrink-0 mb-4">
                <LayoutTemplate className="w-5 h-5" />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Was sind Design Systeme?</h3>
             <p className="text-sm text-white/50 leading-relaxed mb-4">
               Eine <em>Single Source of Truth</em> für Produktteams. Sie beinhalten UI-Komponenten, visuelle Tokens, Designphilosophien, Verhaltensmuster und umfassende Guidelines.
             </p>
             <div className="mt-auto pt-4 border-t border-white/10 flex gap-2 text-[10px] uppercase font-mono tracking-widest text-white/40">
               <span>UI-Kits</span> • <span>Guidelines</span> • <span>Code</span>
             </div>
          </motion.div>

          {/* Warum manuell? */}
          <motion.div 
            initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.2}}
            className="flex-1 bg-black/40 p-6 rounded-2xl border border-blue-500/30 flex flex-col hover:border-blue-500/50 transition-colors relative overflow-hidden"
          >
             <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center border border-blue-500/30 shrink-0 mb-4">
                <ShieldCheck className="w-5 h-5" />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Aktuelle Kernaufgabe</h3>
             <p className="text-sm text-white/50 leading-relaxed mb-4">
               Sie sind enorm wichtig, um die visuelle <strong>Konsistenz</strong> über hunderte Screens hinweg zu bewahren und den kollaborativen <strong>Handoff</strong> zwischen Designern und Developern bruchfrei zu gestalten.
             </p>
             <div className="mt-auto pt-4 border-t border-white/10 text-[10px] uppercase font-mono tracking-widest text-blue-400">
               Weniger repetitive Team-Arbeit
             </div>
          </motion.div>

          {/* Warum AI? */}
          <motion.div 
            initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.3}}
            className="flex-1 bg-gradient-to-br from-fhgr-petrol-light/20 to-transparent p-6 rounded-2xl border border-fhgr-petrol-light/50 flex flex-col shadow-[0_0_30px_rgba(131,197,190,0.1)] relative overflow-hidden"
          >
             <div className="w-10 h-10 bg-fhgr-petrol-light text-[#0b111a] rounded-xl flex items-center justify-center shrink-0 mb-4 shadow-lg shadow-fhgr-petrol-light/30">
                <Sparkles className="w-5 h-5" />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Relevanz im KI-Zeitalter</h3>
             <p className="text-sm text-white/70 leading-relaxed mb-4">
               KI generiert extrem schnell Layouts, neigt aber stark zum "Tailwind-Durchschnitt". Ein kodifizierbares Framework fungiert zwingend als "Leitplanke", die der KI erklärt, nach welchen eigenen Regeln & Identitäten aufgebaut werden muss.
             </p>
             <div className="mt-auto pt-4 border-t border-white/20 flex gap-2 items-center text-[10px] uppercase font-mono tracking-widest text-fhgr-petrol-light font-bold">
               <Cpu className="w-4 h-4 mr-1" />
               Maschinelle Lesbarkeit ist King
             </div>
          </motion.div>

        </div>
      </div>
    </SlideLayout>
  )
}
