import { motion } from 'framer-motion'
import { BookOpen, Layers, Bot, Code, Compass } from 'lucide-react'

export default function CourseOverviewViewer() {
  const blocks = [
    {
      id: "Block 1",
      title: "Exploration & Ideation",
      subtitle: "Designing WITH AI",
      desc: "Nutzung von KI als kreatives Werkzeug und Brainstorming-Partner. Wir erforschen Prompt Engineering und Generative AI zur schnellen visuellen und konzeptionellen Ideenfindung.",
      icon: <Bot className="w-5 h-5" />,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      textColor: "text-purple-400"
    },
    {
      id: "Block 2",
      title: "Architektur & Prototyping",
      subtitle: "Systems & Vibe Coding",
      desc: "Der Wechsel vom Entdecken zum Bauen. Wir etablieren Design-Systeme und überführen Architektur, Tokens und User Flows mithilfe von KI-Agenten in iteratives Rapid Prototyping.",
      icon: <Code className="w-5 h-5" />,
      color: "from-fhgr-petrol/30 to-blue-500/20",
      borderColor: "border-fhgr-petrol/40",
      textColor: "text-fhgr-petrol-light"
    },
    {
      id: "Block 3",
      title: "Ethik, Vertrauen & Agenten",
      subtitle: "Designing FOR AI",
      desc: "Wie entwerfen wir nutzerzentrierte KI? Fokus auf Fairness, Explainable AI (XAI), Bias-Vermeidung, Conversational UX und die ethische Reflektion intelligenter Agenten.",
      icon: <Layers className="w-5 h-5" />,
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      textColor: "text-orange-400"
    }
  ]

  return (
    <div className="w-full h-full bg-[#03080F] text-white overflow-y-auto custom-scrollbar relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fhgr-petrol/10 via-[#03080F] to-[#03080F] fixed pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-8 py-20 relative z-10 flex flex-col min-h-full">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fhgr-petrol/30 bg-fhgr-petrol/10 text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-6">
            <Compass className="w-4 h-4" /> Modulübersicht
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Designing for and with AI
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Dieses Modul untersucht den tiefgreifenden Paradigmenwechsel im Interface Design. 
            Wir lernen KI nicht nur als Werkzeug ("with") zu beherrschen, sondern Interfaces so zu strukturieren, dass KIs sie nahtlos verarbeiten und generieren können ("for").
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {blocks.map((block, idx) => (
            <motion.div 
              key={block.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className={`bg-gradient-to-br ${block.color} ${block.borderColor} border rounded-2xl p-6 relative overflow-hidden flex flex-col`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-10">
                {block.icon}
              </div>
              <div className="w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center mb-4">
                <span className={`font-bold font-mono text-xs ${block.textColor}`}>{idx + 1}</span>
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-1">{block.id}</div>
              <h3 className="text-xl font-bold mb-1">{block.title}</h3>
              <div className={`text-sm font-semibold mb-4 ${block.textColor}`}>{block.subtitle}</div>
              <p className="text-white/60 text-sm leading-relaxed mt-auto">
                {block.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-auto bg-white/5 border border-white/10 p-8 rounded-2xl flex gap-6 items-center flex-col md:flex-row"
        >
          <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-xl bg-fhgr-petrol/20 border border-fhgr-petrol/40">
            <BookOpen className="w-8 h-8 text-fhgr-petrol-light" />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Die "Living Syllabus" Philosophie</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Dieses Kompendium ist selbst ein lebendiger Prototyp! Es wurde exakt mit den Agentic Workflows gebaut, die hier im Kurs gelehrt werden (Stitch, Code-Generierung, React, Tailwind). Die Folien sind Codedokumente. Es wächst iterativ im Zuge der Lehrveranstaltung.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
