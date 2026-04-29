import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import { Smartphone, GraduationCap } from 'lucide-react'

// Inline GitHub SVG since lucide-react removed brand icons
const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" height="24" 
    stroke="currentColor" strokeWidth="2" 
    fill="currentColor" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export default function GitHubSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16 items-center">
        
        {/* Left: Information */}
        <div className="flex-1 w-full space-y-5">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Tech für Designer · Step 3</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">GitHub & Setup</h2>
            <p className="text-white/50 leading-relaxed mb-4">
              GitHub ist die globale Plattform für Softwareentwicklung und Versionierung. Bevor wir KI-Dienste wie Copilot nutzen können, müssen zwei fundamentale Security- und Setup-Etappen erledigt werden.
            </p>
            <a href="https://github.com/danielklinkhammer/living-syllabus" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white/80 transition-colors mb-6">
              <GithubIcon className="w-4 h-4"/> Quellcode dieses Decks auf GitHub ansehen
            </a>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {/* 2FA Mandate */}
            <motion.div 
              initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.1}}
              className="bg-red-950/20 border border-red-500/30 rounded-xl p-4 flex gap-4 items-start"
            >
              <div className="bg-red-500/10 p-2 rounded-lg mt-1">
                <Smartphone className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="font-bold text-red-400 text-lg mb-1">MANDATORISCH: 2-Faktor-Auth (2FA)</h3>
                <p className="text-sm text-white/60 mb-2">Ohne eine 2FA-App (Authenticator) werdet ihr künftig aus GitHub ausgeschlossen. SMS-Codes gelten als unsicher.</p>
                <div className="bg-black/30 p-2 rounded text-xs text-white/40 border border-white/5 font-mono">
                  1. Microsoft Authenticator oder Authy aufs Smartphone laden<br/>
                  2. In GitHub Settings → Password and Authentication aktivieren<br/>
                  3. Recovery Codes speichern!
                </div>
              </div>
            </motion.div>

            {/* Student Pack */}
            <motion.div 
              initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.2}}
              className="bg-fhgr-petrol/10 border border-fhgr-petrol-light/30 rounded-xl p-4 flex gap-4 items-start"
            >
              <div className="bg-fhgr-petrol/20 p-2 rounded-lg mt-1">
                <GraduationCap className="w-6 h-6 text-fhgr-petrol-light" />
              </div>
              <div>
                <h3 className="font-bold text-fhgr-petrol-light text-lg mb-1">GitHub Education Account</h3>
                <p className="text-sm text-white/60">Sichert euch das Developer Pack mit eurer Hochschul-Mail. Dadurch erhaltet ihr GitHub Copilot in der IDE komplett kostenfrei.</p>
              </div>
            </motion.div>

            {/* Codespaces */}
            <motion.div 
              initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.3}}
              className="bg-blue-900/10 border border-blue-500/30 rounded-xl p-4 flex gap-4 items-start"
            >
              <div className="bg-blue-500/20 p-2 rounded-lg mt-1">
                <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.0147 19.9853 10 17.5 10C17.1517 10 16.8247 10.0463 16.5186 10.1348C15.8239 6.6433 12.8363 4 9.17647 4C4.65866 4 1 7.80558 1 12.5C1 17.1944 4.65866 21 9.17647 21H17.5V19Z" /></svg>
              </div>
              <div>
                <h3 className="font-bold text-blue-400 text-lg mb-1">GitHub Codespaces</h3>
                <p className="text-sm text-white/60">Die Zero-Setup Cloud IDE. Startet eine vollwertige VS Code Instanz (inkl. Copilot) direkt aus dem Browser – ohne lokale Installation.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="flex-1 w-full flex items-center justify-center">
          <motion.div 
            initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{delay:0.3}}
            className="w-full max-w-sm aspect-square bg-[#0D1117] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fhgr-petrol-light/10 blur-[60px] rounded-full pointer-events-none" />

            <GithubIcon className="w-24 h-24 text-white mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">GitHub Account</h3>
            <div className="w-16 h-1 bg-fhgr-petrol-light rounded-full mb-6"></div>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-full border border-green-500/20 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              2FA Secured
            </div>
            
            <div className="mt-4 px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 text-xs font-mono">
              PRO / Student Plan Active
            </div>
          </motion.div>
        </div>

      </div>
    </SlideLayout>
  )
}
