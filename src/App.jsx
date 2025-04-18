import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Education from './components/Education/Education'
import Header from './components/Header/Header'
import Skills from './components/Skills/Skills'
import Home from './components/Home/Home'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Home/>
      <Education/>
      <Experience/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default App
