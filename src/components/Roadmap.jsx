import { motion } from 'framer-motion'
import { PenTool, Code2, FlaskConical, Store } from 'lucide-react'

const phases = [
  { icon: PenTool,      title: 'Diseno UI/UX',           weeks: 'Semana 1',   body: 'Wireframes, prototipo en Figma, sistema de diseno y validacion con CAPIDRIVERS.' },
  { icon: Code2,        title: 'Desarrollo',             weeks: 'Semana 2-4', body: 'App nativa iOS + Android, backend, panel admin y app de conductor.' },
  { icon: FlaskConical, title: 'Beta cerrada',           weeks: 'Semana 5',   body: 'Pruebas con conductores reales en Barinas. Ajustes de estabilidad y rendimiento.' },
  { icon: Store,        title: 'Publicacion',            weeks: 'Semana 6',   body: 'Lanzamiento en App Store y Google Play. Campana de marketing de apertura.' }
]

export default function Roadmap() {
  return (
    <section className="relative py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-capi-neon">Roadmap</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-black tracking-tight">
            De la idea <span className="gradient-text">a las tiendas</span>
          </h2>
          <p className="mt-4 text-capi-cream/70 text-lg">
            En 6 semanas publicamos la primera version. Entregas semanales para que puedas ver el progreso en tiempo real.
          </p>
        </motion.div>

        <div className="mt-14 relative">
          {/* Vertical line (mobile) */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-capi-neon/60 via-capi-neon/20 to-transparent" />
          {/* Horizontal line (desktop) */}
          <div className="hidden md:block absolute left-0 right-0 top-9 h-px bg-gradient-to-r from-transparent via-capi-neon/60 to-transparent" />

          <ol className="grid md:grid-cols-4 gap-6">
            {phases.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-20 md:pl-0"
              >
                {/* Phase dot */}
                <div className="absolute md:static md:mx-auto left-4 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-capi-neon text-capi-deep font-black shadow-neon md:mb-4">
                  {i + 1}
                </div>

                <div className="glass-card p-5 md:text-center">
                  <p.icon className="mx-auto h-7 w-7 text-capi-neon" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-capi-neon/80">{p.weeks}</p>
                  <h3 className="mt-1 font-display text-lg font-bold text-capi-cream">{p.title}</h3>
                  <p className="mt-2 text-sm text-capi-cream/70">{p.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
