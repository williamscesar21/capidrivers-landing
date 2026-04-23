# CAPIDRIVERS — Propuesta comercial

Landing page profesional para presentar la propuesta de **app móvil (iOS + Android)** de **CAPIDRIVERS**, servicio de taxi y traslados en Barinas, Venezuela.

> "Tu traslado seguro, 24/7"

---

## Stack

- **React 18** + **Vite 5**
- **TailwindCSS 3** con paleta custom `capi.*`
- **Framer Motion** para animaciones (scroll, stagger, parallax)
- **Lucide React** para todos los iconos
- Dark mode por defecto, glassmorphism, glows verdes

## Instalación

Requisitos: Node 18+ y npm 9+.

```bash
# 1. Clonar
git clone https://github.com/williamscesar21/capidrivers-landing.git
cd capidrivers-landing

# 2. Instalar dependencias
npm install

# 3. Modo desarrollo (hot reload en http://localhost:5173)
npm run dev

# 4. Build de producción
npm run build

# 5. Previsualizar build
npm run preview
```

## Estructura

```
capidrivers-landing/
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx      # Navbar fijo translúcido + CTA
        ├── Hero.jsx        # Hero pantalla completa + mockups + partículas
        ├── Problem.jsx     # 3 tarjetas "Problema/Oportunidad"
        ├── Mockups.jsx     # Tabs iOS/Android con 6 pantallas
        ├── Features.jsx    # Bento grid de 8 features
        ├── UserFlow.jsx    # Timeline horizontal de 5 pasos
        ├── AdminPanel.jsx  # Dashboard admin + app conductor
        ├── Mascot.jsx      # Capibara MIB + touchpoints
        ├── Pricing.jsx     # 3 planes (Starter / Pro / Enterprise)
        ├── Roadmap.jsx     # Timeline de 4 fases
        ├── Metrics.jsx     # Métricas proyectadas con CountUp
        ├── CTA.jsx         # Card final con WhatsApp + agendar
        ├── Footer.jsx      # Logo, contactos, redes, RIF
        ├── PhoneMockup.jsx # Mockup reutilizable iOS/Android con 6 pantallas
        ├── Capybara.jsx    # Ilustración SVG de la mascota
        ├── Logo.jsx        # Logo de marca
        └── Divider.jsx     # Divider SVG entre secciones
```

## Paleta

```js
capi: {
  neon:    '#00E676',  // verde neón, CTAs y acentos
  primary: '#00D26A',  // verde esmeralda
  dark:    '#0B3B2E',  // fondos secundarios
  deep:    '#051912',  // fondo principal
  gold:    '#F5C518',  // detalles de lujo
  cream:   '#F5F5F0'   // texto claro
}
```

Fuentes: **Sora** / **Poppins** (display) e **Inter** (body), cargadas desde Google Fonts.

## Accesibilidad

- `aria-label`, `aria-expanded`, `role="img"` en mockups e iconografía
- Focus visible con outline verde neón (`*:focus-visible`)
- Contraste AA en textos principales
- Navegación completa por teclado

## Datos de contacto

**CAPIDRIVERS C.A.**
- 📍 CC Las Mercedes, local 3A, Alto Barinas, Venezuela
- 📞 0424-5650990
- 🆔 RIF: J-50804547-5

**Web Bonding C.A.** (agencia)
- 📧 webbonding@rikoapp.com
- 📞 0412-1510662

---

© Web Bonding C.A. · Propuesta comercial para CAPIDRIVERS.
