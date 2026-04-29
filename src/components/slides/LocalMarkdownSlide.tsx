import { motion } from 'framer-motion'
import { ServerOff, FileCode2, ShieldCheck, DatabaseZap } from 'lucide-react'
import SlideLayout from '../layout/SlideLayout'
import Card from '../ui/Card'

export default function LocalMarkdownSlide() {
  return (
    <SlideLayout>
      <div className="w-full h-full flex flex-col justify-center">
        
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fhgr-accent/10 border border-fhgr-accent/30 text-fhgr-accent text-sm font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(255,107,53,0.15)] mb-4">
             <ServerOff className="w-4 h-4" /> Local-First Note Taking
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-head tracking-tight leading-tight mb-4 text-white">
            Wissensorganisation <br/> <span className="text-white/60">ohne Cloud-Zwang.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl font-light">
            Die meisten modernen Notiz-Apps (Notion, Evernote, Apple Notes) basieren auf proprietären Datenbanken auf fremden Servern. Für ein nachhaltiges Wissenssystem und nahtlose KI-Integration brauchen wir das Gegenteil: <strong className="text-white">Lokales Markdown.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
             <Card variant="glass" className="h-full border border-white/10 bg-white/5">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
                     <DatabaseZap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Das "Notion"-Problem</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Daten stecken in fragmentierten Cloud-Datenbanken (Vendor Lock-in). Externe KI-Entwickler-Agenten auf deinem Desktop können auf diese geschlossenen Systeme nicht frei zugreifen.
                  </p>
                </div>
             </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
             <Card variant="glass" className="h-full border-fhgr-petrol/30 bg-fhgr-petrol/5 shadow-[0_0_30px_rgba(131,197,190,0.1)]">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-fhgr-petrol/20 text-fhgr-petrol-light flex items-center justify-center border border-fhgr-petrol/30">
                     <FileCode2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">File-over-App</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Statt einer unsichtbaren Datenbank existieren deine Notizen einfach als <code className="text-fhgr-petrol-light bg-black/20 px-1 rounded">.md</code> Dokumente (Markdown) in ganz normalen Ordnern auf deiner Festplatte. Du bist völlig unabhängig.
                  </p>
                </div>
             </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
             <Card variant="glass" className="h-full border border-white/10 bg-white/5">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                     <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Absolute Datensouveränität</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Deine sensiblen Ideen, Entwürfe und Kursaufschriebe liegen lokal. So kannst du mächtige Desktop-KIs darauf ansetzen, ohne den Content ungefiltert an die Modelle großer Tech-Giganten ausliefern zu müssen.
                  </p>
                </div>
             </Card>
          </motion.div>
        </div>

      </div>
    </SlideLayout>
  )
}
