import Navbar from './components/Navbar'
import AccessibilityWidget from './components/AccessibilityWidget'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import PricingPage from './pages/PricingPage'
import FeaturesPage from './pages/FeaturesPage'
import AccessibilityPage from './pages/AccessibilityPage'
import FAQPage from './pages/FAQPage'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { getLogicalPath } from './i18n/routing'

const logicalPath = getLogicalPath(window.location.pathname)
const isPricingPage = logicalPath === '/pricing'
const isFeaturesPage = logicalPath === '/features'
const isAccessibilityPage = logicalPath === '/accessibility'
const isFaqPage = logicalPath === '/faq'

function AppInner() {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen overflow-x-clip bg-white text-gray-600 antialiased" dir={t.dir} lang={t.lang}>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {isAccessibilityPage ? (
          <AccessibilityPage />
        ) : isFaqPage ? (
          <FAQPage />
        ) : isPricingPage ? (
          <PricingPage />
        ) : isFeaturesPage ? (
          <FeaturesPage />
        ) : (
          <>
            <Hero />
            <Features />
            <HowItWorks />
            <TrustedBy />
            <Testimonials />
            <FAQ />
            <CTA />
          </>
        )}
      </main>
      <Footer />
      {/* Fixed accessibility button — always visible, required by IS 5568 */}
      <AccessibilityWidget />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  )
}

export default App
