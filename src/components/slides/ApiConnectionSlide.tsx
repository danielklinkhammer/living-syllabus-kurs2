import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import Card from '../ui/Card'
import { KeyRound, ShieldAlert, Fingerprint } from 'lucide-react'

export default function ApiConnectionSlide() {
  const steps = [
    {
      title: "1. Developer Portals & Keys",
      desc: "Fast jede API ist durch eine Tür verschlossen. Ihr müsst euch beim jeweiligen Anbieter (z.B. im Spotify Developer Dashboard) registrieren und eine 'App' anlegen. Dafür erhaltet ihr einen API-Key – eine kryptische Zeichenkette, die euer Zugangspass ist.",
      icon: <KeyRound className="w-6 h-6 text-yellow-400" />,
      color: "from-yellow-500/10 to-transparent",
      borderColor: "border-yellow-500/30"
    },
    {
      title: "2. Secrets vs Github",
      desc: "ACHTUNG: API-Keys sind wie EC-Karten-PINs. Wenn ihr diese Keys offen in euren Code (`fetch('url?key=123')`) schreibt und auf GitHub ladet, wird euer Account gehackt. Nutzt in React/Vite immer eine `.env` Datei und `.gitignore`!",
      icon: <ShieldAlert className="w-6 h-6 text-red-400" />,
      color: "from-red-500/10 to-transparent",
      borderColor: "border-red-500/30"
    },
    {
      title: "3. API-Key vs. OAuth",
      desc: "Der einfache Weg: Die API erfordert nur einen 'Bearer Token' im Header. Der schwere Weg: OAuth. Bei OAuth muss sich der User erst durch ein Login-Fenster (z.B. Google Login) klicken. Versucht für euren Prototypen OAuth zu vermeiden, wenn möglich!",
      icon: <Fingerprint className="w-6 h-6 text-indigo-400" />,
      color: "from-indigo-500/10 to-transparent",
      borderColor: "border-indigo-500/30"
    }
  ]

  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center">
        
        {/* Header Block */}
        <div className="mb-12 max-w-3xl">
          <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Tech für Designer · Part 3</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">API Keys & Authentication</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              APIs anzubinden ist fast immer der frustrierendste Teil beim Prototyping. Ihr müsst Sicherheitsrichtlinien beachten, CORS-Fehler verstehen und eure Schlüssel schützen. So funktioniert der Prozess im Vibe Coding.
            </p>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-8">
          {steps.map((step, idx) => (
            <motion.div key={idx} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1 * idx}} className="h-full">
              <Card variant="glass" className={`!p-8 flex flex-col h-full border ${step.borderColor} bg-gradient-to-br ${step.color} group`}>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl w-fit mb-6 group-hover:bg-white/10 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed font-medium flex-1">
                  {step.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Vibe Coding Hack */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }}
          className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl border border-fhgr-pink/30 bg-fhgr-pink/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-fhgr-pink" />
          <div className="flex-1">
            <h4 className="text-xl font-bold text-white mb-2">Vibe Coding Tipp: URL & cURL Context</h4>
            <p className="text-white/70 text-sm leading-relaxed font-medium">
              Geht in die offizielle Dokumentation eurer gewünschten API und sucht nach einem <strong>cURL Request</strong> Beispiel (das ist der pure Code, um die API aufzurufen). 
              Kopiert dieses cURL-Beispiel brutal zusammen mit eurer Design-Idee in den Prompt: 
              <br/><br/>
              <em className="text-white">"Baue mir ein React-Grid. Nutze dafür genau diese API-Schnittstelle. Hier ist das cURL Beispiel aus den Docs: [Einfügen]."</em>
            </p>
          </div>
        </motion.div>

      </div>
    </SlideLayout>
  )
}
