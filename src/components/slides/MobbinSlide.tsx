import { motion } from 'framer-motion'
import { Search, Blocks, Smartphone, PanelTop, ExternalLink } from 'lucide-react'
import Card from '../ui/Card'

export default function MobbinSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#060F1A] text-white overflow-y-auto lg:overflow-hidden relative px-6 lg:px-16">
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12 lg:mt-0">
        
        {/* Left: Content */}
        <div className="flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="text-white/60 text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2">
              <Search className="w-4 h-4" /> Pattern Research
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2">Mobbin: UI & Flow Library</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-6">
              Warum das Rad neu erfinden? Bevor wir User Flows und Architekturen definieren, hilft ein strukturierter Blick auf den Markt. <strong>Mobbin.com</strong> ist das grösste Archiv für echte UI-Screens und komplette User Journeys von Top-Tier Apps.
            </p>
            <a href="https://mobbin.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-colors border border-white/10 mb-8 w-max">
              Zu Mobbin <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card 
              delay={0.1}
              variant="primary"
              className="!p-5 bg-white/5 border-white/10 hover:border-fhgr-petrol/30 transition-all text-left"
            >
              <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-fhgr-petrol-light"/> Screen Library
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Filtere nach spezifischen Screens wie "Login", "Settings" oder "Onboarding". Betrachte exakt, wie Apps wie Airbnb oder Spotify diese Screens aktuell (Live-Stand) designen.
              </p>
            </Card>

            <Card 
              delay={0.2}
              variant="primary"
              className="!p-5 bg-white/5 border-white/10 hover:border-fhgr-orange/30 transition-all text-left"
            >
              <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                <Blocks className="w-4 h-4 text-fhgr-orange"/> Pattern Analyse
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Suche nach exakten UI-Elementen wie bestimmten Navigationen, Buttons oder Modal-Typen, um dir Best-Practices für dein eigenes Design-System abzuschauen.
              </p>
            </Card>
            
            <Card 
              delay={0.3}
              variant="glass"
              className="!p-5 sm:col-span-2 border-fhgr-petrol/20 bg-[#0A1220] relative overflow-hidden text-left"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-fhgr-petrol/10 blur-[40px] rounded-full" />
              <h3 className="font-bold text-fhgr-petrol-light mb-2 flex items-center gap-2 relative z-10">
                <PanelTop className="w-4 h-4"/> Ganze User Flows extrahieren
              </h3>
              <p className="text-sm text-white/70 leading-relaxed relative z-10 w-full sm:w-[85%]">
                Das stärkste Feature für unsere Architektur-Phase: Mobbin visualisiert komplette zusammenhängende Use-Cases (z.B. "Einen Flug buchen", "Einen Artikel zurücksenden") inkl. aller Klicks und States chronologisch als echte UI-Pfadstruktur.
              </p>
            </Card>
          </div>
        </div>

        {/* Right: Graphic */}
        <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay: 0.3}} className="h-[450px] lg:h-[600px] flex flex-col">
          <Card variant="glass" className="h-full !p-0 border-white/5 bg-white flex flex-col relative overflow-hidden shadow-2xl shrink-0 group">
             
             {/* Header */}
             <div className="h-12 bg-[#F3F4F6] flex items-center px-4 gap-3 border-b border-black/5 shrink-0 z-10 relative">
               <div className="w-3 h-3 rounded-full bg-red-400"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
               <div className="w-3 h-3 rounded-full bg-green-400"></div>
               <div className="ml-4 px-20 py-1 bg-white rounded-md text-xs text-black/40 font-mono shadow-sm flex items-center justify-center">
                 mobbin.com
               </div>
             </div>

             {/* Standard Image Container with scrolling */}
             <div className="flex-1 overflow-y-auto custom-scrollbar relative flex items-start justify-center p-0 bg-[#F8F9FA]">
                 <img 
                   src="/mobbin-preview.jpg" 
                   alt="Mobbin Interface Screenshot" 
                   className="w-full h-full object-cover object-left-top origin-top"
                 />
             </div>
             
          </Card>
        </motion.div>

      </div>
    </div>
  )
}
