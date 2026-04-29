import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import Card from '../ui/Card'
import { Search, Compass, ExternalLink, Globe2 } from 'lucide-react'

const showcases = [
  {
    title: "Vercel AI Templates",
    desc: "Die Referenz für produktionsbereite AI Next.js Apps. Filtert hier nach Chatbots, RAG (Semantic Search) oder GenAI Video Tools.",
    feature: "Production Ready UIs",
    url: "https://vercel.com/templates?category=ai",
    color: "from-blue-500/10 to-transparent",
    border: "border-blue-500/30",
    icon: <Search className="w-8 h-8 text-blue-400" />
  },
  {
    title: "v0 & Lovable",
    desc: "Schaut euch Community-Generierungen an. Hier seht ihr die wildesten Frontend UI-Demos, komplett von KI für Prompt-Challenges gebaut.",
    feature: "Generative UI Patterns",
    url: "https://v0.dev/chat",
    color: "from-purple-500/10 to-transparent",
    border: "border-purple-500/30",
    icon: <Compass className="w-8 h-8 text-purple-400" />
  },
  {
    title: "Google AI Studio",
    desc: "Fokus auf rohe Model-Capabilities. Testet hier pure Prompts auf extremen Multimodal-Cases (wie Video-Analyse oder Code-Refactoring).",
    feature: "Multimodal & Prompting",
    url: "https://aistudio.google.com/apps?source=showcase&showcaseTag=featured",
    color: "from-orange-500/10 to-transparent",
    border: "border-orange-500/30",
    icon: <Globe2 className="w-8 h-8 text-orange-400" />
  },
  {
    title: "HuggingFace Spaces",
    desc: "Das Open-Source-Paradies. Hier findet ihr oft unpolierte, aber technologisch hochspannende Demos (Gradio/Streamlit) von neuen Modellen.",
    feature: "Open Source Demos",
    url: "https://huggingface.co/spaces",
    color: "from-fhgr-petrol/10 to-transparent",
    border: "border-fhgr-petrol/30",
    icon: <ExternalLink className="w-8 h-8 text-fhgr-petrol" />
  }
]

export default function ChallengeE1ScenariosSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center lg:overflow-hidden relative z-10 w-full max-w-6xl mx-auto">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-10 text-center">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge E.1 · Phase 2</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Gemeinsame AI Exploration</h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
            Die Exploration-Phase ist eine gemeinsame Recherche-Session. Durchsucht die unten stehenden 4 Plattformen nach Inspirationen. 
            <strong> Wählt zwei Beispiele aus</strong>, die euch begeistern (egal ob Use-Case oder starkes UI-Pattern), macht Screenshots davon und pinnt diese mit dem zugehörigen Link direkt zur Diskussion auf unser <strong className="text-white">FigJam-Board</strong>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showcases.map((scenario, i) => (
            <motion.div key={i} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: i * 0.1}}>
              <a href={scenario.url} target="_blank" rel="noreferrer" className="block h-full cursor-pointer">
                <Card 
                  variant="glass"
                  className={`!p-6 flex flex-col h-full border ${scenario.border} bg-gradient-to-br ${scenario.color} group hover:bg-white/5 transition-colors`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 group-hover:scale-110 transition-transform">
                      {scenario.icon}
                    </div>
                    <div className="text-[10px] uppercase font-mono tracking-widest text-fhgr-accent bg-fhgr-petrol/20 px-3 py-1 rounded-full border border-fhgr-petrol/30">
                      {scenario.feature}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-white text-xl mb-2 group-hover:text-fhgr-petrol transition-colors">{scenario.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed flex-1">
                    {scenario.desc}
                  </p>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </SlideLayout>
  )
}
