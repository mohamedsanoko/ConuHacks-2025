import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Prompt from './Prompt'
import Footer from './Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Prompt></Prompt>
      <Footer></Footer>
    </>
  )
}

export default App
