import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FoodCards from "./components/FoodCards"
import Work from "./components/Work"
import Popular from "./components/Popular"
import Featured from "./components/Featured"


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FoodCards />
      <Work />
      <Popular />
      <Featured />
    </>
  )
}

export default App
