import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type StyleKey = 'swiss' | 'brutalist' | 'glass' | 'spatial' | 'devcore'

interface StyleConfig {
  name: string
  tag: string
  desc: string
  prompt: string
  bg: string
  card: string
  text: string
  accent: string
  border: string
  badge: string
  kpiText: string
  roundedOuter: string
  roundedInner: string
}

const styles: Record<StyleKey, StyleConfig> = {
  swiss: {
    name: 'Swiss Minimalism',
    tag: 'Rational · Grid · Typografie',
    desc: 'Strenge Raster, Helvetica-Logik, maximaler Weissraum. Die Wahrheit liegt in der Struktur.',
    prompt: '"Rational, grid-strict, Helvetica, high white-space, monochrome with one accent color, editorial precision"',
    bg:    'bg-white',
    card:  'bg-white border border-gray-200 shadow-sm',
    text:  'text-gray-900',
    accent:'text-red-600',
    border:'border-gray-200',
    badge: 'bg-red-600 text-white text-xs px-2 py-0.5 rounded-none font-mono uppercase',
    kpiText: 'font-bold text-gray-900 text-4xl tracking-tighter',
    roundedOuter: 'rounded-none',
    roundedInner: 'rounded-none',
  },
  brutalist: {
    name: 'Neobrutalism',
    tag: 'Raw · Bold · Anti-polished',
    desc: 'Dicke Rahmen, harte Kontraste, sichtbare Struktur. Ästhetischer Widerstand gegen den KI-Durchschnitt.',
    prompt: '"Raw, bold borders 3px+, stark black outlines, bright accent colors on white, anti-polished, visible structure"',
    bg:    'bg-yellow-300',
    card:  'bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
    text:  'text-black',
    accent:'text-black',
    border:'border-black border-4',
    badge: 'bg-black text-yellow-300 text-xs px-2 py-0.5 font-black uppercase tracking-widest',
    kpiText: 'font-black text-black text-5xl',
    roundedOuter: 'rounded-none',
    roundedInner: 'rounded-none',
  },
  glass: {
    name: 'Glassmorphism 2.0',
    tag: 'Frosted · Layered · Depth',
    desc: 'Transparente Panels, Blur-Effekte, schwebende Ebenen. Tiefe durch Überlappung.',
    prompt: '"Frosted glass panels, subtle transparency, blur effects, floating layers, soft gradients, depth through overlapping cards"',
    bg:    'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900',
    card:  'bg-white/10 backdrop-blur-md border border-white/20 shadow-xl',
    text:  'text-white',
    accent:'text-purple-200',
    border:'border-white/20',
    badge: 'bg-white/20 text-white text-xs px-3 py-0.5 rounded-full backdrop-blur border border-white/30',
    kpiText: 'font-bold text-white text-4xl',
    roundedOuter: 'rounded-2xl',
    roundedInner: 'rounded-xl',
  },
  spatial: {
    name: 'Spatial / Tactile UI',
    tag: 'Soft · Inner Depth · Clay',
    desc: 'Erinnert an Apple Vision Pro. Softer Claymorphism, weiche innere Schatten und extrem taktile Oberflächen.',
    prompt: '"Spatial UI, soft inner shadows, tactile surfaces, claymorphism, translucent panels overlapping, highly polished 3D-like depth"',
    bg:    'bg-gray-100',
    card:  'bg-white/70 rounded-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),_0_8px_16px_rgba(0,0,0,0.05)] border border-white/60 backdrop-blur-2xl',
    text:  'text-gray-800',
    accent:'text-blue-500',
    border:'border-gray-200/50',
    badge: 'bg-white shadow-sm text-gray-700 font-medium text-[10px] px-3 py-1 rounded-full border border-gray-100',
    kpiText: 'font-semibold text-gray-900 text-4xl',
    roundedOuter: 'rounded-[2rem]',
    roundedInner: 'rounded-2xl',
  },
  devcore: {
    name: 'Developer Core',
    tag: 'Cyber · Terminal · Linear-Style',
    desc: 'Die dominierende Tech-Ästhetik. Perfektes Schwarz, feine Glow-Borders und Monospace-Präzision.',
    prompt: '"Developer tool aesthetic, pure true black background, high contrast minimal silver text, glowing neon thin borders, tech precision, monospace data"',
    bg:    'bg-black',
    card:  'bg-[#09090B] border border-[#27272A] shadow-[0_4px_24px_rgba(0,0,0,0.5)]',
    text:  'text-gray-400',
    accent:'text-emerald-400',
    border:'border-[#27272A]',
    badge: 'bg-[#18181B] border border-[#27272A] text-emerald-400 text-[10px] px-2 py-0.5 rounded font-mono',
    kpiText: 'font-mono text-white text-4xl',
    roundedOuter: 'rounded-md',
    roundedInner: 'rounded-sm',
  }
}

