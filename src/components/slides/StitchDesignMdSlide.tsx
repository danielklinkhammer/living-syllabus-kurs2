import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { FileText, Code2 } from 'lucide-react'

export default function StitchDesignMdSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 lg:mt-0 items-center pb-12 pt-8">
        
        {/* Left Column: Theory */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">System Context · Agentic Design Builder</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Stitch & DESIGN.md</h2>
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              Ein UI-Agent (wie Stitch oder Make) ist im Kern ein Large Language Model. Damit es deine Markenidentität bauen kann, benötigt es kontextuelle Regeln. 
              Hierfür wird eine <strong className="text-white">DESIGN.md</strong> etabliert: Ein Manifest, das exakt definiert, wie das Design-System aussieht.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <Card delay={0.2} variant="glass" className="!p-4 border-fhgr-petrol/20 bg-fhgr-petrol/5">
              <Code2 className="w-5 h-5 text-fhgr-petrol-light mb-2" />
              <div className="font-bold mb-1 text-sm text-fhgr-petrol-light">AGENTS.md</div>
              <div className="text-xs text-white/50 leading-relaxed">Für den Coding-Agenten strukturiert. Definiert Architektur, Code-Style und <em>wie</em> das Projekt technisch gebaut wird.</div>
            </Card>
            <Card delay={0.3} variant="glass" className="!p-4 border-indigo-500/20 bg-indigo-500/5">
              <FileText className="w-5 h-5 text-indigo-400 mb-2" />
              <div className="font-bold mb-1 text-sm text-indigo-400">DESIGN.md</div>
              <div className="text-xs text-white/50 leading-relaxed">Für den Design-Agenten (Stitch / Figma). Definiert Farben, Typografie, Vibe und <em>wie</em> das Projekt visuell aussieht.</div>
            </Card>
          </div>

          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 0.5}} className="space-y-4">
             <div className="text-sm font-semibold tracking-widest uppercase text-white/30 ml-2 mb-2 mt-4">Was liefert das Manifest dem Agenten?</div>
             
             {[
               { title: "Overview & Vibe", desc: "Der holistische visuelle Eindruck (playful vs. professional, dense vs. spacious)." },
               { title: "Colors & Typography", desc: "Verbindung von primitiven Farb-Werten und Schriften mit semantischen Rollen." },
               { title: "Elevation & Components", desc: "Wie verhalten sich Komponenten-Strukturen und wie tief fallen Schatten?" },
               { title: "Do's and Don'ts", desc: "Strikte Leitplanken, die das LLM vom Halluzinieren generischer Styles abhalten." }
             ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start ml-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0" />
                   <div>
                     <span className="font-bold text-white/80 text-sm">{item.title}: </span>
                     <span className="text-sm text-white/50">{item.desc}</span>
                   </div>
                </div>
             ))}
          </motion.div>

        </div>

        {/* Right Column: Google Stitch Demo Element (Placeholder) */}
        <div className="lg:col-span-5 h-[400px] flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group flex flex-col bg-[#0A1220] h-full"
          >
            <div className="h-10 bg-black/60 backdrop-blur-md flex items-center px-4 gap-3 z-10 border-b border-white/10 shrink-0">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
              </div>
              <div className="text-[10px] font-mono text-white/50 tracking-wider">Demo: Google Stitch</div>
            </div>
            
            <div className="w-full flex-1 flex flex-col justify-center items-center p-8 text-center">
              <div className="w-16 h-16 rounded-3xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                <Code2 className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Google Stitch</h3>
              <p className="text-sm text-white/50 mb-6 max-w-sm leading-relaxed">
                Stitch ist ein experimentelles UI-Entwicklertool der nächsten Generation (Google Labs). Es agiert als <strong>Component Explorer und Agentic Design Tool</strong>, das Layouts direkt über visuelle Prompts und das fundierte DESIGN.md Regelwerk iteriert.
              </p>
              
              <a 
                href="https://stitch.withgoogle.com/docs/learn/overview" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-2.5 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-lg font-mono text-xs transition-colors flex items-center gap-2"
              >
                Zur offiziellen Dokumentation →
              </a>
            </div>
            
          </motion.div>
        </div>

      </div>
    </div>
  )
}
