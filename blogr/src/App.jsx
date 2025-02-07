import { useState } from 'react'
import './App.css'
import './index.css'
import Header from './Components/header.jsx'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion' 
import Items from './Components/Nav_items.jsx'
import Hero from './Components/hero.jsx'
import DesignedFuture from './Components/Designed for the Future.jsx'
import StateArt from './Components/State of the Art.jsx'
import FreeOpenSimple from './Components/FreeOpenSimple.jsx'
import Footer from './Components/Footer.jsx'




function App() {

  return (
    <>
    
    <Header />

    <Hero />

    <DesignedFuture />

    <StateArt />

    <FreeOpenSimple />

    <Footer/>

    </>
  )
}

export default App
