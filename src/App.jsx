import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FoodCards from "./components/FoodCards"
import Work from "./components/Work"


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FoodCards />
      <Work />
    </>
  )
}

export default App
