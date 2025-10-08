import { useState } from 'react'
import LoveBooks from './LoveBooks'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoveBooks />
    </>
  )
}

export default App
