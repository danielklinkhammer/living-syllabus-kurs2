import { motion } from 'framer-motion'
import { LayoutTemplate, Sparkles, Zap, ExternalLink } from 'lucide-react'
import Card from '../ui/Card'

export default function FigJamAIDiagramsSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#060F1A] text-white overflow-y-auto lg:overflow-hidden relative px-6 lg:px-16">
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12 lg:mt-0">
        
        {/* Left: Content */}
        <div className="flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="text-[#0ACF83] text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> AI Natively in FigJam
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2">Diagramme via FigJam AI</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-6">
              Bevor wir komplett über Code-Logik gehen: <strong>FigJam</strong> hat mittlerweile ebenfalls eine sehr starke native KI an Bord, um aus einem Text-Prompt strukturierte Diagramme, Mindmaps oder komplexe Flowcharts zu generieren.
            </p>
            <a href="https://www.figma.com/figjam/ai/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-[#0ACF83]/10 hover:bg-[#0ACF83]/20 text-[#0ACF83] text-sm font-medium rounded-lg transition-colors border border-[#0ACF83]/30 mb-8">
              Zu FigJam AI <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="space-y-4">
            <Card 
              delay={0.1}
              variant="primary"
              className="!p-6 bg-[#0A1220] border-[#0ACF83]/20 shadow-[0_0_20px_rgba(10,207,131,0.05)] text-left"
            >
              <h3 className="font-bold text-[#0ACF83] mb-3 flex items-center gap-2">
                <LayoutTemplate className="w-5 h-5"/> Make Templates & Diagrams
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Über das AI-Widget in FigJam ("Make templates and diagrams") lässt sich einfach die Absicht eintippen – z.B. <em>"Brainstorm for features in a fitness app..."</em> – und die KI baut das Layout mitsamt allen Nodes und Pfaden organisch auf.
              </p>
            </Card>

            <Card 
              delay={0.2}
              variant="glass"
              className="!p-6 border-white/5 relative overflow-hidden text-left"
            >
              <h3 className="font-bold text-white mb-3 flex items-center gap-2 relative z-10 text-lg">
                <Zap className="w-5 h-5 text-yellow-400"/> Vorteil vs. Code-Struktur
              </h3>
              <ul className="text-sm text-white/60 leading-relaxed space-y-3 relative z-10 font-medium list-disc pl-5">
                <li>Ideal für schnelle Explorationen und visuelles Ausprobieren.</li>
                <li>Sofort bearbeitbar mit Figjam-Tools (Farben, Positionen, Post-its).</li>
                <li>Hervorragend um sich ein schnelles Layout als Diskussionsgrundlage für Workshops erzeugen zu lassen.</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Right: Graphic */}
        <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay: 0.3}} className="h-[450px] lg:h-[600px] flex flex-col">
          <Card variant="glass" className="h-full !p-0 border-white/5 bg-white flex flex-col relative overflow-hidden shadow-2xl shrink-0 group">
             
             {/* Header */}
             <div className="h-12 bg-white flex items-center px-4 gap-3 border-b border-black/5 shrink-0 z-10 relative shadow-sm">
               <Sparkles className="w-4 h-4 text-[#0ACF83]" />
               <span className="text-[11px] font-mono text-black/40 tracking-widest font-bold">FigJam AI Interface</span>
             </div>

             {/* Standard Image Container with scrolling */}
             <div className="flex-1 overflow-y-auto custom-scrollbar relative flex items-start justify-center p-0">
                 <img 
                   src="/figjam-ai.jpg" 
                   alt="FigJam AI Screenshot" 
                   className="w-full h-full object-cover origin-top"
                 />
             </div>
             
          </Card>
        </motion.div>

      </div>
    </div>
  )
}
