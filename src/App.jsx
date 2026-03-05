import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Cursor from './components/Cursor'

function App() {
  return (
    <main className="w-full min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      <Cursor/ >
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  )
}

export default App