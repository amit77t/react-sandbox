import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import List from "./List.jsx";

import List2 from "./List2.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <List/>
      <List2/>
    </>
  )
}

export default App
