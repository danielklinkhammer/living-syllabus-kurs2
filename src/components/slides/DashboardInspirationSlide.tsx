import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import { ExternalLink, LayoutGrid, HeartPulse, PieChart, Wallet } from 'lucide-react'


export default function DashboardInspirationSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16 items-center">
        
        {/* Left Column: Context & Mindset */}
        <div className="flex-1 w-full space-y-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Dashboard Design · Vielfalt</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Die vielen Gesichter eines Dashboards</h2>
            <p className="text-white/60 leading-relaxed max-w-lg mb-6">
              Ein Dashboard ist kein starres Layout-Konstrukt. Je nach Domäne und Nutzerziel verändert sich seine Anatomie radikal – von hyperkomplexen Finanz-Terminals bis hin zu hochgradig visuellen Healthcare-Monitoring-Screens.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 max-w-lg">
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.1}} className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute -right-2 -bottom-2 text-white/5"><Wallet className="w-16 h-16" /></div>
                <h4 className="text-white font-semibold text-sm">FinTech & Krypto</h4>
                <p className="text-[11px] text-white/50">Hohe Daten-Dichte, dunkle UI (Dark Mode), Fokus auf Echtzeit-Graphen und Tabellen.</p>
             </motion.div>
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.2}} className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute -right-2 -bottom-2 text-white/5"><HeartPulse className="w-16 h-16" /></div>
                <h4 className="text-white font-semibold text-sm">Healthcare</h4>
                <p className="text-[11px] text-white/50">Helle UI, viel Whitespace, 3D Modelle, Fokus auf vitale Einzelwerte statt Tabellen.</p>
             </motion.div>
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.3}} className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute -right-2 -bottom-2 text-white/5"><PieChart className="w-16 h-16" /></div>
                <h4 className="text-white font-semibold text-sm">SaaS Admin</h4>
                <p className="text-[11px] text-white/50">Modulare Widgets, Task-Listen, klassische Sidebar-Navigation.</p>
             </motion.div>
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.4}} className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col gap-2 justify-center items-center">
                <a href="https://dribbble.com/search/shots/popular/web-design?q=dashboard" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-colors text-xs font-semibold w-full justify-center">
                  <LayoutGrid className="w-3 h-3" />
                  Dribbble Inspiration
                </a>
             </motion.div>
          </div>
        </div>

        {/* Right Column: Visual Inspiration Board */}
        <div className="flex-1 w-full flex items-center justify-center">
           <motion.div 
             initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.3}}
             className="w-full max-w-xl rounded-2xl bg-[#1A1A1A] border border-white/10 p-2 shadow-2xl relative overflow-hidden group"
           >
              {/* Image Container for the Dribbble Screenshot */}
              <div className="aspect-video bg-[#0f0f0f] rounded-xl overflow-hidden relative border border-white/5 flex items-center justify-center">
                 {/* Fallback pattern if image is missing */}
                 <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
                 
                 <img 
                   src="/images/dribbble-dashboards.jpg" 
                   alt="Dribbble Dashboard Inspiration Grid" 
                   className="w-full h-full object-cover relative z-10"
                   onError={(e) => {
                     // Fallback UI if the user hasn't saved the screenshot yet
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.parentElement!.classList.add('bg-white/5');
                   }}
                 />

                 {/* Fallback Text (only visible if image fails to load) */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 text-white/30 text-xs">
                   <LayoutGrid className="w-8 h-8 mb-2 opacity-50" />
                   <span>Bitte `dribbble-dashboards.jpg` in `/public/images` ablegen</span>
                 </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="text-[10px] text-white/70">Quelle: dribbble.com</span>
                 <ExternalLink className="w-3 h-3 text-pink-400" />
              </div>
           </motion.div>
        </div>

      </div>
    </SlideLayout>
  )
}