function DashboardMock({ style }: { style: StyleConfig }) {
  return (
    <div className={`${style.bg} ${style.roundedOuter} overflow-hidden w-full h-full flex flex-col transition-all duration-500`}>
      {/* Header */}
      <div className={`flex items-center justify-between px-5 py-3 ${style.border} border-b`}>
        <span className={`text-sm font-semibold ${style.text}`}>Energy Dashboard</span>
        <span className={style.badge}>Live</span>
      </div>
      {/* KPIs */}
      <div className="grid grid-cols-3 gap-3 p-4">
        {[
          { label: 'Verbrauch', val: '42.7', unit: 'kWh' },
          { label: 'Solar',     val: '18.2', unit: 'kWh' },
          { label: 'Netz',      val: '24.5', unit: 'kWh' },
        ].map(({ label, val, unit }) => (
          <div key={label} className={`${style.card} ${style.roundedInner} p-3 transition-all duration-500`}>
            <div className={`text-xs mb-1 opacity-60 ${style.text}`}>{label}</div>
            <div className={style.kpiText}>{val}</div>
            <div className={`text-xs opacity-50 ${style.text}`}>{unit}</div>
          </div>
        ))}
      </div>
      {/* Mini chart */}
      <div className={`mx-4 mb-4 ${style.card} ${style.roundedInner} p-3 flex-1 transition-all duration-500`}>
        <div className={`text-xs mb-2 font-medium opacity-60 ${style.text}`}>7-Tage-Verlauf</div>
        <div className="flex items-end gap-1 h-16">
          {[60,45,80,55,70,40,65].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end">
              <div
                className={`rounded-sm transition-all duration-500 ${
                  style.name === 'Swiss Minimalism' ? 'bg-red-600' :
                  style.name === 'Neobrutalism'     ? 'bg-black border-2 border-black' :
                  style.name === 'Developer Core' ? 'bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)]' :
                  style.name === 'Spatial / Tactile UI' ? 'bg-gradient-to-t from-blue-400 to-blue-200 shadow-inner' :
                  'bg-purple-400/60'
                }`}
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-1">
          {['Mo','Di','Mi','Do','Fr','Sa','So'].map(d => (
            <span key={d} className={`text-[9px] opacity-40 ${style.text}`}>{d}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function DivergenceSlide() {
  const [active, setActive] = useState<StyleKey>('swiss')
  const styleKeys = Object.keys(styles) as StyleKey[]

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#060F1A] text-white overflow-y-auto lg:overflow-hidden relative px-6 lg:px-16">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mt-12 lg:mt-0 pb-12">
        
        {/* Left: controls */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-2">Visuelle Divergenz · S02-A2</div>
          <h2 className="text-2xl font-bold mb-1">Divergence Switcher</h2>
          <p className="text-white/40 text-sm mb-6">Selbes Dashboard — 3 visuelle Stile. Klick zum Umschalten.</p>
        </motion.div>

        <div className="space-y-3">
          {styleKeys.map((key, i) => {
            const s = styles[key]
            return (
              <motion.button
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActive(key)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                  active === key
                    ? 'border-fhgr-petrol-light bg-fhgr-petrol/20 scale-[1.02]'
                    : 'border-white/10 bg-white/5 hover:bg-white/8'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-2 h-2 rounded-full transition-all ${active === key ? 'bg-fhgr-petrol-light scale-125' : 'bg-white/20'}`} />
                  <span className="font-semibold text-sm">{s.name}</span>
                </div>
                <div className="text-xs text-white/40 ml-4">{s.tag}</div>
              </motion.button>
            )
          })}
        </div>

        {/* Tools */}
        <div className="mt-6 flex gap-2">
          {['v0.dev', 'Musho.ai', 'Figma Make'].map(t => (
            <div key={t} className="px-2 py-1 text-[10px] font-mono text-white/40 bg-white/5 border border-white/10 rounded">{t}</div>
          ))}
        </div>

        {/* Active style info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6 p-4 rounded-xl bg-white/5 border border-white/8"
          >
            <div className="text-xs text-white/50 mb-2">Atmospheric Prompt:</div>
            <code className="text-xs font-mono text-green-300 leading-relaxed">{styles[active].prompt}</code>
            <p className="mt-3 text-xs text-white/50 leading-relaxed">{styles[active].desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right: dashboard preview */}
      <div className="lg:col-span-7 flex items-center justify-center">
        <div className="w-full max-w-[500px] h-[520px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="w-full h-full"
            >
              <DashboardMock style={styles[active]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      </div>
    </div>
  )
}
