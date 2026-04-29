import { motion } from 'framer-motion'
import Card from '../ui/Card'

const items = [
  { label: 'Kurs',       value: 'Designing for and with AI' },
  { label: 'Sitzung',    value: 'S02 + S03 — Block 2' },
  { label: 'Semester',   value: 'FS 2026 · FHGR' },
  { label: 'Format',     value: 'Living Syllabus App' },
]

export default function WelcomeSlide() {
  return (
    <div className="w-full h-full flex flex-col bg-fhgr-dark text-white relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(131,197,190,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(131,197,190,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative petrol circle */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-fhgr-petrol opacity-10 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full bg-fhgr-petrol-light opacity-8 blur-3xl" />

      {/* FHGR Logo area */}
      <motion.div
        className="absolute top-8 left-8 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="w-8 h-8 rounded bg-fhgr-petrol flex items-center justify-center text-white text-xs font-bold">FH</div>
        <span className="text-white/40 text-sm font-medium tracking-widest uppercase">Graubünden</span>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-12 text-center relative z-10">

        {/* Tag */}
        <motion.div
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fhgr-petrol/40 bg-fhgr-petrol/10 text-fhgr-petrol-light text-xs font-mono tracking-widest uppercase"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-fhgr-petrol-light animate-pulse" />
          Living Syllabus — Interaktive Vorlesung
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Designing
          <br />
          <span className="text-fhgr-petrol-light">for</span> and <span className="text-fhgr-petrol-light">with</span>
          <br />
          <span className="text-white">AI</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-white/40 text-lg max-w-md font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Von Design-Token-DNA bis Git-Zeitmaschine —
          fünf interaktive Module für Block 2.
        </motion.p>

        {/* Meta grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
          {items.map(({ label, value }, i) => (
            <Card key={label} variant="glass" delay={1.0 + i * 0.1} className="!p-4 text-left">
              <div className="text-white/30 text-xs uppercase tracking-widest mb-1">{label}</div>
              <div className="text-white/80 text-sm font-medium">{value}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom hint */}
      <motion.div
        className="pb-16 text-center text-white/20 text-xs font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        ← → Pfeiltasten zum Navigieren · Leertaste vorwärts
      </motion.div>
    </div>
  )
}
