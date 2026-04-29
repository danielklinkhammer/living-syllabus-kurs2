import { motion } from 'framer-motion'
import { Palette, Type, LayoutTemplate } from 'lucide-react'
import Card from './ui/Card'
import HeroGraphic from './ui/HeroGraphic'

export default function DesignSystemViewer() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full bg-fhgr-dark overflow-y-auto"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          
          <div className="mb-16">
            <span className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3 block">Kitchen Sink</span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-white">Design System</h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              Das UI-Lexikon für den "Living Syllabus". Hier werden alle Tokens (Farben, Typografie) und wiederverwendbaren Layout-Komponenten für zukünftige Slides dokumentiert.
            </p>
          </div>

          <div className="space-y-24">
            
            {/* Colors Section */}
            <section>
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                <Palette className="w-6 h-6 text-fhgr-accent" />
                <h2 className="text-2xl font-bold text-white">Brand Colors</h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <ColorChip name="Petrol" hex="#006D77" className="bg-fhgr-petrol text-white" />
                <ColorChip name="Petrol Light" hex="#83C5BE" className="bg-fhgr-petrol-light text-fhgr-petrol-dark" />
                <ColorChip name="Petrol Dark" hex="#004F59" className="bg-fhgr-petrol-dark text-white" />
                <ColorChip name="Teal" hex="#488B98" className="bg-fhgr-teal text-white" />
                <ColorChip name="Beige" hex="#F5F0E8" className="bg-fhgr-beige text-fhgr-petrol-dark" />
                <ColorChip name="Accent (Orange)" hex="#E8A87C" className="bg-fhgr-accent text-fhgr-dark" />
                <ColorChip name="Olive" hex="#787D6B" className="bg-fhgr-olive text-white" />
                <ColorChip name="Olive Dark" hex="#6A6E58" className="bg-fhgr-olive-dark text-white" />
                <ColorChip name="Dark" hex="#1A1A1A" className="bg-fhgr-dark text-white border border-white/10" />
              </div>
            </section>

            {/* Typography Section */}
            <section>
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                <Type className="w-6 h-6 text-fhgr-accent" />
                <h2 className="text-2xl font-bold text-white">Typografie</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card variant="glass">
                  <div className="text-[10px] text-white/30 uppercase tracking-widest font-mono mb-4">Body Font: Inter</div>
                  <div className="space-y-6">
                    <h1 className="text-4xl font-bold text-white">Display Heading</h1>
                    <h2 className="text-2xl font-bold text-white">Section Heading</h2>
                    <p className="text-base text-white/60">
                      Standard Body Text. Ein Dashboard ist kein Kunstwerk, sondern ein visuelles Werkzeug zur Reduktion kognitiver Belastung.
                    </p>
                  </div>
                </Card>
                <Card variant="glass">
                  <div className="text-[10px] text-white/30 uppercase tracking-widest font-mono mb-4">Mono Font: JetBrains Mono</div>
                  <div className="space-y-6 font-mono">
                    <div className="text-fhgr-petrol-light text-xs uppercase tracking-widest">Eyebrow Caption</div>
                    <code className="block bg-black/50 p-4 rounded-xl text-sm text-green-300 border border-white/10">
                      <span className="text-pink-400">export default</span> function App() {'{\n'}
                      {'  '}return &lt;div&gt;Hello World&lt;/div&gt;\n
                      {'}'}
                    </code>
                  </div>
                </Card>
              </div>
            </section>

            {/* UI Primitives Section */}
            <section>
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                <LayoutTemplate className="w-6 h-6 text-fhgr-accent" />
                <h2 className="text-2xl font-bold text-white">Content Container</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                <div className="col-span-1 lg:col-span-4 space-y-4">
                  <div className="text-xs font-mono text-white/30 mb-2">Variant: default</div>
                  <Card variant="default">
                    <h3 className="font-bold text-white mb-2">Standard Card</h3>
                    <p className="text-xs text-white/50">Wird typischerweise für Aufzählungen in der linken Spalte genutzt. Sehr dezenter Hintergrund.</p>
                  </Card>
                </div>
                
                <div className="col-span-1 lg:col-span-4 space-y-4">
                  <div className="text-xs font-mono text-white/30 mb-2">Variant: primary</div>
                  <Card variant="primary">
                    <h3 className="font-bold text-fhgr-petrol-light mb-2">Primary Card</h3>
                    <p className="text-xs text-fhgr-petrol-light/70">Petrol-Tint. Baut visuellen Fokus auf. Eignet sich für "Good Examples" oder Haupt-Takeaways.</p>
                  </Card>
                </div>

                <div className="col-span-1 lg:col-span-4 space-y-4">
                  <div className="text-xs font-mono text-white/30 mb-2">Variant: glass</div>
                  <Card variant="glass">
                    <h3 className="font-bold text-white mb-2">Glass Card</h3>
                    <p className="text-xs text-white/50">Starkes Blur-Backdrop. Sehr dark. Perfekt um sich von komplexeren Radial-Gradients abzuheben.</p>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-xs font-mono text-white/30 mb-2">HeroGraphic (Responsive Aspect Ratio Box)</div>
                <HeroGraphic>
                  <div className="text-center">
                    <div className="text-4xl mb-4">🖼️</div>
                    <div className="text-white/50 font-mono text-sm">&lt;HeroGraphic&gt;</div>
                    <p className="text-xs text-white/30 mt-2 max-w-sm mx-auto">
                      Wrapper für alle rechten Visualisierungen. Garantiert, dass sich die Box immer proportional perfekt verhält und einen schönen Inner-Shadow hat.
                    </p>
                  </div>
                </HeroGraphic>
              </div>

            </section>
          </div>

      </div>
    </motion.div>
  );
}

function ColorChip({ name, hex, className }: { name: string; hex: string; className: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10">
      <div className={`h-24 w-full flex items-end p-3 ${className}`}>
        <span className="font-bold text-sm tracking-tight">{name}</span>
      </div>
      <div className="bg-black/40 p-3 flex justify-between items-center">
        <code className="text-xs font-mono text-white/50">{hex}</code>
      </div>
    </div>
  )
}
