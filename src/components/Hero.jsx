import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Clock, MapPin, Star, Download, ArrowRight } from 'lucide-react'
import PhoneMockup from './PhoneMockup.jsx'

const badges = [
  { icon: Shield,  label: 'Viajes seguros'  },
  { icon: Clock,   label: '24/7 disponible' },
  { icon: MapPin,  label: 'Tracking live'   },
  { icon: Star,    label: 'Rating bilateral'}
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -140])

  return (
    <section id="top" ref={ref} className="relative min-h-screen flex items-center pt-28 pb-12 overflow-hidden">
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 bg-radial-green" />
      </div>

      {/* Particles */}
      <Particles />

      <div className="section-container relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-capi-neon/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-capi-neon ring-1 ring-capi-neon/30">
            <span className="h-2 w-2 rounded-full bg-capi-neon animate-pulse" />
            Propuesta comercial · Barinas
          </span>

          <h1 className="mt-5 font-display text-5xl md:text-7xl font-black tracking-tight leading-[1.05]">
            <span className="gradient-text">CAPIDRIVERS</span>
            <br />
            <span className="text-capi-cream">llega al movil</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-capi-cream/75 leading-relaxed">
            Una app nativa <strong className="text-capi-neon">iOS + Android</strong> que multiplica
            tus viajes, digitaliza la gestion y fideliza a tus clientes. Del WhatsApp a una experiencia
            profesional de transporte.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#propuesta" className="btn-neon">
              Ver propuesta <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#planes" className="btn-outline">
              <Download className="h-4 w-4" /> Descargar PDF
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
            {badges.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="glass-card flex flex-col items-start gap-2 p-3"
              >
                <Icon className="h-5 w-5 text-capi-neon" />
                <span className="text-xs text-capi-cream/80">{label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Mockup side */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative h-[580px] w-full max-w-md">
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, x: 40, rotate: -8 }}
              animate={{ opacity: 1, x: 0, rotate: -6 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="absolute left-0 top-10 z-10"
            >
              <PhoneMockup variant="android" screen="request" />
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, x: -40, rotate: 10 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="absolute right-0 top-0 z-20"
            >
              <PhoneMockup variant="ios" screen="map" />
            </motion.div>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-20 w-64 rounded-full bg-capi-neon/40 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Particles() {
  const dots = Array.from({ length: 18 })
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((_, i) => {
        const size = 2 + (i % 4)
        const left = (i * 53) % 100
        const top  = (i * 37) % 100
        const dur  = 5 + (i % 6)
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-capi-neon/50"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: dur, repeat: Infinity, delay: (i * 0.3) % 3 }}
          />
        )
      })}
    </div>
  )
}
