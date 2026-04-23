import { motion } from 'framer-motion'
import { Sparkles, MessageSquareHeart, PartyPopper, Palette } from 'lucide-react'
import Capybara from './Capybara.jsx'

const touchpoints = [
  { icon: Sparkles,           title: 'Onboarding',      body: 'El capibara te da la bienvenida y te guia paso a paso.' },
  { icon: MessageSquareHeart, title: 'Notificaciones',  body: 'Copy con personalidad: se siente cercano, no robotico.' },
  { icon: PartyPopper,        title: 'Stickers y logros', body: 'Colecciona stickers por viajes frecuentes y referidos.' },
  { icon: Palette,            title: 'Splash screens',  body: 'Identidad visual unica que diferencia de la competencia.' }
]

export default function Mascot() {
  return (
    <section className="relative py-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Mascot side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute inset-0 -m-10 rounded-full bg-capi-neon/10 blur-3xl" />
              <div className="absolute inset-0 animate-spin-slow">
                <div className="mx-auto h-full w-full rounded-full border border-dashed border-capi-neon/25" />
              </div>
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <Capybara size={320} />
              </motion.div>
              {/* Floating badges */}
              <motion.span
                animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 left-0 rounded-full bg-capi-deep/90 px-3 py-1 text-xs font-semibold text-capi-neon ring-1 ring-capi-neon/40 backdrop-blur"
              >
                "Vamos, jefe?"
              </motion.span>
              <motion.span
                animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-10 -right-6 rounded-full bg-capi-gold/90 px-3 py-1 text-xs font-bold text-capi-deep"
              >
                ★ VIP
              </motion.span>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-capi-neon">Mascota como diferencial</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black tracking-tight">
              Conoce al <span className="gradient-text">Capi-Agente</span>
            </h2>
            <p className="mt-4 text-capi-cream/70 text-lg">
              Un capibara con traje negro, gorra y lentes estilo MIB: el guardaespaldas VIP
              de cada viaje. No es solo un logo. Es un personaje que construye marca,
              genera cercania y se vuelve viral en redes.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {touchpoints.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card p-4"
                >
                  <t.icon className="h-5 w-5 text-capi-neon" />
                  <h3 className="mt-3 font-display font-bold text-capi-cream">{t.title}</h3>
                  <p className="mt-1 text-xs text-capi-cream/70">{t.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
