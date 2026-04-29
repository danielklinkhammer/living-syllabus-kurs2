import { motion } from 'framer-motion'
import { BrainCircuit, AlertTriangle, ShieldX } from 'lucide-react'

export default function StylePromptingSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#060F1A] text-white overflow-y-auto lg:overflow-hidden relative px-6 lg:px-16 pt-16 lg:pt-0">
      <div className="max-w-4xl w-full mx-auto flex flex-col justify-center items-center mt-12 lg:mt-0 pb-12 text-center">
        
        {/* Content */}
        <div className="flex flex-col justify-center items-center w-full">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="text-orange-400 text-xs font-mono uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Design System Bias
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Aesthetic Fixation</h2>
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              LLMs optimieren auf den statistischen "Mittelwert" des Internets. Wenn wir der KI keine strenge visuelle Richtung vorgeben, flacht jeder generierte Screen sofort in einen generischen, austauschbaren <span className="text-orange-300 font-semibold">SaaS-Clean-Look</span> ab.
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              Diese unsichtbare <strong>Data Gravity</strong> sorgt dafür, dass fast alle KI-Modelle von Natur aus ähnliche Layouts, exakt gleiche Abstände und identische Schattierungen wählen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.1}}
              className="p-5 border border-white/10 bg-white/5 rounded-xl"
            >
              <div className="flex justify-center mb-3">
                 <BrainCircuit className="w-5 h-5 text-fhgr-petrol-light" />
              </div>
              <h4 className="font-bold text-white mb-2">Der ML-Mittelwert</h4>
              <p className="text-sm text-white/50 leading-relaxed">
                Modelle suchen stets nach der Lösung mit der höchsten Konfidenz. Das ist im Design meist der harmlose, bewährte Standard-Look ohne Ecken und Kanten.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2}}
              className="p-5 border border-orange-500/20 bg-orange-500/5 rounded-xl"
            >
              <div className="flex justify-center mb-3">
                 <ShieldX className="w-5 h-5 text-orange-400" />
              </div>
              <h4 className="font-bold text-orange-400 mb-2">Die Konsequenz</h4>
              <p className="text-sm text-white/50 leading-relaxed">
                Selbst unser "Living Syllabus" Interface sieht unverkennbar nach KI aus. Die Ästhetik stagniert. Echtes Design gegen den Algorithmus wird zum Akt des <em>bewussten Widerstands</em>.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
