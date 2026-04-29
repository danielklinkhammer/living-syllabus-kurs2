import { motion } from 'framer-motion'
import Card from '../ui/Card'

export default function DashboardAIA11ySlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 lg:mt-0 items-center">
        
        {/* A11y Section */}
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}}>
          <div className="text-orange-400/80 text-xs font-mono uppercase tracking-widest mb-3">Inclusive Design</div>
          <h2 className="text-4xl font-bold mb-6 mt-2 tracking-tight">Accessibility (A11y)</h2>
          <p className="text-white/50 leading-relaxed mb-6">
            Dashboards sind extrem anfällig für Barrierefreiheitsprobleme. Farbe darf <strong>niemals</strong> das einzige Unterscheidungsmerkmal sein (~8% der Männer sind farbenblind).
          </p>
          
          <div className="space-y-4 pt-4">
            <Card variant="primary" delay={0.1} className="!p-5 bg-orange-500/10 border-orange-500/20">
              <h3 className="font-bold text-orange-400 mb-4 text-sm">❌ Bad Practice: Stoplight-System</h3>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-red-500 text-white rounded text-sm">System Down</div>
                <div className="px-3 py-1 bg-green-500 text-white rounded text-sm">System OK</div>
              </div>
            </Card>

            <Card variant="glass" delay={0.2} className="!p-5">
              <h3 className="font-bold text-white mb-4 text-sm">✅ Best Practice: Farbe + Icon/Text</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="px-3 py-1 bg-red-500/20 border border-red-500/50 text-red-500 rounded text-sm flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  System Down
                </div>
                <div className="px-3 py-1 bg-green-500/20 border border-green-500/50 text-green-500 rounded text-sm flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  System OK
                </div>
              </div>
              <p className="text-xs text-white/40">Nutze das Figma "Stark" Plugin, um WCAG Kontraste und Farbenblindheit zu testen.</p>
            </Card>
          </div>
        </motion.div>

        {/* AI Section */}
        <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay:0.2}}>
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Decision Intelligence</div>
          <h2 className="text-4xl font-bold mb-6 mt-2 tracking-tight">Künstliche Intelligenz</h2>
          <p className="text-white/50 leading-relaxed mb-6">
            Wir wandern von deskriptiven (Was ist passiert?) zu präskriptiven (Was soll ich tun?) Dashboards.
          </p>
          
          <div className="space-y-4 pt-4">
            <Card variant="glass" delay={0.3} className="!p-6 text-left">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                Natural Language Querying (NLQ)
              </h3>
              <p className="text-sm text-white/50 mb-4">Statt komplexe Filtermenüs zu bauen, tippt der User sein Datenbedürfnis live ein:</p>
              <div className="px-4 py-2 bg-black/50 rounded-lg border border-white/10 text-xs font-mono text-fhgr-beige flex justify-between items-center overflow-x-auto">
                <span className="whitespace-nowrap">"Zeige mir den Solarertrag vs Netz ..."</span>
                <span className="opacity-50 ml-4 shrink-0">#</span>
              </div>
            </Card>

            <Card variant="primary" delay={0.4} className="!p-6 bg-gradient-to-tr from-fhgr-petrol/20 to-transparent border-fhgr-petrol/30 text-left">
              <h3 className="font-bold text-fhgr-petrol-light mb-3 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                Agentic Alerting
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Der Agent wartet nicht passiv. Er erkennt Anomalien proaktiv und pusht Handlungsempfehlungen aktiv in das Sichtfeld (z.B. als rote Bento-Box).
              </p>
            </Card>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
