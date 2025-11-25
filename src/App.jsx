import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects'


function App() {
  return (
  <>
    <Header/>
    <main>
    <AboutMe/>
    <Projects/>
    <Contact/>
    </main>
    <Footer/>
   </>
 
  )
}

export default App
