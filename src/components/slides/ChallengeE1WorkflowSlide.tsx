import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { BrainCircuit, ZoomIn, Blocks, ListChecks } from 'lucide-react'

export default function ChallengeE1WorkflowSlide() {
  const tactics = [
    {
      title: "The Context Baseline",
      desc: "Die KI versagt ohne 'Karte'. Liefert präzisen Kontext! Referenziert aktuelle API-Dokumentationen via URL, übergebt Skizzen via Image-Upload (Vision) oder gebt klare Coding-Richtlinien (System Prompts) vor.",
      icon: <BrainCircuit className="w-6 h-6 text-indigo-400" />,
      color: "from-indigo-500/10 to-transparent",
      borderColor: "border-indigo-500/30"
    },
    {
      title: "The 'Zoom-In' Method",
      desc: "Der Prompt 'Baue eine App' funktioniert nie. Baut iterativ: (1) Makro-Ebene (rohes Seiten-Layout), (2) Verfeinerung (Abstände korrigieren), (3) Mikro-Ebene (spezifische Animationen).",
      icon: <ZoomIn className="w-6 h-6 text-blue-400" />,
      color: "from-blue-500/10 to-transparent",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Design System First",
      desc: "Verhindert KI-Halluzinationen beim Styling! Setzt früh ein robustes Framework (z.B. shadcn/ui) auf. Zwingt die KI, existierende UI-Components wiederzuverwenden, statt Inline-CSS zu erfinden.",
      icon: <Blocks className="w-6 h-6 text-purple-400" />,
      color: "from-purple-500/10 to-transparent",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Plan Mode & Steering",
      desc: "Ihr seid der Product Lead, die KI der Junior. Lasst die KI bei komplexen Features erst einen Text-Plan ausarbeiten. Bei Abstürzen: Kopiert rote Error-Logs roh in den Chat statt wild zu raten.",
      icon: <ListChecks className="w-6 h-6 text-red-400" />,
      color: "from-red-500/10 to-transparent",
      borderColor: "border-red-500/30"
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 py-12 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-5xl w-full mx-auto relative z-10">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-10 text-center lg:text-left">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge E.1 · Part 3</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Die Vibe Coding Taktiken</h2>
          <p className="text-lg text-white/50 max-w-3xl leading-relaxed mx-auto lg:mx-0">
            KI-Entwicklung ist kein Blindflug. Erfolgreiche Vibe Coder etablieren klare Projektgrenzen und steuern ihre Agenten proaktiv. Rüstet euer Projekt mit diesen 4 fundamentalen Best-Practices aus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tactics.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{delay: 0.1 * idx}}
            >
              <Card variant="glass" className={`!p-6 h-full border ${item.borderColor} bg-gradient-to-br ${item.color} group hover:bg-white/5 transition-colors flex flex-col`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 bg-black/40 rounded-xl border ${item.borderColor} shadow-lg shrink-0`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-white/70 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
