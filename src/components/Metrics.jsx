import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Timer, Star } from 'lucide-react'

function useCountUp(target, { duration = 1500, decimals = 0, start = false } = {}) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    let raf
    const t0 = performance.now()
    const from = 0
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(from + (target - from) * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, start])
  return decimals ? value.toFixed(decimals) : Math.round(value)
}

function Metric({ value, suffix, prefix, label, icon: Icon, decimals, start }) {
  const displayed = useCountUp(value, { decimals, start })
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-8 text-center"
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-capi-neon/10 ring-1 ring-capi-neon/30">
        <Icon className="h-7 w-7 text-capi-neon" />
      </div>
      <p className="mt-5 font-display text-5xl md:text-6xl font-black gradient-text">
        {prefix}{displayed}{suffix}
      </p>
      <p className="mt-3 text-sm text-capi-cream/70">{label}</p>
    </motion.div>
  )
}

export default function Metrics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-capi-neon">Proyeccion</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-black tracking-tight">
            El impacto esperado en <span className="gradient-text">los primeros 6 meses</span>
          </h2>
          <p className="mt-4 text-capi-cream/70 text-lg">
            Metas conservadoras para los primeros 6 meses. No son promesas cerradas: son
            objetivos que definimos juntos y que podremos medir con el panel administrador.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          <Metric icon={TrendingUp} value={40}  prefix="+" suffix="%"  label="Meta de incremento en viajes mensuales" start={inView} />
          <Metric icon={Timer}      value={60}  prefix="-" suffix="%"  label="Reduccion de tiempo en gestion manual" start={inView} />
          <Metric icon={Star}       value={4.5} decimals={1} suffix="★" label="Calificacion minima objetivo de usuarios" start={inView} />
        </div>

        <div className="mt-8 rounded-2xl bg-capi-neon/5 p-5 ring-1 ring-capi-neon/20 text-center">
          <p className="text-sm text-capi-cream/70">
            Cifras objetivo, no testimonios. Se ajustan en el contrato segun la meta que definamos con CAPIDRIVERS.
          </p>
        </div>
      </div>
    </section>
  )
}
