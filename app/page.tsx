import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import ProductOverview from '@/components/ProductOverview'
import Features from '@/components/Features'
import Reviews from '@/components/Reviews'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <main>
      <Navigation />
      <Hero />
      <ProductOverview />
      <Features />
      <Reviews />
      <Pricing />
      <Footer />
    </main>
  )
}

export default page