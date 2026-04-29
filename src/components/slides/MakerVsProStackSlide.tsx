import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import { ExternalLink } from 'lucide-react'
import Card from '../ui/Card'

export default function MakerVsProStackSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center">
        
        {/* Header Block */}
        <div className="mb-12 max-w-3xl">
          <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Tech für Designer · Part 1</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Maker vs. Pro Stack</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              Die Grenze zwischen Design und Code verschwimmt. Werkzeuge lassen sich heute grob in zwei Stacks aufteilen: Vollautomatisierte Maker-Tools und orchestrierte Pro-Umgebungen.
            </p>
          </motion.div>
        </div>

        {/* Side-by-Side Flex Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start w-full max-w-5xl">
          
          {/* Maker Stack */}
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}}>
            <Card delay={0} className="w-full h-full p-6">
              <h3 className="font-bold text-white mb-2 text-xl">🛠️ Der Maker Stack</h3>
              <p className="text-[13px] text-white/50 mb-6 leading-relaxed">
                Generative "Zero-Setup" Plattformen. Ihr generiert komplette Interfaces direkt aus eurem Prompt via Chat, ohne euch um Infrastruktur oder Server kümmern zu müssen. Ideal für Ideation und schnelle Prototypen.
              </p>

              <div className="space-y-2">
                 <a href="https://v0.dev" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white/80 group-hover:text-white">v0.dev (by Vercel)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-white/60" />
                 </a>
                 <a href="https://lovable.dev" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white/80 group-hover:text-white">Lovable</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-white/60" />
                 </a>
                 <a href="https://bolt.new" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white/80 group-hover:text-white">Bolt.new (StackBlitz)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-white/60" />
                 </a>
                 <a href="https://aistudio.google.com/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white/80 group-hover:text-white">Google AI Studio</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-white/60" />
                 </a>
                 <a href="https://www.figma.com/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white/80 group-hover:text-white">Figma Make</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-white/60" />
                 </a>
              </div>
            </Card>
          </motion.div>

          {/* Professional Stack */}
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2}}>
            <Card variant="primary" delay={0} className="w-full h-full p-6">
              <h3 className="font-bold text-fhgr-petrol-light mb-2 text-xl">💻 Der Professional Stack</h3>
              <p className="text-[13px] text-white/50 mb-6 leading-relaxed">
                Lokale Control-Center, Cloud-Infrastruktur und Kommandozeilen. Hier agiert die KI als orchestraler Pair-Programmer für komplexe Projekte, reale Backends und tiefe Skalierung.
              </p>

              <div className="space-y-2">
                 <a href="https://cursor.com/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-fhgr-petrol/20 border border-fhgr-petrol/10 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-fhgr-petrol-light group-hover:text-white">Cursor IDE</span>
                    <ExternalLink className="w-3.5 h-3.5 text-fhgr-petrol/50 group-hover:text-fhgr-petrol-light" />
                 </a>
                 <a href="https://idx.dev/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-fhgr-petrol/20 border border-fhgr-petrol/10 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-fhgr-petrol-light group-hover:text-white">Google Anti-Gravity (IDX)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-fhgr-petrol/50 group-hover:text-fhgr-petrol-light" />
                 </a>
                 <a href="https://github.com/features/codespaces" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-fhgr-petrol/20 border border-fhgr-petrol/10 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-fhgr-petrol-light group-hover:text-white">GitHub Codespaces</span>
                    <ExternalLink className="w-3.5 h-3.5 text-fhgr-petrol/50 group-hover:text-fhgr-petrol-light" />
                 </a>
                 <a href="https://firebase.google.com/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-fhgr-petrol/20 border border-fhgr-petrol/10 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-fhgr-petrol-light group-hover:text-white">Google Firebase</span>
                    <ExternalLink className="w-3.5 h-3.5 text-fhgr-petrol/50 group-hover:text-fhgr-petrol-light" />
                 </a>
                 <a href="https://github.com/features/copilot" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-fhgr-petrol/20 border border-fhgr-petrol/10 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-fhgr-petrol-light group-hover:text-white">GitHub Copilot</span>
                    <ExternalLink className="w-3.5 h-3.5 text-fhgr-petrol/50 group-hover:text-fhgr-petrol-light" />
                 </a>
                 <a href="https://claude.ai/code" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-fhgr-petrol/20 border border-fhgr-petrol/10 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-fhgr-petrol-light group-hover:text-white">Claude Code (CLI)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-fhgr-petrol/50 group-hover:text-fhgr-petrol-light" />
                 </a>
              </div>
            </Card>
          </motion.div>
          
        </div>

        {/* Universal Resources */}
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.3}} className="mt-8 w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <a href="https://www.figma.com/resource-library/vibe-coding-tools/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-[#00c4cc]/20 bg-[#00c4cc]/5 hover:bg-[#00c4cc]/10 transition-colors cursor-pointer group">
                <div className="p-2 bg-[#00c4cc]/10 rounded-lg text-[#00c4cc]">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-sm font-bold text-white group-hover:text-[#00c4cc] transition-colors">Vibe Coding Tools & Agents</h4>
                  <p className="text-xs text-white/50">Figma Resource Library</p>
                </div>
             </a>
             <a href="https://www.figma.com/resource-library/vibe-coding-examples/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-[#00c4cc]/20 bg-[#00c4cc]/5 hover:bg-[#00c4cc]/10 transition-colors cursor-pointer group">
                <div className="p-2 bg-[#00c4cc]/10 rounded-lg text-[#00c4cc]">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-sm font-bold text-white group-hover:text-[#00c4cc] transition-colors">Vibe Coding Examples</h4>
                  <p className="text-xs text-white/50">Figma Resource Library</p>
                </div>
             </a>
          </div>
        </motion.div>

      </div>
    </SlideLayout>
  )
}
