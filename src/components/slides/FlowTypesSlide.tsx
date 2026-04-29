import { motion } from 'framer-motion'
import Card from '../ui/Card'

export default function FlowTypesSlide() {
  const flowTypes = [
    {
      title: "Task Flow",
      focus: "Ein Task, ein User-Typ",
      detail: "Hoch (Jeder Klick)",
      when: '"Wie kauft man ein T-Shirt?"',
      color: "from-blue-500/20 to-blue-900/20",
      border: "border-blue-500/30",
      viz: <div className="flex gap-2 items-center"><div className="w-4 h-4 rounded-sm bg-blue-400"/><div className="w-8 h-0.5 bg-blue-500/50"/><div className="w-4 h-4 rounded-sm bg-blue-400"/><div className="w-8 h-0.5 bg-blue-500/50"/><div className="w-4 h-4 rounded-sm bg-blue-400"/></div>
    },
    {
      title: "User Flow",
      focus: "Mehrere Pfade & Decisions",
      detail: "Mittel",
      when: '"Was passiert bei Fehlern im Checkout?"',
      color: "from-fhgr-petrol/30 to-indigo-900/20",
      border: "border-fhgr-petrol/50",
      viz: <div className="flex flex-col items-center"><div className="w-4 h-4 rounded-sm bg-fhgr-petrol"/><div className="w-0.5 h-4 bg-fhgr-petrol/50"/><div className="flex gap-4"><div className="w-4 h-4 rounded-sm bg-fhgr-petrol"/><div className="w-4 h-4 rounded-sm border-2 border-fhgr-petrol bg-transparent"/></div></div>
    },
    {
      title: "Journey Map",
      focus: "Zeitachse & Emotionen",
      detail: "Niedrig (Narrativ)",
      when: '"Vom Instagram-Ad bis zum Paketboten"',
      color: "from-purple-500/20 to-pink-900/20",
      border: "border-purple-500/30",
      viz: <div className="flex gap-1 items-end h-8"><div className="w-2 h-3 bg-purple-400 rounded-sm"/><div className="w-2 h-5 bg-purple-400 rounded-sm"/><div className="w-2 h-2 bg-pink-400 rounded-sm"/><div className="w-2 h-6 bg-purple-400 rounded-sm"/><div className="w-2 h-8 bg-purple-400 rounded-sm"/></div>
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-5xl w-full mx-auto relative z-10 text-center">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Die Blaupausen des Architekten</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 mt-2 tracking-tight">Scope & Detailgrad</h2>
          <p className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto mb-10">
            Als System-Architekten brauchen wir präzise Blaupausen, bevor die KI exekutiert. Diese Blaupausen sind unsere <strong>Flows</strong>. (Die <em>Informationsarchitektur</em> betrachten wir separat). Nicht jeder Flow ist gleich – wir müssen erst festlegen, aus welcher Flughöhe wir das System betrachten.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left w-full mt-6">
          {flowTypes.map((t, idx) => (
            <Card 
              key={idx}
              delay={0.1 * idx}
              variant="default"
              className={`!p-6 overflow-hidden group border bg-gradient-to-b ${t.color} ${t.border}`}
            >
              <div className="h-16 mb-4 flex items-end opacity-70 group-hover:opacity-100 transition-opacity w-full border-b border-white/10 pb-4">
                {t.viz}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white w-full">{t.title}</h3>
              
              <div className="space-y-3 w-full">
                <div>
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider mb-1">Focus</div>
                  <div className="text-sm font-medium">{t.focus}</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider mb-1">Detail</div>
                  <div className="text-sm text-white/70">{t.detail}</div>
                </div>
                <div className="pt-3 mt-3 border-t border-white/10">
                  <div className="text-xs italic text-white/50">{t.when}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Note on Vibe Coding and Technical Notation */}
        <motion.div 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          transition={{delay: 0.5}}
          className="mt-12 text-left max-w-3xl mx-auto p-5 rounded-xl border border-white/10 bg-white/5"
        >
          <div className="text-sm font-bold text-white mb-2">Visuelle Journeys vs. Technische Notation</div>
          <p className="text-sm text-white/60 leading-relaxed">
            Bildgeneratoren sind fantastische Werkzeuge, um emotionale Customer Journeys oder komplexe Infografiken (z.B. für Stakeholder-Präsentationen) anschaulich zu visualisieren. Wenn es jedoch in die konkrete Exekution von Interface-Design und Softwarearchitektur geht – speziell beim <strong>Vibe Coding</strong> –, wechseln wir das Werkzeug. Hier benötigen wir eine strikte, <em>technische Notationsweise</em> (Flowcharts, Graphen), denn nur diese logischen Strukturen können von KI-Entwicklungsagenten als fehlerfreier Bauplan gelesen werden.
          </p>
        </motion.div>

      </div>
    </div>
  )
}
