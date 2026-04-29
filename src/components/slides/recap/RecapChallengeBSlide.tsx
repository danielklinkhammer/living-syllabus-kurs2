import { motion } from 'framer-motion'
import SlideLayout from '../../layout/SlideLayout'
import { Code, Fingerprint, LayoutTemplate, Layers, CheckCircle2, CopyPlus } from 'lucide-react'

export default function RecapChallengeBSlide() {
  return (
    <SlideLayout>
      <div className="w-full flex flex-col h-full justify-start py-10">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-8">
          <div className="text-orange-400 text-xs font-mono uppercase tracking-widest mb-3">FigJam Review Panel</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Review Challenge B</h2>
          <p className="text-lg text-white/50 leading-relaxed max-w-3xl">
            KI-gestütztes Landingpage-Design. Von der Idee zur strukturierten Architektur. Lade deine Artefakte in das gemeinsame FigJam Board hoch.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 w-full flex-1 min-h-0">
          
          {/* Left Column: Briefing & Deliverables */}
          <motion.div 
            initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay: 0.1}}
            className="flex-1 bg-black/40 p-6 rounded-2xl border border-white/10 flex flex-col overflow-y-auto custom-scrollbar"
          >
             <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
               <Layers className="w-5 h-5 text-orange-400" /> Der Fokus
             </h3>
             <p className="text-sm text-white/60 leading-relaxed mb-6 bg-white/5 p-4 rounded-xl border border-white/5 italic">
               "Im Fokus steht nicht die fertige Website, sondern das Verständnis von Struktur, Inhalten, Layout und dem bewussten Zusammenspiel von Bild-KI und Code-KI. Nicht Perfektion, sondern Nachvollziehbarkeit zählt."
             </p>

             <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
               <CheckCircle2 className="w-5 h-5 text-green-400" /> Eure Deliverables
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="bg-black/40 p-3 rounded-lg border border-white/5">
                  <div className="flex items-center gap-2 mb-1 text-white/80"><Fingerprint className="w-4 h-4 text-purple-400"/> <span className="text-sm font-semibold">1. Basis & Struktur</span></div>
                  <p className="text-xs text-white/40">Inhaltlicher Aufbau, Target Audience und Section-Überblick der LP.</p>
                </div>
                <div className="bg-black/40 p-3 rounded-lg border border-white/5">
                  <div className="flex items-center gap-2 mb-1 text-white/80"><LayoutTemplate className="w-4 h-4 text-pink-400"/> <span className="text-sm font-semibold">2. Visuelle Ideation</span></div>
                  <p className="text-xs text-white/40">Generierte Text-zu-Bild Explorationen für Header / Vibe.</p>
                </div>
                <div className="bg-black/40 p-3 rounded-lg border border-white/5">
                  <div className="flex items-center gap-2 mb-1 text-white/80"><Code className="w-4 h-4 text-blue-400"/> <span className="text-sm font-semibold">3. LP-Artefakt</span></div>
                  <p className="text-xs text-white/40">Ein generiertes Figma-Layout, AI-Code oder Mockup (z.B. Make / Lovable).</p>
                </div>
                <div className="bg-black/40 p-3 rounded-lg border border-white/5">
                  <div className="flex items-center gap-2 mb-1 text-white/80"><CopyPlus className="w-4 h-4 text-orange-400"/> <span className="text-sm font-semibold">4. KI-Reflexion</span></div>
                  <p className="text-xs text-white/40">Welche Tools haben geklappt, was hat halluziniert?</p>
                </div>
             </div>
          </motion.div>

          {/* Right Column: FigJam Action */}
          <motion.div 
            initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay: 0.2}}
            className="flex-1 bg-gradient-to-br from-orange-500/20 to-[#0b111a] p-6 rounded-2xl border border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.1)] flex flex-col justify-center items-center text-center relative overflow-hidden"
          >
             <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mb-6 border border-orange-400/30 text-orange-400">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m8 17 4 4 4-4" /></svg>
             </div>
             
             <h3 className="text-2xl font-bold text-white mb-2">Ab ins FigJam!</h3>
             <p className="text-sm text-white/60 mb-8 max-w-sm">
               Bitte ladet <strong className="text-white">nicht alle Zwischenschritte</strong> hoch! Postet ausschließlich einen <strong className="text-white">hochwertigen Screenshot eurer finalen Landingpage</strong> (auf die ihr am meisten stolz seid) in das bereitgestellte FigJam-Board.
             </p>

             <div className="w-full flex justify-center gap-4 text-left">
                <div className="flex-1 bg-black/40 p-4 rounded-xl border border-white/10 relative">
                   <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)] flex items-center justify-center text-white text-xs border-2 border-black">⭐</div>
                   <h4 className="text-sm font-bold text-white mb-1">KI Design Ästhetik</h4>
                   <p className="text-xs text-white/40 leading-relaxed">Verteilt goldene Sterne an die Layouts, die konzeptionell und visuell am meisten überzeugen.</p>
                </div>
                <div className="flex-1 bg-black/40 p-4 rounded-xl border border-white/10 relative">
                   <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] flex items-center justify-center text-white text-sm font-bold border-2 border-black">💡</div>
                   <h4 className="text-sm font-bold text-white mb-1">Cleverste Struktur</h4>
                   <p className="text-xs text-white/40 leading-relaxed">Verteilt Glühbirnen-Stempel für besonders smarte Einsatzweisen von Code & Layout-KI.</p>
                </div>
                <div className="flex-1 hidden xl:block bg-black/40 p-4 rounded-xl border border-white/10 relative">
                   <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold border-2 border-black">💬</div>
                   <h4 className="text-sm font-bold text-white mb-1">Props verteilen</h4>
                   <p className="text-xs text-white/40 leading-relaxed">Nutzt die FigJam-Sticker für direktes logisches Feedback zu Prompts und Fallstricken.</p>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </SlideLayout>
  )
}
