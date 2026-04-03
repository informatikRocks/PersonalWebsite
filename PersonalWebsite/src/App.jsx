import Technologies from './components/sections/Technologies'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Personal from './components/sections/Personal'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Hello, I'm <span className="text-red-400">Simon</span>.
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-300">
          I am a Business Informatics student with a passion for mathematics and computer science. I love building innovative software and exploring mathematical concepts.
        </p>
      </header>

      <Technologies />
      <Projects />
      <Personal />
      <Contact />
    </div>
  )
}

export default App