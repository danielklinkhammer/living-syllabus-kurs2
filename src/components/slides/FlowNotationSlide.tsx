import { motion } from 'framer-motion'
import Card from '../ui/Card'

export default function FlowNotationSlide() {
  const symbols = [
    { name: "Start / Ende", shape: "Oval", desc: "Einstiegs- oder Ausstiegspunkt (z.B. App öffnen)", draw: "rounded-full" },
    { name: "Aktion", shape: "Rechteck", desc: "Ein Schritt, den User oder System macht (z.B. In den Warenkorb)", draw: "rounded-md" },
    { name: "Entscheidung", shape: "Raute", desc: "Ja/Nein-Verzweigung (z.B. Eingeloggt?)", draw: "rotate-45 rounded-sm" },
    { name: "Daten", shape: "Parallelogramm", desc: "Input/Output (z.B. Formular, API-Antwort)", draw: "-skew-x-12 rounded-sm" }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 lg:mt-0 items-center">
        
        {/* Left: Content */}
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}}>
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Die Grammatik der Logik</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Flowchart Notation</h2>
          <p className="text-lg text-white/50 leading-relaxed mb-8">
            Bevor wir KI-Tools nutzen, müssen wir die universelle Sprache der Prozess-Architektur sprechen. Diese 4 Symbole strukturieren jede App-Logik der Welt.
          </p>

          <div className="space-y-4">
            {symbols.map((sym, i) => (
              <Card key={i} delay={0.1 * i} variant="glass" className="!p-4 bg-white/5">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 flex items-center justify-center shrink-0 border border-white/10 bg-black/40 rounded-lg">
                    <div className={`w-8 h-8 border-[3px] border-fhgr-petrol-light bg-fhgr-petrol/20 ${sym.draw}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{sym.name}</h3>
                    <div className="text-xs font-mono text-fhgr-petrol-light mb-1">{sym.shape}</div>
                    <p className="text-sm text-white/50">{sym.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Right: Graphic */}
        <div className="flex items-center justify-center lg:mt-0 mt-8 w-full max-w-xl mx-auto">
          <motion.div 
            initial={{opacity:0, scale:0.95}} 
            animate={{opacity:1, scale:1}} 
            transition={{delay: 0.2}} 
            className="w-full relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-fhgr-petrol/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />
            <img 
              src="/images/flowchart-notation.avif" 
              alt="Flowchart Notation" 
              className="w-full rounded-xl border border-white/10 shadow-2xl relative z-10" 
            />
          </motion.div>
        </div>

      </div>
    </div>
  )
}
