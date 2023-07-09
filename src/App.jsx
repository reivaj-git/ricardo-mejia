import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'


function App() {


  return (
    <main className='bg-dark'>
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <Projects />
    <Contact/>
    </main>
  )
}

export default App
