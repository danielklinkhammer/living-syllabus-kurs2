import { motion } from 'framer-motion'
import { Network, Layout, Scale } from 'lucide-react'

export default function UXArchitectRoleSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 lg:mt-0 items-center">
        
        {/* Left column: Context & Narrative */}
        <div className="lg:col-span-12 xl:col-span-5">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Die neue Design-Realität</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">UX Designer als Architekten</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-6">
              KI-Modelle sind extrem mächtig in der Mikro-Exekution (z.B. dem Generieren einzelner Interfaces oder Texte). Aber sie verlieren im Makro-Level schnell den Kontext über komplexe Geschäftslogiken.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-white/60 leading-relaxed">
              Die Konsequenz: Unsere Rolle als Product Designer shiftet dramatisch hin zu <strong className="text-fhgr-accent">Orchestrierung</strong>, <strong className="text-fhgr-accent">Systemarchitektur</strong> und strategischer <strong className="text-fhgr-accent">Planung</strong>.
            </div>
            
          </motion.div>
        </div>

        {/* Right column: Comparison Scales */}
        <div className="lg:col-span-12 xl:col-span-7 flex flex-col md:flex-row gap-6 items-stretch">
          
          {/* Classical UX */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 bg-black/40 border border-white/10 rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/10 rounded-lg text-white/50">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white/80">Mikro-Ebene (KI & Pixel)</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/50 items-start">
                <div className="mt-0.5 text-white/20">●</div>
                Fokus auf das visuelle Layout eines einzelnen Screens.
              </li>
              <li className="flex gap-3 text-sm text-white/50 items-start">
                <div className="mt-0.5 text-white/20">●</div>
                Generieren des isolierten "Sonnenschein-Szenarios".
              </li>
              <li className="flex gap-3 text-sm text-white/50 items-start">
                <div className="mt-0.5 text-white/20">●</div>
                Diese exekutive Arbeit übernimmt zunehmend der KI-Agent.
              </li>
            </ul>
          </motion.div>

          {/* Scale graphic element for md+ screens */}
          <div className="hidden md:flex flex-col items-center justify-center -mx-3 z-10">
            <div className="w-10 h-10 rounded-full bg-[#060F1A] border border-white/10 flex items-center justify-center text-white/30 shadow-xl">
              <Scale className="w-4 h-4" />
            </div>
          </div>

          {/* KI Era Architekt */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 bg-fhgr-petrol/10 border border-fhgr-petrol/30 rounded-2xl p-6 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-fhgr-petrol/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-fhgr-petrol/20 rounded-lg text-fhgr-petrol">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Makro-Ebene (Architekt)</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/70 items-start">
                <div className="mt-0.5 text-fhgr-petrol">●</div>
                Abstraktes Modellieren komplexer Informationsarchitekturen.
              </li>
              <li className="flex gap-3 text-sm text-white/70 items-start">
                <div className="mt-0.5 text-fhgr-petrol">●</div>
                Logik-Orchestrierung: Was passiert im Fehlerfall (Unhappy Path)?
              </li>
              <li className="flex gap-3 text-sm text-white/70 items-start">
                <div className="mt-0.5 text-fhgr-petrol">●</div>
                Steuern und Evaluieren der KI durch User Flows & Sitemaps.
              </li>
            </ul>
          </motion.div>

        </div>

      </div>
    </div>
  )
}
