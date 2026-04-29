import { motion } from 'framer-motion'
import { ServerCog, Code2, Users, Database, FileCode2, Info } from 'lucide-react'
import Card from '../ui/Card'

export default function ServiceBlueprintSlide() {
  const mermaidSequenceCode = `
sequenceDiagram
    participant U as User
    participant F as Frontend Client
    participant AG as API Gateway
    participant AS as Auth Service
    participant DB as System Database

    %% Frontstage Interaction
    rect rgb(20, 30, 45)
    Note over U, F: Frontstage (UX Focus)
    U->>F: Clicks "Load Dashboard"
    end
    
    %% Backstage / Tech Stack
    rect rgb(30, 20, 45)
    Note over F, DB: Backstage (Architecture Focus)
    F->>AG: GET /api/v1/dashboard (JWT)
    activate AG
    
    AG->>AS: Verify Token
    activate AS
    alt Token Invalid
        AS-->>AG: 401 Unauthorized
        AG-->>F: Redirect to Login
    else Token Valid
        AS-->>AG: 200 OK (User ID)
        AG->>DB: Query User Data & Stats
        activate DB
        DB-->>AG: JSON Backup Data
        deactivate DB
        AG-->>F: JSON Response
    end
    deactivate AS
    deactivate AG
    end
    
    F-->>U: Renders UI Components
`.trim()

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-12 overflow-y-auto relative custom-scrollbar">
      <div className="max-w-[1400px] w-full mx-auto relative z-10 py-12">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-8 shrink-0">
          <div className="text-purple-400 text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2">
            <ServerCog className="w-4 h-4" /> System-Level Design
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Service Blueprints & UML</h2>
          <p className="text-lg text-white/50 max-w-3xl leading-relaxed">
            Eine Customer Journey endet nicht am Button-Klick. Für KI und Entwickler benötigen wir System-Architekturen, die <strong>Frontstage</strong> (UX) und <strong>Backstage</strong> (Datenbanken, APIs) exakt chronologisch verknüpfen. Das ist der Übergang von UX-Mapping zu technischen <em>UML Sequence Diagrams</em>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left: Content */}
          <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay: 0.2}} className="space-y-4">
            
            <Card variant="glass" className="!p-6 bg-[#0A1220] border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.05)]">
              <h3 className="font-bold text-purple-400 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5"/> Service Blueprint (Das Konzept)
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                Ein Service Blueprint erweitert den simplen Klickpfad des Users um hintergründige Prozesse (z.B. Backend-Validationen und Server-Calls). Er deckt systematische Reibungspunkte in der technischen Lieferkette auf.
              </p>
              <div className="p-3 bg-white/5 rounded border border-white/5 flex gap-3 text-xs text-white/60">
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Wo Flowcharts "Magic" simulieren, zwingt der Blueprint uns, die genaue Interaktion (API/Datenbank) zu benennen.</span>
              </div>
            </Card>

            <Card variant="glass" className="!p-6 border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full" />
              <h3 className="font-bold text-white mb-3 flex items-center gap-2 relative z-10 text-lg">
                <Database className="w-5 h-5 text-indigo-400"/> UML Sequence (Die Exekution)
              </h3>
              <p className="text-sm text-white/60 leading-relaxed relative z-10 mb-4">
                Das UML Sequenz-Diagramm ist das Werkzeug der Wahl, um diesen Blueprint maschinenlesbar zu übersetzen.
              </p>
              <ul className="text-sm text-white/80 leading-relaxed font-medium space-y-2 relative z-10">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Identifiziert Akteure (Client, Gateway, DB)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Definiert exakte Netzabfragen (APIs, JSON)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Moduliert Logikzweige (if/else bei Fehlern)</li>
              </ul>
            </Card>

          </motion.div>

          {/* Right: Code Block */}
          <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay: 0.3}}>
            <Card variant="glass" className="h-[450px] !p-0 border-white/5 bg-[#0A1220] flex flex-col overflow-hidden relative shadow-2xl">
               <div className="h-10 bg-black/40 flex items-center px-4 gap-3 border-b border-white/5 shrink-0 z-10 relative">
                 <FileCode2 className="w-4 h-4 text-purple-400" />
                 <span className="text-[11px] font-mono text-white/40 tracking-widest">sequence-api-auth.mermaid</span>
                 <div className="ml-auto text-[10px] font-mono py-1 px-2 bg-purple-500/20 text-purple-300 rounded border border-purple-500/30">
                   MACHINEREADABLE
                 </div>
               </div>
               
               <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                 <pre className="font-mono text-[10px] lg:text-[11px] leading-relaxed text-white/80">
                   <code>{mermaidSequenceCode}</code>
                 </pre>
               </div>
               
               <div className="p-4 bg-purple-500/5 border-t border-purple-500/20 shrink-0">
                  <div className="text-xs text-white/60 flex gap-2 items-start">
                     <div className="mt-0.5 text-purple-400"><Code2 className="w-4 h-4" /></div>
                     <div>
                       <strong>Vibe Coding Trick:</strong> Sobald dieses Diagramm an einen LLM-Agenten übergeben wird, kann dieser fehlerfreien Routing- und Datenbank-Code (z.B. in Node.js) erzeugen.
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
