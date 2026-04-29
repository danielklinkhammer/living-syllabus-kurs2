import { motion } from 'framer-motion'
import SlideLayout from '../../layout/SlideLayout'
import { Brain, Zap, Paintbrush, Layers } from 'lucide-react'

export default function RecapFoundationSlide() {
  const models = [
    { 
      id: "Speed & Scale", title: "Speed & Kontext", 
      desc: "Rasante Performance. Diese Modelle können in Sekunden Millionen von Dokumenten einlesen und Antworten liefern.", 
      sota: "Gemini 1.5 Flash, Claude Haiku", icon: <Zap className="w-5 h-5" />, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20"
    },
    { 
      id: "Deep Logic", title: "Coding & Reasoning", 
      desc: "Schwere Modelle für das Programmieren und logische Herleiten. Sie 'denken' (CoT), bevor sie das finale Ergebnis ausgeben.", 
      sota: "Claude 3.5 Sonnet, OpenAI o1", icon: <Brain className="w-5 h-5" />, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20"
    },
    { 
      id: "Creative", title: "Visuelle Synthese", 
      desc: "Modelle, die sich exklusiv auf visuelle Ausgaben (Bilder, Layouts, 3D) spezialisiert haben und rohen Text in Ästhetik übersetzen.", 
      sota: "Nanobanana, DALL-E, Midjourney", icon: <Paintbrush className="w-5 h-5" />, color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20"
    },
    { 
      id: "Omni 2026", title: "Multimodale Foundation", 
      desc: "Die Zukunft: Riesige Foundation Models, die nativ alle oben genannten Fähigkeiten (Text, Bild, Video, Audio) integrieren.", 
      sota: "Gemini Pro, GPT-4o, Claude Opus", icon: <Layers className="w-5 h-5" />, color: "text-fhgr-petrol-light", bg: "bg-fhgr-petrol/10", border: "border-fhgr-petrol/30"
    }
  ]

  return (
    <SlideLayout>
      <div className="w-full flex flex-col h-full justify-center">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-10 max-w-4xl">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Modell-Landschaft</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Kategorien & Einsatzzwecke</h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Es gibt nicht "die eine KI". Der Markt teilt sich heute in hoch spezialisierte Kategorien auf, die zusammen das Rückgrat für komplexe, multimodale Erlebnisse bilden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {models.map((model, i) => (
            <motion.div 
              key={model.id}
              initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1 * i}}
              className="bg-black/30 p-6 rounded-2xl border border-white/10 relative overflow-hidden flex items-start gap-5 hover:bg-white/5 transition-colors"
            >
               <div className={`p-4 rounded-xl ${model.bg} ${model.border} border shrink-0 mt-1 shadow-lg`}>
                 <div className={model.color}>{model.icon}</div>
               </div>
               
               <div className="flex-1">
                 <div className="flex items-center gap-3 mb-2">
                   <h3 className="text-xl font-bold text-white">{model.title}</h3>
                   <span className="text-[10px] uppercase font-mono tracking-widest text-white/40 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">{model.id}</span>
                 </div>
                 <p className="text-white/60 text-sm leading-relaxed mb-4">
                   {model.desc}
                 </p>
                 <div className="flex items-start md:items-center flex-col md:flex-row gap-1.5 md:gap-2">
                   <span className="text-[10px] text-white/30 uppercase font-mono tracking-widest">Marktführer:</span>
                   <span className={`text-xs font-medium ${model.color}`}>{model.sota}</span>
                 </div>
               </div>
            </motion.div>
          ))}
        </div>

      </div>
    </SlideLayout>
  )
}
