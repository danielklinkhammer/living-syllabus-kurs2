import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import { FileJson, Database, Braces } from 'lucide-react'

export default function DataFormatJsonSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16 items-center">
        
        {/* Left Column: Context & Syntax */}
        <div className="flex-1 w-full space-y-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Datenstruktur</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">JSON: Das Rückgrat des Web</h2>
            <p className="text-white/60 leading-relaxed max-w-lg mb-6">
              <strong>J</strong>ava<strong>S</strong>cript <strong>O</strong>bject <strong>N</strong>otation ist das weltweite Standardformat für den strukturierten Datenaustausch. Es überträgt nackte Daten zwischen APIs, Servern und AI-Agenten in einem Format, das für Maschinen blitzschnell zu parsen ist.
            </p>
          </motion.div>

          <div className="space-y-4 max-w-lg">
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.1}} className="bg-white/5 p-4 rounded-xl border border-white/10 flex gap-4 items-start">
                <Braces className="w-5 h-5 text-fhgr-petrol-light shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Strikte Syntax-Regeln</h4>
                  <p className="text-sm text-white/50">Daten existieren als <code>"Key": "Value"</code> Paare. Key-Namen müssen zwingend in doppelten Anführungszeichen stehen. Kommata trennen Einträge, aber nach dem letzten Eintrag darf keines mehr stehen!</p>
                </div>
             </motion.div>
             <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.2}} className="bg-white/5 p-4 rounded-xl border border-white/10 flex gap-4 items-start">
                <Database className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Strukturen & Datentypen</h4>
                  <p className="text-sm text-white/50">Objekte <code>{"{}"}</code> fassen Eigenschaften zusammen. Arrays <code>{"[]"}</code> beinhalten sortierte Listen. Zudem differenziert JSON exakt zwischen Text <code>"Hallo"</code>, Zahlen <code>42</code> und Booleans <code>true/false</code>.</p>
                </div>
             </motion.div>
          </div>
        </div>

        {/* Right Column: Code Example */}
        <div className="flex-1 w-full flex items-center justify-center">
           <motion.div 
             initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.3}}
             className="w-full max-w-xl rounded-2xl bg-[#0D1117] border border-white/10 overflow-hidden shadow-2xl flex flex-col"
           >
              <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileJson className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono text-white/60">user_profile.json</span>
                </div>
              </div>

              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono text-white/80 leading-relaxed">
<code dangerouslySetInnerHTML={{__html: `<span class="text-white/40">// Ein komplexes JSON Objekt (Objekt beginnt mit geschweifter Klammer)</span>
{
  <span class="text-blue-300">"id"</span>: <span class="text-purple-300">"usr_9f82d"</span>,
  <span class="text-blue-300">"isVerified"</span>: <span class="text-orange-300">true</span>, <span class="text-white/40">// Boolean</span>
  <span class="text-blue-300">"loginCount"</span>: <span class="text-orange-300">42</span>,   <span class="text-white/40">// Number</span>
  
  <span class="text-blue-300">"personalInfo"</span>: {     <span class="text-white/40">// Verschachteltes Objekt</span>
    <span class="text-blue-300">"firstName"</span>: <span class="text-green-300">"Ada"</span>,
    <span class="text-blue-300">"lastName"</span>: <span class="text-green-300">"Lovelace"</span>
  },
  
  <span class="text-blue-300">"techStack"</span>: [        <span class="text-white/40">// Array (Liste) in eckigen Klammern</span>
    <span class="text-green-300">"Figma"</span>,
    <span class="text-green-300">"React"</span>,
    <span class="text-green-300">"Python"</span>
  ],

  <span class="text-blue-300">"designTokens"</span>: {      <span class="text-white/40">// So sehen Tokens oft als JSON aus</span>
    <span class="text-blue-300">"primary"</span>: <span class="text-green-300">"#FF0055"</span>,
    <span class="text-blue-300">"radius"</span>: <span class="text-green-300">"8px"</span>
  }
}`}} />
                </pre>
              </div>
              
           </motion.div>
        </div>

      </div>
    </SlideLayout>
  )
}
