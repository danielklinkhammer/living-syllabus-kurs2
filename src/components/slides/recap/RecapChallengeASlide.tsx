import { motion } from 'framer-motion'
import SlideLayout from '../../layout/SlideLayout'
import { Map, Palette, Image as ImageIcon, FileText, CheckCircle2, MessageSquareHeart } from 'lucide-react'

export default function RecapChallengeASlide() {
  return (
    <SlideLayout>
      <div className="w-full flex flex-col h-full justify-start py-10">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-8">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">FigJam Review Panel</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Review Challenge A</h2>
          <p className="text-lg text-white/50 leading-relaxed max-w-3xl">
            Kreative Nutzung von KI für Produkt- und Service-Designs (Stadt Chur). Lade deine besten Artefakte in das gemeinsame FigJam Board hoch.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 w-full flex-1 min-h-0">
          
          {/* Left Column: Briefing & Deliverables */}
          <motion.div 
            initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay: 0.1}}
            className="flex-1 bg-black/40 p-6 rounded-2xl border border-white/10 flex flex-col overflow-y-auto custom-scrollbar"
          >
             <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
               <Map className="w-5 h-5 text-fhgr-petrol-light" /> Das Briefing
             </h3>
             <p className="text-sm text-white/60 leading-relaxed mb-6 bg-white/5 p-4 rounded-xl border border-white/5 italic">
               "Die Stadt Chur beauftragt eure Agentur, ein neues Produkt oder einen Service für Tourist:innen in Graubünden zu entwickeln. Ziel ist ein einprägsames, multimodales Erlebnis, das mithilfe von KI inszeniert wird (realistisch, visionär oder humorvoll)."
             </p>

             <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
               <CheckCircle2 className="w-5 h-5 text-green-400" /> Artefakte & Resultate
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="bg-black/40 p-3 rounded-lg border border-white/5">
                  <div className="flex items-center gap-2 mb-1 text-white/80"><FileText className="w-4 h-4 text-purple-400"/> <span className="text-sm font-semibold">Konzept & Copy</span></div>
                  <p className="text-xs text-white/40">KI-generierte Beschreibung des Services.</p>
                </div>
                <div className="bg-black/40 p-3 rounded-lg border border-white/5">
                  <div className="flex items-center gap-2 mb-1 text-white/80"><Palette className="w-4 h-4 text-pink-400"/> <span className="text-sm font-semibold">Moodboard</span></div>
                  <p className="text-xs text-white/40">Die visuelle Leitidee für das Portfolio.</p>
                </div>
                <div className="bg-black/40 p-3 rounded-lg border border-white/5">
                  <div className="flex items-center gap-2 mb-1 text-white/80"><ImageIcon className="w-4 h-4 text-blue-400"/> <span className="text-sm font-semibold">Hero Visuals</span></div>
                  <p className="text-xs text-white/40">Per Image-Prompting erstellte Kampagnenbilder.</p>
                </div>
                <div className="bg-black/40 p-3 rounded-lg border border-white/5">
                  <div className="flex items-center gap-2 mb-1 text-white/80"><MessageSquareHeart className="w-4 h-4 text-orange-400"/> <span className="text-sm font-semibold">Reflexion</span></div>
                  <p className="text-xs text-white/40">Doku der Prompts und KI-Haltung.</p>
                </div>
             </div>
          </motion.div>

          {/* Right Column: FigJam Action */}
          <motion.div 
            initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay: 0.2}}
            className="flex-1 bg-gradient-to-br from-fhgr-petrol/20 to-[#0b111a] p-6 rounded-2xl border border-fhgr-petrol/30 shadow-[0_0_30px_rgba(131,197,190,0.1)] flex flex-col justify-center items-center text-center relative overflow-hidden"
          >
             <div className="w-20 h-20 bg-fhgr-petrol/20 rounded-full flex items-center justify-center mb-6 border border-fhgr-petrol-light/30 text-fhgr-petrol-light">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline strokeLinecap="round" strokeLinejoin="round" points="14 2 14 8 20 8" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-6" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 15l3 3 3-3" /></svg>
             </div>
             
             <h3 className="text-2xl font-bold text-white mb-2">Upload ins FigJam</h3>
             <p className="text-sm text-white/60 mb-8 max-w-sm">
               Bitte ladet <strong className="text-white">nicht eure komplette Dokumentation</strong> hoch! Postet ausschließlich euer <strong className="text-white">allerbestes KI-generiertes Bild oder Konzept-Visual</strong> (auf das ihr am meisten stolz seid) in das bereitgestellte FigJam-Board.
             </p>

             <div className="w-full flex justify-center gap-4 text-left">
                <div className="flex-1 bg-black/40 p-4 rounded-xl border border-white/10 relative">
                   <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)] flex items-center justify-center text-white text-xs border-2 border-black">⭐</div>
                   <h4 className="text-sm font-bold text-white mb-1">Visuelle Ästhetik</h4>
                   <p className="text-xs text-white/40 leading-relaxed">Verteilt goldene Sterne für Moodboards und Hero Images, die visuell besonders flashen.</p>
                </div>
                <div className="flex-1 bg-black/40 p-4 rounded-xl border border-white/10 relative">
                   <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] flex items-center justify-center text-white text-sm font-bold border-2 border-black">💡</div>
                   <h4 className="text-sm font-bold text-white mb-1">Beste Leitidee</h4>
                   <p className="text-xs text-white/40 leading-relaxed">Verteilt Glühbirnen-Stempel für die kreativsten, humorvollsten oder visionärsten Konzepte.</p>
                </div>
                <div className="flex-1 hidden xl:block bg-black/40 p-4 rounded-xl border border-white/10 relative">
                   <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold border-2 border-black">💬</div>
                   <h4 className="text-sm font-bold text-white mb-1">Props verteilen</h4>
                   <p className="text-xs text-white/40 leading-relaxed">Nutzt die FigJam-Sticker für direktes Feedback. Feiert eure Kommiliton:innen aktiv!</p>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </SlideLayout>
  )
}
