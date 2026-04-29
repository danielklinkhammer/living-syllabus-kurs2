import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { Search, Spline, LayoutTemplate, ShieldAlert } from 'lucide-react'

export default function ChallengeDWorkflowSlide() {
  const workflow = [
    {
      step: "01",
      title: "Mobbin Research",
      desc: "Wie lösen die 'Großen' das Problem? Sucht auf Mobbin nach ähnlichen Apps und scannt deren User Flows ab. Welche Screens und Popups werden beim Onboarding/Checkout verwendet?",
      icon: <Search className="w-5 h-5 text-blue-400" />
    },
    {
      step: "02",
      title: "Mapping im Flowchart",
      desc: "Übertragt den Flow in FigJam oder Whimsical. Verbindet die theoretischen Screens mit Linien und definiert klar, an welchen Stellen der User abzweigen kann.",
      icon: <Spline className="w-5 h-5 text-indigo-400" />
    },
    {
      step: "03",
      title: "AI Generation (Relume)",
      desc: "Nutzt euren Flowchart als Grundlage für den Relume.io Sitebuilder-Prompt. Lasst Relume daraus eine KI-gestützte Sitemap inkl. der ersten Low-Fi Wireframes erstellen.",
      icon: <LayoutTemplate className="w-5 h-5 text-purple-400" />
    },
    {
      step: "04",
      title: "Edge Cases checken",
      desc: "Prüft final, ob in eurer Relume-Sitemap Notfall-Screens existieren: 'Success-States', 'Empty-States' oder 'Error-Messages', wenn der Flow abreißt.",
      icon: <ShieldAlert className="w-5 h-5 text-red-400" />
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-5xl w-full mx-auto relative z-10">
        
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} className="mb-12">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge D · Part 4</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Die Pipeline</h2>
          <p className="text-lg text-white/50 max-w-3xl leading-relaxed">
            Eine saubere Informationsarchitektur entsteht nicht einfach durch 'drauf los prompten'. Nutzt diesen systematischen 4-Schritte-Workflow, um komplexe Flows AI-gestützt aufzubauen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflow.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{delay: 0.1 * idx}}
              className="relative"
            >
              <Card variant="glass" className="!p-6 h-full border border-white/5 bg-[#0A1220] hover:bg-white/5 transition-colors group flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-3xl font-bold font-mono text-white/10 group-hover:text-white/20 transition-colors">
                    {item.step}
                  </div>
                  <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </Card>
              
              {/* Connector line on desktop */}
              {idx < workflow.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/10 z-0" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
