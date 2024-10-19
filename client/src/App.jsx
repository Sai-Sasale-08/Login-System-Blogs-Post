import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './components/Header'
import Allroutes from './AllRoutes'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <NavigationBar/>
      <Allroutes/>
      <Footer />
    </>
  )
}

export default App
