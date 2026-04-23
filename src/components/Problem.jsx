import { motion } from 'framer-motion'
import { MessageCircleOff, ClockAlert, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: MessageCircleOff,
    title: 'Saturacion de WhatsApp',
    body: 'Chats duplicados, mensajes perdidos y respuestas manuales que hacen cuello de botella en horas pico.'
  },
  {
    icon: ClockAlert,
    title: 'Sin tracking ni historial',
    body: 'El cliente no sabe donde esta su conductor. Ustedes no tienen metricas, ni rutas, ni control de la flota.'
  },
  {
    icon: TrendingDown,
    title: 'Sin pagos integrados',
    body: 'Cobranza desordenada, sin recibos digitales ni conciliacion automatica. Se pierden viajes y dinero.'
  }
]

export default function Problem() {
  return (
    <section id="propuesta" className="relative py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-capi-neon">El problema</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-black tracking-tight">
            Operar solo con WhatsApp <span className="gradient-text">limita tu crecimiento</span>
          </h2>
          <p className="mt-4 text-capi-cream/70 text-lg">
            CAPIDRIVERS ya tiene la marca, la ubicacion y el equipo. Falta la herramienta que
            convierta cada viaje en data, cada cliente en recurrente y cada conductor en un activo medible.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card p-6 group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/20 to-capi-neon/10 ring-1 ring-red-500/30 group-hover:ring-capi-neon/60 transition">
                <p.icon className="h-6 w-6 text-red-400 group-hover:text-capi-neon transition" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-capi-cream">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-capi-cream/70">{p.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
