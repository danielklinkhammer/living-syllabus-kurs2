import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import { TerminalSquare, RefreshCw, Box, Zap } from 'lucide-react'

export default function StackLocalServerSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16 items-center">
        
        {/* Left */}
        <div className="flex-1 w-full space-y-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Under the Hood · Execution</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Vite Build Engine</h2>
            <p className="text-white/50 leading-relaxed mb-6">
              Im Gegensatz zu früher reicht es nicht mehr, eine <code className="bg-white/10 px-1.5 py-0.5 rounded text-white/70">index.html</code> per Doppelklick zu öffnen. Moderne Full-Stack Projekte müssen iterativ kompiliert und von einem lokalen Server bereitgestellt werden, bevor sie visuell laufen.
            </p>
          </motion.div>

          <div className="space-y-4">
             {/* npm install */}
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.1}} className="bg-black/30 p-4 rounded-xl border border-white/5 flex gap-4 items-start">
                <Box className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold mb-1">1. Dependencies Installieren</h4>
                  <code className="text-xs font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded border border-white/10 mb-2 inline-block">npm install</code>
                  <p className="text-xs text-white/50 mt-2">Eine App nutzt unzählige externe Bausteine (React, Framer). Da diese zu groß für GitHub sind, werden sie hiermit als "Dependencies" aus dem Netz in euren Code-Ordner heruntergeladen.</p>
                </div>
             </motion.div>
             
             {/* npm run dev */}
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.2}} className="bg-blue-900/10 p-4 rounded-xl border border-blue-500/20 flex gap-4 items-start">
                <RefreshCw className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-blue-400 font-semibold mb-1">2. Local Development Server</h4>
                  <div className="flex gap-2 items-center mb-2">
                    <code className="text-xs font-mono text-blue-300 bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/30 inline-block">npm run dev</code>
                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/60">Oft als Play-Button in IDEs integriert</span>
                  </div>
                  <p className="text-xs text-white/50">Dieser Befehl startet unter der Haube <b className="text-white">Vite</b> als lokalen Host-Server auf eurem PC (<code className="text-blue-300">localhost:5173</code>). Vite baut den Code live zusammen und pusht Änderungen beim Speichern direkt in euren Browser (Hot Reload).</p>
                </div>
             </motion.div>

             {/* npm run build */}
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.3}} className="bg-green-900/10 p-4 rounded-xl border border-green-500/20 flex gap-4 items-start">
                <TerminalSquare className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-green-400 font-semibold mb-1">3. The Production Build</h4>
                  <code className="text-xs font-mono text-green-300 bg-green-500/20 px-2 py-0.5 rounded border border-green-500/30 mb-2 inline-block">npm run build</code>
                  <p className="text-xs text-white/50 mt-2">Der Go-Live Moment. Hier agiert <b className="text-white">Vite</b> als "Compiler": Es vernichtet allen Development-Overhead und presst euren Code in winzige, statische Dateien. Nur diese werden am Ende von Cloud-Hosts ausgeliefert.</p>
                </div>
             </motion.div>
          </div>

          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="pt-2 flex flex-wrap gap-3">
             <a href="https://vitejs.dev/" target="_blank" rel="noreferrer" className="text-xs text-yellow-400 hover:text-yellow-300 flex items-center gap-1.5 bg-yellow-500/10 px-3 py-1.5 rounded-full border border-yellow-500/20 transition-colors">
               <Zap className="w-3 h-3" /> Vite Documentation
             </a>
             <a href="https://docs.npmjs.com/" target="_blank" rel="noreferrer" className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1.5 bg-red-500/10 px-3 py-1.5 rounded-full border border-red-500/20 transition-colors">
               NPM Guide
             </a>
          </motion.div>
        </div>

        {/* Right */}
        <div className="flex-1 w-full flex items-center justify-center">
           <motion.div 
             initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.4}}
             className="w-full max-w-sm rounded-xl overflow-hidden shadow-2xl relative"
           >
              {/* Terminal window mockup */}
              <div className="bg-[#1e1e1e] border-t border-x border-white/20 rounded-t-xl p-3 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 text-[8px] flex items-center justify-center text-red-900 font-bold opacity-80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 opacity-80"></div>
              </div>
              <div className="bg-[#1e1e1e] border-b border-x border-white/20 rounded-b-xl p-4 font-mono text-[11px] leading-relaxed relative">
                <div className="text-green-400">living-syllabus % npm run dev</div>
                <div className="mt-2 text-white/60">
                  &gt; living-syllabus@0.0.0 dev<br/>
                  &gt; vite
                </div>
                <div className="mt-4">
                  <span className="text-green-400 font-bold">  VITE v5.0.0</span>  <span className="text-white/40">ready in 204 ms</span>
                </div>
                <div className="mt-2">
                  <span className="text-green-400">  ➜</span>  <span className="text-white font-bold">Local:</span>   <span className="text-blue-300 hover:underline cursor-pointer">http://localhost:5173/</span><br/>
                  <span className="text-green-400">  ➜</span>  <span className="text-white/40">Network: use --host to expose</span><br/>
                  <span className="text-green-400">  ➜</span>  <span className="text-white/40">press h to show help</span>
                </div>

                <div className="mt-6 border-t border-white/10 pt-2 text-white/40 flex items-center justify-between">
                  <span>Server is running...</span>
                  <div className="flex gap-1.5 h-1.5">
                    <div className="w-1.5 bg-blue-400 opacity-50 animate-pulse"></div>
                    <div className="w-1.5 bg-blue-400 opacity-30 animate-pulse delay-75"></div>
                    <div className="w-1.5 bg-blue-400 opacity-10 animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
           </motion.div>
        </div>

      </div>
    </SlideLayout>
  )
}
