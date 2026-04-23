import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Mockups from './components/Mockups.jsx'
import Features from './components/Features.jsx'
import UserFlow from './components/UserFlow.jsx'
import AdminPanel from './components/AdminPanel.jsx'
import Mascot from './components/Mascot.jsx'
import Pricing from './components/Pricing.jsx'
import Roadmap from './components/Roadmap.jsx'
import Metrics from './components/Metrics.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import Divider from './components/Divider.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-capi-deep text-capi-cream">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-radial-dark" />
        <div className="absolute inset-0 bg-grid-dots opacity-40" />
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-capi-neon/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-capi-primary/10 blur-[140px]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Problem />
        <Divider />
        <Mockups />
        <Divider />
        <Features />
        <Divider />
        <UserFlow />
        <Divider />
        <AdminPanel />
        <Divider />
        <Mascot />
        <Divider />
        <Pricing />
        <Divider />
        <Roadmap />
        <Divider />
        <Metrics />
        <Divider />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
