import { motion } from 'framer-motion'
import { LayoutTemplate, Lightbulb, Hammer, PenTool, ArrowRight, ExternalLink } from 'lucide-react'
import Card from '../ui/Card'

export default function RelumeSitemapSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#060F1A] text-white overflow-y-auto lg:overflow-hidden relative px-6 lg:px-16">
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12 lg:mt-0">
        
        {/* Left: Content */}
        <div className="flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2">
              <LayoutTemplate className="w-4 h-4" /> Tool Spotlight
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2">Relume: Sitemap zu Figma</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-6">
              Für uns ist <strong>Relume.io</strong> der Sweetspot: Es generiert aus einem einfachen Prompt nicht nur eine strukturierte Informationsarchitektur (Sitemap), sondern liefert erste Wireframes direkt mit, die sich nahtlos nach Figma kopieren lassen.
            </p>
            <a href="https://www.relume.io/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-fhgr-petrol/10 hover:bg-fhgr-petrol/20 text-fhgr-petrol-light text-sm font-medium rounded-lg transition-colors border border-fhgr-petrol/30 mb-8 w-max">
              Zu Relume <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="space-y-4">
            <Card 
              delay={0.1}
              variant="primary"
              className="!p-6 bg-[#0A1220] border-fhgr-petrol/20 shadow-[0_0_20px_rgba(40,195,190,0.05)] text-left"
            >
              <h3 className="font-bold text-fhgr-petrol-light mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5"/> Visuelle Struktur in Sekunden
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Der "Site Builder" erlaubt es, den kompletten Seitenbaum visuell durchzuklicken und mit KI anzureichern. Anstatt leere Boxen zu schieben, bekommst du direkt High-Fidelity Copywriting und Baukasten-Komponenten.
              </p>
            </Card>

            <Card 
              delay={0.2}
              variant="glass"
              className="!p-6 border-fhgr-orange/30 bg-gradient-to-br from-fhgr-orange/10 to-transparent relative overflow-hidden text-left"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-fhgr-orange/10 blur-[50px] rounded-full" />
              <h3 className="font-bold text-fhgr-orange mb-3 flex items-center gap-2 relative z-10 text-lg">
                <Hammer className="w-5 h-5"/> Hands-On: Eure Sitemap
              </h3>
              <ul className="text-sm text-white/80 leading-relaxed space-y-3 relative z-10 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-fhgr-orange">1.</span> Registriert euch bei <strong>Relume.io</strong> (Free Plan reicht völlig aus).
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fhgr-orange">2.</span> Generiert die Sitemap / erste Wireframes für euer App-Szenario.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fhgr-orange">3.</span> Nutzt den <strong>Figma Export</strong> (Plugin), um dieses Fundament in euer Figma Canvas zu überführen.
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Right: Graphic */}
        <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay: 0.3}} className="h-[450px] lg:h-[600px] flex flex-col">
          <Card variant="glass" className="h-full !p-0 border-white/5 bg-[#1A1A1A] flex flex-col relative overflow-hidden shadow-2xl shrink-0 group">
             
             {/* Header */}
             <div className="h-12 bg-[#0A1220] flex items-center px-4 gap-3 border-b border-white/5 shrink-0 z-10 relative shadow-md">
               <LayoutTemplate className="w-4 h-4 text-fhgr-petrol-light" />
               <ArrowRight className="w-3 h-3 text-white/30" />
               <PenTool className="w-4 h-4 text-[#0ACF83]" />
               <span className="text-[11px] font-mono text-white/40 tracking-widest ml-1">relume-sitemap-export</span>
             </div>

             {/* Standard Image Container with scrolling */}
             <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#e0e0e0] relative flex items-start justify-center p-6 lg:p-10">
                 <img 
                   src="/relume-export.png" 
                   alt="Relume Sitemap Screenshot" 
                   className="w-full max-w-[600px] h-auto object-contain drop-shadow-2xl opacity-95 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 origin-top"
                 />
             </div>
             
          </Card>
        </motion.div>

      </div>
    </div>
  )
}
