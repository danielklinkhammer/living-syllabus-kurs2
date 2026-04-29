import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import { Globe, FileJson, ArrowRight, Network } from 'lucide-react'

export default function SystemW3CDTCGSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16 items-center">
        
        {/* Left Column: Context & Mindset */}
        <div className="flex-1 w-full space-y-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Design Systeme · Standards</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">W3C & Die Token Revolution</h2>
            <p className="text-white/60 leading-relaxed max-w-lg mb-6">
              Historisch war das Web von Chaos geprägt. Das <strong>W3C</strong> (World Wide Web Consortium) brachte Ordnung, indem es HTML und CSS standardisierte. Genau dieser Prozess passiert jetzt für Design Assets.
            </p>
          </motion.div>

          <div className="space-y-4 max-w-lg">
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.1}} className="bg-white/5 p-4 rounded-xl border border-white/10 flex gap-4 items-start">
                <Globe className="w-5 h-5 text-fhgr-petrol-light shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Das W3C Konsortium</h4>
                  <p className="text-sm text-white/50">Gegründet von Tim Berners-Lee, erarbeitet das W3C die grundlegenden technischen Standards, die dafür sorgen, dass jede Webseite in jedem Browser der Welt gleich funktioniert.</p>
                </div>
             </motion.div>
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.2}} className="bg-white/5 p-4 rounded-xl border border-white/10 flex gap-4 items-start">
                <Network className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Die Design Token Community Group (DTCG)</h4>
                  <p className="text-sm text-white/50">Ein Gremium innerhalb des W3C. Ihre Mission: Die Erschaffung eines universellen, platform-unabhängigen JSON-Formats (einer Art Esperanto), damit Designtools (Figma) und Code-Umgebungen nahtlos dieselben Design-Entscheidungen sprechen.</p>
                </div>
             </motion.div>
          </div>
        </div>

        {/* Right Column: Visualizing the Spec */}
        <div className="flex-1 w-full flex items-center justify-center">
           <motion.div 
             initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.3}}
             className="w-full max-w-xl rounded-2xl bg-[#0D1117] border border-white/10 overflow-hidden shadow-2xl flex flex-col"
           >
              {/* Architecture Diagram */}
              <div className="bg-white/5 p-6 border-b border-white/10 flex items-center justify-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold text-sm border border-pink-500/30">Figma</div>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest">Source</span>
                </div>
                
                <ArrowRight className="w-6 h-6 text-white/20" />
                
                <div className="flex flex-col items-center gap-2 relative">
                  <div className="w-14 h-14 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] border border-blue-500/50">
                    <FileJson className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] text-blue-400 uppercase tracking-widest bg-blue-500/10 px-2 py-0.5 rounded-full absolute -bottom-6 whitespace-nowrap">DTCG Standard</span>
                </div>
                
                <ArrowRight className="w-6 h-6 text-white/20" />
                
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-fhgr-petrol/20 text-fhgr-petrol-light flex items-center justify-center font-bold text-sm border border-fhgr-petrol/30">Code</div>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest">Target</span>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="p-6 bg-black/50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-white/40">tokens.json (W3C Format)</span>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
                  </div>
                </div>
                <pre className="text-sm font-mono text-white/70 overflow-x-auto leading-relaxed">
<code dangerouslySetInnerHTML={{__html: `{
  <span class="text-purple-400">"color"</span>: {
    <span class="text-purple-400">"primary"</span>: {
      <span class="text-fhgr-petrol-light">"$value"</span>: <span class="text-yellow-300">"#3B82F6"</span>,
      <span class="text-fhgr-petrol-light">"$type"</span>: <span class="text-yellow-300">"color"</span>,
      <span class="text-fhgr-petrol-light">"$description"</span>: <span class="text-yellow-300">"Main brand color"</span>
    }
  }
}`}} />
                </pre>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-[11px] text-white/40 font-mono">Die entscheidende Innovation: Meta-Daten wie <strong className="text-fhgr-petrol-light">$type</strong> und <strong className="text-fhgr-petrol-light">$value</strong> sind nun ein weltweiter JSON-Standard, den jedes Tool exakt gleich verarbeitet.</p>
                </div>
              </div>
              
           </motion.div>
        </div>

      </div>
    </SlideLayout>
  )
}
