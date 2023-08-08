import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-6xl font-bold">Hello World</h1>
      <div className="card">
        <button
          className="bg-sky-500 hover:bg-sky-700 p-8"
          onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
