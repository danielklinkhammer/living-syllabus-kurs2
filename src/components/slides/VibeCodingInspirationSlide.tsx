import { motion } from 'framer-motion'
import { Sparkles, Palette, Zap, Box, ExternalLink, Code2 } from 'lucide-react'
import SlideLayout from '../layout/SlideLayout'

export default function VibeCodingInspirationSlide() {
  const libraries = [
    {
      id: 'aceternity',
      name: 'Aceternity UI',
      url: 'https://ui.aceternity.com',
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      color: 'from-purple-500/20 to-fuchsia-500/10',
      borderColor: 'border-purple-500/30',
      description: 'Die #1 Adresse für "Vibe Coding". Hochwertige, komplexe Komponenten mit Next.js, Framer Motion und atemberaubenden WebGL-Shadern (z.B. animierte Auroras, 3D Karten). Alles direkt zum Copy/Paste.'
    },
    {
      id: 'magicui',
      name: 'Magic UI',
      url: 'https://magicui.design',
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      color: 'from-yellow-500/20 to-orange-500/10',
      borderColor: 'border-yellow-500/30',
      description: 'Fokussiert auf Landingpage-Patterns, die man sofort haben will. Animierte Beams, glühende Ränder, Marquee-Slider und extrem smoothe Mikro-Interaktionen.'
    },
    {
      id: '21stdev',
      name: '21st.dev',
      url: 'https://21st.dev',
      icon: <Palette className="w-5 h-5 text-pink-400" />,
      color: 'from-pink-500/20 to-rose-500/10',
      borderColor: 'border-pink-500/30',
      description: 'Die Community-Suchmaschine für UI-Effekte. Hier posten Entwickler ihre krassen Shader (z.B. Matrix-Effekte, Fluid-Simulationen). Perfekt, um sich exotische visuelle Gimmicks zusammenzusuchen.'
    },
    {
      id: 'shadcn',
      name: 'shadcn/ui',
      url: 'https://ui.shadcn.com',
      icon: <Box className="w-5 h-5 text-blue-400" />,
      color: 'from-blue-500/20 to-cyan-500/10',
      borderColor: 'border-blue-500/30',
      description: 'Der absolute Industrie-Standard. Primär für zugängliche System-Komponenten (Buttons, Dialoge), aber auch unverzichtbar als solide stilistische Startrampe, auf der die Shader aufbauen.'
    }
  ]

  return (
    <SlideLayout>
      <div className="w-full h-full flex flex-col justify-center">
        
        <div className="mb-10 text-center mx-auto max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fhgr-accent/10 border border-fhgr-accent/30 text-fhgr-accent text-sm font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(255,107,53,0.15)] mb-4">
             <Code2 className="w-4 h-4" /> Vibe Coding Toolkit
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-head tracking-tight leading-tight mb-4 text-white">
            Copy & Paste <span className="text-transparent bg-clip-text bg-gradient-to-r from-fhgr-accent to-fhgr-petrol">Component Inspiration</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Niemand baut komplexe Shader-Animationen heute noch komplett from scratch. Moderne Frontend-Architektur ("Vibe Coding") bedeutet, exzellente Komponenten per Copy & Paste in den eigenen Code zu ziehen und von der KI anpassen zu lassen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {libraries.map((lib, i) => (
            <motion.div
              key={lib.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
               <a 
                 href={lib.url} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className={`block h-full bg-gradient-to-br ${lib.color} border ${lib.borderColor} rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 relative group overflow-hidden`}
               >
                 {/* Shine effect on hover */}
                 <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[-20deg]" />

                 <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-3">
                     <div className={`w-10 h-10 rounded-xl bg-black/40 border ${lib.borderColor} flex items-center justify-center`}>
                       {lib.icon}
                     </div>
                     <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-colors">
                       {lib.name}
                     </h3>
                   </div>
                   <ExternalLink className="w-5 h-5 text-white/20 group-hover:text-white/60 transition-colors" />
                 </div>
                 
                 <p className="text-sm text-white/60 leading-relaxed font-light">
                   {lib.description}
                 </p>
               </a>
            </motion.div>
          ))}
        </div>

      </div>
    </SlideLayout>
  )
}
