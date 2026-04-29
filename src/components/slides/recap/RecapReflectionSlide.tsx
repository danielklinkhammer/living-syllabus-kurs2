import { motion } from 'framer-motion'
import SlideLayout from '../../layout/SlideLayout'
import { Scale, Image as ImageIcon, Code2 } from 'lucide-react'

export default function RecapReflectionSlide() {
  
  // Helfer-Funktion für die leeren Dot-Voting Skalen
  const renderScale = (title: string, leftLabel: string, rightLabel: string) => (
    <div className="mb-6 last:mb-0">
       <div className="text-[13px] font-bold text-white mb-2">{title}</div>
       <div className="w-full h-1.5 rounded-full bg-white/10 relative my-2">
         {/* Mitte-Markierung als optische Orientierung */}
         <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-0.5 h-3 bg-white/20"></div>
       </div>
       <div className="flex justify-between text-[9px] uppercase tracking-widest text-white/40 font-mono mt-1.5">
         <span>{leftLabel}</span>
         <span>{rightLabel}</span>
       </div>
    </div>
  )

  return (
    <SlideLayout>
      <div className="w-full flex flex-col h-full justify-center py-6">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-8 max-w-4xl">
          <div className="text-orange-400 text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2">
            <Scale className="w-4 h-4" /> Synthese & Dot-Voting
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Reflexion</h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Platziert im FigJam <strong>Dots auf den Skalen</strong>. Wie unterschiedlich habt ihr den Prozess und eure Autorschaft bei <strong>visuellen</strong> Modellen (Image) im Vergleich zu <strong>strukturellen</strong> Modellen (Code) wahrgenommen?
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 w-full flex-1">
          
          {/* Challenge A */}
          <motion.div 
            initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay: 0.1}}
            className="flex-1 bg-black/40 p-6 rounded-2xl border border-pink-500/30 flex flex-col relative overflow-hidden shadow-[0_0_30px_rgba(236,72,153,0.05)]"
          >
             <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-pink-500/20 text-pink-400 rounded-xl flex items-center justify-center border border-pink-500/30 shrink-0">
                   <ImageIcon className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-white">Challenge A</h3>
                   <span className="text-[10px] text-white/40 uppercase font-mono tracking-widest">Image-Based / Visuell</span>
                </div>
             </div>

             <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-6 flex flex-col justify-center">
                {renderScale("1. Workload & Effizienz", "Sehr mühsam", "Reibungslos & Schnell")}
                {renderScale("2. Ergebnis & Qualität", "Eher Unbrauchbar", "Atemberaubend")}
                {renderScale("3. Kontrolle über Details", "Purer Zufall (Lotto)", "Exakte Befolgung")}
                {renderScale("4. Tool-Kollaboration", "Kampf gegen die KI", "Kooperativer Partner")}
                {renderScale("5. Autorschaft", "Ein reines KI-Werk", "Mein eigenes Design")}
             </div>
          </motion.div>

          {/* Challenge B */}
          <motion.div 
            initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay: 0.2}}
            className="flex-1 bg-black/40 p-6 rounded-2xl border border-fhgr-petrol-light/30 flex flex-col relative overflow-hidden shadow-[0_0_30px_rgba(131,197,190,0.05)]"
          >
             <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-fhgr-petrol-light/20 text-fhgr-petrol-light rounded-xl flex items-center justify-center border border-fhgr-petrol-light/30 shrink-0">
                   <Code2 className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-white">Challenge B</h3>
                   <span className="text-[10px] text-white/40 uppercase font-mono tracking-widest">Code-Based / Landingpage</span>
                </div>
             </div>

             <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-6 flex flex-col justify-center">
                {renderScale("1. Workload & Effizienz", "Sehr mühsam", "Reibungslos & Schnell")}
                {renderScale("2. Ergebnis & Qualität", "Eher Unbrauchbar", "Atemberaubend")}
                {renderScale("3. Kontrolle über Details", "Purer Zufall (Lotto)", "Exakte Befolgung")}
                {renderScale("4. Tool-Kollaboration", "Kampf gegen die KI", "Kooperativer Partner")}
                {renderScale("5. Autorschaft", "Ein reines KI-Werk", "Mein eigenes Design")}
             </div>
          </motion.div>

        </div>
      </div>
    </SlideLayout>
  )
}
