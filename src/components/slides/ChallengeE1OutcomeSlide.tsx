import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { FileDown, Lightbulb, PlaySquare } from 'lucide-react'

export default function ChallengeE1OutcomeSlide() {
  const deliverables = [
    {
      title: "Der entwickelte (oder simulierte) KI-Prototyp",
      desc: "Das Herzstück des Outcomes. Belegt eure Arbeit durch Screenshots, ein kurzes Video oder Links, wie ihr im Google AI Studio eine Schnittstelle (z.B. Gen-Image oder Voice) aktiv angesteuert oder im UI passend simuliert habt.",
      icon: <PlaySquare className="w-6 h-6 text-orange-400" />,
      color: "from-orange-500/10 to-transparent",
      borderColor: "border-orange-500/30"
    },
    {
      title: "Die Figma Dokumentation",
      desc: "Die strategische Aufbereitung für euer Portfolio. Ein FigJam oder Figma-Board, das 1. Die Grundidee der App pitched, 2. Explizit den Mehrwert (Vorteil) der eingesetzten KI benennt und 3. Euren Lernweg kurz reflektiert.",
      icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
      color: "from-yellow-500/10 to-transparent",
      borderColor: "border-yellow-500/30"
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-4xl w-full mx-auto relative z-10 text-center">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
          <div className="w-16 h-16 mx-auto bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-lg mb-6">
             <FileDown className="w-8 h-8 text-fhgr-accent" />
          </div>
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge E.1 · Part 4</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Outcome & Deliverables</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed">
            Euer Resultat landet im Portfolio. Wir bewerten daher sowohl das experimentelle Machen als auch das strukturierte, methodische Erklären des Mehrwerts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {deliverables.map((item, idx) => (
            <Card 
              key={idx}
              delay={0.1 * idx}
              variant="glass"
              className={`!p-8 relative overflow-hidden border ${item.borderColor} bg-gradient-to-br ${item.color} group hover:bg-white/5 transition-colors`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {item.title}
              </h3>
              <p className="text-white/70 leading-relaxed font-medium text-sm">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </div>
  )
}
