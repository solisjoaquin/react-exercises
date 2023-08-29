import { useState } from 'react'
import './App.css'
import Badge from './exercises/01-badge-variables'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Badge />
    </>
  )
}

export default App
