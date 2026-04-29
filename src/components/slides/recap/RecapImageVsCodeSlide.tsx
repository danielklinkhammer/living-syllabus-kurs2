import { motion } from 'framer-motion'
import SlideLayout from '../../layout/SlideLayout'
import { Image as ImageIcon, Code2, Replace, BrainCircuit } from 'lucide-react'

export default function RecapImageVsCodeSlide() {
  return (
    <SlideLayout>
      <div className="w-full flex flex-col h-full justify-start py-6">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-6">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-2">Visuelle Intelligenz</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-3 tracking-tight">Explorations-Pfade: Image vs. Code</h2>
          <p className="text-lg text-white/50 leading-relaxed max-w-4xl">
            In der Konzeptionsphase koexistieren zwei Ansätze der KI-Generierung. Wir wechseln ständig zwischen dem kreativen "Look & Feel" (Pixel) und der systematischen Struktur (Code).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full flex-1 min-h-0">
          {/* Left: Image Prompting */}
          <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay: 0.1}} className="bg-black/40 border border-white/10 rounded-2xl p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-pink-500/20 border border-pink-500/30 rounded-xl flex items-center justify-center text-pink-400">
                <ImageIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Text ➔ Image</h3>
                <span className="text-[10px] uppercase font-mono tracking-widest text-white/40">Visuelle Exploration</span>
              </div>
            </div>
            
            <p className="text-sm text-white/60 mb-6 leading-relaxed flex-1">
              Die rasante Exploration von Ästhetik, Stilen und Anordnungen ohne jegliche technische Hürden. Die KI (z.B. Nanobanana) generiert extrem hochauflösende "High-Fidelity" Inspirationen.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-xs font-bold text-white mb-1 block">Stärken</span>
                <span className="text-xs text-white/50 leading-relaxed">Perfekt für Moodboards, Hero-Images, Visuals (Glassmorphism, Dark Web) und komplett freie Ideation.</span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-xs font-bold text-white mb-1 block">Schwächen</span>
                <span className="text-xs text-white/50 leading-relaxed">Keine Interaktivität, fixiertes Raster, Text innerhalb des Bildes oft inkorrekt ("Lorem Ipsum"-Vibes).</span>
              </div>
            </div>

            <div className="flex items-center gap-2 border-t border-white/10 pt-4">
              <span className="text-[10px] uppercase font-mono text-white/30">Pioneers:</span>
              <span className="bg-pink-500/10 text-pink-400 border border-pink-500/20 px-2 py-0.5 rounded text-[10px] font-bold">Midjourney</span>
              <span className="bg-pink-500/10 text-pink-400 border border-pink-500/20 px-2 py-0.5 rounded text-[10px] font-bold">Nanobanana</span>
              <span className="bg-pink-500/10 text-pink-400 border border-pink-500/20 px-2 py-0.5 rounded text-[10px] font-bold">DALL-E 3</span>
            </div>
          </motion.div>

          {/* Right: Code Prompting */}
          <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay: 0.2}} className="bg-gradient-to-br from-fhgr-petrol/10 to-black/40 border border-fhgr-petrol/20 rounded-2xl p-6 flex flex-col relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-10 h-10 bg-fhgr-petrol-light/20 border border-fhgr-petrol-light/30 rounded-xl flex items-center justify-center text-fhgr-petrol-light">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Text ➔ Code</h3>
                <span className="text-[10px] uppercase font-mono tracking-widest text-fhgr-petrol-light">Strukturelle Generierung</span>
              </div>
            </div>

            <p className="text-sm text-white/60 mb-6 leading-relaxed relative z-10 flex-1">
              "What you see is what you build". Die Generierung echter Komponenten und App-Logik direkt im Code für nahtlose Iteration und User Testing.
            </p>

            <div className="space-y-3 mb-6 relative z-10">
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-xs font-bold text-white mb-1 block">Stärken</span>
                <span className="text-xs text-white/50 leading-relaxed">Absolute Interaktivität, responsive, direkte Ausleitung in React/HTML/Tailwind für Entwickler.</span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5 relative">
                <div className="absolute top-2 right-2 text-[10px] bg-red-500/20 text-red-400 px-1.5 rounded font-bold border border-red-500/30">! Bias Alert</div>
                <span className="text-xs font-bold text-white mb-1 block">Der "Model Bias"</span>
                <span className="text-xs text-white/50 leading-relaxed pl-1 border-l-2 border-red-400/50">Gemini = Google Material/Clean <br/>v0.dev = Vercel Bento-Grid / Tailwind-Standard</span>
              </div>
            </div>

            <div className="flex items-center gap-2 border-t border-fhgr-petrol/20 pt-4 relative z-10">
              <span className="text-[10px] uppercase font-mono text-white/30">Pioneers:</span>
              <span className="bg-fhgr-petrol/20 text-fhgr-petrol-light border border-fhgr-petrol/30 px-2 py-0.5 rounded text-[10px] font-bold">v0.dev</span>
              <span className="bg-fhgr-petrol/20 text-fhgr-petrol-light border border-fhgr-petrol/30 px-2 py-0.5 rounded text-[10px] font-bold">Lovable</span>
              <span className="bg-fhgr-petrol/20 text-fhgr-petrol-light border border-fhgr-petrol/30 px-2 py-0.5 rounded text-[10px] font-bold">Figma Make</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom: The Workflow / Reasoning bridge */}
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.3}} className="mt-4 bg-[#0b111a] border border-white/10 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-4 flex-1">
             <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
               <BrainCircuit className="w-6 h-6 text-purple-400"/>
             </div>
             <div>
               <h4 className="text-sm font-bold text-white mb-1">Reasoning vor Prompting</h4>
               <p className="text-xs text-white/50 leading-relaxed">Lass ein Deep-Thinking Modell (z.B. o1) den Aufbau logisch vorplanen ("Welche KPIs brauchen wir?"), bevor du den finalen Design-Prompt sendest.</p>
             </div>
          </div>
          
          <div className="h-full w-px bg-white/10 hidden md:block border-l border-dashed border-white/20" />

          <div className="flex items-center gap-4 flex-1">
             <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
               <Replace className="w-6 h-6 text-orange-400"/>
             </div>
             <div>
               <h4 className="text-sm font-bold text-white mb-1">KI Roundtrip (z.B. HTML-to-Figma)</h4>
               <p className="text-xs text-white/50 leading-relaxed">Generiere die Struktur via Code-KI (v0) im Browser und parse sie als editierbare Vektor-Layer zurück in Figma für das Finetuning der letzten Pixel.</p>
             </div>
          </div>
        </motion.div>

      </div>
    </SlideLayout>
  )
}
