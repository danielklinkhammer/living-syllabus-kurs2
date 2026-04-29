import { motion } from 'framer-motion'
import { Component, Scale, FileText, GitBranch, Search } from 'lucide-react'
import Card from '../ui/Card'

export default function ChallengeAssessmentSlide() {
  const criteria = [
    {
      title: "Themen-Spezifikation",
      icon: <Search className="w-4 h-4 text-fhgr-accent" />,
      color: "border-fhgr-accent/30 bg-fhgr-accent/5",
      desc: "Klarheit und Detailtiefe bei der Themensetzung sowie des verfassten Basis-Prompts."
    },
    {
      title: "Kreative Divergenz",
      icon: <Component className="w-4 h-4 text-purple-400" />,
      color: "border-purple-400/30 bg-purple-400/5",
      desc: "Wie mutig und radikal unterscheiden sich die drei explorativ abgeleiteten Design-System-Welten?"
    },
    {
      title: "Iterations-Tiefe",
      icon: <GitBranch className="w-4 h-4 text-orange-400" />,
      color: "border-orange-400/30 bg-orange-400/5",
      desc: "Wurden die generierten UI-Entwürfe kritisch weiterentwickelt und handwerklich geschliffen?"
    },
    {
      title: "Systemische Dokumentation",
      icon: <FileText className="w-4 h-4 text-fhgr-petrol" />,
      color: "border-fhgr-petrol/30 bg-fhgr-petrol/5",
      desc: "Die Präzision des Reverse-Engineerings (`design.md`). Ist das Layout rein textbasiert reproduzierbar?"
    },
    {
      title: "Matrix-Konsistenz",
      icon: <Scale className="w-4 h-4 text-blue-400" />,
      color: "border-blue-400/30 bg-blue-400/5",
      desc: "Bleibt die UX-Struktur über alle Stile hinweg stabil und die Design-DNA pro Stil halluzinationsfrei?"
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 lg:mt-0 items-center">
        
        {/* Left: Intro */}
        <div className="lg:col-span-5">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge C · Part 3</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Evaluations-Aspekte</h2>
          </motion.div>
        </div>

        {/* Right: The Rubric */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          
          {criteria.map((c, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
            >
              <Card variant="glass" className={`!p-4 border transition-all duration-300 ${c.color}`}>
                <div className="flex gap-4 items-center w-full">
                  <div className="p-2 rounded bg-black/40 border border-white/10 shrink-0">
                    {c.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-md mb-1">{c.title}</h3>
                    <p className="text-sm text-white/60 leading-snug">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
