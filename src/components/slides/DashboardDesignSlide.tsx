import ContentSlide from '../templates/ContentSlide'
import Card from '../ui/Card'
import HeroGraphic from '../ui/HeroGraphic'

export default function DashboardDesignSlide() {
  const leftContent = (
    <div className="space-y-6">
      <Card delay={0.1}>
        <h3 className="font-bold text-white mb-2">Gesetz der Nähe (Gestaltpsychologie)</h3>
        <p className="text-sm text-white/50 mb-3">
          Objekte, die dicht beieinander liegen, werden als zusammengehörig wahrgenommen. Im Dashboard: Nutze <strong>Weißraum</strong> statt Linien, um Metriken zu gruppieren.
        </p>
        <div className="text-[10px] text-white/30 font-mono bg-white/5 inline-block px-2 py-1 rounded">
          Quelle: Wertheimer, Max. "Untersuchungen zur Lehre von der Gestalt" (1923)
        </div>
      </Card>

      <Card variant="primary" delay={0.2}>
        <h3 className="font-bold text-fhgr-petrol-light mb-2">Progressive Disclosure</h3>
        <p className="text-sm text-white/50 mb-3">
          Das Gehirn kann nur <strong className="text-white">7 ± 2</strong> Informationsblöcke im Kurzzeitgedächtnis halten. Überlade den Nutzer nicht.
        </p>
        <ul className="text-sm space-y-2 text-white/70 mb-4">
          <li className="flex gap-2 items-center">
             <span className="w-5 h-5 rounded-full bg-fhgr-petrol text-white text-[10px] flex items-center justify-center font-bold">1</span> 
             High-Level KPIs (5-Sekunden-Regel)
          </li>
          <li className="flex gap-2 items-center">
             <span className="w-5 h-5 rounded-full bg-fhgr-petrol text-white text-[10px] flex items-center justify-center font-bold">2</span> 
             Graphen (Zusammenhänge)
          </li>
          <li className="flex gap-2 items-center">
             <span className="w-5 h-5 rounded-full bg-fhgr-petrol text-white text-[10px] flex items-center justify-center font-bold">3</span> 
             Detail-Tabellen (erst auf Klick via Tooltip)
          </li>
        </ul>
        <div className="text-[10px] text-fhgr-petrol-light/50 font-mono bg-fhgr-petrol/10 inline-block px-2 py-1 rounded">
          Quelle: George A. Miller (1956), "The Magical Number Seven"
        </div>
      </Card>
    </div>
  );

  const rightContent = (
    <HeroGraphic className="!p-0" delay={0.3}>
      <div className="flex-1 flex w-full flex-col md:flex-row h-full">
        {/* Bad Example */}
        <div className="flex-1 bg-[#1A1A2A] md:border-r border-b md:border-b-0 border-red-500/30 p-6 flex flex-col justify-center gap-4 relative">
          <div className="absolute top-2 left-2 px-2 py-1 bg-red-500/20 text-red-400 text-[10px] font-bold uppercase rounded">Hoher Load</div>
          <div className="w-full h-24 bg-gradient-to-t from-blue-900 to-purple-600 rounded drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] border-4 border-gray-600 flex items-end p-2 gap-2">
             <div className="w-full h-1/3 bg-white/50 rounded shadow-inner" />
             <div className="w-full h-2/3 bg-white/50 rounded shadow-inner" />
             <div className="w-full h-[90%] bg-white/50 rounded shadow-inner" />
          </div>
          <div className="text-center font-serif text-gray-400 text-xs md:text-sm">Verkäufe: 42,931.23 CHF</div>
        </div>
        
        {/* Good Example */}
        <div className="flex-1 bg-white p-6 flex flex-col justify-center items-center gap-2 relative">
          <div className="absolute top-2 left-2 px-2 py-1 bg-green-500/20 text-green-700 text-[10px] font-bold uppercase rounded">Progressive Disclosure</div>
          <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold flex w-full justify-between mt-4 md:mt-0">
            <span>Umsatz</span>
            <span className="text-green-600">↗ 12%</span>
          </div>
          <div className="text-3xl md:text-4xl font-black text-black w-full text-left tracking-tighter">42.9k</div>
          <div className="w-full flex items-end gap-1 h-12 mt-2">
             <div className="flex-1 bg-gray-200 h-1/3 rounded-sm" />
             <div className="flex-1 bg-gray-200 h-2/3 rounded-sm" />
             <div className="flex-1 bg-gray-200 h-1/2 rounded-sm" />
             <div className="flex-1 bg-gray-200 h-[80%] rounded-sm" />
             <div className="flex-1 bg-black h-full rounded-sm" />
          </div>
        </div>
      </div>
    </HeroGraphic>
  );

  return (
    <ContentSlide 
      eyebrow="Dashboard Design · Teil 3"
      title="Design Kriterien & Cognitive Load"
      intro="Ein Dashboard ist kein Kunstwerk, sondern ein visuelles Werkzeug. Wir nutzen psychologische Prinzipien, um Datenmengen gehirngerecht zu strukturieren."
      leftContent={leftContent}
      rightContent={rightContent}
    />
  )
}
