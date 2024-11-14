import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FoodCards from "./components/FoodCards"


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FoodCards />
    </>
  )
}

export default App
