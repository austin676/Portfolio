import React from 'react'
import Hero from './sections/hero.jsx'
import Showcase from './sections/Showcase.jsx'
import NavBar from './components/Navbar.jsx'
import SectionLogo from './sections/SectionLogo.jsx'
import FeatureCard from './sections/FeatureCard.jsx'
import Exp from './sections/Exp.jsx'
import Techstack from './sections/Techstack.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/footer.jsx'

const App = () => {
  return (
   <>
     <NavBar />
     <Hero />
     <Showcase/>
     <SectionLogo/>
     <FeatureCard/>
     <Exp/>
    <Techstack/>
    <Contact/>
    <Footer/>
   </>
  )
}

export default App