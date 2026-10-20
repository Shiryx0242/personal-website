import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import TechStack from './components/TechStack/TechStack'
import Projects from './components/Projects/Projects'
import GithubStats from './components/GithubStats/GithubStats'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <section id="resume" className="resume-section">
          <Experience />
          <TechStack />
        </section>
        <Projects />
        <GithubStats />
      </main>
      <Footer />
    </>
  )
}

export default App
