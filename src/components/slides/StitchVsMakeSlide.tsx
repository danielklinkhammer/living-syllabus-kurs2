import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { Baseline, Search, Layers, LayoutPanelLeft, Compass, Wand2 } from 'lucide-react'

export default function StitchVsMakeSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-4 lg:px-12 overflow-y-auto lg:overflow-hidden relative custom-scrollbar">
      <div className="max-w-7xl w-full mx-auto relative z-10 py-12 pt-20">
        
        {/* WIP Header Banner */}
        <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} className="flex justify-center mb-8">
           <div className="inline-flex items-center gap-3 px-4 py-2 bg-fhgr-petrol/20 border border-fhgr-petrol/30 rounded-full text-fhgr-petrol-light text-sm font-mono tracking-widest uppercase">
              <Compass className="w-4 h-4 ml-1" /> UX Workflow
           </div>
        </motion.div>

        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Figma vs. Stitch</h2>
          <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
            Zwei unterschiedliche Paradigmen zur Exploration von Design-Varianten im KI-Zeitalter. Es geht nicht um die Generierung eines finalen Screens, sondern darum, wie Lösungsräume am effizientesten ausgelotet werden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Left: Figma (Manual Canvas) */}
          <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay: 0.2}}>
            <Card variant="glass" className="h-full !p-8 border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 to-transparent relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                 <LayoutPanelLeft className="w-32 h-32" />
              </div>
              
              <div className="flex justify-between items-start mb-6">
                 <div className="flex items-center gap-3">
                   <div className="p-3 bg-indigo-500/20 rounded-xl">
                     <LayoutPanelLeft className="w-6 h-6 text-indigo-400" />
                   </div>
                   <h3 className="text-2xl font-bold">Figma (Spatial Canvas)</h3>
                 </div>
                 <div className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded uppercase">Kuratierung</div>
              </div>
              
              <div className="space-y-6">
                 <div>
                    <h4 className="flex items-center gap-2 font-bold text-indigo-300 mb-2"><Search className="w-4 h-4" /> Räumliche Exploration</h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Figma bietet einen unendlichen Raum. Hier können KI-generierte Entwürfe (z.B. via Figma Make) frei angeordnet und direkt verglichen werden. Man stellt Layout-Optionen visuell gegenüber.
                    </p>
                 </div>
                 
                 <div>
                    <h4 className="flex items-center gap-2 font-bold text-indigo-300 mb-2"><Layers className="w-4 h-4" /> Prototyping & Flow</h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Die Varianten bleiben nicht isoliert. Man kann sie sofort in interaktiven Prototypen durchspielen, um User-Flows und das Zusammenspiel der Design-System-Komponenten ganzheitlich zu evaluieren.
                    </p>
                 </div>
              </div>
            </Card>
          </motion.div>

          {/* Right: Code Agents (Stitch) */}
          <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay: 0.3}}>
            <Card variant="glass" className="h-full !p-8 border-fhgr-petrol/30 bg-gradient-to-br from-fhgr-petrol/10 to-transparent relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                 <Baseline className="w-32 h-32" />
              </div>
              
              <div className="flex justify-between items-start mb-6">
                 <div className="flex items-center gap-3">
                   <div className="p-3 bg-fhgr-petrol/20 rounded-xl">
                     <Wand2 className="w-6 h-6 text-fhgr-petrol-light" />
                   </div>
                   <h3 className="text-2xl font-bold">Google Stitch</h3>
                 </div>
                 <div className="text-[10px] font-mono text-fhgr-petrol bg-fhgr-petrol/10 px-2 py-1 rounded uppercase">Agentic Canvas</div>
              </div>
              
              <div className="space-y-6">
                 <div>
                    <h4 className="flex items-center gap-2 font-bold text-fhgr-petrol-light mb-2"><Wand2 className="w-4 h-4" /> Ein Agent steuert den Canvas</h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Während man in Figma selbst den Canvas orchestriert, implementiert Stitch im Grunde einen agierenden Agenten <em>innerhalb</em> des Canvas. Der Agent baut iterativ verschiedene System-Ausprägungen automatisch auf.
                    </p>
                 </div>

                 <div>
                    <h4 className="flex items-center gap-2 font-bold text-fhgr-petrol-light mb-2"><Search className="w-4 h-4" /> Systematische Iteration</h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Stitch übernimmt die Generierung und Evaluierung von Varianten programmatisch. Gesteuert durch zentrale Guidelines (wie <code>DESIGN.md</code>) durchsucht der Agent selbstständig den Lösungsraum nach dem optimalen Layout.
                    </p>
                 </div>
              </div>
            </Card>
          </motion.div>

        </div>

      </div>
    </div>
  )
}
