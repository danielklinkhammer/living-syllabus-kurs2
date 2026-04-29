import { motion } from 'framer-motion'
import { Hexagon, Network, Diamond, FastForward, ExternalLink } from 'lucide-react'
import SlideLayout from '../layout/SlideLayout'

export default function ObsidianToolSlide() {
  return (
    <SlideLayout>
      <div className="w-full h-full flex flex-col justify-center">
        
        <div className="mb-10 text-center mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7A3CEF]/10 border border-[#7A3CEF]/30 text-[#A277FF] text-sm font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(122,60,239,0.15)] mb-4">
             <Hexagon className="w-4 h-4" /> Tool Spotlight
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-head tracking-tight leading-tight mb-4 text-white flex justify-center items-center gap-4">
            Wissensmanagement mit <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A277FF] to-[#7A3CEF]">Obsidian</span>
            <a href="https://obsidian.md" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white/50 hover:text-[#A277FF]">
              <ExternalLink className="w-4 h-4" />
            </a>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Obsidian ist im Kern nur ein extrem mächtiger Viewer über einen lokalen Ordner voller Text-Dateien. Doch es gibt dir exakt die Werkzeuge, um daraus ein "Persönliches Wiki" zu bauen.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 bg-black/20 border border-white/5 p-6 lg:p-8 rounded-3xl">
          
          <div className="flex-[0.8] space-y-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
               <h4 className="text-white/80 font-bold text-lg mb-2 flex items-center gap-2">
                 <Diamond className="w-5 h-5 text-[#A277FF]" /> 1. Wikilinks
               </h4>
               <p className="text-white/50 text-sm leading-relaxed">
                 Statt nur in tiefen Ordner-Strukturen zu suchen, verbindest du Konzepte direkt im Text via doppelten eckigen Klammern: <code className="text-[#A277FF] bg-[#A277FF]/10 px-1 rounded">[[Neuer Gedanke]]</code>. So verlinkst du Notizen organisch wie bei Wikipedia.
               </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
               <h4 className="text-white/80 font-bold text-lg mb-2 flex items-center gap-2">
                 <Network className="w-5 h-5 text-[#A277FF]" /> 2. Der Graph
               </h4>
               <p className="text-white/50 text-sm leading-relaxed">
                 Obsidian visualisiert alle verlinkten `.md` Dateien als interaktiven Knoten-Graphen. So erkennst du sofort, welche Themensilos isoliert sind und welche Ideen stark vernetzt sind (Dein "Second Brain").
               </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
               <h4 className="text-white/80 font-bold text-lg mb-2 flex items-center gap-2">
                 <FastForward className="w-5 h-5 text-[#A277FF]" /> 3. Offline & Blitzschnell
               </h4>
               <p className="text-white/50 text-sm leading-relaxed">
                 Die App läuft unerreicht schnell, weil sie nichts in eine Cloud synchronisieren muss. Plugins (Community) erweitern sie außerdem um Tools wie Canvas, Kanban oder eben AI-Schnittstellen.
               </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.4 }}
            className="flex-[1.2] relative bg-[#1E1E1E] rounded-xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center p-4"
          >
             {/* Mock UI for Obsidian Graph/Interface */}
             <div className="absolute top-0 left-0 w-full h-8 bg-black/40 border-b border-white/10 flex items-center px-3 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-4 text-[10px] font-mono text-white/40">vault/UX-Research</div>
             </div>
             
             <div className="w-full h-full mt-8 flex">
               <div className="w-1/3 border-r border-white/5 p-4 flex flex-col gap-2">
                 <div className="w-full h-3 bg-white/10 rounded" />
                 <div className="w-3/4 h-3 bg-white/10 rounded" />
                 <div className="w-5/6 h-3 bg-white/10 rounded" />
                 <div className="w-1/2 h-3 bg-white/10 rounded mt-4" />
                 <div className="w-full h-3 bg-[#A277FF]/30 rounded" />
               </div>
               <div className="w-2/3 p-6 flex flex-col items-center justify-center relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat opacity-80">
                  {/* Fake Graph */}
                  <div className="w-4 h-4 rounded-full bg-[#A277FF] absolute shadow-[0_0_20px_rgba(162,119,255,0.8)]" />
                  <div className="w-2 h-2 rounded-full bg-white/40 absolute top-[30%] left-[30%]" />
                  <div className="w-3 h-3 rounded-full bg-white/60 absolute bottom-[30%] right-[30%]" />
                  <div className="w-2 h-2 rounded-full bg-white/30 absolute bottom-[20%] left-[40%]" />
                  <svg className="absolute inset-0 w-full h-full">
                     <path d="M 120 120 L 70 80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                     <path d="M 120 120 L 180 180" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                     <path d="M 120 120 L 100 200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  </svg>
               </div>
             </div>
          </motion.div>

        </div>
      </div>
    </SlideLayout>
  )
}
