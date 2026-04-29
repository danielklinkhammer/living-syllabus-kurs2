import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import { Globe, Server, Bot } from 'lucide-react'

export default function PublishingSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16 items-center">
        
        {/* Left: Info */}
        <div className="flex-1 w-full space-y-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Tech für Designer · Step 4</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Deployment & Publishing</h2>
            <p className="text-white/50 leading-relaxed mb-6">
              Vom Code zur Live-URL. Das Internet ist unser Ausgabemedium. Heutzutage gibt es extrem schnelle Wege, eine Appiklation zu publizieren – manuell gepusht oder als 1-Click direkt aus dem AI-Builder.
            </p>
          </motion.div>

          {/* Vercel & Netlify */}
          <motion.div 
            initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.1}}
            className="p-5 bg-[#0E1117] border border-white/5 rounded-xl flex items-start gap-4"
          >
            <div className="bg-white/5 p-3 rounded-xl mt-1 shrink-0"><Server className="w-6 h-6 text-white" /></div>
            <div>
              <h3 className="font-bold text-lg mb-1 text-white">GitHub CD Deploy: Vercel & Netlify</h3>
              <p className="text-sm text-white/60 mb-3">Der Standardweg für klassische Webprojekte. Wenn ihr lokalen Code auf GitHub pusht (`git push`), wird automatisch ein neuer Produktions-Build gestartet.</p>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-black/50 border border-white/10 rounded-lg text-xs font-mono text-white/40">
                <span className="text-green-400">~/</span> $ vercel --prod
              </div>
            </div>
          </motion.div>

          {/* Native AI Hosting */}
          <motion.div 
            initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.2}}
            className="relative p-5 bg-gradient-to-r from-fhgr-petrol-dark/30 to-black border border-fhgr-petrol/30 rounded-xl flex items-start gap-4 overflow-hidden"
          >
             <div className="absolute right-0 top-0 opacity-5 pointer-events-none"><Globe className="w-48 h-48 -mr-10 -mt-10" /></div>
            
             <div className="bg-fhgr-petrol/20 border border-fhgr-petrol-light/30 p-3 rounded-xl mt-1 shrink-0 relative z-10">
               <Bot className="w-6 h-6 text-fhgr-petrol-light" />
             </div>
             <div className="relative z-10">
               <h3 className="font-bold text-lg mb-1 text-fhgr-petrol-light">Native AI Hosting</h3>
               <p className="text-sm text-white/60">Tools wie <strong>Lovable</strong>, <strong>v0</strong> oder <strong>Google AI Studio</strong> bieten natives, integriertes 1-Click-Hosting an. Anstatt Code zu exportieren, wird die Appiklation direkt auf deren eigenen Servern provisioniert.</p>
             </div>
          </motion.div>
        </div>

        {/* Right: Visual Pipeline */}
        <div className="flex-1 w-full flex items-center justify-center">
          <motion.div 
             initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.3}}
             className="w-full max-w-sm rounded-xl p-8 flex flex-col items-center justify-center text-center relative"
          >
             {/* Local / Builder */}
             <div className="w-full p-4 rounded-xl border border-white/10 bg-black/40 text-sm font-semibold text-white/70 mb-2">Lokale IDE / KI-Builder</div>
             
             {/* Push Arrow */}
             <div className="flex flex-col items-center">
               <div className="w-0.5 h-6 bg-gradient-to-b from-white/20 to-fhgr-petrol"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-fhgr-petrol shadow-[0_0_10px_rgba(33,150,243,0.5)]"></div>
               <div className="text-[10px] text-fhgr-petrol-light font-mono my-2 uppercase tracking-widest">Publishing Event</div>
               <div className="w-2.5 h-2.5 rounded-full bg-fhgr-petrol"></div>
               <div className="w-0.5 h-6 bg-gradient-to-b from-fhgr-petrol to-white/20"></div>
             </div>

             {/* Live Web */}
             <div className="w-full mt-2 p-6 rounded-xl border border-fhgr-petrol/40 bg-[#0E1117] shadow-xl relative overflow-hidden">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-fhgr-petrol/20 blur-[50px] rounded-full" />
               <Globe className="w-12 h-12 text-white mx-auto mb-3" />
               <div className="text-white font-bold mb-1">Live im Web</div>
               <div className="text-xs font-mono text-green-400">https://meine-app.vercel.app</div>
             </div>
          </motion.div>
        </div>

      </div>
    </SlideLayout>
  )
}
