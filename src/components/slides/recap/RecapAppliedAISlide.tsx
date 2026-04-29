import { motion } from 'framer-motion'
import SlideLayout from '../../layout/SlideLayout'
import { AppWindow, Layers, LayoutPanelLeft, MessagesSquare, Lightbulb, Box } from 'lucide-react'

export default function RecapAppliedAISlide() {
  return (
    <SlideLayout>
      <div className="w-full flex flex-col h-full justify-start py-6">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-8">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-2">Vom Modell zum Produkt</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-3 tracking-tight">AI-Native Applications</h2>
          <p className="text-lg text-white/50 leading-relaxed max-w-4xl mb-4">
            Ein Foundation Model allein ist noch kein Produkt. Die wahre UX-Challenge ist es, rohe KI-Modelle unsichtbar in <strong className="text-white">Applied AI Interfaces</strong> einzubetten. Diese Tools sind keine simplen Chatfenster, sondern UI-Layer für ganz spezifische Use-Cases.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#1da1f2]/10 border border-[#1da1f2]/20 px-3 py-1.5 rounded-lg text-xs text-[#1da1f2] font-mono">
            <span>ℹ️</span> Die gezeigten Beispiel-Apps kennt ihr bereits aus Block 1.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full flex-1">
          
          {/* Column 1: Knowledge & Synthesis */}
          <motion.div 
            initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1}}
            className="bg-black/40 border border-white/10 rounded-2xl p-6 flex flex-col relative overflow-hidden group hover:border-[#1da1f2]/30 transition-colors"
          >
             <div className="w-12 h-12 bg-[#1da1f2]/20 border border-[#1da1f2]/30 rounded-xl flex items-center justify-center text-[#1da1f2] mb-5">
               <Lightbulb className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Wissen & Synthese</h3>
             <p className="text-sm text-white/50 leading-relaxed mb-6 flex-1">
               Das Modell analysiert komplexe Quellen und wird über ein strukturiertes UI als "Study-Buddy" bereitgestellt.
             </p>
             <div className="space-y-4 border-t border-white/10 pt-4 mt-auto">
               <div>
                 <span className="text-xs uppercase font-mono text-white/30 block mb-1">Das UI / Wrapper</span>
                 <span className="text-xs text-white/70">Audio-Podcast, dynamische Zettelkästen, Timelines.</span>
               </div>
               <a href="https://notebooklm.google.com/" target="_blank" rel="noopener noreferrer" className="bg-[#1da1f2]/10 hover:bg-[#1da1f2]/20 transition-colors p-3 rounded-lg border border-[#1da1f2]/20 flex items-start gap-2 cursor-pointer">
                 <AppWindow className="w-4 h-4 text-[#1da1f2] mt-0.5 shrink-0" />
                 <span className="text-sm font-bold text-[#1da1f2] leading-tight">NotebookLM</span>
               </a>
             </div>
          </motion.div>

          {/* Column 2: UI & Code Generation */}
          <motion.div 
            initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.2}}
            className="bg-black/40 border border-white/10 rounded-2xl p-6 flex flex-col relative overflow-hidden group hover:border-fhgr-petrol-light/30 transition-colors"
          >
             <div className="w-12 h-12 bg-fhgr-petrol-light/20 border border-fhgr-petrol-light/30 rounded-xl flex items-center justify-center text-fhgr-petrol-light mb-5">
               <LayoutPanelLeft className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Frontend & Layouts</h3>
             <p className="text-sm text-white/50 leading-relaxed mb-6 flex-1">
               Das Modell übersetzt instruktionale Texte direkt in strukturierte Komponenten. Ein Paradigmenwechsel vom Zeichnen zum Diktieren.
             </p>
             <div className="space-y-4 border-t border-white/10 pt-4 mt-auto">
               <div>
                 <span className="text-xs uppercase font-mono text-white/30 block mb-1">Das UI / Wrapper</span>
                 <span className="text-xs text-white/70">Interaktive Preview-Canvas, Node-Trees, Split-Views.</span>
               </div>
               <div className="flex flex-col gap-2">
                 <a href="https://www.figma.com/ai/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-fhgr-petrol-light/10 hover:bg-fhgr-petrol-light/20 transition-colors p-3 rounded-lg border border-fhgr-petrol-light/20 flex items-start gap-2 cursor-pointer">
                   <Layers className="w-4 h-4 text-fhgr-petrol-light mt-0.5 shrink-0" />
                   <span className="text-sm font-bold text-fhgr-petrol-light leading-tight">Figma Make</span>
                 </a>
                 <a href="https://labs.google/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-fhgr-petrol-light/10 hover:bg-fhgr-petrol-light/20 transition-colors p-3 rounded-lg border border-fhgr-petrol-light/20 flex items-start gap-2 cursor-pointer">
                   <Box className="w-4 h-4 text-fhgr-petrol-light mt-0.5 shrink-0" />
                   <span className="text-sm font-bold text-fhgr-petrol-light leading-tight">Google Stitch / Labs</span>
                 </a>
               </div>
             </div>
          </motion.div>

          {/* Column 3: Visual Creation */}
          <motion.div 
            initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.3}}
            className="bg-black/40 border border-white/10 rounded-2xl p-6 flex flex-col relative overflow-hidden group hover:border-pink-500/30 transition-colors"
          >
             <div className="w-12 h-12 bg-pink-500/20 border border-pink-500/30 rounded-xl flex items-center justify-center text-pink-400 mb-5">
               <MessagesSquare className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Visuelle Kreation</h3>
             <p className="text-sm text-white/50 leading-relaxed mb-6 flex-1">
               Generative KI, die Pixel-Muster halluziniert und dabei extrem hohes technologisches Design-Wissen emuliert.
             </p>
             <div className="space-y-4 border-t border-white/10 pt-4 mt-auto">
               <div>
                 <span className="text-xs uppercase font-mono text-white/30 block mb-1">Das UI / Wrapper</span>
                 <span className="text-xs text-white/70">Moodboard-Grids, Infinite Scroll, Feintuning-Slider.</span>
               </div>
               <div className="flex flex-col gap-2">
                 <a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer" className="bg-pink-500/10 hover:bg-pink-500/20 transition-colors p-2.5 rounded-lg border border-pink-500/20 flex items-center gap-2 cursor-pointer">
                   <AppWindow className="w-4 h-4 text-pink-400 shrink-0" />
                   <span className="text-sm font-bold text-pink-400 leading-tight">Midjourney (Web)</span>
                 </a>
                 <a href="https://labs.google/" target="_blank" rel="noopener noreferrer" className="bg-pink-500/10 hover:bg-pink-500/20 transition-colors p-2.5 rounded-lg border border-pink-500/20 flex items-center gap-2 cursor-pointer">
                   <AppWindow className="w-4 h-4 text-pink-400 shrink-0" />
                   <span className="text-sm font-bold text-pink-400 leading-tight">Mixboard (Labs)</span>
                 </a>
               </div>
             </div>
          </motion.div>

        </div>
      </div>
    </SlideLayout>
  )
}
