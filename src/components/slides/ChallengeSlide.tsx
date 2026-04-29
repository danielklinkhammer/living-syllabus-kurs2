import { motion } from 'framer-motion'
import Card from '../ui/Card'

interface ChallengeSlideProps {
  id: string
  title: string
  scenario: string
  tasks: string[]
  tools: string
  timeBudget: string
}

export default function ChallengeSlide({ id, title, scenario, tasks, tools, timeBudget }: ChallengeSlideProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-fhgr-dark p-12 text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full mx-auto"
      >
        <div className="mb-10 block">
          <span className="inline-block bg-fhgr-accent text-fhgr-dark font-bold font-mono px-3 py-1 rounded-full text-sm mb-4">
            CHALLENGE {id}
          </span>
          <h1 className="text-5xl font-bold mb-4 text-fhgr-beige">{title}</h1>
        </div>

        <div className="grid grid-cols-3 gap-8 text-left">
          <div className="col-span-2 space-y-6">
            <Card delay={0.1} variant="glass" className="!p-6 text-left">
              <h3 className="text-fhgr-petrol-light font-mono text-sm uppercase tracking-wider mb-3">Szenario</h3>
              <p className="text-white/80 leading-relaxed text-left">{scenario}</p>
            </Card>
            
            <Card delay={0.2} variant="glass" className="!p-6 text-left">
              <h3 className="text-fhgr-petrol-light font-mono text-sm uppercase tracking-wider mb-4">Aufgabe</h3>
              <ul className="space-y-3">
                {tasks.map((task, i) => (
                  <li key={i} className="flex gap-3 text-white/80 items-start">
                    <span className="text-fhgr-accent mt-0.5 shrink-0">→</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="col-span-1 space-y-4">
            <Card delay={0.3} variant="primary" className="!p-5 border-fhgr-petrol/30 bg-fhgr-petrol-dark/30 text-left">
              <h3 className="text-fhgr-accent font-mono text-xs uppercase tracking-wider mb-2">Tools</h3>
              <p className="text-white/90">{tools}</p>
            </Card>
            <Card delay={0.4} variant="primary" className="!p-5 border-fhgr-olive/30 bg-fhgr-olive-dark/30 text-left">
              <h3 className="text-fhgr-beige/50 font-mono text-xs uppercase tracking-wider mb-2">Zeitbudget</h3>
              <p className="text-white/90 text-lg font-medium">{timeBudget}</p>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
