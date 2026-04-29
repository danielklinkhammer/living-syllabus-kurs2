import { motion } from 'framer-motion'
import Card from '../ui/Card'
import HeroGraphic from '../ui/HeroGraphic'

export default function DashboardPatternsSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 lg:mt-0">
        
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">UI Patterns 2025</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">F-Pattern & Bento Grids</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-6">
              Wir nutzen das F-Pattern (links oben = Anchor) und strukturieren Dateninhalte streng über **Bento Grids**, um der Nutzer:in halt zu geben.
            </p>
          </motion.div>

          <div className="space-y-4 pt-4">
             <Card delay={0.1} className="!p-5">
               <div className="flex gap-4 items-start">
                 <div className="text-xl mt-1">🎯</div>
                 <div>
                   <div className="font-bold text-white mb-1">Kognitive Last & Das F-Pattern</div>
                   <div className="text-xs text-white/50 leading-relaxed">
                     In westlichen Kulturen scannt das Auge von links oben nach rechts unten. Um die <strong>kognitive Last (Cognitive Load)</strong> zu minimieren, muss der wichtigste Status-Indikator als Anker direkt oben links platziert werden.
                   </div>
                 </div>
               </div>
             </Card>
             
             <Card variant="primary" delay={0.2} className="!p-5">
               <div className="flex gap-4 items-start">
                 <div className="text-xl mt-1">🍱</div>
                 <div>
                   <div className="font-bold text-fhgr-petrol-light mb-1">Flächen-Hierarchie (Bento Grid)</div>
                   <div className="text-xs text-white/50 leading-relaxed">
                     Bento-Boxen reduzieren zielloses Scannen durch semantische Bündelung. Die Anordnung unterliegt einer klaren Priorität:
                     <ul className="list-disc pl-4 mt-2 text-white/70 space-y-1">
                       <li><strong>1. Primär:</strong> Alerts & Main KPIs (Oben Links)</li>
                       <li><strong>2. Sekundär:</strong> Analystische Graphen (Rechts/Mitte)</li>
                       <li><strong>3. Tertiär:</strong> Tabellen, Listen, Logs (Unten)</li>
                     </ul>
                   </div>
                 </div>
               </div>
             </Card>
          </div>
        </div>

        <div className="lg:col-span-7 flex items-center justify-center">
          <HeroGraphic delay={0.3} className="!p-4 bg-[#1A1A1A]">
            <div className="grid grid-cols-3 gap-3 w-full">
              {/* Box 1: Anchor (F-Pattern Start) */}
              <div className="col-span-1 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-indigo-500/30 p-4 aspect-square flex flex-col justify-between relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-2"><div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" /></div>
                 <div className="absolute top-3 left-3 w-5 h-5 bg-indigo-500/20 border border-indigo-500/50 rounded flex items-center justify-center text-[10px] font-bold text-indigo-300">1</div>
                 <div className="text-xs font-mono text-indigo-300 mt-6 mt-6">MAIN KPI</div>
                 <div>
                   <div className="text-3xl font-black text-white tracking-tighter">98.2%</div>
                   <div className="text-[10px] text-indigo-200 mt-1">System Health</div>
                 </div>
              </div>
              
              {/* Box 2 & 3: Secondary KPIs */}
              <div className="col-span-1 rounded-2xl bg-white/5 border border-white/5 p-4 relative aspect-square flex flex-col justify-between">
                 <div className="absolute top-3 right-3 w-4 h-4 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-white/50">2</div>
                 <div className="text-[10px] font-mono text-white/40">USAGE</div>
                 <div>
                   <div className="text-xl font-bold text-white tracking-tighter">42 TB</div>
                   <div className="text-[10px] text-white/40 mt-1">Total Bandwidth</div>
                 </div>
              </div>
              <div className="col-span-1 rounded-2xl bg-white/5 border border-white/5 p-4 relative aspect-square flex flex-col justify-between">
                 <div className="absolute top-3 right-3 w-4 h-4 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-white/50">2</div>
                 <div className="text-[10px] font-mono text-white/40">ALERTS</div>
                 <div>
                   <div className="text-xl font-bold text-white tracking-tighter">0</div>
                   <div className="text-[10px] text-white/40 mt-1">Active Warnings</div>
                 </div>
              </div>

              {/* Box 4: Chart (Full Width in Grid) */}
              <div className="col-span-2 rounded-2xl bg-white/5 border border-white/5 p-4 h-32 flex flex-col">
                 <div className="text-[10px] font-mono text-white/40 mb-3">ACTIVITY TREND</div>
                 <div className="flex-1 flex items-end gap-1">
                   {[30, 40, 25, 50, 45, 60, 80, 55, 90, 70, 85, 100].map((h, i) => (
                     <div key={i} className="flex-1 bg-white/10 rounded-t-sm" style={{ height: `${h}%` }}>
                       {i === 11 && <div className="w-full h-full bg-fhgr-petrol rounded-t-sm" />}
                     </div>
                   ))}
                 </div>
              </div>

              {/* Box 5: Details */}
              <div className="col-span-1 border border-dashed border-white/20 rounded-2xl p-4 flex items-center justify-center text-[10px] font-mono text-white/40 text-center relative">
                 <div className="absolute top-3 right-3 w-4 h-4 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-white/50">3</div>
                 List<br/>Space
              </div>
              
            </div>
            <div className="text-center mt-3 text-[10px] text-white/30 font-mono tracking-widest uppercase w-full">
              Bento Grid Layout
            </div>
          </HeroGraphic>
        </div>

      </div>
    </div>
  )
}
