import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Hero from './components/Hero'
import Services from './components/Services'


function App() {
  return (
  <>
    <Header/>
    <main>
    <Hero/>
    {/* <AboutMe/> */}
    <Projects/>
    {/* <Skills/> */}
    <Services/>
    <Contact/>
    </main>
    <Footer/>
   </>
 
  )
}

export default App
