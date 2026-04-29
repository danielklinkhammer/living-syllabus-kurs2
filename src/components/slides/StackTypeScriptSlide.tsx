import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import { Braces, ShieldAlert, CheckCircle2 } from 'lucide-react'

export default function StackTypeScriptSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16 items-center">
        
        {/* Left */}
        <div className="flex-1 w-full space-y-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Under the Hood · Logic</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">TypeScript</h2>
            <p className="text-white/50 leading-relaxed mb-6">
              Komplexe Webanwendungen erfordern strukturelle Integrität. TypeScript legt sich wie ein schützendes Raster über JavaScript und erzwingt statische Typisierung zur drastischen Fehlerprävention.
            </p>
          </motion.div>

          <div className="space-y-4 max-w-lg">
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.1}} className="bg-blue-900/10 p-4 rounded-xl border border-blue-500/20 flex gap-4 items-start">
                <Braces className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-blue-400 font-semibold mb-1">Strikte Verträge (Types)</h4>
                  <p className="text-sm text-white/50">TypeScript definiert exakte Verträge dafür, wie Daten aussehen müssen (z.B. "Ein Button MUSS ein Label als Text haben"). Das verhindert, dass das System zur Laufzeit crasht.</p>
                </div>
             </motion.div>
             
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.2}} className="bg-green-900/10 p-4 rounded-xl border border-green-500/20 flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-green-400 font-semibold mb-1">Fundament für KI-Codierung</h4>
                  <p className="text-sm text-white/50">Für LLMs wie Copilot oder Claude ist TypeScript existenziell wichtig. Durch die strikten Typen wird der Handlungsspielraum der KI radikal eingegrenzt – sie halluziniert seltener fehlerhaften Code.</p>
                </div>
             </motion.div>
          </div>

          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="pt-2 flex flex-wrap gap-3">
             <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1.5 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20 transition-colors">
               <Braces className="w-3 h-3" /> TypeScript Handbook
             </a>
             <a href="https://www.typescriptlang.org/play" target="_blank" rel="noreferrer" className="text-xs text-white/60 hover:text-white flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 transition-colors">
               TS Playground
             </a>
          </motion.div>
        </div>

        {/* Right */}
        <div className="flex-1 w-full flex items-center justify-center">
           <motion.div 
             initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.3}}
             className="w-full max-w-md bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl relative border border-white/10"
           >
              {/* Fake IDE Header */}
              <div className="bg-[#2d2d2d] border-b border-white/10 px-4 py-2 flex items-center gap-4 text-xs font-mono text-white/50">
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div>user.tsx</div>
              </div>
              
              {/* Code */}
              <div className="p-5 font-mono text-[11px] leading-loosely whitespace-pre">
                <span className="text-blue-400">type</span> <span className="text-yellow-200">User</span> = {'{'}<br/>
                {'  '}id: <span className="text-green-300">number</span>;<br/>
                {'  '}name: <span className="text-green-300">string</span>;<br/>
                {'  '}isAdmin?: <span className="text-green-300">boolean</span>;<br/>
                {'}'}<br/>
                <br/>
                <span className="text-blue-400">const</span> updateProfile = (user: <span className="text-yellow-200">User</span>) <span className="text-blue-400">=&gt;</span> {'{'}<br/>
                {'  '}console.log(user.<span className="border-b-2 border-red-500/50 text-red-300 relative group cursor-pointer inline-block">firstName</span>);<br/>
                
                {/* Simulated TS Error Tooltip */}
                <span className="absolute mt-6 ml-4 bg-red-950/90 border border-red-500/50 text-red-200 p-2 rounded text-[10px] shadow-xl z-10 w-64 whitespace-normal hidden group-hover:block pointer-events-none">
                  <ShieldAlert className="w-3 h-3 inline mr-1 -mt-0.5" />
                  Property 'firstName' does not exist on type 'User'. Did you mean 'name'?
                </span>

                <br/>
                {'}'}<br/>
                <br/>
                <span className="text-white/40 italic">// TypeScript fängt den Bug ab,<br/>// BEVOR das Programm im Browser läuft.</span>
              </div>
           </motion.div>
        </div>

      </div>
    </SlideLayout>
  )
}
