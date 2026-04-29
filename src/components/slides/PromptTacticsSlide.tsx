import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { Terminal, Copy, CheckCircle2, ShieldOff, Wind } from 'lucide-react'
import { useState } from 'react'

export default function PromptTacticsSlide() {
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const examples = [
    {
      id: 1,
      title: "Swiss Minimalism",
      desc: "Zwingt die KI in ein stringentes, typografie-fokussiertes Raster.",
      prompt: "Build this as a React component. STRICT INSTRUCTIONS: Use Swiss Minimalism. Rational, grid-strict layout. High white-space. Monochrome palette with exactly one accent color (red). Typography is the primary design element. No drop shadows, no rounded corners, no gradients."
    },
    {
      id: 2,
      title: "Neobrutalism",
      desc: "Zerstört den 'SaaS-Clean-Look' durch rohe, unpolierte Elemente.",
      prompt: "Generate the UI using Neobrutalism. Atmospheric rules: Raw, bold, anti-polished. Use stark black borders (at least 3px), flat bright accent colors (like yellow or teal) on white backgrounds. Visible structure. Negative prompt: No soft shadows, no glassmorphism, NO modern startup vibes."
    },
    {
      id: 3,
      title: "Glassmorphism 2.0",
      desc: "Atmosphärischer Prompt für Tiefe und Hierarchie.",
      prompt: "Implement this using a Glassmorphism 2.0 aesthetic. Key atmosphere: Frosted glass panels, subtle transparency, floating layers. Create depth through overlapping cards and soft, dark ambient gradients. Negative prompt: No solid flat backgrounds, no high-contrast harsh borders."
    },
    {
      id: 4,
      title: "Spatial / Tactile UI",
      desc: "Apple Vision Pro inspiriert, für weiche Tiefe und Clay-Vibes.",
      prompt: "Design this interface using a Spatial/Tactile UI aesthetic. Atmospheric rules: Softer claymorphism, highly tactile surfaces, subtle inner shadows, translucent overlapping panels. Create polished 3D-like depth without harsh vectors. Negative prompt: No flat vector brutalism, no harsh #000000 borders, no high-contrast generic elements."
    },
    {
      id: 5,
      title: "Developer Core",
      desc: "Tech-Lineare Ästhetik (CLI Vibes & Dark Mode).",
      prompt: "Generate a Developer tool aesthetic UI. Atmospheric rules: Cyberpunk precision, true black background, highly minimal high-contrast silver/gray text. Glowing neon thin borders. Technical precision, monospace data representation. Negative prompt: No white backgrounds, no soft pastel corporate gradients, no playful shapes."
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative custom-scrollbar">
      <div className="max-w-7xl w-full mx-auto relative z-10 py-12 pt-20">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-12 text-center max-w-3xl mx-auto">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
             <Terminal className="w-4 h-4" /> Agent Prompting
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Design Prompting Guides</h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Um den Lösungsraum in Tools wie Google Stitch oder Cursor effektiv zu steuern, müssen wir die KI zwingen, den generischen Durchschnitt zu verlassen.
          </p>
        </motion.div>

        {/* Top: The Two Core Tactics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
           <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay: 0.1}}>
             <Card variant="glass" className="!p-6 h-full border-orange-500/20 bg-orange-500/5">
                <div className="flex items-center gap-3 mb-3">
                   <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400">
                      <ShieldOff className="w-5 h-5" />
                   </div>
                   <h3 className="font-bold text-white text-lg">Negative Prompting</h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  Sag der KI explizit, was sie <strong>NICHT</strong> tun soll. Da LLMs den Standard-Look präferieren, musst du Standard-Elemente aktiv verbieten. <br/>
                  <span className="inline-block mt-2 px-2 py-1 bg-black/40 text-orange-300 font-mono text-xs rounded">"No drop shadows, no border-radius, no modern corporate vibes"</span>
                </p>
             </Card>
           </motion.div>

           <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay: 0.2}}>
             <Card variant="glass" className="!p-6 h-full border-blue-500/20 bg-blue-500/5">
                <div className="flex items-center gap-3 mb-3">
                   <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                      <Wind className="w-5 h-5" />
                   </div>
                   <h3 className="font-bold text-white text-lg">Atmospheric Prompting</h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  Statt exakte Hex-Werte und Pixel zu diktieren, navigiere den "Latent Space" über <strong>Metaphern und Vibe-Beschreibungen</strong>. Die KI übersetzt Atmosphäre besser in Design-Systeme als starre CSS-Regeln.<br/>
                  <span className="inline-block mt-2 px-2 py-1 bg-black/40 text-blue-300 font-mono text-xs rounded">"Raw, unpolished, floating layers, editorial precision"</span>
                </p>
             </Card>
           </motion.div>
        </div>

        {/* Bottom: Concrete Starter Prompts */}
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.3}} className="space-y-4">
           <h3 className="text-xl font-bold text-white mb-6">Stitch / Cursor Starter-Prompts</h3>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {examples.map((ex, idx) => (
                 <Card key={ex.id} variant="default" delay={0.4 + (idx * 0.1)} className="flex flex-col !p-6 border-white/10 group">
                    <h4 className="font-bold text-fhgr-beige mb-2">{ex.title}</h4>
                    <p className="text-xs text-white/40 mb-4 h-8">{ex.desc}</p>
                    
                    <div className="relative mt-auto">
                       <div className="bg-black/50 border border-white/5 p-4 rounded-lg text-xs font-mono text-white/70 leading-relaxed h-48 overflow-y-auto custom-scrollbar">
                          {ex.prompt}
                       </div>
                       
                       <button
                         onClick={() => copyToClipboard(ex.prompt, ex.id)}
                         className="absolute top-3 right-3 p-2 bg-white/10 hover:bg-white/20 transition-colors rounded backdrop-blur text-white flex items-center gap-2 group-hover:opacity-100 lg:opacity-0"
                         title="Prompt kopieren"
                       >
                         {copiedId === ex.id ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                       </button>
                    </div>
                 </Card>
              ))}
           </div>
        </motion.div>

      </div>
    </div>
  )
}
