import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { LayoutDashboard, BarChart3, Target, Quote } from 'lucide-react'

export default function DashboardDefinitionSlide() {
  const types = [
    {
      title: "Operational (Operativ)",
      desc: "Echtzeit-Überwachung kritischer Prozesse. Fokus: Was passiert genau jetzt?",
      example: "Server-Status, Live-Verkäufe",
      icon: <LayoutDashboard className="w-5 h-5 text-fhgr-petrol-light" />
    },
    {
      title: "Analytical (Analytisch)",
      desc: "Historische Daten für Kontext und Deep-Dives. Fokus: Warum passiert es?",
      example: "Google Analytics, Umsatzprognosen",
      icon: <BarChart3 className="w-5 h-5 text-purple-400" />
    },
    {
      title: "Strategic (Strategisch)",
      desc: "High-Level KPIs für das Management. Fokus: Erreichen wir unsere Ziele?",
      example: "Quartalsziele, ROI-Metriken",
      icon: <Target className="w-5 h-5 text-orange-400" />
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto custom-scrollbar relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fhgr-petrol/10 via-transparent to-transparent pointer-events-none fixed" />

      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 lg:mt-0 items-center">
        
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Dashboard Design · Teil 1</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Was ist ein Dashboard?</h2>
          </motion.div>

          <Card delay={0.1} variant="glass" className="!p-8 mb-8 relative">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 opacity-50" />
            <div className="text-xl leading-relaxed text-fhgr-beige font-serif italic mb-6">
              "A visual display of the most important information needed to achieve one or more objectives; consolidated and arranged on a single screen so the information can be monitored at a glance."
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white">— Stephen Few</span>
              <span className="text-xs text-white/40 mt-1 font-mono">Quelle: "Information Dashboard Design", O'Reilly (2006)</span>
            </div>
          </Card>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-sm text-white/60 leading-relaxed bg-black/30 p-4 rounded-xl border border-white/5"
          >
            <strong className="text-white">Der Kern des Dashboards:</strong> Es geht nicht darum, alle verf&uuml;gbaren Daten zu visualisieren, sondern die <strong>kognitive Last</strong> des Nutzers zu minimieren, indem isolierte Daten in zusammenh&auml;ngenden <strong>Kontext</strong> übersetzt werden.
          </motion.div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center w-full">
          <div className="p-8 rounded-2xl bg-black/20 border border-white/5 relative overflow-hidden backdrop-blur-sm shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50" />
            <div className="text-sm font-semibold tracking-widest uppercase text-white/30 mb-6 relative z-10">Die 3 Dashboard-Klassen</div>
            
            <div className="flex flex-col gap-4 w-full relative z-10">
              {types.map((type, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  key={idx} 
                  className="flex gap-5 items-start p-5 rounded-xl bg-black/40 border border-white/10 hover:border-fhgr-petrol/30 transition-colors w-full"
                >
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 shrink-0">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">{type.title}</h3>
                    <p className="text-sm text-white/60 mb-3 leading-relaxed">{type.desc}</p>
                    <div className="text-xs font-mono text-fhgr-petrol-light bg-fhgr-petrol/10 px-3 py-1.5 rounded-lg inline-block border border-fhgr-petrol/20">
                      {type.example}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
