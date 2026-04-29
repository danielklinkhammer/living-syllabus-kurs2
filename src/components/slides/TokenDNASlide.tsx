import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { ArrowRight, Code2, Droplet, Layers } from 'lucide-react'

export default function TokenDNASlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#060F1A] text-white overflow-y-auto custom-scrollbar relative px-6 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fhgr-petrol/5 via-transparent to-transparent pointer-events-none fixed" />
      
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12 lg:mt-0 relative z-10">
        
        {/* Left: Content */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Sitzung 3 · Die API des Designs</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 mt-2 tracking-tight">Die Token-DNA</h2>
            <div className="inline-block px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[11px] font-mono rounded-lg mb-6">
              ⚠️ <strong>Wording-Check:</strong> Wir sprechen von <em>Design Tokens</em> (UI-Variablen), nicht von <em>LLM Tokens</em> (Textbausteine einer KI)!
            </div>
            <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-xl">
              Stell dir vor, du änderst dein Markenblau und musst 500 Dateien (CSS, Swift, Android, Figma) von Hand anpassen. Tokens lösen das. Sie sind Variablen, die Design-Entscheidungen speichern.
            </p>
          </motion.div>

          <div className="space-y-4">
            <Card delay={0.1} className="!p-6 w-full text-left">
              <div className="font-semibold text-fhgr-beige mb-2 text-xl">Semantic Aliasing</div>
              <p className="text-sm text-white/50 leading-relaxed">
                Der wichtigste Trick bei Tokens: Wir benennen sie <strong>nicht</strong> danach, wie sie aussehen (<span className="text-fhgr-petrol-light font-mono text-xs">blue-500</span>), sondern nach ihrem <strong>Zweck</strong> (<span className="text-fhgr-petrol-light font-mono text-xs">color.accent.brand</span>). So kann das System Themes wechseln (Light/Dark Mode), ohne dass wir Code anfassen müssen.
              </p>
            </Card>
          </div>
        </div>

        {/* Right: The Hierarchy Diagram */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          
          <div className="flex flex-col gap-3">
             <div className="text-sm font-semibold tracking-widest uppercase text-white/30 text-center mb-2">Die Token-Hierarchie verstehen</div>
             
             {/* Layer 1: Primitive */}
             <div className="flex justify-between items-center bg-black/40 border border-white/5 rounded-xl p-5 group relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
               <div className="flex gap-4 items-center relative z-10 w-1/3">
                 <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 shrink-0">
                    <Droplet className="w-4 h-4 text-white/30" />
                 </div>
                 <div className="flex flex-col">
                   <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Ebene 1</div>
                   <div className="font-bold text-sm">Primitive Token</div>
                   <div className="text-[10px] text-white/30 mt-0.5">Harter Wert (Hex)</div>
                 </div>
               </div>
               
               <ArrowRight className="w-5 h-5 text-white/20 mx-2 shrink-0" />
               
               <div className="flex justify-start items-center gap-3 bg-black/60 px-4 py-2.5 rounded-lg border border-white/10 flex-1 relative z-10">
                 <div className="w-5 h-5 rounded-full bg-[#3B82F6] shadow-sm shrink-0" />
                 <div className="text-xs font-mono text-white/80">blue-500</div>
                 <div className="text-[10px] text-white/30 font-mono ml-auto">#3B82F6</div>
               </div>
             </div>

             {/* Layer 2: Semantic (The MVP) */}
             <div className="flex justify-between items-center bg-fhgr-petrol/10 border border-fhgr-petrol/30 rounded-xl p-5 shadow-lg transform scale-[1.02] z-20 group relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-fhgr-petrol/0 via-fhgr-petrol/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
               <div className="flex gap-4 items-center relative z-10 w-1/3">
                 <div className="flex items-center justify-center w-10 h-10 rounded-full bg-fhgr-petrol/20 border border-fhgr-petrol/30 shrink-0">
                    <Layers className="w-4 h-4 text-fhgr-petrol-light" />
                 </div>
                 <div className="flex flex-col">
                   <div className="text-[10px] text-fhgr-petrol-light uppercase tracking-widest mb-1 font-bold">Ebene 2 (Core)</div>
                   <div className="font-bold text-fhgr-beige text-sm">Semantic Token</div>
                   <div className="text-[10px] text-white/50 mt-0.5">Definiert den Zweck</div>
                 </div>
               </div>
               
               <ArrowRight className="w-5 h-5 text-fhgr-petrol-light/50 mx-2 shrink-0" />
               
               <div className="flex justify-between items-center bg-black/60 px-4 py-2.5 rounded-lg border border-fhgr-petrol/20 flex-1 relative z-10">
                 <div className="text-xs font-bold text-white tracking-wide">color.accent.brand</div>
                 <div className="text-[10px] text-fhgr-petrol-light font-mono flex items-center gap-1.5 whitespace-nowrap">
                   <span className="text-white/30 tracking-widest">→</span> {`{blue-500}`}
                 </div>
               </div>
             </div>

             {/* Layer 3: Component */}
             <div className="flex justify-between items-center bg-black/40 border border-white/5 rounded-xl p-5 group relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
               <div className="flex gap-4 items-center relative z-10 w-1/3">
                 <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 shrink-0">
                    <Code2 className="w-4 h-4 text-white/30" />
                 </div>
                 <div className="flex flex-col">
                   <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Ebene 3</div>
                   <div className="font-bold text-sm">Component Token</div>
                   <div className="text-[10px] text-white/30 mt-0.5">Zuweisung auf UI-Elemente</div>
                 </div>
               </div>
               
               <ArrowRight className="w-5 h-5 text-white/20 mx-2 shrink-0" />
               
               <div className="flex justify-between items-center bg-black/60 px-4 py-2.5 rounded-lg border border-white/10 flex-1 relative z-10">
                 <div className="text-xs font-mono text-white/80">button.bg.primary</div>
                 <div className="text-[10px] text-white/30 font-mono flex items-center gap-1.5 whitespace-nowrap">
                   <span className="text-white/30 tracking-widest">→</span> {`{color.accent.brand}`}
                 </div>
               </div>
             </div>
             
             {/* Code Context */}
             <motion.div 
               initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{delay: 0.6}}
               className="bg-[#0D1117] rounded-xl border border-white/10 overflow-hidden w-full mt-4"
             >
               <div className="flex px-4 py-2 bg-[#161B22] border-b border-white/10 items-center justify-between w-full">
                 <div className="text-xs text-white/40 font-mono">tokens.json (W3C Format)</div>
               </div>
               <div className="p-5 overflow-x-auto text-[13px] font-mono leading-relaxed w-full whitespace-pre">
                 <span className="text-[#8B949E]">{"{"}</span>
                 <br />
                 <span className="text-[#79C0FF]">  "color"</span><span className="text-[#8B949E]">: {"{"}</span>
                 <br />
                 <span className="text-[#79C0FF]">    "accent"</span><span className="text-[#8B949E]">: {"{"}</span>
                 <br />
                 <span className="text-[#79C0FF]">      "brand"</span><span className="text-[#8B949E]">: {"{"}</span>
                 <br />
                 <span className="text-[#8B949E]">        </span><span className="text-[#79C0FF]">"$value"</span><span className="text-[#8B949E]">: </span><span className="text-[#A5D6FF]">"{'{blue-500}'}"</span><span className="text-[#8B949E]">,</span>
                 <br />
                 <span className="text-[#8B949E]">        </span><span className="text-[#79C0FF]">"$type"</span><span className="text-[#8B949E]">: </span><span className="text-[#A5D6FF]">"color"</span>
                 <br />
                 <span className="text-[#8B949E]">      {"}"}</span>
                 <br />
                 <span className="text-[#8B949E]">    {"}"}</span>
                 <br />
                 <span className="text-[#8B949E]">  {"}"}</span>
                 <br />
                 <span className="text-[#8B949E]">{"}"}</span>
               </div>
             </motion.div>
             
          </div>

        </div>

      </div>
    </div>
  )
}
