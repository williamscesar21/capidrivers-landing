import { motion } from 'framer-motion'
import { Activity, Car, Users, DollarSign, TrendingUp, Navigation2 } from 'lucide-react'
import PhoneMockup from './PhoneMockup.jsx'

export default function AdminPanel() {
  return (
    <section className="relative py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-capi-neon">Panel administrador</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-black tracking-tight">
            Un <span className="gradient-text">centro de control</span> para tu operacion
          </h2>
          <p className="mt-4 text-capi-cream/70 text-lg">
            Dashboard web para administradores y app dedicada para conductores. Visibilidad
            completa, decisiones basadas en data.
          </p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6 items-center">
          {/* Admin dashboard mock */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 glass-card p-4 md:p-6 overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-capi-gold/70" />
                <div className="h-3 w-3 rounded-full bg-capi-neon/80" />
              </div>
              <span className="text-[11px] text-capi-cream/60">capidrivers.app/admin</span>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-capi-cream/60">Panel administrativo</p>
                <h3 className="font-display text-xl font-bold text-capi-cream">Hoy, en vivo</h3>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-capi-neon/15 px-3 py-1 text-[11px] font-semibold text-capi-neon ring-1 ring-capi-neon/40">
                <span className="h-1.5 w-1.5 rounded-full bg-capi-neon animate-pulse" />
                En vivo
              </span>
            </div>

            {/* KPIs */}
            <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: Activity, l: 'Activos',   v: '23',    d: 'viajes' },
                { icon: Car,      l: 'Flota',     v: '18/24', d: 'en linea' },
                { icon: Users,    l: 'Usuarios',  v: '1,204', d: 'total' },
                { icon: DollarSign, l: 'Ingreso', v: '$384', d: 'hoy' }
              ].map((k) => (
                <div key={k.l} className="rounded-xl bg-capi-deep/70 p-3 ring-1 ring-white/5">
                  <k.icon className="h-4 w-4 text-capi-neon" />
                  <p className="mt-2 font-display text-xl font-bold text-capi-cream">{k.v}</p>
                  <p className="text-[10px] text-capi-cream/60">{k.l} · {k.d}</p>
                </div>
              ))}
            </div>

            {/* Map area */}
            <div className="mt-4 rounded-xl bg-capi-deep/70 p-3 ring-1 ring-white/5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-capi-cream">Flota en Barinas</p>
                <Navigation2 className="h-4 w-4 text-capi-neon" />
              </div>
              <div className="mt-3 relative h-40 rounded-lg bg-capi-dark/80 overflow-hidden">
                <svg viewBox="0 0 400 160" className="h-full w-full">
                  <path d="M0 40 L400 80"   stroke="#00E676" strokeOpacity="0.3" strokeWidth="2" />
                  <path d="M0 100 L400 60"  stroke="#00E676" strokeOpacity="0.3" strokeWidth="2" />
                  <path d="M150 0 L120 160" stroke="#00E676" strokeOpacity="0.25" strokeWidth="2" />
                  <path d="M300 0 L320 160" stroke="#00E676" strokeOpacity="0.25" strokeWidth="2" />
                  {[[60,50],[130,90],[220,40],[300,110],[360,70],[80,130],[250,130]].map(([x,y],i) => (
                    <g key={i}>
                      <circle cx={x} cy={y} r="5" fill="#00E676" />
                      <circle cx={x} cy={y} r="10" fill="#00E676" opacity="0.2">
                        <animate attributeName="r" from="5" to="14" dur="1.8s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
                        <animate attributeName="opacity" from="0.4" to="0" dur="1.8s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
                      </circle>
                    </g>
                  ))}
                </svg>
              </div>
            </div>

            {/* Bottom table */}
            <div className="mt-4 rounded-xl bg-capi-deep/70 p-3 ring-1 ring-white/5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-capi-cream">Viajes recientes</p>
                <TrendingUp className="h-4 w-4 text-capi-neon" />
              </div>
              <ul className="mt-3 divide-y divide-white/5 text-[11px]">
                {[
                  ['C. Rodriguez', 'Terminal → Alto Barinas', '$5',  'Completado'],
                  ['M. Perez',     'Varyna → CC Las Mercedes', '$4', 'En curso'],
                  ['J. Torres',    'Av. Libertador → Hospital', '$3', 'Completado']
                ].map(([d, r, p, s], i) => (
                  <li key={i} className="flex items-center justify-between py-2">
                    <div className="flex-1">
                      <p className="font-semibold text-capi-cream">{d}</p>
                      <p className="text-[10px] text-capi-cream/60">{r}</p>
                    </div>
                    <span className="mr-4 font-display text-capi-neon font-bold">{p}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] ${s === 'En curso' ? 'bg-capi-gold/15 text-capi-gold' : 'bg-capi-neon/15 text-capi-neon'}`}>
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Driver app */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 flex justify-center"
          >
            <PhoneMockup variant="android" screen="driver" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
