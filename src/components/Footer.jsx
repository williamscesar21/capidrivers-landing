import { Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-capi-neon/15 bg-capi-deep/60 backdrop-blur">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Logo size={44} />
            <p className="mt-4 max-w-sm text-sm text-capi-cream/70">
              Propuesta comercial desarrollada por <strong className="text-capi-cream">Web Bonding C.A.</strong> para
              digitalizar el servicio de CAPIDRIVERS en Barinas, Venezuela.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-capi-dark/80 text-capi-cream/80 ring-1 ring-white/10 hover:text-capi-neon hover:ring-capi-neon transition"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/584121510662"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Web Bonding"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-capi-dark/80 text-capi-cream/80 ring-1 ring-white/10 hover:text-capi-neon hover:ring-capi-neon transition"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="mailto:webbonding@rikoapp.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-capi-dark/80 text-capi-cream/80 ring-1 ring-white/10 hover:text-capi-neon hover:ring-capi-neon transition"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-capi-neon">CAPIDRIVERS</h3>
            <ul className="mt-4 space-y-2 text-sm text-capi-cream/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-capi-neon" />
                <span>CC Las Mercedes, local 3A<br />Alto Barinas, Venezuela</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-capi-neon" />
                <a href="tel:+584245650990" className="hover:text-capi-neon">0424-5650990</a>
              </li>
              <li className="text-xs pt-1 text-capi-cream/50">RIF: J-50804547-5</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-capi-neon">Web Bonding C.A.</h3>
            <ul className="mt-4 space-y-2 text-sm text-capi-cream/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-capi-neon" />
                <a href="mailto:webbonding@rikoapp.com" className="hover:text-capi-neon">webbonding@rikoapp.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-capi-neon" />
                <a href="tel:+584121510662" className="hover:text-capi-neon">0412-1510662</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 flex-shrink-0 text-capi-neon" />
                <a href="https://wa.me/584121510662" target="_blank" rel="noreferrer" className="hover:text-capi-neon">WhatsApp</a>
              </li>
              <li className="text-xs pt-1 text-capi-cream/50">RIF: J-50804362-6</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-capi-cream/50">
          <p>© {year} CAPIDRIVERS · Propuesta comercial · Todos los derechos reservados.</p>
          <p>
            Diseno y desarrollo por{' '}
            <a href="mailto:webbonding@rikoapp.com" className="text-capi-neon hover:underline">Web Bonding C.A.</a>
            {' · '}RIF J-50804362-6
          </p>
        </div>
      </div>
    </footer>
  )
}
