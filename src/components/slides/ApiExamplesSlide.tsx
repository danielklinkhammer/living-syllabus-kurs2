import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import Card from '../ui/Card'
import { Music, CloudRain, Cpu, Database, Map, Bot, Image as ImageIcon, Flame } from 'lucide-react'

export default function ApiExamplesSlide() {
  const categories = [
    {
      title: "Media & Entertainment",
      desc: "Perfekt für komplexe UI-Grids, Media-Player und Card-Flows.",
      color: "from-green-500/10 to-transparent",
      borderColor: "border-green-500/30",
      iconColor: "text-green-400",
      apis: [
        { name: "Spotify Web API", text: "Album-Cover, Playlists, Audio-Analyse.", icon: <Music className="w-4 h-4" /> },
        { name: "The Movie DB (TMDb)", text: "Filmdatenbank für Netflix-Clone Designs.", icon: <Database className="w-4 h-4" /> },
        { name: "PokeAPI", text: "Umfangreiche JSON-Daten für Card-Interfaces.", icon: <Flame className="w-4 h-4" /> }
      ]
    },
    {
      title: "Life & Utility",
      desc: "Echte Livedaten, die das UI sofort dynamisch machen.",
      color: "from-blue-500/10 to-transparent",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
      apis: [
        { name: "OpenWeatherMap", text: "Wetterdaten in Echtzeit (ideal für dynamische Shader).", icon: <CloudRain className="w-4 h-4" /> },
        { name: "Mapbox", text: "Komplett customisierbare Vektorkarten.", icon: <Map className="w-4 h-4" /> },
        { name: "REST Countries", text: "Länderdaten, Flaggen, Populationen.", icon: <Database className="w-4 h-4" /> }
      ]
    },
    {
      title: "AI Services & Generative",
      desc: "Die modernen Core-Endpoints für Vibe Coding.",
      color: "from-fhgr-pink/10 to-transparent",
      borderColor: "border-fhgr-pink/30",
      iconColor: "text-fhgr-pink",
      apis: [
        { name: "Large Language Models", text: "Endpoints für dynamische KI-Chats, NLP und Text-Analyse.", icon: <Bot className="w-4 h-4" /> },
        { name: "Visual Generative AI", text: "Blitzschnelle Bild- oder Videogenerierung direkt in der App.", icon: <ImageIcon className="w-4 h-4" /> },
        { name: "Voice Synthesis (TTS)", text: "APIs für fotorealistische Audio-Erzeugung aus Text-Prompts.", icon: <Cpu className="w-4 h-4" /> }
      ]
    }
  ]

  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center">
        
        {/* Header Block */}
        <div className="mb-12 max-w-3xl">
          <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Tech für Designer · Part 2</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">API Inspiration</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              Beim Vibe Coding braucht ihr euch nicht mehr mühevoll Dummy-Daten ausdenken. Schließt einfach echte APIs an, um euren Prototypen mit echtem Leben zu füllen. Hier sind etablierte Dienste, die oft kostenlos nutzbar sind.
            </p>
          </motion.div>
        </div>

        {/* API Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {categories.map((cat, idx) => (
            <motion.div key={idx} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1 * idx}} className="h-full">
              <Card variant="glass" className={`!p-6 flex flex-col h-full border ${cat.borderColor} bg-gradient-to-br ${cat.color} group`}>
                <h3 className={`text-xl font-bold mb-2 ${cat.iconColor}`}>{cat.title}</h3>
                <p className="text-xs text-white/50 mb-6 flex-1">{cat.desc}</p>
                
                <div className="space-y-3">
                  {cat.apis.map((api, i) => (
                    <div key={i} className="flex gap-3 items-start p-3 bg-white/5 border border-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                      <div className={`mt-0.5 ${cat.iconColor}`}>
                        {api.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white leading-tight mb-1">{api.name}</h4>
                        <p className="text-xs text-white/60 leading-snug">{api.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </SlideLayout>
  )
}
