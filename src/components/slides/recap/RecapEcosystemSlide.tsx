import { motion } from 'framer-motion'
import SlideLayout from '../../layout/SlideLayout'
import { Bot, Network, SendHorizontal, Search, Paintbrush, Code2 } from 'lucide-react'

export default function RecapEcosystemSlide() {
  return (
    <SlideLayout>
      <div className="w-full flex flex-col h-full justify-center">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-10 max-w-4xl">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Evolution der Interfaces</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Vom Modell zum autonomen Agenten</h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Um die volle Power der Technologie im UX-Prozess zu nutzen, müssen wir zwischen dem Modell als passiven "Gehirn" und dem Agenten als proaktiven "Akteur" unterscheiden.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 w-full mb-6">
          
          {/* Gehirn: Modell */}
          <motion.div 
            initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay: 0.1}}
            className="flex-1 bg-black/40 p-6 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col"
          >
             <div className="absolute top-0 right-0 p-6 opacity-5"><Bot className="w-24 h-24" /></div>
             <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                 <Bot className="w-5 h-5 text-blue-400" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-white">KI-Modell (LLM)</h3>
                 <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">Das Gehirn</div>
               </div>
             </div>
             <p className="text-sm text-white/50 leading-relaxed mt-2 mb-4 font-medium italic">
               "Ich sage das nächste wahrscheinlichste Token innerhalb eines isolierten Kontextes voraus."
             </p>
             <ul className="text-sm text-white/40 space-y-2 mt-auto">
               <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">•</span> Statistisch & Wahrscheinlichkeitsbasiert</li>
               <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">•</span> Passiv (reagiert nur auf konkreten Input)</li>
               <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">•</span> Isoliertes System ohne Außen-Tools</li>
             </ul>
          </motion.div>

          {/* Akteur: Agent */}
          <motion.div 
            initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay: 0.2}}
            className="flex-1 bg-gradient-to-br from-fhgr-petrol/20 to-black/40 p-6 rounded-2xl border border-fhgr-petrol/30 relative overflow-hidden flex flex-col shadow-[0_0_40px_rgba(131,197,190,0.1)]"
          >
             <div className="absolute top-0 right-0 p-6 opacity-10"><Network className="w-24 h-24 text-fhgr-petrol-light" /></div>
             <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-10 rounded-full bg-fhgr-petrol/20 border border-fhgr-petrol-light/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(131,197,190,0.4)]">
                 <Network className="w-5 h-5 text-fhgr-petrol-light" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-white">Autonomer Agent</h3>
                 <div className="text-xs font-mono text-fhgr-petrol-light uppercase tracking-widest">Der Akteur</div>
               </div>
             </div>
             <p className="text-sm text-white/70 leading-relaxed mt-2 mb-4 font-medium italic">
               "Ich nutze das LLM als Logik-Kern, um komplexe Ziele asynchron und selbstständig zu lösen."
             </p>
             <ul className="text-sm text-white/60 space-y-2 mt-auto">
               <li className="flex items-center gap-2"><span className="text-fhgr-petrol-light font-bold">✓</span> <strong className="text-white">Personalisierung:</strong> Custom GPTs, Google Gems</li>
               <li className="flex items-center gap-2"><span className="text-fhgr-petrol-light font-bold">✓</span> <strong className="text-white">Tool-Integration:</strong> API-Zugriff, Web-Search, Interpreter</li>
               <li className="flex items-center gap-2"><span className="text-fhgr-petrol-light font-bold">✓</span> <strong className="text-white">Asynchron:</strong> Plant Tasks und kehrt mit Ergebnissen zurück</li>
             </ul>
          </motion.div>

        </div>

        {/* Agentic Workflows */}
        <motion.div 
          initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.3}}
          className="bg-[#0b111a] p-6 rounded-2xl border border-white/10"
        >
           <div className="flex items-center gap-2 mb-4">
             <SendHorizontal className="w-5 h-5 text-purple-400" />
             <h4 className="text-lg font-bold text-white">Beispiele für asynchrone "Agentic Workflows"</h4>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Search className="w-4 h-4 text-purple-300" />
                  <span className="font-semibold text-sm">Recherche-Agent</span>
                </div>
                <p className="text-xs text-white/50 leading-relaxed italic">"Analysiere die Website unserer Top 5 Wettbewerber. Erstelle eine Vergleichstabelle in Sheets und sende mir eine Zusammenfassung per E-Mail."</p>
             </div>
             <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Paintbrush className="w-4 h-4 text-pink-300" />
                  <span className="font-semibold text-sm">Design-Agent</span>
                </div>
                <p className="text-xs text-white/50 leading-relaxed italic">"Lies das UX-Document in meinem Drive. Erstelle basierend auf den Pain Points 3 Landingpage-Konzepte in Docs und generiere je ein Hero-Image."</p>
             </div>
             <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-4 h-4 text-green-300" />
                  <span className="font-semibold text-sm">Coding-Agent</span>
                </div>
                <p className="text-xs text-white/50 leading-relaxed italic">"Überprüfe die UX-Barrierefreiheit im GitHub-Repo. Identifiziere Fehler, erstelle einen Report und reiche einen Pull Request mit den Korrekturen ein."</p>
             </div>
           </div>
        </motion.div>

      </div>
    </SlideLayout>
  )
}
