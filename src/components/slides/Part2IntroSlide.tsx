import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import { Compass, Workflow, Sparkles } from 'lucide-react'

export default function Part2IntroSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16 items-center">
        
        {/* Left Column: Context & Mindset */}
        <div className="flex-1 w-full space-y-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Tech für Designer · Part 2</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">The Modern Stack</h2>
            <p className="text-white/60 leading-relaxed max-w-lg mb-6">
              Willkommen bei der <strong>Bestandsaufnahme</strong> der modernen Web-Architektur. Das Ökosystem entwickelt sich rasant, doch es kristallisieren sich klare Branchenstandards heraus, die das Fundament für heutige KI-Codierung (Vibe Coding) bilden.
            </p>
          </motion.div>

          <div className="space-y-4 max-w-lg">
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.1}} className="bg-white/5 p-4 rounded-xl border border-white/10 flex gap-4 items-start">
                <Compass className="w-5 h-5 text-fhgr-petrol-light shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Eine Momentaufnahme</h4>
                  <p className="text-sm text-white/50">Was heute Standard ist, kann morgen obsolet sein. Wir betrachten daher nicht das "Ende der Geschichte", sondern das aktuell mächtigste Paradigma für skalierbare Interfaces.</p>
                </div>
             </motion.div>
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.2}} className="bg-white/5 p-4 rounded-xl border border-white/10 flex gap-4 items-start">
                <Workflow className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Warum dieses Deep Dive?</h4>
                  <p className="text-sm text-white/50">Um LLMs (wie Copilot oder Cursor) wie ein Senior Engineer steuern zu können, müsst ihr tiefgreifend verstehen, <em>wie</em> und <em>woraus</em> sie eine Architektur aufbauen.</p>
                </div>
             </motion.div>
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.3}} className="bg-green-900/10 p-4 rounded-xl border border-green-500/20 flex gap-4 items-start">
                <Sparkles className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-green-400 font-semibold mb-1">Meta-Fact: Diese Webseite</h4>
                  <p className="text-sm text-white/50">Kleines Easter-Egg: Exakt die Präsentation, die ihr hier gerade vor Augen habt, wurde zu 100% mit exakt diesem "Modern Stack" gebaut (React, Tailwind, Framer).</p>
                </div>
             </motion.div>
          </div>
        </div>

        {/* Right Column: Visualizing the Stack */}
        <div className="flex-1 w-full flex items-center justify-center">
           <motion.div 
             initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.3}}
             className="w-full max-w-sm rounded-2xl bg-[#0D1117] border border-white/10 p-6 shadow-2xl"
           >
              <h3 className="text-center font-mono text-xs uppercase tracking-widest text-white/40 mb-6">Curriculum Preview</h3>
              
              <div className="space-y-3 relative">
                {/* Connecting Line */}
                <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-yellow-500/20 z-0"></div>

                {[
                  { name: 'React 19 Core', type: 'Framework · Logic', color: 'bg-blue-500' },
                  { name: 'Tailwind CSS', type: 'Styling · Tokens', color: 'bg-teal-400' },
                  { name: 'shadcn/ui', type: 'Components', color: 'bg-white' },
                  { name: 'TypeScript', type: 'Contracts', color: 'bg-blue-600' },
                  { name: 'Framer Motion', type: 'Physics · Animation', color: 'bg-pink-500' },
                  { name: 'Vite Engine', type: 'Build · Server', color: 'bg-yellow-400' },
                ].map((item, i) => (
                  <motion.div 
                    key={item.name}
                    initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay: 0.4 + (i * 0.1)}}
                    className="flex items-center gap-4 relative z-10 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-default"
                  >
                    <div className={`w-3 h-3 rounded-full ${item.color} shadow-[0_0_10px_currentColor] ml-4`}></div>
                    <div>
                      <div className="text-white font-medium text-sm">{item.name}</div>
                      <div className="text-white/40 text-[10px] uppercase font-mono tracking-wider">{item.type}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
           </motion.div>
        </div>

      </div>
    </SlideLayout>
  )
}
