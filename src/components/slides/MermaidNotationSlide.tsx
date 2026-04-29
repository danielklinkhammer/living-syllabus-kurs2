import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { Code2, FileCode2, Workflow, Check, ArrowRight, LayoutTemplate, ExternalLink } from 'lucide-react'

export default function MermaidNotationSlide() {
  const mermaidCode = `
flowchart TD
    %% Nodes
    A([Start]) --> B[User opens app]
    B --> C{Authenticated?}

    C -->|No| D[Login Screen]
    D --> E[/Enter credentials/]
    E --> F{Valid?}
    F -->|No| G[Show error]
    G --> D
    F -->|Yes| H[Create session]

    C -->|Yes| H
    H --> I[Load dashboard]

    %% Subgraph: AI assistant
    subgraph AI_System [AI Assistance Layer]
        J[Collect context]
        K[Run intent detection]
        L{Confidence > 0.8?}
        M[Answer automatically]
        N[Escalate to human]
        O[Log interaction]
        J --> K --> L
        L -->|Yes| M --> O
        L -->|No| N --> O
    end

    I --> J
    O --> P[Render response]
    P --> Q{User satisfied?}
    Q -->|Yes| R([End])
    Q -->|No| S[Open feedback form]
    S --> T[Store feedback]
    T --> R

    %% Extra paths
    I --> U[Settings]
    U --> V[Privacy controls]
    V --> I

    %% Clickable-looking labels via node text
    DOC[Docs / Help Center]
    I --> DOC

    %% Classes
    classDef startEnd fill:#dff7df,stroke:#2e7d32,stroke-width:2px,color:#111;
    classDef process fill:#e3f2fd,stroke:#1565c0,stroke-width:1.5px,color:#111;
    classDef decision fill:#fff3cd,stroke:#ef6c00,stroke-width:2px,color:#111;
    classDef danger fill:#ffebee,stroke:#c62828,stroke-width:2px,color:#111;
    classDef ai fill:#ede7f6,stroke:#6a1b9a,stroke-width:1.5px,color:#111;

    class A,R startEnd;
    class B,D,E,H,I,J,K,M,N,O,P,S,T,U,V,DOC process;
    class C,F,L,Q decision;
    class G danger;

    class J,K,L,M,N,O ai;

    %% Link styles
    linkStyle 0 stroke-width:2px;
    linkStyle 1,2,3,4 stroke:#4c8cfc;
`.trim()

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-12 overflow-y-auto relative custom-scrollbar">
      <div className="max-w-[1400px] w-full mx-auto relative z-10 py-12">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-8 shrink-0">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2">
            <Code2 className="w-4 h-4" /> Die Architektur-Sprache
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Format: Mermaid.js</h2>
          <p className="text-lg text-white/50 max-w-3xl leading-relaxed mb-6">
            KI-Modelle zeichnen keine Linien auf einen Canvas. 
            Sie strukturieren Logik durch Code. <strong>Mermaid.js</strong> ist die universelle 
            Markdown-Syntax, um komplexe Flows (inklusive Subgraphen und Klassen) maschinenlesbar zu diktieren.
          </p>
          <a href="https://mermaid.js.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-colors border border-white/10">
            Zu Mermaid.js <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left: Code Block */}
          <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay: 0.2}}>
            <Card variant="glass" className="h-[450px] !p-0 border-white/5 bg-[#0A1220] flex flex-col overflow-hidden relative shadow-2xl">
               <div className="h-10 bg-black/40 flex items-center px-4 gap-3 border-b border-white/5 shrink-0 z-10 relative">
                 <FileCode2 className="w-4 h-4 text-fhgr-petrol-light" />
                 <span className="text-[11px] font-mono text-white/40 tracking-widest">ai-assistant-flow.mermaid</span>
               </div>
               
               <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                 <pre className="font-mono text-[10px] lg:text-[11px] leading-relaxed text-white/80">
                   <code>{mermaidCode}</code>
                 </pre>
               </div>
               
               <div className="p-4 bg-fhgr-petrol/5 border-t border-fhgr-petrol/20 shrink-0">
                  <div className="text-xs text-white/60 flex gap-2 items-start">
                     <div className="mt-0.5 text-fhgr-petrol-light"><Workflow className="w-4 h-4" /></div>
                     <div>
                       Jeder LLM-Prompt zu Architektur oder User-Flows sollte mit der Instruktion 
                       <em> "Output as Mermaid.js flowchart"</em> versehen werden.
                     </div>
                  </div>
               </div>
            </Card>
          </motion.div>

          {/* Right: Render + Figma Integration */}
          <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay: 0.3}} className="h-[450px] flex gap-4">
            
            {/* The render output (fit to height) */}
            <Card variant="glass" className="h-full w-1/3 !p-0 border-white/5 bg-[#1A1A1A] flex flex-col relative overflow-hidden shadow-2xl shrink-0">
               <div className="absolute top-0 right-0 z-20 flex gap-2">
                 <div className="py-2 px-3 bg-fhgr-petrol/20 text-fhgr-petrol-light font-mono text-[10px] rounded-bl-xl font-bold uppercase tracking-wider backdrop-blur-md shadow-lg border-b border-l border-fhgr-petrol/30">
                   Output
                 </div>
               </div>
               <div className="flex-1 w-full p-4 flex justify-center bg-[#0d141e]">
                 <img 
                   src="/mermaid-flow.jpg" 
                   alt="Flowchart Rendering Diagram" 
                   className="h-full w-auto max-w-full object-contain rounded opacity-90 transition-opacity drop-shadow-2xl"
                 />
               </div>
            </Card>

            {/* Figma Mermaid Import */}
            <Card variant="glass" className="h-full flex-1 border-white/5 bg-gradient-to-br from-[#0D1525] to-[#0A1220] flex flex-col p-6 shadow-2xl justify-center relative overflow-hidden">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-fhgr-orange/10 blur-[50px] rounded-full" />
               <div className="absolute bottom-[-10px] left-[-10px] w-24 h-24 bg-fhgr-petrol/10 blur-[40px] rounded-full" />
               
               <div className="relative z-10 h-full flex flex-col justify-center">
                 <div className="flex items-center gap-3 mb-4">
                   <div className="p-3 bg-white/5 rounded-lg border border-white/10 shadow-lg">
                     <Code2 className="w-5 h-5 text-fhgr-petrol-light" />
                   </div>
                   <div className="p-1.5 bg-fhgr-orange/20 text-fhgr-orange rounded border border-fhgr-orange/30">
                     <ArrowRight className="w-3 h-3" />
                   </div>
                   <div className="p-3 bg-[#2C2D33] rounded-lg border border-white/10 shadow-lg">
                     <LayoutTemplate className="w-5 h-5 text-[#0ACF83]" />
                   </div>
                 </div>

                 <h3 className="text-lg lg:text-xl font-bold mb-3 tracking-tight">Code → FigJam</h3>
                 <p className="text-xs text-white/50 leading-relaxed mb-6">
                   Mit dem nativen Mermaid-Widget in FigJam lässt sich die oben generierte Logik 
                   direkt importieren. Kein manuelles Zeichnen mehr.
                 </p>
                 
                 <div className="grid grid-cols-1 gap-3">
                   <div className="flex items-start gap-3 bg-white/5 p-3 rounded border border-white/10">
                     <div className="bg-fhgr-petrol/20 p-2 rounded text-fhgr-petrol-light">
                       <Check className="w-4 h-4" />
                     </div>
                     <div>
                       <div className="text-xs font-bold">1. Generieren</div>
                       <div className="text-[10px] text-white/50 mt-0.5">LLM spuckt den Code aus.</div>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-3 bg-white/5 p-3 rounded border border-white/10">
                     <div className="bg-orange-500/20 p-2 rounded text-orange-400">
                       <Check className="w-4 h-4" />
                     </div>
                     <div>
                       <div className="text-xs font-bold">2. Copy & Paste</div>
                       <div className="text-[10px] text-white/50 mt-0.5">Direkt ins FigJam-Widget werfen.</div>
                     </div>
                   </div>

                   <div className="flex items-start gap-3 bg-white/5 p-3 rounded border border-white/10">
                     <div className="bg-green-500/20 p-2 rounded text-green-400">
                       <Check className="w-4 h-4" />
                     </div>
                     <div>
                       <div className="text-xs font-bold">3. Editieren</div>
                       <div className="text-[10px] text-white/50 mt-0.5">Visuell nachbessern in FigJam.</div>
                     </div>
                   </div>
                 </div>
               </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
