import { motion } from 'framer-motion'
import { FileText, Compass, PenTool, Lightbulb } from 'lucide-react'
import SlideLayout from '../layout/SlideLayout'

export default function ChallengeE1VisionSlide() {
  return (
    <SlideLayout>
      <div className="w-full h-full flex flex-col justify-center">
        
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fhgr-petrol/10 border border-fhgr-petrol/30 text-fhgr-petrol-light text-sm font-mono tracking-widest uppercase mb-4">
             <FileText className="w-4 h-4" /> Stop & Think
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-head tracking-tight leading-tight mb-4 text-white">
            Das <span className="text-transparent bg-clip-text bg-gradient-to-r from-fhgr-petrol-light to-fhgr-petrol">VISION.md</span> Manifest
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-light leading-relaxed">
            Vibe Coding hat ein massives Problem: Wer ohne klares Ziel in den Chat tippt, verliert sich in endlosen Refactoring-Schleifen der KI. Bevor ihr euren Agenten öffnet, verfasst ihr in eurem Team ein kurzes, prägnantes "VISION.md" Dokument.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <Lightbulb className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Die Core Idea</h3>
            <p className="text-white/60 text-sm leading-relaxed">Was ist der "Elevator Pitch" eurer Idee? Welches Problem löst die App und warum ist dieser spezifische Prototyp relevant?</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <Compass className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Die Richtung</h3>
            <p className="text-white/60 text-sm leading-relaxed">Auf welchen Pfeiler legt ihr euren Fokus? Baut ihr (1) einen API-schweren AI-Core, (2) ein Motion Vibe UI, oder (3) remixt ihr ein komplexes Template?</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <PenTool className="w-8 h-8 text-fhgr-pink mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Die Referenzen</h3>
            <p className="text-white/60 text-sm leading-relaxed">Sammelt die Links zu euren Inspirationen (z.B. UI-Libraries, Wettbewerber). Welche Design-Systeme und Tech-Stacks gebt ihr der KI fest vor?</p>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl border border-fhgr-pink/30 bg-fhgr-pink/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-fhgr-pink" />
          <div className="flex-1">
            <h4 className="text-xl font-bold text-white mb-2">Next Steps auf dem FigJam-Board</h4>
            <p className="text-white/70 text-sm leading-relaxed font-medium">
              Wenn eure Vision steht, kopiert ihr den Inhalt eurer VISION.md und <strong className="text-white">pinnt ihn prominent auf unser Kurs-FigJam Board.</strong> So wissen alle Teams, an was gearbeitet wird. 
              Zusätzlich legt ihr dieses Dokument später als `VISION.md` in das Root-Verzeichnis eures Projekts, damit Cursors/Claudes Kontext darauf zugreifen kann.
            </p>
          </div>
        </motion.div>

      </div>
    </SlideLayout>
  )
}
