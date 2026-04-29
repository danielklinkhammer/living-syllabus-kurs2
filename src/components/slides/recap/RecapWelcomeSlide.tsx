import { motion } from 'framer-motion'
import Card from '../../ui/Card'

export default function RecapWelcomeSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#060F1A] text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fhgr-petrol/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl px-12 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-fhgr-petrol/30 bg-fhgr-petrol/10 text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-6">
            Designing for and with AI · Block 2 · 29.04.2026
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Von der <span className="font-serif italic text-fhgr-petrol-light">Exploration</span> <br />
            in die <span className="font-serif italic text-fhgr-petrol-light">Architektur</span>
          </h1>

          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Wir haben nun die Grundlagen der Generativen KI kennengelernt. Im zweiten Block verlassen wir das rein explorative Umfeld und lernen, wie KI-Modelle effektiv in systematische Prototyping-Workflows integriert werden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <Card variant="glass" delay={0.2} className="!p-8">
            <div className="text-fhgr-beige font-mono text-sm uppercase tracking-widest mb-2">Phase 1 Rückblick</div>
            <div className="text-3xl font-serif italic text-white mb-4">Exploration</div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Prompting als explorative Methodik. Die KI diente uns in den letzten Sitzungen als kreativer Ideengenerator für visuelle Moodboards und offene Konzeptfindung.
            </p>
            <ul className="space-y-2 text-sm text-white/40">
              <li className="flex items-center gap-2"><span className="text-fhgr-petrol">✓</span> Generative Bild- & Texterstellung</li>
              <li className="flex items-center gap-2"><span className="text-fhgr-petrol">✓</span> Prompt Engineering für visuelle Weite</li>
              <li className="flex items-center gap-2"><span className="text-fhgr-petrol">✓</span> Offene Brainstorming-Prozesse</li>
            </ul>
          </Card>

          <Card variant="primary" delay={0.4} className="!p-8 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-fhgr-petrol/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="text-fhgr-petrol-light font-mono text-sm uppercase tracking-widest mb-2">Phase 2 Ausblick</div>
              <div className="text-3xl font-serif italic text-white mb-4">Systematisches Prototyping</div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Vom freien Ideensammeln zum Systems Thinking. KI formt Interfaces erst effektiv, wenn wir ihr klare Informationsarchitekturen, User Flows und Design Tokens liefern.
              </p>
              <ul className="space-y-2 text-sm text-white/50">
                <li className="flex items-center gap-2"><span className="text-fhgr-petrol-light">→</span> Design Systeme & Token-Standardisierung</li>
                <li className="flex items-center gap-2"><span className="text-fhgr-petrol-light">→</span> User Flow Logik & Wireframes</li>
                <li className="flex items-center gap-2"><span className="text-fhgr-petrol-light">→</span> Vibe Coding (Prototyping mit Agenten)</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
