import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'

export default function IDESlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16 items-center">
        
        {/* Left: Text & Info */}
        <div className="flex-1 w-full space-y-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Tech für Designer · Step 1</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Die IDE & KI-Copilots</h2>
            <p className="text-white/50 leading-relaxed mb-6">
              Die <em>Integrated Development Environment</em> (IDE) ist eure Leinwand für Code – genau wie Figma die Leinwand für Pixel ist. Hier greifen moderne KI-Agenten nativ in den Entwicklungsprozess ein.
            </p>
          </motion.div>

          <motion.div 
            initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}}
            className="space-y-4"
          >
            <div className="p-3 bg-[#0A1624] border border-white/5 rounded-xl">
              <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer" className="text-fhgr-petrol-light font-bold mb-0.5 hover:underline flex items-center gap-1.5">Visual Studio Code + Copilot ↗</a>
              <p className="text-[13px] text-white/50 leading-snug">Der Industrie-Standard. GitHub Copilot agiert hier als Autovervollständigung (Tab) und als Chat-Assistent um Code direkt im File zu refactoren.</p>
            </div>
            
            <div className="p-3 bg-[#0A1624] border border-white/5 rounded-xl">
               <a href="https://cursor.com/" target="_blank" rel="noreferrer" className="text-blue-400 font-bold mb-0.5 hover:underline flex items-center gap-1.5">Cursor IDE ↗</a>
               <p className="text-[13px] text-white/50 leading-snug">Ein Fork von VS Code, der radikal um KI herum gebaut ist (Composer). Versteht den Projekt-Kontext und kann Code-Dateien direkt bearbeiten.</p>
            </div>

            <div className="p-3 bg-[#0A1624] border border-white/5 rounded-xl">
               <a href="https://openai.com/blog/openai-codex" target="_blank" rel="noreferrer" className="text-green-400 font-bold mb-0.5 hover:underline flex items-center gap-1.5">OpenAI Codex ↗</a>
               <p className="text-[13px] text-white/50 leading-snug">Die Engine hinter ersten Copilots. Ein mächtiges Modell, das Code extrem schnell generieren, übersetzen und als KI in Editoren integriert werden kann.</p>
            </div>

            <div className="p-3 bg-gradient-to-r from-purple-900/40 to-[#0A1624] border border-purple-500/20 rounded-xl relative">
               <span className="text-purple-400 font-bold mb-0.5 flex items-center gap-1.5">Google Anti-Gravity 🚀</span>
               <p className="text-[13px] text-white/50 leading-snug">Eine hochgradig autonome IDE (ebenfalls ein Visual Studio Code Fork). Sie assistiert nicht nur, sondern fasst als KI-Agent eigene, tiefgehende Entwicklungs-Entscheidungen.</p>
            </div>
          </motion.div>
        </div>

        {/* Right: IDE Diagram */}
        <div className="flex-1 w-full flex items-center justify-center">
          <motion.div 
            initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.3}}
            className="relative w-full aspect-square max-w-md rounded-xl border border-white/10 bg-black overflow-hidden flex flex-col p-1 gap-1 shadow-2xl"
          >
            {/* Top Bar */}
            <div className="flex items-center gap-1.5 p-2 bg-[#1A1A1A] border-b border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              <span className="mx-auto text-[10px] text-white/40 font-mono">cursor - living-syllabus</span>
            </div>

            {/* Mock IDE Layout */}
            <div className="flex flex-1 gap-1 h-full min-h-0">
              {/* Main Editor */}
              <div className="flex-1 bg-[#1A1A1A] rounded flex flex-col p-3 border border-white/5 relative overflow-hidden">
                <div className="text-[10px] text-white/30 uppercase tracking-widest font-mono mb-3">Editor</div>
                <div className="text-[11px] text-green-400 font-mono leading-loose">
                  {'// Component setup'}<br/>
                  <span className="text-fhgr-accent">export default function</span> App() {'{'}<br/>
                  &nbsp;&nbsp;<span className="text-blue-300">return</span> (<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-fhgr-petrol-light">Dashboard</span> /&gt;<br/>
                  &nbsp;&nbsp;)<br/>
                  {'}'}
                </div>
                {/* Ghost Text */}
                <div className="absolute top-[88px] left-[32px] text-[11px] text-white/20 font-mono italic">
                  {'<Layout /> // Copilot suggestion (Tab)'}
                </div>
              </div>

              {/* Chat / Copilot */}
              <div className="w-[40%] bg-blue-900/10 rounded flex flex-col p-3 border border-blue-500/20">
                <div className="text-[10px] text-blue-400 uppercase tracking-widest font-mono mb-2">Composer (Agent)</div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="text-[10px] text-white/70 bg-white/5 p-2 rounded-lg break-words">
                    Baue ein Layout für die App.
                  </div>
                  <div className="text-[10px] text-blue-200 bg-blue-500/10 p-2 rounded-lg border border-blue-500/20">
                    <div>✓ File "Layout.tsx" created</div>
                    <div>✓ Imported into App.tsx</div>
                    <div className="mt-1 flex gap-1">
                      <button className="px-1.5 py-0.5 bg-blue-500 text-white rounded text-[8px]">Accept</button>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-[10px] bg-black/40 border border-white/10 rounded p-1.5 text-white/40 w-full truncate">
                  Ask cursor...
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </SlideLayout>
  )
}
