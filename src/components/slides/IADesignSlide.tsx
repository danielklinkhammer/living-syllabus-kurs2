import { motion } from 'framer-motion'
import { FolderTree, Map, Clock } from 'lucide-react'
import Card from '../ui/Card'
import HeroGraphic from '../ui/HeroGraphic'

export default function IADesignSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#060F1A] text-white overflow-y-auto lg:overflow-hidden relative px-6 lg:px-16">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-12 lg:mt-0">
        
        {/* Left: Content */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Sitemap & Struktur</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2">Informationsarchitektur</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-8">
              IA beantwortet die Frage: <strong>"Wo bin ich und wo kann ich hin?"</strong>. Sie definiert die hierarchische Struktur einer Anwendung.
            </p>
          </motion.div>

          <div className="space-y-4">
            <Card 
              delay={0.1}
              variant="primary"
              className="!p-5 bg-[#091524] border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)] text-left"
            >
              <h3 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                <Map className="w-4 h-4"/> Spatial Reasoning (Raum)
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                "Wo ist was?" – LLMs sind im Jahr 2025/26 extrem gut darin, statische Layouts und Baumstrukturen logisch anzuordnen. Eine Standard-Sitemap (Home → Shop → Checkout) generiert KI fehlerfrei in Sekunden.
              </p>
            </Card>

            <Card 
              delay={0.2}
              variant="primary"
              className="!p-5 bg-[#1A0B10] border-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.1)] text-left"
            >
              <h3 className="font-bold text-orange-400 mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4"/> Temporal Reasoning (Zeit)
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                "Wann passiert was?" – KI scheitert massiv bei komplexen, zeitlichen oder zustandsbasierten Abläufen (Across-Screen Logic). Was passiert, wenn ein User nach 3 Tagen mit abgelaufenem Warenkorb zurückkehrt?
              </p>
            </Card>
          </div>
        </div>

        {/* Right: Visualization (Tree) */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <HeroGraphic delay={0.2} className="!p-8 bg-[#1A1A1A] w-full items-start justify-start font-mono text-xs text-left">
            <div className="flex items-center gap-2 mb-4 text-fhgr-petrol-light uppercase tracking-widest text-[10px] w-full">
              <FolderTree className="w-4 h-4" /> Relume Sitemap Generator
            </div>
            
            <div className="text-white/80 select-none w-full">
              <div className="py-1">Home</div>
              <div className="border-l border-white/20 ml-2 pl-4">
                <div className="py-1 flex items-center gap-2">
                  <div className="w-3 h-px bg-white/20"/> Shop
                </div>
                <div className="border-l border-white/20 ml-2 pl-4">
                  <div className="py-1 flex items-center gap-2"><div className="w-3 h-px bg-white/20"/> Produktliste</div>
                  <div className="border-l border-white/20 ml-2 pl-4">
                    <div className="py-1 flex items-center gap-2"><div className="w-3 h-px bg-white/20"/> Produktdetail</div>
                  </div>
                  <div className="py-1 flex items-center gap-2"><div className="w-3 h-px bg-white/20"/> Konfigurator</div>
                </div>
                
                <div className="py-1 flex items-center gap-2 mt-2">
                  <div className="w-3 h-px bg-white/20"/> Warenkorb
                </div>
                <div className="border-l border-white/20 ml-2 pl-4">
                  <div className="py-1 flex items-center gap-2 text-orange-400 bg-orange-500/10 px-2 rounded -ml-2 w-max">
                    <div className="w-3 h-px bg-orange-400/50 mr-2"/> Checkout <span className="text-[9px] opacity-70 ml-2">← Temporal Risk</span>
                  </div>
                  <div className="border-l border-white/20 ml-2 pl-4 opacity-50">
                    <div className="py-1 flex items-center gap-2"><div className="w-3 h-px bg-white/20"/> Adresse</div>
                    <div className="py-1 flex items-center gap-2"><div className="w-3 h-px bg-white/20"/> Zahlung</div>
                  </div>
                </div>
              </div>
            </div>
          </HeroGraphic>
        </div>

      </div>
    </div>
  )
}
