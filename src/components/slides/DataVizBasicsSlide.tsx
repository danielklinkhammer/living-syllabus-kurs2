import { motion } from 'framer-motion'
import Card from '../ui/Card'
import HeroGraphic from '../ui/HeroGraphic'
import { LineChart, BarChart, PieChart, Activity, TrendingUp, Users } from 'lucide-react'

export default function DataVizBasicsSlide() {
  const charts = [
    {
      type: "Line & Area Charts",
      purpose: "Verläufe & Trends",
      rule: "Zeigt, wie sich Werte über Zeit entwickeln.",
      icon: <LineChart className="w-5 h-5 text-blue-400" />
    },
    {
      type: "Bar & Column Charts",
      purpose: "Kategorie-Vergleiche",
      rule: "Die Y-Achse MUSS immer bei 0 beginnen.",
      icon: <BarChart className="w-5 h-5 text-emerald-400" />
    },
    {
      type: "Pie & Donut Charts",
      purpose: "Anteile (100%)",
      rule: "Maximal 4-5 Slices. Schwer visuell messbar.",
      icon: <PieChart className="w-5 h-5 text-purple-400" />
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto custom-scrollbar relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fhgr-petrol/5 via-transparent to-transparent pointer-events-none fixed" />

      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 lg:mt-0 items-start pb-12">
        
        <div className="lg:col-span-12 flex flex-col justify-center text-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Dashboard Design · Teil 2</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 mt-2 tracking-tight">Data Viz Grundlagen</h2>
            <p className="text-lg text-white/50 leading-relaxed max-w-3xl mx-auto">
              Welcher Chart passt zu welchen Daten? Ein visueller Guide für funktionale Informations-Architektur.
            </p>
          </motion.div>
        </div>

        {/* Left Side: Chart Typology Rules */}
        <div className="lg:col-span-4 flex flex-col h-full gap-4">
          <div className="text-sm font-semibold tracking-widest uppercase text-white/30 ml-2 mb-2">Die Chart-Theorie</div>
          {charts.map((chart, idx) => (
            <Card 
              key={idx}
              variant="glass"
              delay={0.1 + (idx * 0.1)}
              className="!p-5 border-white/5 w-full"
            >
              <div className="flex gap-4 items-start w-full">
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 shrink-0 mt-1">
                  {chart.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base text-white">{chart.type}</h4>
                  <div className="text-xs font-bold text-fhgr-petrol-light mb-2">{chart.purpose}</div>
                  <div className="text-xs text-white/50 leading-relaxed">
                    {chart.rule}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Right Side: Visual Mockups & Examples */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
          <div className="col-span-full text-sm font-semibold tracking-widest uppercase text-white/30 ml-2 mb-2">Angewandte Beispiele</div>
          
          {/* Example 1: KPI Cards (Sparklines) */}
          <HeroGraphic delay={0.3} className="!p-5 bg-black/40 border-white/5 !items-start !justify-between">
            <div className="w-full">
              <div className="text-xs text-white/40 font-bold uppercase mb-4 tracking-widest flex items-center justify-between">
                <span>Single KPI & Sparkline</span>
                <Activity className="w-4 h-4" />
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <div className="text-[10px] text-white/50 uppercase mb-1">Active Users</div>
                  <div className="text-3xl font-black text-white">12.4k</div>
                  <div className="text-xs text-emerald-400 font-bold mt-1">↑ 14% vs last week</div>
                </div>
                <div className="flex items-end gap-1 h-12 w-24">
                  {[3, 5, 4, 7, 6, 9, 12].map((h, i) => (
                    <div key={i} className="flex-1 bg-emerald-500/50 rounded-t-sm" style={{ height: `${h * 8}%` }} />
                  ))}
                </div>
              </div>
              <div className="text-[10px] text-white/30 mt-3 font-mono">Gut für reinen Status & Trend</div>
            </div>
          </HeroGraphic>

          {/* Example 2: Line Context */}
          <HeroGraphic delay={0.4} className="!p-5 bg-black/40 border-white/5 !items-start !justify-between">
            <div className="w-full">
              <div className="text-xs text-white/40 font-bold uppercase mb-4 tracking-widest flex items-center justify-between">
                <span>Area Trend</span>
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="relative h-24 w-full mt-2">
                {/* SVG Mock Area Chart */}
                <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                  <path d="M0,40 L0,30 Q25,10 50,25 T100,5 L100,40 Z" fill="url(#gradientBlue)" />
                  <path d="M0,30 Q25,10 50,25 T100,5" fill="none" stroke="#60A5FA" strokeWidth="2" />
                  <defs>
                    <linearGradient id="gradientBlue" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="text-[10px] text-white/30 mt-3 font-mono">Gut für lückenlose Zeitreihen</div>
            </div>
          </HeroGraphic>

          {/* Example 3: Compare Bars */}
          <HeroGraphic delay={0.5} className="!p-5 bg-black/40 border-white/5 !items-start !justify-between">
            <div className="w-full">
              <div className="text-xs text-white/40 font-bold uppercase mb-4 tracking-widest flex items-center justify-between">
                <span>Horizontal Bar (Rankings)</span>
                <Users className="w-4 h-4" />
              </div>
              <div className="space-y-3 w-full">
                {['Mobile', 'Desktop', 'Tablet'].map((label, i) => (
                  <div key={i} className="flex justify-between items-center text-xs w-full gap-3">
                    <span className="text-white/60 w-16">{label}</span>
                    <div className="flex-1 bg-white/5 h-3 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full rounded-full" style={{ width: i===0?'80%':i===1?'60%':'25%' }} />
                    </div>
                    <span className="w-8 text-right font-mono text-white/40">{i===0?'80%':i===1?'60%':'25%'}</span>
                  </div>
                ))}
              </div>
              <div className="text-[10px] text-white/30 mt-3 font-mono">Besser als Pie-Charts bei Listen</div>
            </div>
          </HeroGraphic>

          {/* Example 4: Composition */}
          <HeroGraphic delay={0.6} className="!p-5 bg-black/40 border-white/5 !items-start !justify-between flex flex-col items-center justify-center">
            <div className="w-full">
               <div className="text-xs text-white/40 font-bold uppercase mb-4 tracking-widest flex items-center justify-between">
                 <span>Donut Composition</span>
                 <PieChart className="w-4 h-4" />
               </div>
               <div className="flex justify-center items-center w-full my-4">
                 <div className="w-20 h-20 rounded-full border-8 border-fhgr-petrol border-r-transparent border-t-white/10 rotate-45 flex items-center justify-center transform hover:scale-105 transition-transform cursor-pointer">
                    <div className="w-14 h-14 rounded-full bg-[#060F1A] border border-white/5 flex items-center justify-center rotate-[-45deg]">
                      <span className="text-xl font-bold font-mono">68%</span>
                    </div>
                 </div>
               </div>
               <div className="text-[10px] text-white/30 mt-3 font-mono text-center">Niemals mehr als 5 Segmente</div>
            </div>
          </HeroGraphic>

        </div>

      </div>
    </div>
  )
}
