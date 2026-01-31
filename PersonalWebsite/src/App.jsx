import Technologies from './components/sections/Technologies'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="mx-auto max-w-5xl px-6 py-12">
        <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
          Personal Website
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Hallo, ich bin <span className="text-red-400">Simon</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-300">
          Ich baue meine persönliche Website mit React und Tailwind CSS.
        </p>
      </header>

      <Technologies />
    </div>
  )
}

export default App
