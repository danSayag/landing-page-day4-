import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import PricingPage from './pages/PricingPage'
import FeaturesPage from './pages/FeaturesPage'

const pathname = window.location.pathname.replace(/\/+$/, '')
const isPricingPage = pathname === '/pricing'
const isFeaturesPage = pathname === '/features'

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white text-gray-600 antialiased">
      <Navbar />
      <main>
        {isPricingPage ? (
          <PricingPage />
        ) : isFeaturesPage ? (
          <FeaturesPage />
        ) : (
          <>
            <Hero />
            <TrustedBy />
            <Features />
            <Testimonials />
            <FAQ />
            <CTA />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
