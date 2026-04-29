import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import { Palette, Feather, Zap } from 'lucide-react'

export default function StackTailwindSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16 items-center">
        
        {/* Left */}
        <div className="flex-1 w-full space-y-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Under the Hood · Styling</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Tailwind CSS</h2>
            <p className="text-white/50 leading-relaxed max-w-lg mb-6">
              Tailwind CSS repräsentiert einen Paradigmenwechsel im modernen Frontend-Design. Anstatt semantische Klassen in externen Stylesheets zu definieren, wird das Design über "Utility"-Klassen direkt im HTML-Markup komponiert.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
             <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="bg-white/5 p-4 rounded-xl border border-white/10">
                <Palette className="w-5 h-5 text-fhgr-petrol-light mb-3" />
                <h4 className="text-white font-semibold mb-1">Kein Context-Switch</h4>
                <p className="text-xs text-white/50">HTML Struktur und Design-Tokens bilden eine Einheit. Niemand muss mehr Dateien wechseln.</p>
             </motion.div>
             <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="bg-white/5 p-4 rounded-xl border border-white/10">
                <Zap className="w-5 h-5 text-yellow-400 mb-3" />
                <h4 className="text-white font-semibold mb-1">Synergie mit Generativer KI</h4>
                <p className="text-xs text-white/50">Da das Design als deterministischer Code-String im HTML vorliegt, können LLMs visuelle Strukturen weitaus konsistenter generieren als bei fragmentiertem CSS.</p>
             </motion.div>
             <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.3}} className="sm:col-span-2 bg-white/5 p-4 rounded-xl border border-white/10">
                <Feather className="w-5 h-5 text-blue-400 mb-3" />
                <h4 className="text-white font-semibold mb-1">Standardisierte Tokens</h4>
                <p className="text-xs text-white/50">Statt `margin: 17px` gibt es `m-4` (16px). Dadurch entsteht automatisch ein harmonisches, konsistentes Spacing/Typografie-System analog zu Figma Auto-Layout.</p>
             </motion.div>
          </div>

          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="pt-2 flex flex-wrap gap-3">
             <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="text-xs text-fhgr-petrol-light hover:text-white flex items-center gap-1.5 bg-fhgr-petrol/20 px-3 py-1.5 rounded-full border border-fhgr-petrol/30 transition-colors">
               <Palette className="w-3 h-3" /> Tailwind CSS Docs
             </a>
             <a href="https://play.tailwindcss.com/" target="_blank" rel="noreferrer" className="text-xs text-white/60 hover:text-white flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 transition-colors">
               Tailwind Play (Sandbox)
             </a>
          </motion.div>
        </div>

        {/* Right */}
        <div className="flex-1 w-full flex items-center justify-center">
           <motion.div 
             initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.4}}
             className="w-full max-w-sm"
           >
              {/* Box Preview */}
               <div className="p-8 mb-4 bg-[#060F1A] border-2 border-dashed border-white/20 rounded-2xl flex justify-center items-center">
                 <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
                   Click Me
                 </button>
               </div>

              {/* Code */}
              <div className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/10 shadow-2xl flex flex-col font-mono text-sm">
                <div className="bg-white/5 px-4 py-2 border-b border-white/5 text-xs text-white/40">vs. klassisches CSS</div>
                <div className="p-4 text-white/80 leading-loose break-words">
                  &lt;button <span className="text-blue-300">className</span>=<span className="text-green-300">"px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg transition-all transform hover:-translate-y-1"</span>&gt;<br/>
                  {'  '}Click Me<br/>
                  &lt;/button&gt;
                </div>
              </div>
           </motion.div>
        </div>

      </div>
    </SlideLayout>
  )
}
