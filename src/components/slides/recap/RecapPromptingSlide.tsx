import { motion } from 'framer-motion'
import SlideLayout from '../../layout/SlideLayout'
import { Search, Map, Lightbulb, Package, BarChart3, Fingerprint } from 'lucide-react'

export default function RecapPromptingSlide() {
  const lifecycle = [
    {
      phase: "1. Discover", name: "Beobachten", icon: <Search className="w-5 h-5" />, color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
      content: [
        { t: "Knowledge-Base-Analyse", d: "Gemini 1.5 Pro oder NotebookLM synthetisieren riesige Mengen an User-Interviews." },
        { t: "Automatisierte Synthese", d: "KI erkennt Muster, die menschliche Forscher übersehen würden." }
      ]
    },
    {
      phase: "2. Define", name: "Spezifizieren", icon: <Map className="w-5 h-5" />, color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
      content: [
        { t: "Reasoning-Strategie", d: "Einsatz von o1 für tiefgründige Personas & logische Problem-Statements." },
        { t: "Insight-to-Requirement", d: "Auto-Generierung von Backlogs aus den Research-Transkripten." }
      ]
    },
    {
      phase: "3. Develop", name: "Ideen entwickeln", icon: <Lightbulb className="w-5 h-5" />, color: "text-green-400 border-green-500/30 bg-green-500/10",
      content: [
        { t: "Kreative Heuristik", d: "KI als Sparringspartner für Ideengenerierung aus multimodalen Inputs." },
        { t: "Rapid Moodboarding", d: "Schnelle visuelle Exploration via Text-to-Image (Nanobanana/Midjourney)." }
      ]
    },
    {
      phase: "4. Deliver", name: "Prototyping", icon: <Package className="w-5 h-5" />, color: "text-orange-400 border-orange-500/30 bg-orange-500/10",
      content: [
        { t: "Generative UI", d: "v0.dev oder Lovable erstellen interaktive High-Fidelity UI aus Low-Fi Skizzen." },
        { t: "Layout Automatisierung", d: "Auto-Befüllung mit Real-Content Mockup-Daten statt Lorem Ipsum." }
      ]
    },
    {
      phase: "5. Evaluate", name: "Testen", icon: <BarChart3 className="w-5 h-5" />, color: "text-red-400 border-red-500/30 bg-red-500/10",
      content: [
        { t: "Automated Usability", d: "KI-Agenten prüfen UI basierend auf Heuristiken (z.B. nach Nielsen)." },
        { t: "Sentiment & Heatmaps", d: "Vorhersage von visueller Hierarchie noch bevor ein Mensch testet." }
      ]
    }
  ]

  return (
    <SlideLayout>
      <div className="w-full flex flex-col h-full justify-center">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-8 max-w-5xl">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">UX Lifecycle</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Orchestrierung statt manueller Arbeit</h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Der UX-Lifecycle wandelt sich drastisch. Er entwickelt sich von einer Kette manueller Schritte hin zu einem asynchronen Netz aus KI-unterstützten Micro-Services. Der Designer wird zum Curator.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          
          {/* Top Row: Discover, Define, Develop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {lifecycle.slice(0, 3).map((step) => (
              <div 
                key={step.phase}
                className="bg-[#0b111a] border border-white/10 rounded-2xl flex flex-col"
              >
                <div className={`p-3 border-b border-white/5 bg-gradient-to-br from-white/5 to-transparent flex items-center gap-3`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${step.color}`}>
                    {step.icon}
                  </div>
                  <div className="flex items-center">
                    <h3 className="font-bold text-white text-[13px] tracking-wide leading-tight">{step.name}</h3>
                  </div>
                </div>
                
                <div className="p-3 flex flex-col gap-2">
                  {step.content.map((item, j) => (
                    <div key={j} className="bg-black/40 p-2.5 rounded-lg border border-white/5 relative flex-1">
                       <h4 className="text-[11px] font-bold text-white/80 mb-0.5">{item.t}</h4>
                       <p className="text-[10px] text-white/50 leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: Deliver, Evaluate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-[80%] mx-auto relative">
            {lifecycle.slice(3, 5).map((step) => (
              <div 
                key={step.phase}
                className="bg-[#0b111a] border border-white/10 rounded-2xl flex flex-col"
              >
                <div className={`p-3 border-b border-white/5 bg-gradient-to-br from-white/5 to-transparent flex items-center gap-3`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${step.color}`}>
                    {step.icon}
                  </div>
                  <div className="flex items-center">
                    <h3 className="font-bold text-white text-[13px] tracking-wide leading-tight">{step.name}</h3>
                  </div>
                </div>
                
                <div className="p-3 flex flex-col gap-2">
                  {step.content.map((item, j) => (
                    <div key={j} className="bg-black/40 p-2.5 rounded-lg border border-white/5 relative flex-1">
                       <h4 className="text-[11px] font-bold text-white/80 mb-0.5">{item.t}</h4>
                       <p className="text-[10px] text-white/50 leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}} className="mt-4 flex items-center gap-3 justify-center text-sm text-fhgr-beige font-medium">
          <Fingerprint className="w-5 h-5 text-fhgr-petrol-light" />
          <p>Deine neue Rolle: <span className="text-white italic">"Manager der Agenten"</span> statt reiner Ausführer.</p>
        </motion.div>

      </div>
    </SlideLayout>
  )
}
