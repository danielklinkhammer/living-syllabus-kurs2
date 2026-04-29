import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { Sparkles, Palette, FileCode2, Download } from 'lucide-react'

export default function ChallengeWorkflowSlide() {
  const steps = [
    {
      num: "Phase 1", 
      title: "Thema & Struktur", 
      icon: <FileCode2 className="w-4 h-4 text-white/50" />,
      desc: "Wählt ein Thema (spickt dazu gerne in die nächste Lektion 'Dashboard Design'). Überlegt, welche Ansichten & Elemente sinnvoll sind. Schreibt eine sehr präzise Themenbeschreibung als Basis-Prompt."
    },
    {
      num: "Phase 2", 
      title: "Design-Exploration", 
      icon: <Palette className="w-4 h-4 text-white/50" />,
      desc: "Nutzt Tools wie Google Stitch oder Figma Make, um Stile radikal zu explorieren. Wichtig: Nehmt nicht den ersten Wurf! Iteriert die UIs, verfeinert sie und passt sie auf euren Geschmack an."
    },
    {
      num: "Phase 3", 
      title: "Canvas-Erstellung", 
      icon: <Sparkles className="w-4 h-4 text-fhgr-petrol" />,
      desc: "Wählt euren Weg: Vollautomatisiert (Stitch) oder manuell-kontrolliert (Figma Make). Baut eure Matrix auf und iteriert in diesem Canvas die jeweiligen Dashboard-Ansichten aus."
    },
     {
      num: "Phase 4", 
      title: "Dokumentation ableiten", 
      icon: <Download className="w-4 h-4 text-white/50" />,
      desc: "Schaut euch eure fertigen Designs an und leitet daraus aktiv die `design.md` (oder JSON) ab. Dokumentiert den Stil und die Elemente schriftlich direkt als Layer in Figma."
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto custom-scrollbar relative">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12 lg:mt-0 pt-8 pb-12">
        
        {/* Left: Content */}
        <div className="lg:col-span-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge C · Part 2</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Methodik & KI-Pipeline</h2>
            <p className="text-lg text-white/60 leading-relaxed mb-6 max-w-4xl">
              Wir bauen die Dashboards nicht mühsam per Hand, sondern nutzen KI primär zum Erkunden und Aufbauen der Struktur. Der skizzierte Workflow ist ein <strong>möglicher Vorschlag</strong> – ihr dürft auch völlig eigene Pipelines und Custom-Tools anwenden!
            </p>
          </motion.div>
        </div>

        {/* The Pipeline */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
           {steps.map((step, idx) => (
             <Card 
               key={idx}
               delay={0.1 * idx}
               variant="glass"
               className={`!p-5 relative overflow-hidden flex flex-col justify-start h-full ${idx === 2 ? 'border-fhgr-petrol/40 bg-fhgr-petrol/5' : ''}`}
             >
               {idx === 2 && <div className="absolute top-0 right-0 w-32 h-32 bg-fhgr-petrol/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />}
               
               <div className="flex justify-between items-start mb-3">
                 <div className={`text-xs font-mono font-bold px-2 py-1 rounded bg-black/40 border border-white/5 ${idx === 2 ? 'text-fhgr-petrol-light' : 'text-white/50'}`}>
                   {step.num}
                 </div>
                 <div className="p-2 bg-black/30 rounded-lg border border-white/5">
                   {step.icon}
                 </div>
               </div>
               
               <div className="font-bold text-white text-base mb-2 tracking-tight">{step.title}</div>
               <div className="text-xs text-white/50 leading-relaxed">{step.desc}</div>
             </Card>
           ))}
           
          {/* Unified Tool Matrix below Pipeline */}
           <div className="col-span-full mt-2">
            <div className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">Empfohlenes Toolkit</div>
            <div className="flex flex-wrap gap-2">
               <div className="px-3 py-1.5 border border-fhgr-petrol/40 bg-fhgr-petrol/10 rounded-lg flex items-center gap-2 text-xs text-fhgr-petrol-light font-bold shadow-[0_0_15px_rgba(25,188,155,0.15)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> Figma Make 
                  <span className="text-white/40 font-normal ml-1">(Bietet diverse KI-Modelle zum Testen!)</span>
               </div>
               <div className="px-3 py-1.5 border border-white/20 bg-white/5 rounded-lg flex items-center gap-2 text-xs text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Google Stitch 
               </div>
            </div>
          </div>
        </div>

        {/* Right: Embedded Google Stitch Screenshot */}
        <div className="lg:col-span-5 h-full flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
          >
            <div className="absolute top-0 inset-x-0 h-10 bg-black/60 backdrop-blur-md flex items-center px-4 gap-3 z-10 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-[10px] font-mono text-white/50 tracking-wider">Example: Google Stitch (Brutalist UI)</div>
            </div>
            <img 
              src="/images/stitch-brutalist.jpg" 
              alt="Google Stitch Brutalist Design System" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
            />
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
               <Sparkles className="w-3 h-3 text-fhgr-petrol-light" />
               <span className="text-[10px] font-mono text-fhgr-petrol-light">Prompt: "Ich möchte ein brutalist design..."</span>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}
