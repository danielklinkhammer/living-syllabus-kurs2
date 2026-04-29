import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function DesignSystemReferenceSlide() {
  const examples = [
    { name: "Material 3", creator: "Google", use: "Dynamic Color, Adaptive", link: "m3.material.io" },
    { name: "HIG", creator: "Apple", use: "Platform Patterns, SF Symbols", link: "developer.apple.com/design" },
    { name: "shadcn/ui", creator: "Open Source", use: "Tailwind, Copy-Paste", link: "ui.shadcn.com" },
    { name: "Carbon", creator: "IBM", use: "Enterprise, Accessibility", link: "carbondesignsystem.com" },
    { name: "Spectrum", creator: "Adobe", use: "Creative Cloud, Multi-Platform", link: "spectrum.adobe.com" },
    { name: "Fluent 2", creator: "Microsoft", use: "Windows 11, Office 365", link: "fluent2.microsoft.design" }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto custom-scrollbar relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fhgr-petrol/5 via-transparent to-transparent pointer-events-none fixed" />

      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 lg:mt-0">
        
        <div className="lg:col-span-12 flex flex-col justify-center text-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Die Goldstandards 2026</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Referenz-Systeme</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-12 max-w-2xl mx-auto">
              Warum das Rad neu erfinden? Die Architektur von UI-Fundamenten wurde von Tech-Giganten und der Open Source Community bereits gelöst. Lasst euch von diesen Standards inspirieren.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {examples.map((ex, idx) => (
              <motion.a 
                initial={{opacity:0, scale:0.95, y:10}}
                animate={{opacity:1, scale:1, y:0}}
                transition={{delay: 0.1 * idx}}
                href={`https://${ex.link}`} 
                target="_blank" 
                rel="noreferrer" 
                key={idx} 
                className="p-6 text-left rounded-2xl bg-white/5 border border-white/10 hover:border-fhgr-petrol/50 hover:bg-white/10 transition-colors block group shadow-lg"
              >
                <div className="flex justify-between items-start mb-2 w-full">
                  <div className="text-xs text-fhgr-petrol-light font-mono tracking-widest uppercase">{ex.creator}</div>
                  <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-fhgr-petrol-light transition-colors" />
                </div>
                <div className="font-bold text-white mb-2 text-2xl">{ex.name}</div>
                <div className="text-sm text-white/50 mb-4">{ex.use}</div>
                <div className="text-xs text-white/30 font-mono mt-auto">{ex.link}</div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
