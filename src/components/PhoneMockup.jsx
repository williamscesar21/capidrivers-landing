import { MapPin, Search, Clock, User, Home, CreditCard, Star, Shield, Navigation2, Bell } from 'lucide-react'

/**
 * Phone mockup frame. variant = "ios" | "android"
 * screen = "map" | "request" | "tariffs" | "history" | "login" | "driver"
 */
export default function PhoneMockup({ variant = 'ios', screen = 'map', className = '' }) {
  const isIOS = variant === 'ios'
  return (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto w-[260px] h-[540px] rounded-[44px] bg-gradient-to-b from-zinc-900 to-black p-2 shadow-2xl ring-1 ring-white/10">
        {/* Side button */}
        <div className="absolute -right-0.5 top-32 h-16 w-1 rounded-l-sm bg-zinc-700" />
        <div className="absolute -left-0.5 top-24 h-10 w-1 rounded-r-sm bg-zinc-700" />
        <div className="absolute -left-0.5 top-40 h-16 w-1 rounded-r-sm bg-zinc-700" />

        <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-capi-deep">
          {/* Notch / punch hole */}
          {isIOS ? (
            <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
          ) : (
            <div className="absolute left-1/2 top-3 z-20 h-3 w-3 -translate-x-1/2 rounded-full bg-black" />
          )}

          {/* Status bar */}
          <div className="relative z-10 flex items-center justify-between px-5 pt-3 text-[10px] text-capi-cream/80">
            <span>{isIOS ? '9:41' : '12:30'}</span>
            <span className="flex gap-1">
              <span>●●●●</span>
              <span>◐</span>
              <span>▮▮</span>
            </span>
          </div>

          <Screen screen={screen} />
        </div>
      </div>

      {/* Platform badge */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-capi-dark/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-capi-neon ring-1 ring-capi-neon/40">
        {isIOS ? 'iOS' : 'Android'}
      </div>
    </div>
  )
}

function Screen({ screen }) {
  if (screen === 'login')    return <LoginScreen />
  if (screen === 'request')  return <RequestScreen />
  if (screen === 'tariffs')  return <TariffsScreen />
  if (screen === 'history')  return <HistoryScreen />
  if (screen === 'driver')   return <DriverScreen />
  return <MapScreen />
}

function MapScreen() {
  return (
    <div className="relative h-full w-full pt-6">
      {/* Fake map */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 260 540" className="h-full w-full">
          <rect width="260" height="540" fill="#0B3B2E" />
          {/* Roads */}
          <path d="M0 120 L260 180" stroke="#1a5e48" strokeWidth="12" />
          <path d="M0 300 L260 260" stroke="#1a5e48" strokeWidth="10" />
          <path d="M140 0 L100 540" stroke="#1a5e48" strokeWidth="10" />
          <path d="M30 0 L60 540" stroke="#1a5e48" strokeWidth="6" />
          {/* Blocks */}
          <rect x="20"  y="30"  width="60" height="50" fill="#0d4a38" rx="3" />
          <rect x="160" y="80"  width="70" height="55" fill="#0d4a38" rx="3" />
          <rect x="30"  y="200" width="50" height="60" fill="#0d4a38" rx="3" />
          <rect x="170" y="320" width="60" height="50" fill="#0d4a38" rx="3" />
          <rect x="40"  y="400" width="60" height="60" fill="#0d4a38" rx="3" />
          {/* Route line */}
          <path d="M60 460 Q120 350 160 260 T220 100" stroke="#00E676" strokeWidth="3" fill="none" strokeDasharray="6 4" />
          {/* Driver dot */}
          <circle cx="220" cy="100" r="7" fill="#00E676" />
          <circle cx="220" cy="100" r="14" fill="#00E676" opacity="0.25">
            <animate attributeName="r" from="7" to="20" dur="1.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.5" to="0" dur="1.6s" repeatCount="indefinite" />
          </circle>
          {/* Pickup dot */}
          <circle cx="60" cy="460" r="6" fill="#F5C518" />
        </svg>
      </div>

      {/* Floating search */}
      <div className="absolute left-4 right-4 top-12 z-10 flex items-center gap-2 rounded-xl bg-black/70 backdrop-blur px-3 py-2 ring-1 ring-capi-neon/30">
        <Search className="h-4 w-4 text-capi-neon" />
        <span className="text-[11px] text-capi-cream/90">A donde vas hoy?</span>
      </div>

      {/* Bottom sheet */}
      <div className="absolute bottom-0 left-0 right-0 z-10 rounded-t-3xl bg-capi-deep/95 backdrop-blur p-4 ring-1 ring-capi-neon/20">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/20" />
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-capi-neon/15">
            <MapPin className="h-5 w-5 text-capi-neon" />
          </div>
          <div className="flex-1">
            <p className="text-[11px] text-capi-cream/70">Tu conductor llega en</p>
            <p className="text-lg font-bold text-capi-cream">3 min</p>
          </div>
          <button className="rounded-full bg-capi-neon px-3 py-1.5 text-[11px] font-semibold text-capi-deep">
            Ver ruta
          </button>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-capi-dark/70 p-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-capi-neon to-capi-primary" />
          <div className="flex-1">
            <p className="text-[11px] font-semibold text-capi-cream">Carlos R.</p>
            <p className="text-[10px] text-capi-cream/60">Toyota Corolla · ABC-123</p>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-capi-gold">
            <Star className="h-3 w-3 fill-current" /> 4.9
          </div>
        </div>
      </div>
    </div>
  )
}

function RequestScreen() {
  return (
    <div className="h-full w-full px-4 pt-6 pb-4">
      <p className="text-[11px] uppercase tracking-widest text-capi-neon/80">Solicitar viaje</p>
      <h3 className="mt-1 font-display text-xl font-bold text-capi-cream">A donde vamos?</h3>

      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 rounded-xl bg-capi-dark/70 p-3 ring-1 ring-capi-neon/20">
          <div className="h-2 w-2 rounded-full bg-capi-neon" />
          <span className="text-[11px] text-capi-cream/90">CC Las Mercedes, Alto Barinas</span>
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-capi-dark/70 p-3 ring-1 ring-capi-gold/30">
          <div className="h-2 w-2 rounded-full bg-capi-gold" />
          <span className="text-[11px] text-capi-cream/90">Terminal de Barinas</span>
        </div>
      </div>

      <p className="mt-5 text-[11px] uppercase tracking-widest text-capi-cream/60">Tipo de viaje</p>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {['Economico', 'Estandar', 'VIP'].map((t, i) => (
          <div
            key={t}
            className={`rounded-xl p-3 text-center text-[11px] ring-1 ${
              i === 1 ? 'bg-capi-neon/15 ring-capi-neon text-capi-cream' : 'bg-capi-dark/60 ring-white/10 text-capi-cream/70'
            }`}
          >
            <p className="font-semibold">{t}</p>
            <p className="mt-1 text-capi-neon">${i === 0 ? '3' : i === 1 ? '5' : '9'}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl bg-capi-dark/70 p-3">
        <p className="text-[10px] text-capi-cream/60">Pago</p>
        <div className="mt-1 flex items-center justify-between">
          <span className="flex items-center gap-2 text-[12px] text-capi-cream">
            <CreditCard className="h-4 w-4 text-capi-neon" /> Pago Movil
          </span>
          <span className="text-[11px] text-capi-neon">Cambiar</span>
        </div>
      </div>

      <button className="mt-6 w-full rounded-full bg-capi-neon py-3 font-semibold text-capi-deep shadow-neon">
        Confirmar viaje
      </button>
    </div>
  )
}

function TariffsScreen() {
  const rows = [
    ['Varyna → Alto Barinas', '$4', '12 min'],
    ['Alto Barinas → Terminal', '$5', '15 min'],
    ['Dentro de la ciudad', '$3', '8 min'],
    ['Servicio nocturno',    '$6', '+20%'],
    ['Equipaje extra',        '+$1', '—']
  ]
  return (
    <div className="h-full w-full px-4 pt-6">
      <p className="text-[11px] uppercase tracking-widest text-capi-neon/80">Tarifas oficiales</p>
      <h3 className="mt-1 font-display text-xl font-bold text-capi-cream">Transparencia total</h3>
      <div className="mt-4 space-y-2">
        {rows.map(([r, p, t]) => (
          <div key={r} className="flex items-center justify-between rounded-xl bg-capi-dark/70 p-3 ring-1 ring-white/5">
            <div>
              <p className="text-[11px] font-semibold text-capi-cream">{r}</p>
              <p className="text-[10px] text-capi-cream/60">{t}</p>
            </div>
            <span className="font-display text-sm font-bold text-capi-neon">{p}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl bg-capi-neon/10 p-3 ring-1 ring-capi-neon/30">
        <p className="text-[10px] text-capi-cream">
          ✓ Sin sorpresas. La tarifa se calcula al confirmar.
        </p>
      </div>
    </div>
  )
}

function HistoryScreen() {
  const trips = [
    { d: 'Hoy 14:23',    from: 'Casa',          to: 'CC Las Mercedes', p: '$4', ok: true },
    { d: 'Ayer 18:45',   from: 'Oficina',       to: 'Terminal',         p: '$5', ok: true },
    { d: 'Lunes 09:10',  from: 'Varyna',        to: 'Alto Barinas',     p: '$4', ok: true },
    { d: '24 abr 20:00', from: 'Restaurante',   to: 'Casa',             p: '$6', ok: true }
  ]
  return (
    <div className="h-full w-full px-4 pt-6">
      <p className="text-[11px] uppercase tracking-widest text-capi-neon/80">Historial</p>
      <h3 className="mt-1 font-display text-xl font-bold text-capi-cream">Tus viajes</h3>
      <div className="mt-4 space-y-2">
        {trips.map((t, i) => (
          <div key={i} className="rounded-xl bg-capi-dark/70 p-3 ring-1 ring-white/5">
            <div className="flex items-center justify-between">
              <p className="text-[10px] text-capi-cream/60">{t.d}</p>
              <span className="text-[10px] text-capi-neon">✓ Completado</span>
            </div>
            <p className="mt-1 text-[11px] font-semibold text-capi-cream">
              {t.from} <span className="text-capi-neon">→</span> {t.to}
            </p>
            <div className="mt-1 flex items-center justify-between">
              <div className="flex items-center gap-1 text-capi-gold">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-2.5 w-2.5 fill-current" />
                ))}
              </div>
              <span className="font-display text-sm font-bold text-capi-neon">{t.p}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function LoginScreen() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between px-6 pt-14 pb-10">
      <div className="mt-6 flex flex-col items-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-capi-neon to-capi-primary shadow-neon">
          <Shield className="h-10 w-10 text-capi-deep" strokeWidth={2.5} />
        </div>
        <h3 className="mt-5 text-center font-display text-xl font-black text-capi-cream">
          Bienvenido a<br />CAPI<span className="text-capi-neon">DRIVERS</span>
        </h3>
        <p className="mt-2 text-center text-[11px] text-capi-cream/60">Tu traslado seguro, 24/7</p>
      </div>

      <div className="w-full space-y-2">
        <div className="rounded-xl bg-capi-dark/80 p-3 ring-1 ring-white/10">
          <p className="text-[10px] text-capi-cream/60">Telefono</p>
          <p className="mt-1 text-[12px] text-capi-cream">+58 424-565 0990</p>
        </div>
        <button className="w-full rounded-full bg-capi-neon py-3 text-[12px] font-bold text-capi-deep shadow-neon">
          Enviar codigo SMS
        </button>
        <button className="w-full rounded-full border border-capi-neon/40 py-3 text-[12px] font-semibold text-capi-neon">
          Continuar con Google
        </button>
      </div>

      <p className="text-center text-[9px] text-capi-cream/40">
        Al continuar aceptas nuestros Terminos y Privacidad
      </p>
    </div>
  )
}

function DriverScreen() {
  return (
    <div className="h-full w-full px-4 pt-6">
      <p className="text-[11px] uppercase tracking-widest text-capi-neon/80">Modo conductor</p>
      <h3 className="mt-1 font-display text-xl font-bold text-capi-cream">Carlos Rodriguez</h3>

      {/* Online toggle */}
      <div className="mt-3 flex items-center justify-between rounded-xl bg-capi-neon/10 p-3 ring-1 ring-capi-neon/40">
        <div>
          <p className="text-[11px] font-semibold text-capi-cream">En linea</p>
          <p className="text-[10px] text-capi-cream/70">Recibiendo viajes</p>
        </div>
        <div className="relative h-6 w-11 rounded-full bg-capi-neon">
          <div className="absolute right-0.5 top-0.5 h-5 w-5 rounded-full bg-capi-deep" />
        </div>
      </div>

      {/* Stats */}
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-capi-dark/70 p-2 text-center ring-1 ring-white/5">
          <p className="font-display text-lg font-bold text-capi-neon">12</p>
          <p className="text-[9px] text-capi-cream/60">Viajes</p>
        </div>
        <div className="rounded-xl bg-capi-dark/70 p-2 text-center ring-1 ring-white/5">
          <p className="font-display text-lg font-bold text-capi-neon">$68</p>
          <p className="text-[9px] text-capi-cream/60">Hoy</p>
        </div>
        <div className="rounded-xl bg-capi-dark/70 p-2 text-center ring-1 ring-white/5">
          <p className="font-display text-lg font-bold text-capi-gold">4.9</p>
          <p className="text-[9px] text-capi-cream/60">Rating</p>
        </div>
      </div>

      {/* Incoming request */}
      <div className="mt-4 rounded-xl bg-capi-deep p-3 ring-2 ring-capi-neon shadow-neon">
        <p className="text-[10px] uppercase tracking-widest text-capi-neon">Nuevo viaje</p>
        <p className="mt-1 text-[11px] font-semibold text-capi-cream">CC Las Mercedes → Terminal</p>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-[10px] text-capi-cream/70">2.4 km · 8 min</span>
          <span className="font-display text-sm font-bold text-capi-neon">$5</span>
        </div>
        <div className="mt-3 flex gap-2">
          <button className="flex-1 rounded-full bg-capi-neon py-2 text-[11px] font-bold text-capi-deep">
            Aceptar
          </button>
          <button className="flex-1 rounded-full bg-white/5 py-2 text-[11px] text-capi-cream/70">
            Rechazar
          </button>
        </div>
      </div>
    </div>
  )
}
