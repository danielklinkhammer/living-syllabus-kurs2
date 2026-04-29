import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import { Webhook, BotMessageSquare, Database, Sparkles } from 'lucide-react'

export default function APIsSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full w-full max-w-6xl mx-auto overflow-y-auto lg:overflow-hidden relative pb-10 lg:pb-0">
        
        {/* Header */}
        <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} className="text-center mb-10 w-full mt-4 lg:mt-0">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Tech für Designer · Step 5</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Die Macht der APIs</h2>
          <p className="text-white/50 leading-relaxed max-w-3xl mx-auto text-lg mb-6">
            APIs (Application Programming Interfaces) sind die Kellner des Internets: Niemand darf selbst in der Backend-Küche kochen. Das Frontend (wir) bestellt beim Kellner (der API) – und dieser liefert das Gericht (Daten) an unseren Tisch zurück.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="flex flex-col lg:flex-row gap-6 w-full flex-1">
          
          {/* Classic API Column */}
          <motion.div 
            initial={{opacity:0, x:-20}} 
            animate={{opacity:1, x:0}} 
            transition={{delay: 0.1}}
            className="flex-1 rounded-2xl border border-white/5 bg-[#0A1220] p-8 flex flex-col relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Database className="w-32 h-32 text-blue-400" />
            </div>
            
            <div className="bg-blue-500/10 text-blue-400 p-3 rounded-2xl w-fit mb-6 border border-blue-500/20">
              <Webhook className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-bold mb-3">Klassische APIs</h3>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/30 mb-6">Strukturierte Logik</p>
            
            <p className="text-white/60 leading-relaxed text-sm flex-1">
              Traditionelle APIs (wie Stripe für Payments, OpenWeatherMap oder Datenbanken) erwarten eine **starre grammatikalische Befehlskette**. Man muss exakt codieren, welcher Datentyp (JSON) übermittelt wird. Bei einem Zeichensetzungsfehler crasht der Endpoint.
            </p>

            <div className="mt-8 bg-black/60 border border-white/10 rounded-xl p-4 font-mono text-[11px] lg:text-xs">
              <span className="text-white/40">// 1. Klassischer Request</span><br/>
              <span className="text-blue-400">POST</span> <span className="text-green-300">/api/v1/weather</span><br/>
              <span className="text-purple-300">{`{`}</span><br/>
              &nbsp;&nbsp;<span className="text-blue-300">"lat"</span>: <span className="text-orange-300">47.3769</span>,<br/>
              &nbsp;&nbsp;<span className="text-blue-300">"lng"</span>: <span className="text-orange-300">8.5417</span><br/>
              <span className="text-purple-300">{`}`}</span><br/><br/>
              <span className="text-white/40">// 2. Starre JSON Response</span><br/>
              <span className="text-purple-300">{`{`}</span><br/>
              &nbsp;&nbsp;<span className="text-blue-300">"temp_c"</span>: <span className="text-orange-300">14.2</span>,<br/>
              &nbsp;&nbsp;<span className="text-blue-300">"condition"</span>: <span className="text-yellow-300">"Sunny"</span>,<br/>
              &nbsp;&nbsp;<span className="text-blue-300">"wind_kph"</span>: <span className="text-orange-300">12.5</span><br/>
              <span className="text-purple-300">{`}`}</span>
            </div>
          </motion.div>

          {/* VS Divider (Desktop only) */}
          <div className="hidden lg:flex items-center justify-center shrink-0 w-8">
            <div className="h-full w-[1px] bg-white/5 relative flex items-center justify-center">
               <div className="bg-[#0E1117] text-white/20 text-xs font-bold uppercase p-2 relative z-10 rounded-full border border-white/5">
                 VS
               </div>
            </div>
          </div>

          {/* AI API Column */}
          <motion.div 
            initial={{opacity:0, x:20}} 
            animate={{opacity:1, x:0}} 
            transition={{delay: 0.2}}
            className="flex-1 rounded-2xl border border-fhgr-petrol/20 bg-gradient-to-b from-fhgr-petrol/5 to-[#0A1220] p-8 flex flex-col relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Sparkles className="w-32 h-32 text-fhgr-accent" />
            </div>
            
            <div className="bg-fhgr-petrol/20 text-fhgr-accent p-3 rounded-2xl w-fit mb-6 border border-fhgr-petrol/30">
              <BotMessageSquare className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-bold mb-3">Generative AI APIs</h3>
            <p className="text-sm font-semibold uppercase tracking-widest text-fhgr-petrol mb-6">Semantische Prompts</p>
            
            <p className="text-white/60 leading-relaxed text-sm flex-1">
              **Der Gamechanger für Designer:** LLMs (OpenAI, Gemini, Nano Banana) haben die API revolutioniert. Anstatt starren Maschinencode zu schreiben, übergeben wir der API *menschliche Sprache*. Das Frontend generiert Code basierend auf einer gesprochenen Instruktion!
            </p>

            <div className="mt-8 bg-black/60 border border-white/10 rounded-xl p-4 font-mono text-[11px] lg:text-xs">
              <span className="text-white/40">// 1. Generativer Request</span><br/>
              <span className="text-fhgr-petrol">POST</span> <span className="text-green-300">/v1/chat/completions</span><br/>
              <span className="text-purple-300">{`{`}</span><br/>
              &nbsp;&nbsp;<span className="text-blue-300">model</span>: <span className="text-orange-300">"gpt-4o"</span>,<br/>
              &nbsp;&nbsp;<span className="text-blue-300">messages</span>: [<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">{`{ "role": "user", "content": "Wetter Zürich? Mache ein Haiku." }`}</span><br/>
              &nbsp;&nbsp;]<br/>
              <span className="text-purple-300">{`}`}</span><br/><br/>
              <span className="text-white/40">// 2. Semantische KI Response</span><br/>
              <span className="text-purple-300">{`{`}</span><br/>
              &nbsp;&nbsp;<span className="text-blue-300">"content"</span>: <span className="text-yellow-300">"Goldne Sonne lacht,\nZürichsee im hellen Glanz,\nKühl weht sanfter Wind."</span><br/>
              <span className="text-purple-300">{`}`}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </SlideLayout>
  )
}
