import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import { Copy, Wand2, Blocks, Search, Calendar, Settings } from 'lucide-react'

export default function StackShadcnSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16 items-center">
        
        {/* Left */}
        <div className="flex-1 w-full space-y-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Under the Hood · Components</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">shadcn/ui</h2>
            <p className="text-white/50 leading-relaxed mb-6">
              Eine derzeit stark adoptierte Architektur in der UI-Entwicklung. shadcn/ui ist keine klassische Library (Dependency), sondern eine Pattern-Kollektion, bei der standardisierter Code <strong className="text-fhgr-petrol-light">physisch</strong> in die Codebasis integriert wird.
            </p>
          </motion.div>

          <div className="space-y-4 max-w-lg">
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.1}} className="bg-black/30 p-4 rounded-xl border border-white/10 flex gap-4 items-start">
                <Blocks className="w-6 h-6 text-white shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Ownership</h4>
                  <p className="text-sm text-white/50">Weil die Komponente (z.B. Button.tsx) direkt in eurem `components/ui` Ordner landet, gehört sie euch. Ihr könnt sie beliebig anpassen.</p>
                </div>
             </motion.div>
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.2}} className="bg-black/30 p-4 rounded-xl border border-white/10 flex gap-4 items-start">
                <Wand2 className="w-6 h-6 text-fhgr-petrol-light shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Standard für KI-Codegenerierung</h4>
                  <p className="text-sm text-white/50">Nahezu alle modernen AI-App-Generatoren (v0, Lovable) verwenden shadcn als Grundbaustein, weil es unendlich skalierbar und extrem gut in Tailwind geschrieben ist.</p>
                </div>
             </motion.div>
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.3}} className="bg-purple-900/20 p-4 rounded-xl border border-purple-500/30 flex gap-4 items-start">
                <Copy className="w-6 h-6 text-purple-400 shrink-0" />
                <div>
                  <h4 className="text-purple-400 font-semibold mb-1">Copy & Paste</h4>
                  <p className="text-sm text-white/50 font-mono">npx shadcn-ui@latest add button</p>
                </div>
             </motion.div>
          </div>

          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="pt-2 flex flex-wrap gap-3">
             <a href="https://ui.shadcn.com/" target="_blank" rel="noreferrer" className="text-xs text-white hover:text-white flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/20 transition-colors">
               <Blocks className="w-3 h-3" /> shadcn/ui Component Gallery
             </a>
          </motion.div>
        </div>

        {/* Right */}
        <div className="flex-1 w-full flex items-center justify-center">
           <motion.div 
             initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.4}}
             className="w-full max-w-sm flex flex-col gap-4"
           >
              {/* Command Menu Mockup */}
              <div className="bg-[#09090b] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-3 px-3 py-3 border-b border-white/10">
                  <Search className="w-4 h-4 text-white/40" />
                  <span className="text-sm text-white/40">Type a command or search...</span>
                </div>
                <div className="p-2 space-y-1">
                  <div className="text-[10px] uppercase font-semibold text-white/30 px-2 py-1 tracking-wider">Suggestions</div>
                  <div className="flex items-center gap-2 px-2 py-1.5 bg-white/10 rounded-md">
                    <Calendar className="w-4 h-4 text-white/90" />
                    <span className="text-sm text-white/90">Calendar</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-white/5 rounded-md transition-colors">
                    <Settings className="w-4 h-4 text-white/50" />
                    <span className="text-sm text-white/50">Settings</span>
                  </div>
                </div>
              </div>

              {/* Date Picker Mockup */}
              <div className="bg-[#09090b] border border-white/10 rounded-xl p-4 shadow-2xl">
                <div className="text-[10px] uppercase font-semibold text-white/30 mb-2 tracking-wider">Date Picker</div>
                <div className="flex items-center justify-between border border-white/10 hover:border-white/20 bg-white/5 rounded-md px-3 py-2 cursor-pointer transition-colors">
                  <span className="text-sm text-white/50">Pick a date...</span>
                  <Calendar className="w-4 h-4 text-white/40" />
                </div>
              </div>
           </motion.div>
        </div>

      </div>
    </SlideLayout>
  )
}
