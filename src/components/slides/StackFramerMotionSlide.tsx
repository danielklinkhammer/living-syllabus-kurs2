import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import { Boxes, Move } from 'lucide-react'

export default function StackFramerMotionSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16 items-center">
        
        {/* Left */}
        <div className="flex-1 w-full space-y-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Under the Hood · Motion</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Framer Motion</h2>
            <p className="text-white/50 leading-relaxed mb-6">
              Ein erstklassiges Interface profitiert maßgeblich von Micro-Interaktionen. Framer Motion ist der De-Facto Standard für React und ermöglicht kinästhetisch anspruchsvolle Interface-Animationen.
            </p>
          </motion.div>

          <div className="space-y-4 max-w-lg">
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.1}} className="bg-pink-900/10 p-4 rounded-xl border border-pink-500/20 flex gap-4 items-start">
                <Boxes className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-pink-400 font-semibold mb-1">Physics-Based Animation</h4>
                  <p className="text-sm text-white/50">Im Gegensatz zu fixen CSS-Transitions (wie "linear" oder "ease-in-out") basiert Framer auf echten "Spring Physics" (Masse, Spannung, Reibung), was sich organisch und extrem hochwertig anfühlt.</p>
                </div>
             </motion.div>
             
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.2}} className="bg-purple-900/10 p-4 rounded-xl border border-purple-500/20 flex gap-4 items-start">
                <Move className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-purple-400 font-semibold mb-1">Deklarativer Syntax</h4>
                  <p className="text-sm text-white/50">Anstatt komplexe Keyframes zu berechnen, reicht es, React zu sagen, wo ein Element starten und wo es enden soll. Den Rest (Interpolation) übernimmt die Engine fließend.</p>
                </div>
             </motion.div>
          </div>

          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="pt-2 flex flex-wrap gap-3">
             <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer" className="text-xs text-pink-400 hover:text-pink-300 flex items-center gap-1.5 bg-pink-500/10 px-3 py-1.5 rounded-full border border-pink-500/20 transition-colors">
               <Boxes className="w-3 h-3" /> Framer Motion Docs
             </a>
             <a href="https://www.framer.com/motion/animation/" target="_blank" rel="noreferrer" className="text-xs text-white/60 hover:text-white flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 transition-colors">
               Animation Guide
             </a>
          </motion.div>
        </div>

        {/* Right */}
        <div className="flex-1 w-full flex flex-col items-center justify-center gap-8">
           
           <div className="w-full max-w-sm flex items-center justify-center gap-8 relative h-48 bg-[#0D1117] rounded-xl border border-white/10 overflow-hidden perspective-1000">
             <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
             
             {/* Simple Bouncing Spring Demo */}
             <motion.div 
               animate={{ y: [0, -60, 0] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
               className="w-16 h-16 bg-pink-500/20 border-2 border-pink-500/50 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.3)] backdrop-blur-md relative z-10"
             >
                <Boxes className="w-6 h-6 text-pink-300" />
             </motion.div>

             {/* Spinning Abstract Element */}
             <motion.div 
               animate={{ rotateX: 360, rotateY: 180 }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="w-16 h-16 bg-purple-500/20 border-2 border-purple-500/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.3)] backdrop-blur-md relative z-10"
             >
                <div className="w-8 h-8 rounded-full border border-purple-300/50 border-t-purple-300"></div>
             </motion.div>
           </div>

           {/* Code Snippet */}
           <motion.div 
             initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.3}}
             className="w-full max-w-sm bg-black/50 border border-white/10 rounded-lg p-4 font-mono text-[11px] text-white/70"
           >
             <span className="text-pink-400">&lt;motion.div</span><br/>
             {'  '}<span className="text-blue-300">initial</span>={'{'}{'{'} <span className="text-white">opacity:</span> <span className="text-orange-300">0</span>, <span className="text-white">scale:</span> <span className="text-orange-300">0.8</span> {'}'}{'}'}<br/>
             {'  '}<span className="text-blue-300">animate</span>={'{'}{'{'} <span className="text-white">opacity:</span> <span className="text-orange-300">1</span>, <span className="text-white">scale:</span> <span className="text-orange-300">1</span> {'}'}{'}'}<br/>
             {'  '}<span className="text-blue-300">transition</span>={'{'}{'{'} <span className="text-white">type:</span> <span className="text-green-300">"spring"</span>, <span className="text-white">stiffness:</span> <span className="text-orange-300">100</span> {'}'}{'}'}<br/>
             <span className="text-pink-400">&gt;</span><br/>
             {'  '}Hello Motion<br/>
             <span className="text-pink-400">&lt;/motion.div&gt;</span>
           </motion.div>

        </div>

      </div>
    </SlideLayout>
  )
}
