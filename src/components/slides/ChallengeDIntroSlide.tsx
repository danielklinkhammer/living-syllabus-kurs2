import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { PlusCircle, Search, Settings } from 'lucide-react'

export default function ChallengeDIntroSlide() {
  const options = [
    { 
      title: "1. Forschung & Analyse", 
      desc: "Ihr durchsucht Relume und Mobbin nach bestehenden komplexen Web-App-Flows (z.B. User-Onboardings, Check-Outs). Analysiert, warum diese Flows genau so aufgebaut sind.",
      icon: <Search className="w-8 h-8 text-fhgr-petrol" />
    },
    { 
      title: "2. Tool-Driven Generation", 
      desc: "Für eigene Szenarien nutzt ihr als Erstes die vorgestellten Werkzeuge: Skizziert die Logik in Whimsical oder Mermaid.js und generiert das Grundgerüst der Sitemaps via Relume.",
      icon: <PlusCircle className="w-8 h-8 text-purple-400" />
    },
    { 
      title: "3. Iteration in Figma", 
      desc: "Importiert die in Schritt 2 generierten Diagramme und Relume-Wireframes in Figma bzw. FigJam. Dort nutzt ihr die Arbeitsfläche, um den Flow manuell weiter zu iterieren und Details auszuarbeiten.",
      icon: <Settings className="w-8 h-8 text-orange-400" />
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-5xl w-full mx-auto relative z-10 text-center">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-fhgr-petrol to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg mb-6 shadow-fhgr-petrol/20">
             <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge D · Part 1</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Die Aufgabenstellung</h2>
          <div className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto mb-8 space-y-4">
            <p>
              <strong>Das Ziel:</strong> Die zielgerichtete Erstellung oder Analyse eines Workflow-Szenarios für komplexe Web-Applikationen.
            </p>
            <p className="text-base text-white/50">
              Ihr könnt euch entweder ein komplett eigenes fiktives Szenario ausdenken (wie z.B. eine E-Commerce Checkout-Route, ein System-as-a-Service (SaaS) Dashboard Onboarding, oder ein Hotel Check-In System), oder ihr sucht euch existierende Flows aus Tools wie Relume oder Mobbin heraus.
            </p>
          </div>
        </motion.div>

        <div className="text-sm font-semibold tracking-widest uppercase text-white/30 mb-6">Wie ihr vorgeht:</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full">
          {options.map((s, idx) => (
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
