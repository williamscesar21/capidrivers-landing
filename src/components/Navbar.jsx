import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import Logo from './Logo.jsx'

const links = [
  { href: '#propuesta', label: 'Propuesta' },
  { href: '#features',  label: 'Features'  },
  { href: '#mockups',   label: 'Mockups'   },
  { href: '#planes',    label: 'Planes'    },
  { href: '#contacto',  label: 'Contacto'  }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-capi-deep/75 border-b border-capi-neon/15 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between py-4" aria-label="Main">
        <a href="#top" aria-label="Ir al inicio">
          <Logo size={38} />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-capi-cream/80 hover:text-capi-neon transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/584121510662?text=Hola%20Web%20Bonding%2C%20vengo%20de%20la%20propuesta%20CAPIDRIVERS%20y%20quiero%20conversar%20sobre%20la%20app."
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex btn-neon text-sm px-5 py-2.5"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
            Contactanos
          </a>
          <button
            className="md:hidden rounded-lg p-2 text-capi-cream hover:bg-capi-neon/10"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-capi-neon/15 bg-capi-deep/95 backdrop-blur-xl"
        >
          <ul className="section-container flex flex-col gap-1 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-capi-cream/80 hover:bg-capi-neon/10 hover:text-capi-neon"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://wa.me/584121510662?text=Hola%20Web%20Bonding%2C%20vengo%20de%20la%20propuesta%20CAPIDRIVERS%20y%20quiero%20conversar%20sobre%20la%20app."
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="btn-neon w-full"
              >
                <MessageCircle className="h-4 w-4" /> Contactanos
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
