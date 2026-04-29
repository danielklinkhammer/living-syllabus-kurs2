import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { Palette, Cuboid, Network, BookMarked, Check, X } from 'lucide-react'

export default function DesignSystemSlide() {
  const layers = [
    { 
      name: "1. Design Tokens (DNA)", 
      desc: "Die kleinsten unteilbaren Design-Entscheidungen (Farben, Typografie, Spacing, Shadows).", 
      example: "z.B. --color-primary: #3B82F6", 
      icon: <Palette className="w-5 h-5 text-fhgr-petrol-light" />,
      visual: (
        <div className="flex gap-4 items-center pl-1 h-[80px]">
          <div className="flex gap-1.5">
            <div className="w-8 h-8 rounded-full bg-blue-500 shadow-sm border border-white/10" />
            <div className="w-8 h-8 rounded-full bg-purple-500 shadow-sm border border-white/10" />
            <div className="w-8 h-8 rounded-full bg-emerald-500 shadow-sm border border-white/10" />
            <div className="w-8 h-8 rounded-full bg-rose-500 shadow-sm border border-white/10" />
          </div>
          <div className="h-10 w-px bg-white/10" />
          <div className="flex flex-col">
            <span className="text-lg font-bold font-serif leading-none tracking-tight opacity-90">Inter Display</span>
            <span className="text-xs font-mono text-white/40 mt-1">400, 500, 700</span>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <div className="flex items-end gap-2 pb-0.5">
            <div className="w-5 h-5 bg-white/10 rounded-sm shadow-sm" />
            <div className="w-8 h-8 bg-white/10 rounded-md shadow-md" />
            <div className="w-10 h-10 bg-white/20 rounded-lg shadow-xl" />
          </div>
        </div>
      )
    },
    { 
      name: "2. Components (Bausteine)", 
      desc: "Wiederverwendbare UI-Elemente wie Buttons, Inputs, Cards, Avatars.", 
      example: "z.B. <PrimaryButton />", 
      icon: <Cuboid className="w-5 h-5 text-purple-400" />,
      visual: (
        <div className="flex gap-4 items-center pl-1 h-[80px]">
          <button className="bg-blue-600 hover:bg-blue-500 text-white rounded-md text-sm px-5 py-2.5 font-medium shadow-sm border border-blue-400/50 transition-colors">Primary</button>
          <button className="bg-white/5 hover:bg-white/10 text-white rounded-md text-sm px-5 py-2.5 font-medium border border-white/20 transition-colors">Secondary</button>
          <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-full border border-white/10 ml-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 border border-white/20 shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
          </div>
          <div className="bg-orange-500/10 text-orange-400 px-4 py-2 rounded-md text-sm border border-orange-500/20 font-medium">Status Badge</div>
        </div>
      )
    },
    { 
      name: "3. Pattern Library (Grammatik)", 
      desc: "Zusammengesetzte Layouts und Flows: Login-Flow, Navigation, Forms.", 
      example: "z.B. Checkout-Workflow", 
      icon: <Network className="w-5 h-5 text-green-400" />,
      visual: (
        <div className="flex gap-6 items-center pl-1 h-[80px]">
          {/* Wireframe 1: Login */}
          <div className="flex flex-col gap-2 w-40 p-3 rounded-lg border border-white/10 bg-black/50 shadow-md">
            <div className="w-16 h-2 bg-white/30 rounded-full mb-1" />
            <div className="w-full h-6 bg-white/5 rounded border border-white/10" />
            <div className="w-full h-6 bg-white/5 rounded border border-white/10" />
            <div className="w-full h-6 bg-blue-600 rounded mt-1 opacity-90 shadow-sm" />
          </div>
          {/* Wireframe 2: Card List */}
          <div className="flex flex-col gap-2 w-48 p-3 rounded-lg border border-white/10 bg-black/50 shadow-md h-[96px] overflow-hidden">
            <div className="w-20 h-2 bg-white/30 rounded-full mb-1" />
            <div className="flex gap-2 items-center bg-white/5 p-2 rounded border border-white/5">
              <div className="w-8 h-8 rounded-full bg-white/20 shrink-0" />
              <div className="flex flex-col gap-1.5 flex-1">
                 <div className="w-full h-1 bg-white/30 rounded-full" />
                 <div className="w-2/3 h-1 bg-white/10 rounded-full" />
              </div>
            </div>
            <div className="flex gap-2 items-center bg-white/5 p-2 rounded border border-white/5">
              <div className="w-8 h-8 rounded-full bg-white/20 shrink-0" />
              <div className="flex flex-col gap-1.5 flex-1">
                 <div className="w-full h-1 bg-white/30 rounded-full" />
                 <div className="w-1/2 h-1 bg-white/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      name: "4. Dokumentation", 
      desc: "Die Spielregeln: Guidelines, Dos/Don'ts, Best Practices & Accessibility.", 
      example: "z.B. 'Nur 1 Primary Button pro View'", 
      icon: <BookMarked className="w-5 h-5 text-fhgr-accent" />,
      visual: (
        <div className="flex gap-6 pl-1 h-[80px]">
          <div className="flex flex-col items-start gap-2 bg-green-500/10 border border-green-500/20 px-4 py-3 rounded-lg relative overflow-hidden w-52 transform transition hover:scale-105">
            <div className="absolute top-0 right-0 p-1.5 bg-green-500/20 rounded-bl-lg"><Check className="w-4 h-4 text-green-400" /></div>
            <button className="bg-blue-600 text-white rounded text-xs px-4 py-2 font-medium mt-1">Confirm Changes</button>
            <div className="text-xs text-green-400/90 leading-tight">Ein Primary Action Button pro State/View.</div>
          </div>
          <div className="flex flex-col items-start gap-2 bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-lg relative overflow-hidden w-52 transform transition hover:scale-105">
             <div className="absolute top-0 right-0 p-1.5 bg-red-500/20 rounded-bl-lg"><X className="w-4 h-4 text-red-400" /></div>
             <div className="flex gap-2 mt-1">
               <button className="bg-blue-600 text-white rounded text-xs px-3 py-2 font-medium">Save Post</button>
               <button className="bg-blue-600 text-white rounded text-xs px-3 py-2 font-medium">Send Live</button>
             </div>
             <div className="text-xs text-red-400/90 leading-tight">Niemals 2 Primaries konkurrierend darstellen.</div>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto custom-scrollbar relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fhgr-petrol/5 via-transparent to-transparent pointer-events-none fixed" />

      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 mt-12 lg:mt-0">
        
        <div className="flex flex-col justify-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Sitzung 3 · Design Systems Deep Dive</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Die Anatomie der Systeme</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-3xl">
              Ein Design System ist kein einfaches UI-Kit in Figma – es ist ein lebendiges Ökosystem aus ineinandergreifenden Regeln, Bausteinen und Codedefinitionen, das Interaktionen über Plattformen hinweg standardisiert.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {layers.map((layer, idx) => (
              <Card 
                key={idx}
                variant="glass"
                delay={0.1 * idx}
                className="!p-6 w-full text-left"
              >
                <div className="flex gap-5 items-start w-full">
                  <div className="mt-1 p-3 rounded-xl bg-black/30 border border-white/5 shadow-inner shrink-0">
                    {layer.icon}
                  </div>
                  <div className="flex-1 min-w-0 text-left mt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="font-semibold text-fhgr-beige text-xl">{layer.name}</div>
                    </div>
                    <div className="text-sm text-white/50 mb-4">{layer.desc}</div>
                    
                    <div className="flex flex-col gap-4 w-full bg-black/30 p-4 rounded-xl border border-white/5 overflow-hidden">
                      <div className="w-full overflow-hidden flex items-center h-[100px]">
                        {layer.visual}
                      </div>
                      <div className="text-xs text-fhgr-petrol-light font-mono bg-fhgr-petrol/5 px-3 py-2 rounded-lg border border-fhgr-petrol/20 inline-block w-fit">
                        {layer.example}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
