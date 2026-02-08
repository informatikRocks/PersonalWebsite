import Technologies from './components/sections/Technologies'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Personal from './components/sections/Personal'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      
      {/* --- OPTION 1: Top Banner Warning --- */}
      <div className="bg-yellow-900/30 border-b border-yellow-700/50 px-4 py-2 text-center">
        <p className="text-sm font-medium text-yellow-200">
          ⚠️ Note: This website is a conceptual mockup.
        </p>
      </div>

      <header className="mx-auto max-w-5xl px-6 py-12">
        
        {/* --- OPTION 2: Subtle Subtitle --- */}
        <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
          Personal Website <span className="text-red-400 border border-red-400 rounded px-1.5 py-0.5 text-xs ml-2 normal-case tracking-normal">Mockup</span>
        </p>
        
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