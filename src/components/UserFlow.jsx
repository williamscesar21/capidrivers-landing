import { motion } from 'framer-motion'
import { Smartphone, MapPinned, UserCheck, Navigation, CheckCircle2 } from 'lucide-react'

const steps = [
  { icon: Smartphone,  title: 'Abrir app',        body: 'Login con telefono o Google, en segundos.' },
  { icon: MapPinned,   title: 'Elegir destino',   body: 'Escribe o selecciona tu destino en el mapa.' },
  { icon: UserCheck,   title: 'Asignacion',       body: 'El sistema asigna el conductor mas cercano.' },
  { icon: Navigation,  title: 'Viaje en vivo',    body: 'Sigue la ruta en tiempo real. ETA actualizado.' },
  { icon: CheckCircle2,title: 'Pago y rating',    body: 'Paga como prefieras y califica el viaje.' }
]

export default function UserFlow() {
  return (
    <section className="relative py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-capi-neon">Flujo de usuario</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-black tracking-tight">
            5 pasos <span className="gradient-text">para un viaje perfecto</span>
          </h2>
          <p className="mt-4 text-capi-cream/70 text-lg">
            Una experiencia simple, clara y rapida. Desde abrir la app hasta bajarse en destino.
          </p>
        </motion.div>

        <div className="mt-14 relative">
          {/* Horizontal connecting line */}
          <div className="hidden md:block absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-transparent via-capi-neon/60 to-transparent" />

          <ol className="grid md:grid-cols-5 gap-5">
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-capi-deep ring-1 ring-capi-neon/40 shadow-neon-sm group-hover:shadow-neon transition">
                    <s.icon className="h-9 w-9 text-capi-neon" strokeWidth={1.8} />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-capi-neon text-xs font-black text-capi-deep shadow-neon-sm">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-capi-cream">{s.title}</h3>
                <p className="mt-2 text-sm text-capi-cream/70">{s.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
