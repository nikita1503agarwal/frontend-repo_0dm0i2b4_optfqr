import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import ProductHighlights from './components/ProductHighlights'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero3D />
      <ProductHighlights />
      <CTA />
      <footer className="py-8 text-center text-blue-100/60">
        © {new Date().getFullYear()} Arivar. All rights reserved.
      </footer>
    </div>
  )
}

export default App
