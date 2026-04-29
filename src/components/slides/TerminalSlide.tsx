import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'

export default function TerminalSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16 items-center">
        
        {/* Left: Info */}
        <div className="flex-1 w-full space-y-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Tech für Designer · Step 2</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Das Terminal & CLI LLMs</h2>
            <p className="text-white/50 leading-relaxed mb-6">
              Das Terminal (Kommandozeile) ist keine "Hacker"-Magie, sondern die direkteste Form der Kommunikation mit dem Betriebssystem. Anstatt visuell Ordner zu klicken, nutzt man Befehle.
            </p>
          </motion.div>

          <motion.div 
            initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.1}}
            className="space-y-4 bg-[#0A1624] border border-white/5 rounded-xl p-5"
          >
            <h3 className="font-bold text-lg border-b border-white/5 pb-2 mb-3">Vorteile von KI in der Command Line</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                 <span className="text-green-400">⚡️</span>
                 <div><strong className="text-white">Direkte Ausführung:</strong> KI-Modelle wie Gemini oder Codex können im Terminal auf Systemebene agieren und z.B. direkt Skripte ausführen oder Server starten.</div>
              </li>
              <li className="flex gap-3">
                 <span className="text-green-400">⚡️</span>
                 <div><strong className="text-white">Workflow Automation:</strong> Repetitive Aufgaben wie "Lösche alle Bilder, verkleinere sie und konvertiere sie zu WebP" löst ein CLI-LLM in Sekunden.</div>
              </li>
              <li className="flex gap-3">
                 <span className="text-green-400">⚡️</span>
                 <div><strong className="text-white">System-Kontext:</strong> Die KI hat direkten Zugriff auf den Dateibaum (`ls`, `cat`) und kann Dateiinhalte analysieren, bevor Code modifiziert wird.</div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Right: Terminal */}
        <div className="flex-1 w-full flex items-center justify-center">
          <motion.div 
             initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.2}}
             className="w-full max-w-lg bg-[#0E1117] border border-fhgr-petrol/30 shadow-2xl rounded-xl overflow-hidden font-mono text-[13px]"
           >
             <div className="px-4 py-2.5 bg-black/50 border-b border-white/5 flex items-center gap-2">
               <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
               <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
               <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
               <span className="ml-2 text-white/30 text-xs">zsh - gemini-cli</span>
             </div>
             
             <div className="p-5 text-white/80 space-y-4 h-[300px] overflow-hidden">
               {/* Step 1 Prompt */}
               <div>
                 <div className="flex">
                   <span className="text-green-400 mr-2">~/project $</span> 
                   <span className="text-white font-bold break-all">gemini "Passe das Farbschema auf Darkmode an und starte den Server."</span>
                 </div>
               </div>

               {/* Step 2 AI Output */}
               <motion.div 
                  initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 1.5}}
                  className="pt-2 text-blue-300"
               >
                 [✨ Gemini CLI Agent]<br/>
                 <span className="text-white/40 italic mt-1 block">Analyzing project structure... Found tailwind.config.js and src/index.css</span>
               </motion.div>

                {/* Step 3 Response */}
                <motion.div 
                  initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 3.0}}
                  className="pt-2 text-fhgr-petrol-light"
               >
                 &gt; Applying edits to tailwind.config.js...<br/>
                 &gt; Running terminal command: npm run dev<br/>
                 <br/>
                 <span className="text-green-400 mt-2 block">VITE v5.0.0 ready in 150ms<br/>➜ Local: http://localhost:5173/</span>
               </motion.div>

             </div>
           </motion.div>
        </div>

      </div>
    </SlideLayout>
  )
}
