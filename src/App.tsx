import Header from './components/Header'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex flex-col min-h-full bg-[var(--color-bg)] transition-colors duration-300">
      <Header />
      <Hero />
      <Metrics />
      <CTA />
      <Footer />
    </div>
  )
}
