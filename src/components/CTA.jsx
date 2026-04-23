import { motion } from 'framer-motion'
import { MessageCircle, CalendarCheck } from 'lucide-react'
import Capybara from './Capybara.jsx'

export default function CTA() {
  return (
    <section id="contacto" className="relative py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-capi-primary via-capi-dark to-capi-deep p-8 md:p-14 ring-1 ring-capi-neon/40 shadow-[0_0_60px_rgba(0,230,118,0.25)]"
        >
          {/* Decorative rings */}
          <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full border-2 border-capi-neon/20" />
          <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full border-2 border-capi-neon/30" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-capi-neon/15 blur-3xl" />

          <div className="relative grid md:grid-cols-[1fr_auto] gap-10 items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-capi-deep/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-capi-neon ring-1 ring-capi-neon/40">
                Listos para arrancar
              </span>
              <h2 className="mt-5 font-display text-4xl md:text-6xl font-black tracking-tight text-capi-cream leading-[1.05]">
                Hablemos de tu app. <br />
                <span className="gradient-text">El capibara tambien quiere subirse.</span>
              </h2>
              <p className="mt-5 text-lg text-capi-cream/80">
                Conversemos sobre el alcance, tiempos y la inversion exacta para tu operacion. Sin demos ni compromisos: propuesta clara, directo al punto.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/584245650990?text=Hola%20CAPIDRIVERS%2C%20quiero%20ver%20la%20propuesta%20de%20la%20app."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-neon"
                  aria-label="Hablar por WhatsApp con CAPIDRIVERS"
                >
                  <MessageCircle className="h-5 w-5" />
                  Hablemos por WhatsApp
                </a>
                <a href="mailto:webbonding@rikoapp.com?subject=Reunion%20CAPIDRIVERS%20App" className="btn-outline">
                  <CalendarCheck className="h-5 w-5" />
                  Agendar reunion
                </a>
              </div>

              <p className="mt-6 text-xs text-capi-cream/60">
                CAPIDRIVERS · CC Las Mercedes, local 3A, Alto Barinas · RIF J-50804547-5
              </p>
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative hidden md:block"
            >
              <Capybara size={260} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
