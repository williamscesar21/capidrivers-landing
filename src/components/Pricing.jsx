import { motion } from 'framer-motion'
import { Check, Crown, ArrowRight, Sparkles } from 'lucide-react'

const features = [
  'App nativa iOS + Android (una sola base)',
  'Login, mapa en vivo y solicitud de viaje',
  'Tarifas configurables y ruta optimizada',
  'Pagos: efectivo, Pago Movil, Zelle y tarjetas',
  'Panel administrador web con metricas en vivo',
  'App dedicada para conductores afiliados',
  'Notificaciones push personalizadas',
  'Rating bidireccional + boton SOS',
  'Programa de referidos y cupones',
  'Integracion con Capishop y Capirosa',
  'Publicacion en App Store y Google Play',
  'Diseno UI/UX con la mascota Capibara',
  '3 meses de soporte y mantenimiento incluidos'
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
            Una propuesta. <span className="gradient-text">Todo incluido.</span>
          </h2>
          <p className="mt-4 text-capi-cream/70 text-lg">
            Sin letras chicas, sin planes confusos, sin sorpresas. Un solo paquete con toda
            la app, el panel administrador y el acompanamiento que CAPIDRIVERS necesita para
            salir al aire.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="relative mt-14 mx-auto max-w-3xl rounded-3xl bg-capi-dark/60 backdrop-blur p-8 md:p-12 ring-2 ring-capi-neon shadow-[0_0_80px_rgba(0,230,118,0.35)] overflow-hidden"
        >
          {/* Glow decorations */}
          <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-capi-neon/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-capi-primary/15 blur-3xl" />

          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-capi-neon text-capi-deep shadow-neon">
                  <Crown className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-display text-3xl font-black text-capi-cream">Plan Integral</h3>
                  <p className="text-xs text-capi-cream/60 uppercase tracking-widest">Todo incluido · Pago unico</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-capi-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-capi-gold ring-1 ring-capi-gold/40">
                <Sparkles className="h-3.5 w-3.5" />
                Oferta de lanzamiento
              </span>
            </div>

            <div className="mt-8 flex items-end gap-3">
              <p className="font-display text-7xl md:text-8xl font-black gradient-text leading-none">$2,500</p>
              <p className="pb-2 text-sm text-capi-cream/70">USD<br />pago unico</p>
            </div>

            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-capi-cream/90">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-capi-neon/20 ring-1 ring-capi-neon/50">
                    <Check className="h-3 w-3 text-capi-neon" strokeWidth={3} />
                  </div>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/584245650990?text=Hola%20CAPIDRIVERS%2C%20quiero%20cerrar%20la%20propuesta%20de%20la%20app%20por%20%242%2C500."
                target="_blank"
                rel="noreferrer"
                className="btn-neon flex-1 sm:flex-none"
              >
                Cerrar propuesta <ArrowRight className="h-4 w-4" />
              </a>
              <p className="text-xs text-capi-cream/60">
                Entrega en 6 semanas · Contrato firmado con alcance y cronograma detallado
              </p>
            </div>
          </div>
        </motion.article>

        <p className="mt-8 text-center text-xs text-capi-cream/50">
          Pago 50% al firmar contrato, 50% al publicar en tiendas.
        </p>
      </div>
    </section>
  )
}
