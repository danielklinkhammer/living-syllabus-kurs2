import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import Card from '../ui/Card'
import { Building, LayoutDashboard, ShoppingCart, Monitor, CalendarPlus, Receipt } from 'lucide-react'

const scenarios = [
  {
    title: "Hotel Digital Check-In",
    desc: "Ein dynamischer Vorab-Check-In für Hotelgäste.",
    flow: "Buchungscode → Zusatzleistungen (Spa/Frühstück) → Meldeschein → Digitale Zimmerkarte",
    color: "from-blue-500/10 to-transparent",
    border: "border-blue-500/30",
    icon: <Building className="w-8 h-8 text-blue-400" />
  },
  {
    title: "SaaS Dashboard Setup",
    desc: "Das Onboarding für ein neues System-as-a-Service Tool.",
    flow: "Sign-Up → Workspace anlegen → Rollen verteilen (Admin/User) → Subscription Plan",
    color: "from-purple-500/10 to-transparent",
    border: "border-purple-500/30",
    icon: <LayoutDashboard className="w-8 h-8 text-purple-400" />
  },
  {
    title: "E-Commerce Checkout",
    desc: "Der klassische, extrem durchoptimierte Kaufprozess.",
    flow: "Warenkorb Übersicht → Gast-Login vs. Account → Versandoptionen → Payment",
    color: "from-orange-500/10 to-transparent",
    border: "border-orange-500/30",
    icon: <ShoppingCart className="w-8 h-8 text-orange-400" />
  },
  {
    title: "B2B Hardware Request",
    desc: "Interner Beschaffungsprozess für Mitarbeiter.",
    flow: "Gerät konfigurieren → Verfügbarkeit prüfen → Manager-Freigabe anfragen → Status",
    color: "from-fhgr-petrol/10 to-transparent",
    border: "border-fhgr-petrol/30",
    icon: <Monitor className="w-8 h-8 text-fhgr-petrol" />
  },
  {
    title: "Doctor Appointment",
    desc: "Buchungsprozess für Erstpatienten beim Facharzt.",
    flow: "Verfügbarkeit scannen → Patientendaten → Krankenkasse/Selbstzahler → Bestätigung",
    color: "from-red-500/10 to-transparent",
    border: "border-red-500/30",
    icon: <CalendarPlus className="w-8 h-8 text-red-400" />
  },
  {
    title: "Shared Expense Splitter",
    desc: "Eine Rechnung strukturiert unter Freunden aufteilen.",
    flow: "Quittungs-Scan → Posten korrigieren → Freunde markieren → Request senden",
    color: "from-indigo-500/10 to-transparent",
    border: "border-indigo-500/30",
    icon: <Receipt className="w-8 h-8 text-indigo-400" />
  }
]

export default function ChallengeDScenariosSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center lg:overflow-hidden relative z-10 w-full max-w-6xl mx-auto">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-10 text-center">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge D · Phase 2</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Beispiel-Szenarien</h2>
          <p className="text-white/50 text-lg max-w-3xl mx-auto">
            Ihr benötigt für die Flow-Dekomposition ein komplexes Anwendungsszenario. Ihr könnt ein eigenes wählen <strong>oder eines dieser 6 klassischen Web-App Routings</strong> als Ausgangsbasis für euer Flowchart nutzen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario, i) => (
            <motion.div key={i} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: i * 0.1}}>
              <Card 
                variant="glass"
                className={`!p-6 flex flex-col h-full border ${scenario.border} bg-gradient-to-br ${scenario.color} group hover:bg-white/5 transition-colors`}
              >
                <div className="mb-5 p-3 rounded-xl bg-black/40 border border-white/5 w-fit group-hover:scale-110 transition-transform">
                  {scenario.icon}
                </div>
                
                <h3 className="font-bold text-white text-xl mb-2">{scenario.title}</h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed flex-1">
                  {scenario.desc}
                </p>
                
                <div className="bg-black/30 rounded-lg p-3 border border-white/10 mt-auto">
                  <span className="block text-[9px] uppercase font-mono tracking-widest text-fhgr-accent mb-2">Beispiel Flow</span>
                  <span className="text-xs text-white/80 font-medium leading-relaxed block">{scenario.flow}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </SlideLayout>
  )
}
