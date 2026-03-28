import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import FeaturedProjects from './components/FeaturedProjects'
import BeforeAfter from './components/BeforeAfter'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <FeaturedProjects />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
