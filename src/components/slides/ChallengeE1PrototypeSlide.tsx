import { motion } from 'framer-motion'
import { Rocket, Sparkles, Cpu, Wand2 } from 'lucide-react'
import SlideLayout from '../layout/SlideLayout'
import Card from '../ui/Card'

export default function ChallengeE1PrototypeSlide() {
  return (
    <SlideLayout>
      <div className="w-full h-full flex flex-col justify-center">
        
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fhgr-petrol/10 border border-fhgr-petrol/30 text-fhgr-petrol-light text-sm font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(131,197,190,0.15)] mb-4">
             <Rocket className="w-4 h-4" /> Vibe Coding in Action
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-head tracking-tight leading-tight mb-4 text-white">
            Der <span className="text-transparent bg-clip-text bg-gradient-to-r from-fhgr-petrol-light to-fhgr-petrol">KI-App-Prototyp</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-light leading-relaxed">
            Euer Ziel ist kein simples Wireframe mehr. Testet aktiv eure Grenzen (und die der KI) beim "Vibe Coding". Baut einen echten "Advanced Prototype", der technische Machbarkeit mit modernster Frontend-Ästhetik vereint. Legt den Fokus eures Projekts auf eine dieser drei Richtungen:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
             <Card variant="glass" className="h-full border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                     <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">1. Die Funktion (AI Core)</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Setzt den Fokus auf eine starke KI-Interaktion. Integriert eine komplexe Logik, nutzt API-Anbindungen (z.B. Vision zur Bildanalyse) oder entwerft einen Chat-Flow mit eigenen System-Prompts.
                  </p>
                </div>
             </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
             <Card variant="glass" className="h-full border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                     <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">2. Der Vibe (Motion & UI)</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Fokus auf das Frontend. Zieht euch hochkomplexe Komponenten, interaktive WebGL-Shader oder geniale Scroll-Landingpages (z.B. von Aceternity) in euren Code und lasst die KI sie anpassen.
                  </p>
                </div>
             </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
             <Card variant="glass" className="h-full border border-orange-500/30 bg-orange-500/5 hover:bg-orange-500/10 transition-colors">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
                     <Wand2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">3. Der Template-Remix</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Statt bei Null zu starten, clont ihr einen starken Vercel-Starterkit oder ein gigantisches v0-Interface und remixt dieses mit Claude/Cursor rigoros zu eurem eigenen Produkt. 
                  </p>
                </div>
             </Card>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
          className="mt-10 px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white/50 text-sm italic border-l-4 border-l-fhgr-petrol"
        >
          <strong>Wichtiges Mindset:</strong> Es muss am Ende nicht alles 100% verlässlich funktionieren! Der Prototyp ist ein Experimentierfeld. Versucht Dinge einzubauen, vor denen ihr ohne KI zurückgeschreckt wärt.
        </motion.div>

      </div>
    </SlideLayout>
  )
}
