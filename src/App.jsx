import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'


function App() {
  return (
  <>
    <Header/>
    <main>
    <AboutMe/>
    <Projects/>
    <Skills/>
    <Contact/>
    </main>
    <Footer/>
   </>
 
  )
}

export default App
