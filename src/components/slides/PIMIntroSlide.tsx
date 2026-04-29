import { motion } from 'framer-motion'
import { Brain, Search, Mail, FileText, Sparkles } from 'lucide-react'
import SlideLayout from '../layout/SlideLayout'
import Card from '../ui/Card'

export default function PIMIntroSlide() {
  return (
    <SlideLayout>
      <div className="w-full h-full flex flex-col justify-center">
        
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fhgr-accent/10 border border-fhgr-accent/30 text-fhgr-accent text-sm font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(255,107,53,0.15)] mb-4">
             <Brain className="w-4 h-4" /> Personal Information Management
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-head tracking-tight leading-tight mb-4 text-white">
            PIM im <span className="text-transparent bg-clip-text bg-gradient-to-r from-fhgr-accent to-fhgr-petrol">KI-Zeitalter</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl font-light leading-relaxed">
            Personal Information Management (PIM) beschäftigt sich damit, wie wir unsere tägliche Informationsflut organisieren. Durch lokale KI-Agenten erhält dieses Thema eine völlig neue Dimension für Designer und Knowledge Worker.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
             <Card variant="glass" className="h-full border border-white/10 bg-white/5">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Search className="w-5 h-5 text-fhgr-petrol-light" /> Was ist PIM?
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    PIM umfasst das Sammeln, Speichern, Verwalten und Abrufen der persönlichen digitalen Informationen – von E-Mails über PDFs und Vorlesungsfolien bis hin zu eigenen Notizen. Ziel ist es, Wissen genau dann parat zu haben, wenn man es braucht.
                  </p>
                </div>
             </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
             <Card variant="glass" className="h-full border border-fhgr-accent/30 bg-fhgr-accent/5 shadow-[0_0_20px_rgba(255,107,53,0.1)]">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-white">
                    <Sparkles className="w-5 h-5 text-fhgr-accent" /> Warum ist das essenziell?
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Als Designer nutzen wir den Computer als unsere zentrale kreative Arbeitsstation. Wenn wir KI effektiv nutzen wollen, müssen wir genau wissen, <em>wo</em> und <em>wie</em> unsere Daten liegen, damit intelligente Assistenten nahtlos darauf zugreifen können.
                  </p>
                </div>
             </Card>
          </motion.div>

        </div>

        {/* Die KI-Agenten Rolle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3 }}
          className="bg-black/30 border border-fhgr-petrol/20 rounded-2xl p-6"
        >
           <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
             <Brain className="w-5 h-5 text-fhgr-petrol-light" /> Der Paradigmenwechsel durch lokale KI
           </h4>
           <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex gap-3 items-start">
                 <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                   <Mail className="w-5 h-5 text-white/70" />
                 </div>
                 <p className="text-sm text-white/50 leading-relaxed mt-1">
                   Lokale KI-Agenten können mittlerweile direkt in Systemprogramme eingreifen (z.B. deine lokalen E-Mails durchsuchen, filtern oder darauf antworten).
                 </p>
              </div>
              <div className="flex-1 flex gap-3 items-start">
                 <div className="p-2 rounded-lg bg-fhgr-petrol/10 border border-fhgr-petrol/30 shrink-0">
                   <FileText className="w-5 h-5 text-fhgr-petrol-light" />
                 </div>
                 <p className="text-sm text-white/50 leading-relaxed mt-1">
                   Darum wird auch das Thema <strong>Notizen (Knowledge Management)</strong> plötzlich so wichtig: Ein gut strukturiertes, lokales Notizsystem ist der perfekte Treibstoff für deinen Agenten.
                 </p>
              </div>
           </div>
        </motion.div>

      </div>
    </SlideLayout>
  )
}
