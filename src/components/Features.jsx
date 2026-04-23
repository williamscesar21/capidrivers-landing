import { motion } from 'framer-motion'
import { MapPin, CreditCard, Star, Bell, Route, ShieldCheck, Users, ShoppingBag } from 'lucide-react'

const features = [
  { icon: MapPin,      title: 'Geolocalizacion en tiempo real', body: 'Tu cliente ve al conductor moverse en el mapa. Rutas, tiempos estimados y alertas de llegada.', span: 'lg:col-span-2' },
  { icon: CreditCard,  title: 'Pagos integrados',               body: 'Efectivo, Pago Movil, Zelle y tarjetas. Conciliacion automatica y recibo digital.' },
  { icon: Star,        title: 'Calificacion bidireccional',     body: 'Usuarios califican al conductor y viceversa. Control total de la calidad del servicio.' },
  { icon: Bell,        title: 'Notificaciones push',            body: 'El conductor asigno, en camino, llego. Nada se pierde.' },
  { icon: Route,       title: 'Rutas optimizadas',              body: 'Algoritmo optimizado para Varyna ↔ Alto Barinas y el resto de la ciudad.', span: 'lg:col-span-2' },
  { icon: ShieldCheck, title: 'Boton SOS y viajes verificados', body: 'Conductores verificados. Boton de panico con ubicacion a un contacto de confianza.' },
  { icon: Users,       title: 'Modulo conductores afiliados',   body: 'Panel para manejar la flota: alta, documentos, comisiones y pagos.' },
  { icon: ShoppingBag, title: 'Integracion con Capishop',       body: 'Un solo login, ecosistema completo. Descuentos cruzados entre Capishop y Capirosa.' }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-capi-neon">Features</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-black tracking-tight">
            Todo lo que <span className="gradient-text">CAPIDRIVERS</span> necesita
          </h2>
          <p className="mt-4 text-capi-cream/70 text-lg">
            Un set completo de funcionalidades listas para competir con Uber, Didi o Yummy,
            pero pensado y tropicalizado para Barinas.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={`glass-card p-6 group relative overflow-hidden ${f.span || ''}`}
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-capi-neon/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-capi-neon/10 ring-1 ring-capi-neon/30">
                  <f.icon className="h-6 w-6 text-capi-neon" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-capi-cream">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-capi-cream/70">{f.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
