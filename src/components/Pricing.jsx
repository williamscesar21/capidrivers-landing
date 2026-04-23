import { motion } from 'framer-motion'
import { Check, Zap, Rocket, Crown, ArrowRight } from 'lucide-react'

const plans = [
  {
    id: 'starter',
    icon: Zap,
    name: 'Starter',
    tag: 'Para empezar',
    price: '$2,500',
    unit: 'pago unico',
    accent: 'border-white/10',
    features: [
      'App iOS + Android (una sola base)',
      'Login, mapa y solicitud de viaje',
      'Tarifas configurables',
      'Pago en efectivo',
      'Publicacion en App Store + Play',
      '1 mes de soporte'
    ]
  },
  {
    id: 'pro',
    icon: Rocket,
    name: 'Pro',
    tag: 'Recomendado',
    price: '$4,900',
    unit: 'pago unico',
    accent: 'ring-2 ring-capi-neon shadow-neon scale-[1.02]',
    highlighted: true,
    features: [
      'Todo lo del plan Starter',
      'Panel admin web + app conductor',
      'Pago Movil, Zelle y tarjetas',
      'Rating bidireccional + SOS',
      'Notificaciones push personalizadas',
      'Analytics basicos',
      '3 meses de soporte'
    ]
  },
  {
    id: 'enterprise',
    icon: Crown,
    name: 'Enterprise',
    tag: 'Escalamiento',
    price: 'A medida',
    unit: 'cotizar',
    accent: 'border-capi-gold/40',
    features: [
      'Todo lo del plan Pro',
      'Integracion Capishop + Capirosa',
      'Programa de referidos y cupones',
      'Dashboard BI completo',
      'Multi-ciudad y multi-idioma',
      'SLA 99.9% con soporte 24/7',
      '12 meses de soporte'
    ]
  }
]

export default function Pricing() {
  return (
    <section id="planes" className="relative py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-capi-neon">Inversion</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-black tracking-tight">
            Elige el plan <span className="gradient-text">que se ajuste a ti</span>
          </h2>
          <p className="mt-4 text-capi-cream/70 text-lg">
            Tres rutas claras para llevar a CAPIDRIVERS al movil. Todos los planes incluyen
            diseno UI/UX, desarrollo nativo, pruebas y publicacion en las tiendas.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-2xl bg-capi-dark/60 backdrop-blur p-6 md:p-7 flex flex-col ${p.accent} ${!p.highlighted ? 'border border-white/10' : ''}`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-capi-neon px-4 py-1 text-xs font-bold uppercase tracking-widest text-capi-deep shadow-neon">
                  Recomendado
                </span>
              )}

              <div className="flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${p.highlighted ? 'bg-capi-neon text-capi-deep' : 'bg-capi-neon/10 text-capi-neon ring-1 ring-capi-neon/30'}`}>
                  <p.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-black text-capi-cream">{p.name}</h3>
                  <p className="text-xs text-capi-cream/60">{p.tag}</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="font-display text-4xl font-black text-capi-cream">{p.price}</p>
                <p className="text-xs text-capi-cream/60">{p.unit}</p>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-capi-cream/85">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-capi-neon" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full py-3 font-semibold transition-all ${
                  p.highlighted
                    ? 'bg-capi-neon text-capi-deep shadow-neon hover:shadow-neon-lg hover:scale-105'
                    : 'border border-capi-neon/40 text-capi-neon hover:bg-capi-neon/10'
                }`}
              >
                Comenzar <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-capi-cream/50">
          Los montos son referenciales. Se firma contrato con alcance, entregables y cronograma detallado.
        </p>
      </div>
    </section>
  )
}
