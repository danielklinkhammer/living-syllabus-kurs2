import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { FileDown, GitBranch, Layers } from 'lucide-react'

export default function ChallengeDOutcomeSlide() {
  const deliverables = [
    {
      title: "Flowcharts & Sitemaps",
      desc: "Eure aufbereitete Logik-Ansicht. Die Darstellung muss nicht riesig sein! Uns ist wichtig, dass ihr das Tooling ausprobiert habt und abstraktes architektonisches Denken anwendet (Happy Path vs. Unhappy Path).",
      icon: <GitBranch className="w-6 h-6 text-indigo-400" />,
      color: "from-indigo-500/10 to-transparent",
      borderColor: "border-indigo-500/30"
    },
    {
      title: "Wireframes & Mockups (Optional)",
      desc: "Je nachdem, welches Tool ihr benutzt (z.B. Relume), werden oft bereits erste Low-Fi Wireframes oder Sitemaps mit Seitenstruktur generiert. Diese könnt ihr sehr gerne als Ergänzung mit in euer Portfolio aufnehmen!",
      icon: <Layers className="w-6 h-6 text-purple-400" />,
      color: "from-purple-500/10 to-transparent",
      borderColor: "border-purple-500/30"
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-4xl w-full mx-auto relative z-10 text-center">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
          <div className="w-16 h-16 mx-auto bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-lg mb-6">
             <FileDown className="w-8 h-8 text-fhgr-accent" />
          </div>
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge D · Part 3</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Outcome & Deliverables</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed">
            Als Output erwarten wir zentrale Artefakte der Informationsarchitektur. Sie landen später gebündelt in eurem Portfolio:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {deliverables.map((item, idx) => (
            <Card 
              key={idx}
              delay={0.1 * idx}
              variant="glass"
              className={`!p-8 relative overflow-hidden border ${item.borderColor} bg-gradient-to-br ${item.color} group`}
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
