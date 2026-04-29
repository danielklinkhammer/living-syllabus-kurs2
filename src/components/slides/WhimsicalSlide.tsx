import { motion } from 'framer-motion'
import { FileCode2, Share2, Workflow, Infinity as InfinityIcon, ExternalLink } from 'lucide-react'
import Card from '../ui/Card'

export default function WhimsicalSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#060F1A] text-white overflow-y-auto lg:overflow-hidden relative px-6 lg:px-16">
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12 lg:mt-0">
        
        {/* Left: Content */}
        <div className="flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="text-indigo-400 text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2">
              <Workflow className="w-4 h-4" /> Tool Spotlight
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2">Visuelle Logik mit Whimsical</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-6">
              Für wirklich komplexe, verschachtelte Diagramme stößt man in FigJam oft an Grenzen. <strong>Whimsical</strong> ist der Best-in-Class Editor für User Flows und Architektur.
            </p>
            <a href="https://whimsical.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 text-sm font-medium rounded-lg transition-colors border border-indigo-500/30 mb-8">
              Zu Whimsical <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="space-y-4">
            <Card 
              delay={0.1}
              variant="primary"
              className="!p-6 bg-[#0A1220] border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.05)] text-left"
            >
              <h3 className="font-bold text-indigo-400 mb-3 flex items-center gap-2">
                <InfinityIcon className="w-5 h-5"/> Flawless UX
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Niemand zieht gerne manuelle Pfeile. In Whimsical fließen Nodes organisch aneinander, was es extrem schnell macht, tiefgehende Logik-Bäume und konditionale Edge-Cases (If/Else) visuell herunterzuschreiben.
              </p>
            </Card>

            <Card 
              delay={0.2}
              variant="glass"
              className="!p-6 border-fhgr-petrol/30 bg-gradient-to-br from-fhgr-petrol/10 to-transparent relative overflow-hidden text-left"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-fhgr-petrol/10 blur-[50px] rounded-full" />
              <h3 className="font-bold text-fhgr-petrol-light mb-3 flex items-center gap-2 relative z-10 text-lg">
                <Share2 className="w-5 h-5"/> Der Perfect-Pipeline Export
              </h3>
              <p className="text-sm text-white/80 leading-relaxed relative z-10 font-medium mb-3">
                Das Geniale für unseren Workflow: Whimsical erlaubt den direkten Export als <strong>Mermaid.js</strong>.
              </p>
              
              <div className="bg-black/30 p-3 rounded-lg border border-white/5 text-xs text-white/60 relative z-10 flex gap-2 items-center">
                <div className="p-2 bg-white/5 rounded text-indigo-400"><Workflow className="w-4 h-4"/></div>
                <div>Whimsical (Visuell bauen)</div>
                <div>→</div>
                <div className="p-2 bg-white/5 rounded text-blue-400"><FileCode2 className="w-4 h-4"/></div>
                <div>Mermaid (Code kopieren)</div>
                <div>→</div>
                <div className="p-2 bg-white/5 rounded text-green-400"><Share2 className="w-4 h-4"/></div>
                <div>FigJam / ChatGPT (Einfügen)</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right: Graphic */}
        <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay: 0.3}} className="h-[450px] lg:h-[600px] flex flex-col">
          <Card variant="glass" className="h-full !p-0 border-white/5 bg-[#1A1A1A] flex flex-col relative overflow-hidden shadow-2xl shrink-0 group">
             
             {/* Header */}
             <div className="h-12 bg-[#F6F7F9] flex items-center px-4 gap-3 border-b border-black/5 shrink-0 z-10 relative shadow-sm">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                 <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
               </div>
               <div className="text-[11px] font-bold text-slate-600 ml-2 tracking-wide">
                 Whimsical Workspace
               </div>
             </div>

             {/* Standard Image Container with scrolling */}
             <div className="flex-1 overflow-y-auto custom-scrollbar relative flex items-start justify-center p-0 bg-[#F6F7F9]">
                 <img 
                   src="/whimsical-preview.png" 
                   alt="Whimsical Diagram Screenshot" 
                   className="w-full h-auto max-w-full origin-top object-contain drop-shadow-xl"
                 />
             </div>
             
          </Card>
        </motion.div>

      </div>
    </div>
  )
}
