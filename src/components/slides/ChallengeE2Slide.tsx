import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { TerminalSquare, GitBranch, Globe, Rocket } from 'lucide-react'

export default function ChallengeE2Slide() {
  const steps = [
    { 
      title: "1. The Pro Stack", 
      desc: "Exportiert euren Code aus dem AI Studio, v0 oder Lovable. Öffnet ihn in einer echten IDE (VS Code oder Cursor) und studiert die Architektur.",
      icon: <TerminalSquare className="w-8 h-8 text-blue-400" />
    },
    { 
      title: "2. Version Control", 
      desc: "Legt ein eigenes GitHub Repository an. Initialisiert lokales Git, commitet euren Code und pushed ihn auf euren eigenen Branch.",
      icon: <GitBranch className="w-8 h-8 text-white" />
    },
    { 
      title: "3. Deployment", 
      desc: "Verbindet euer GitHub Repo mit Vercel oder Netlify. Konfiguriert die Build-Settings und publiziert das Projekt als echte Live-URL.",
      icon: <Globe className="w-8 h-8 text-fhgr-petrol" />
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-5xl w-full mx-auto relative z-10 text-center">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mb-6 shadow-indigo-500/20">
             <Rocket className="w-8 h-8 text-white" />
          </div>
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge E.2 · Optional</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Going Live!</h2>
          <div className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto mb-8 space-y-4">
            <p>
              <strong>Das Ziel:</strong> Wir verlassen die gemütliche "One-Click-Publish" Komfortzone von Sandbox-Tools. Echte Projekte erfordern einen echten Production-Flow.
            </p>
            <p className="text-base text-white/50">
              Eure letzte Challenge ist es, euren KI-App-Prototypen manuell ins Netz zu hängen. Wendet euer Wissen aus dem <em>Tech für Designer</em> Block an: Nutzt das Terminal, verwaltet euren Code per Git und durchlauft eine echte Vercel CI/CD Pipeline.
            </p>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl mt-6 text-left">
              <p className="text-sm text-white/60">
                <strong className="text-white/80">Disclaimer (Optionale Challenge):</strong> Der direkte Einsatz von AI-gestützten Scripts in der lokalen Command Line oder der IDE erfordert Vorsicht. Ihr solltet ungefähr verstehen, welchen Code das AI Studio dort generiert. Seid ihr sicher mit den Lektionen <em>"Tech Stack"</em> & <em>"Tech für Designer"</em>? Prima! Wenn nicht, bleibt in der sicheren Sandbox.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="text-sm font-semibold tracking-widest uppercase text-white/30 mb-6">Der Hardcore Deployment Flow:</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full mb-10">
          {steps.map((s, idx) => (
            <Card 
              key={idx}
              delay={0.1 * idx}
              variant="glass"
              className="!p-6 flex flex-col items-center text-center group hover:bg-white/5 transition-colors"
            >
              <div className="mb-4 p-4 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>
        

      </div>
    </div>
  )
}
