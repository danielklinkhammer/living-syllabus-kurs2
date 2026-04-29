import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { PlugZap, Layers, Code2, Sparkles, Blocks } from 'lucide-react'

export default function AgentSkillsSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative custom-scrollbar">
      <div className="max-w-7xl w-full mx-auto relative z-10 py-12 pt-20">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-12 text-center max-w-3xl mx-auto">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
             <PlugZap className="w-4 h-4" /> The Next Evolution
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Agent Skills & Plugins</h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Prompting ist der Versuch, ein Modell mit Wörtern zu lenken. <strong className="text-white/80">Skills</strong> hingegen rüsten das Modell mit fest verdrahteten, professionellen Fähigkeiten aus. Sie verankern visuelle Divergenz tiefgreifend im System.
          </p>
        </motion.div>

        {/* Top: Concept Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
           <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay: 0.1}}>
             <Card variant="glass" className="h-full !p-8 border-white/5 bg-white/[0.02]">
                <h3 className="font-bold text-white text-xl mb-4 flex items-center gap-2 opacity-50">
                   <Layers className="w-5 h-5" /> 1. Standard Prompting
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  Der User beschreibt in Textform, wie das Interface aussehen soll (z.B. "Nutze Grid-Layouts, baue es wie Swiss Minimalism"). Das Modell *schätzt* basierend auf seinem Latent Space, wie das umgesetzt werden könnte. Hohe Fehlerquote bei komplexer UI.
                </p>
             </Card>
           </motion.div>

           <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay: 0.2}}>
             <Card variant="glass" className="h-full !p-8 border-fhgr-petrol/30 bg-gradient-to-br from-fhgr-petrol/10 to-transparent relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                   <PlugZap className="w-24 h-24" />
                </div>
                <h3 className="font-bold text-white text-xl mb-4 flex items-center gap-2">
                   <PlugZap className="w-5 h-5 text-fhgr-petrol-light" /> 2. Agent Skills
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  Ein referenziertes Modulpaket (oft Code + strenge System-Prompts). Ein Skill bringt dem Modell beispielsweise *nativ* bei, wie man saubere React-Komponenten baut oder wie exakt ein spezifisches Design System aufgebaut ist. Der Agent muss nicht mehr raten – er *weiß* es.
                </p>
             </Card>
           </motion.div>
        </div>

        {/* Bottom: Industry Standard Skills */}
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.3}}>
           <h3 className="text-xl font-bold text-white mb-6">Führende Industrie-Praktiken</h3>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              <Card variant="default" delay={0.4} className="flex flex-col !p-6 border-white/10 relative overflow-hidden">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                       <Sparkles className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-purple-300">Claude Frontend Skills</h4>
                 </div>
                 <p className="text-sm text-white/50 leading-relaxed">
                   Anthropic erlaubt es Claude, durch vordefinierte React/Tailwind-Skills nativ Artefakte zu iterieren. Anstatt dem Modell mühsam CSS erklären zu müssen, besitzt es den "Frontend Skill" und baut fehlerfreies UI-Markup.
                 </p>
              </Card>

              <Card variant="default" delay={0.5} className="flex flex-col !p-6 border-white/10 relative overflow-hidden">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                       <Blocks className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-indigo-300">Figma MCP Skills</h4>
                 </div>
                 <p className="text-sm text-white/50 leading-relaxed">
                   Der Figma MCP Server bietet explizite "Skills", die Agenten helfen, Tools richtig zu nutzen. Ein Skill orchestriert z.B., wie Code Connect Komponenten gelesen und mit dem Vector-Canvas abgeglichen werden.
                 </p>
              </Card>

              <Card variant="default" delay={0.6} className="flex flex-col !p-6 border-white/10 relative overflow-hidden">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400">
                       <Code2 className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-orange-300">OpenAI Codex Skills</h4>
                 </div>
                 <p className="text-sm text-white/50 leading-relaxed">
                   Entwickler-zentrierte Workflow-Erweiterungen. Codex (oder Cursor) laden Design-System-Instruktionen tief in ihren System-Kontext. So wird die Stil-Divergenz nicht durch Einzeiler-Prompts, sondern durch "harte" Architekturvorgaben erzwungen.
                 </p>
              </Card>

           </div>
        </motion.div>

      </div>
    </div>
  )
}
