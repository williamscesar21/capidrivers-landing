import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LogIn, Map, Send, Tag, History, UserCog } from 'lucide-react'
import PhoneMockup from './PhoneMockup.jsx'

const tabs = [
  { id: 'login',    label: 'Login',            icon: LogIn   },
  { id: 'map',      label: 'Mapa en vivo',     icon: Map     },
  { id: 'request',  label: 'Solicitar viaje',  icon: Send    },
  { id: 'tariffs',  label: 'Tarifas',          icon: Tag     },
  { id: 'history',  label: 'Historial',        icon: History },
  { id: 'driver',   label: 'Perfil conductor', icon: UserCog }
]

export default function Mockups() {
  const [active, setActive] = useState('map')

  return (
    <section id="mockups" className="relative py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-capi-neon">La propuesta</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-black tracking-tight">
            Tu app, <span className="gradient-text">dos plataformas</span>
          </h2>
          <p className="mt-4 text-capi-cream/70 text-lg">
            Una sola experiencia, perfectamente nativa en iOS y Android. Navega por las
            pantallas clave que verian tus clientes y conductores.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              aria-pressed={active === t.id}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all ${
                active === t.id
                  ? 'bg-capi-neon text-capi-deep font-semibold shadow-neon'
                  : 'bg-capi-dark/60 text-capi-cream/80 ring-1 ring-white/10 hover:ring-capi-neon/50'
              }`}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Mockups grid */}
        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`ios-${active}`}
                initial={{ opacity: 0, y: 30, rotateY: 25 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <PhoneMockup variant="ios" screen={active} />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`android-${active}`}
                initial={{ opacity: 0, y: 30, rotateY: -25 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.08 }}
              >
                <PhoneMockup variant="android" screen={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
