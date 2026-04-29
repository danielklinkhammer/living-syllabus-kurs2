import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import { Code2, Layers } from 'lucide-react'

export default function StackReactViteSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16 items-center">
        
        {/* Left */}
        <div className="flex-1 w-full space-y-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Under the Hood · Framework</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">React 19</h2>
            <p className="text-white/50 leading-relaxed max-w-lg mb-6">
              Das Ökosystem moderner Web-Applikationen ist hochgradig ausdifferenziert. Ein dominantes Paradigma – insbesondere im Kontext von KI-Codegeneratoren – ist der komponentenbasierte Ansatz. Eine der derzeit prägendsten Libraries hierfür ist <strong>React</strong>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
             <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="bg-[#0A1624] p-4 rounded-xl border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><Code2 className="w-4 h-4 text-blue-400"/> Components</h4>
                <p className="text-[13px] text-white/60 leading-snug">Jeder UI-Teil (z.B. Button) ist ein gekapselter Code-Block. Einmal definiert, ist er wie in Figma beliebig re-instanziierbar.</p>
             </motion.div>
             
             <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="bg-[#0A1624] p-4 rounded-xl border border-white/5">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><Layers className="w-4 h-4 text-purple-400"/> CSR State</h4>
                <p className="text-[13px] text-white/60 leading-snug">React "merkt" sich clientseitige Zustände (z.B. Filter=Aktiv). Bei Änderung berechnet es live nur die betroffenen Pixel neu.</p>
             </motion.div>
             
             <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.3}} className="bg-gradient-to-r from-fhgr-petrol-dark/30 to-black p-4 rounded-xl border border-fhgr-petrol/20">
                <h4 className="text-fhgr-petrol-light font-semibold mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg> 
                  RSC (Server)
                </h4>
                <p className="text-[13px] text-white/60 leading-snug">Eine architektonische Revolution: UI-Teile werden superschnell und datenbanknah direkt auf dem Server (statt im Browser) vor-gerendert.</p>
             </motion.div>
             
             <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4}} className="bg-gradient-to-r from-yellow-900/20 to-black p-4 rounded-xl border border-yellow-500/20">
                <h4 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                  JSX Syntax
                </h4>
                <p className="text-[13px] text-white/60 leading-snug">React verschmilzt HTML und JavaScript. Das Design und die Logik leben im exakt gleichen Dokument, was moderne KI-Entwicklung extrem beschleunigt.</p>
             </motion.div>
          </div>
          
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="pt-2 flex flex-wrap gap-3">
             <a href="https://react.dev" target="_blank" rel="noreferrer" className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1.5 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20 transition-colors">
               <Code2 className="w-3 h-3" /> React Documentation
             </a>
             <a href="https://react.dev/learn/thinking-in-react" target="_blank" rel="noreferrer" className="text-xs text-white/60 hover:text-white flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 transition-colors">
               Guide: Thinking in React
             </a>
          </motion.div>
        </div>

        {/* Right */}
        <div className="flex-1 w-full flex items-center justify-center">
           <motion.div 
             initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.4}}
             className="w-full max-w-lg bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/10 shadow-2xl flex flex-col font-mono text-[11px]"
           >
              <div className="bg-white/5 px-4 py-2 border-b border-white/5 text-xs text-white/40 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/50"></span>
                <span className="ml-2">CounterComponent.tsx</span>
              </div>
              <div className="p-6 overflow-x-auto text-white/70 leading-loose">
                  <span className="text-pink-400">export default function</span> <span className="text-yellow-200">Counter</span>() {'{'}<br/>
                  <br/>
                  {'  '}<span className="text-white/30 italic">{'// State Hook'}</span><br/>
                  {'  '}<span className="text-blue-400">const</span> [<span className="text-white">count</span>, <span className="text-yellow-200">setCount</span>] = <span className="text-yellow-200">useState</span>(<span className="text-orange-300">0</span>)<br/>
                  <br/>
                  {'  '}<span className="text-pink-400">return</span> (<br/>
                  {'    '}&lt;<span className="text-blue-300">button</span> <span className="text-blue-200">onClick</span>={'{'}() <span className="text-pink-400">=&gt;</span> <span className="text-yellow-200">setCount</span>(count + <span className="text-orange-300">1</span>){'}'}&gt;<br/>
                  {'      '}&lt;<span className="text-fhgr-petrol-light">Icon</span> /&gt; Clicks: {'{'}count{'}'}<br/>
                  {'    '}&lt;/<span className="text-blue-300">button</span>&gt;<br/>
                  {'  '})<br/>
                  {'}'}
              </div>
           </motion.div>
        </div>

      </div>
    </SlideLayout>
  )
}
