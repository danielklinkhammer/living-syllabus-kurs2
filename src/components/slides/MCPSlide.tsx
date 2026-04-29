import { motion } from 'framer-motion'
import { Server, Zap, ArrowUpRight, Terminal } from 'lucide-react'

// Inline GitHub SVG since lucide-react removed brand icons
const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" height="24" 
    stroke="currentColor" strokeWidth="2" 
    fill="none" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.38-3.56 5.06 5.06 0 0 0-.13-3.51s-1.1-.35-3.6 1.3a12.1 12.1 0 0 0-6 0C6.2 2.1 5.1 2.45 5.1 2.45a5.06 5.06 0 0 0-.13 3.51A5.2 5.2 0 0 0 3.6 9.5c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path>
  </svg>
)

export default function MCPSlide() {
  const features = [
    { 
      title: "1. Server-Konfiguration (Desktop & Remote)", 
      desc: "Um den Figma MCP Server zu nutzen, wird er direkt im Agenten (z.B. Cursor, Claude Desktop) konfiguriert. Man verbindet sich Remote (via mcp.figma.com) oder lokal, um der KI vollen Lese- und Schreibzugriff zu erteilen." 
    },
    { 
      title: "2. The Two-Way Sync: Code ➔ Canvas", 
      desc: "Das absolute Highlight: Agenten können nicht nur Code schreiben, sondern Live-UI (HTML/CSS) zurück in Figma als editierbare Vektor-Frames ('Write to Canvas') generieren! Code-Änderungen fließen direkt ins Design zurück." 
    },
    { 
      title: "3. Figma ➔ Code (Extraction)", 
      desc: "Der umgekehrte Weg: Mit '@figma' liest die KI komplette Layouts, Tokens und FigJam-Flows aus. Das stundenlange manuelle Abtippen von CSS-Werten und Auto-Layout Abständen entfällt komplett." 
    },
    { 
      title: "4. Code Connect Consistency", 
      desc: "Der Server greift auf 'Code Connect' zu. Generierter Code halluziniert keine wilden Klassen, sondern nutzt exakt die React-Komponenten, die in der eigenen Codebase hinterlegt sind." 
    }
  ]

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#060F1A] text-white overflow-y-auto lg:overflow-hidden relative px-6 lg:px-16">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mt-12 lg:mt-0 pb-12">
        
        {/* Left: Content */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2">
              <Server className="w-4 h-4" /> Tool Orchestration
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Die Figma MCP Bridge</h2>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              MCP bricht die Mauern zwischen Design (Vektor) und Code (Production) ein. Es ermöglicht endlich eine <strong>bidirektionale</strong> Synchronisation zwischen Figma und deiner IDE.
            </p>
          </motion.div>

          <div className="space-y-4">
            {features.map((feat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="flex gap-4 items-start p-4 hover:bg-white/5 rounded-xl transition-colors border border-white/5 hover:border-white/10 bg-black/20"
              >
                <div>
                  <div className="font-bold text-white mb-1 tracking-wide">{feat.title}</div>
                  <div className="text-[13px] text-white/50 leading-relaxed">{feat.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 0.5}} className="mt-8 flex items-center gap-4">
             <a href="https://github.com/figma/mcp-server" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-fhgr-petrol/20 border border-fhgr-petrol/40 text-fhgr-petrol-light hover:text-white rounded-lg font-mono text-sm hover:bg-fhgr-petrol/40 transition-all shadow-[0_0_15px_rgba(131,197,190,0.1)]">
                <GithubIcon className="w-4 h-4" /> Figma MCP Docs <ArrowUpRight className="w-4 h-4" />
             </a>
             <span className="text-xs text-white/30 font-mono hidden sm:block">Open Source @ GitHub</span>
          </motion.div>
        </div>

        {/* Right: Graphic */}
        <div className="lg:col-span-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl p-8 bg-gradient-to-tr from-[#0b111a] to-[#131E2B] border border-white/10 flex flex-col justify-center min-h-[450px] shadow-[0_0_50px_rgba(131,197,190,0.05)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fhgr-petrol_light/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="w-full flex items-center justify-between relative z-10 px-4 sm:px-8">
              
              {/* Figma Node */}
              <div className="flex flex-col items-center gap-4 z-20">
                <div className="w-20 h-20 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center p-4 shadow-xl backdrop-blur-sm">
                  <svg viewBox="0 0 38 57" fill="none" className="w-10 h-10">
                    <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19C14.7467 19 19 23.2533 19 28.5Z" fill="#1ABCFE"/>
                    <path d="M0 47.5C0 52.7467 4.25329 57 9.5 57C14.7467 57 19 52.7467 19 47.5V38H9.5C4.25329 38 0 42.2533 0 47.5Z" fill="#0ACF83"/>
                    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                    <path d="M19 19V38H28.5C33.7467 38 38 33.7467 38 28.5C38 23.2533 33.7467 19 28.5 19H19Z" fill="#A259FF"/>
                  </svg>
                </div>
                <div className="text-xs font-mono font-bold text-white/50 tracking-widest">FIGMA API</div>
              </div>

              {/* MCP Bridge */}
              <div className="flex-1 flex px-2 translate-y-[-24px]">
                <div className="w-full h-[2px] bg-white/10 relative flex justify-center">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-[2px] bg-fhgr-petrol-light shadow-[0_0_10px_#83c5be]"
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#0b111a] border border-white/10 text-fhgr-petrol-light text-[10px] font-mono rounded-lg flex items-center gap-2 whitespace-nowrap shadow-lg">
                    <Zap className="w-3 h-3 text-fhgr-petrol-light" /> MCP Server
                  </div>
                </div>
              </div>

              {/* AI Agent Node */}
              <div className="flex flex-col items-center gap-4 z-20">
                <div className="w-20 h-20 rounded-2xl bg-[#0b111a] border border-white/20 flex items-center justify-center p-4 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-white/80"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <div className="text-xs font-mono font-bold text-white/50 tracking-widest">IDE (CURSOR)</div>
              </div>
            </div>

            <div className="mt-16 w-full p-5 bg-black/60 border border-white/5 rounded-xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 left-0 w-1 h-full bg-fhgr-petrol-light" />
              <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Terminal className="w-3 h-3" /> User Prompt
              </div>
              <div className="text-sm md:text-base text-white font-medium leading-relaxed">
                "<span className="text-fhgr-petrol-light">@figma</span> Evaluiere Frame <span className="text-fhgr-petrol-light">#Dashboard-v2</span> und baue die Sidebar-Komponente funktionsgleich mit unserem Tailwind-System nach."
              </div>
            </div>
            
          </motion.div>
        </div>

      </div>
    </div>
  )
}
