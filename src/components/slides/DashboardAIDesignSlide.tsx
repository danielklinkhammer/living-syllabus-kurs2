import { motion } from 'framer-motion'
import { Sparkles, Bot, Blocks, MessageSquare } from 'lucide-react'

export default function DashboardAIDesignSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 lg:mt-0 items-center">
        
        {/* Left: Content */}
        <div className="lg:col-span-5">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Evolution des Interface</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Dashboards im KI-Zeitalter</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-6">
              Dashboards entwickeln sich kontinuierlich weiter. Im Kontext von "Designing for AI" verändern sie sich von rein deskriptiven, passiven Visualisierungsflächen hin zu dynamischen Assistenz-Systemen.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/30 shrink-0 mt-1">
                  <Blocks className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Generative UI (GenUI)</div>
                  <div className="text-sm text-white/50 leading-relaxed">
                    Statt vordefinierter Ansichten ("Widgets") bauen moderne Systeme die passende Datenvisualisierung auf Basis der konkreten Nutzeranfrage situativ und in Echtzeit zusammen.
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 shrink-0 mt-1">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Objektives Surfacing</div>
                  <div className="text-sm text-white/50 leading-relaxed">
                    Agenten im Hintergrund werten kontinuierlich Ströme an Echtzeit-Daten aus und pushen relevante Status-Updates oder Anomalien proaktiv in den Fokus des Nutzers.
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-fhgr-petrol/10 border border-fhgr-petrol/30 shrink-0 mt-1">
                  <Bot className="w-5 h-5 text-fhgr-petrol-light" />
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Copilot als Arbeitsfläche</div>
                  <div className="text-sm text-white/50 leading-relaxed">
                    Das Interface verschmilzt stark mit Conversational AI. Das Dashboard wird zum "Split-Screen", auf dem Nutzeranalysen per Dialog stattfinden und KI direkte System-Eingriffe ausführt.
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Right: Graphic */}
        <div className="lg:col-span-7 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full relative"
          >
            {/* Split Screen AI Dashboard UI Mockup */}
            <div className="bg-[#0A1628] border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden flex h-96">
               
               {/* Background glows */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-fhgr-petrol/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

               {/* Left Panel: Copilot Chat (35%) */}
               <div className="w-[35%] bg-black/40 border-r border-white/5 p-4 flex flex-col justify-between relative z-10">
                  <div className="space-y-4">
                     <div className="flex items-center gap-2 mb-4">
                        <Bot className="w-4 h-4 text-purple-400" /> 
                        <span className="text-xs font-mono tracking-widest text-white/50 uppercase">Copilot</span>
                     </div>
                     
                     <div className="bg-white/10 border border-white/5 rounded-lg rounded-tr-sm p-3 text-[10px] text-white">
                        Erstelle mir eine Übersicht der System-Latenzen der letzten 24 Stunden.
                     </div>

                     <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 text-[10px] text-purple-200">
                        Okay, ich baue das Board "System Performance" auf und visualisiere die Latenzen für dich. Es gibt einen Peak um 14:00 Uhr.
                     </div>
                  </div>

                  <div className="h-8 rounded md:rounded-full bg-white/5 border border-white/10 flex items-center px-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-fhgr-petrol animate-pulse" />
                     <span className="text-[9px] font-mono text-white/30 ml-2">Type / Ask...</span>
                  </div>
               </div>

               {/* Right Panel: Dynamic GenUI Workspace (65%) */}
               <div className="w-[65%] p-5 relative z-10 flex flex-col">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-4">
                     <div>
                        <div className="text-sm font-bold text-white">System Performance</div>
                        <div className="text-[9px] font-mono text-fhgr-petrol-light">● Live GenUI Canvas</div>
                     </div>
                     <Sparkles className="w-4 h-4 text-white/20" />
                  </div>

                  {/* Generated Bento Grid */}
                  <div className="flex-1 grid grid-cols-2 gap-3">
                     {/* Widget 1 */}
                     <div className="col-span-2 row-span-1 bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col">
                        <div className="text-[10px] text-white/40 mb-2">Global Latency Trend</div>
                        <div className="flex-1 flex items-end gap-[2px]">
                           {[15, 20, 18, 22, 25, 30, 85, 90, 80, 40, 25, 20, 15, 12, 10, 15].map((h, i) => (
                             <div key={i} className={`flex-1 rounded-t-[2px] ${i >= 6 && i <= 8 ? 'bg-orange-500/80' : 'bg-fhgr-petrol/40'}`} style={{ height: `${h}%` }}></div>
                           ))}
                        </div>
                     </div>
                     {/* Widget 2 */}
                     <div className="col-span-1 bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-center">
                        <div className="text-[9px] text-white/40 mb-1">Peak Node</div>
                        <div className="text-lg font-bold text-white">EU-West</div>
                        <div className="text-[9px] text-orange-400 mt-1">Affected: 42k Users</div>
                     </div>
                     {/* Widget 3 */}
                     <div className="col-span-1 bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-center">
                        <div className="text-[9px] text-white/40 mb-1">Status</div>
                        <div className="text-lg font-bold text-fhgr-petrol">Resolved</div>
                        <div className="text-[9px] text-white/30 mt-1">Autoscaling Triggered</div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Challenge C Connection Moved to Right Side */}
            <div className="mt-8 p-4 rounded-xl border border-fhgr-petrol/20 bg-fhgr-petrol/5 flex gap-3 text-sm text-white/70 shadow-lg">
              <div className="shrink-0 mt-0.5"><MessageSquare className="w-5 h-5 text-fhgr-petrol" /></div>
              <div className="leading-relaxed">
                <strong className="text-white mb-1 block tracking-wide">Brücke zur Challenge C</strong>
                Ihr seid eingeladen, in euren Entwürfen direkt diese Zukunftsrichtung zu explorieren: Entwerft anstelle starrer Layouts dynamische KI-Dashboards (z.B. den Split-Screen aus Chat & Canvas). Beachtet jedoch, dass hybride Interfaces ein deutlich komplexeres und präziseres Prompting im Modell erfordern als klassische Grids.
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  )
}
