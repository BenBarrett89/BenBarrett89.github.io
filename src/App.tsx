import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-6xl font-bold">Hello World</h1>
      <div className="py-8">
        <button
          className="bg-gradient-to-b from-purple-600 to-blue-600 hover:from-purple-900 hover:to-blue-900 px-10 py-4 rounded-xl"
          onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <p className="py-2">
          <a href="/#/somewhere">Link to somewhere</a>
        </p>
        <p className="py-2">
          <a href="/#/other">Link to other</a>
        </p>
      </div>
    </>
  )
}

export default App
