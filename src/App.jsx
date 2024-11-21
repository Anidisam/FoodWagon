import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FoodCards from "./components/FoodCards";
import Work from "./components/Work";
import Popular from "./components/Popular";
import Featured from "./components/Featured";
import Best from "./components/Best";
import Login from "./components/Login"; 
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        {/* Navbar is displayed on all pages */}
        <Navbar />

        {/* Define routes for navigation */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <FoodCards />
                <Work />
                <Popular />
                <Featured />
                <Best />
                <Footer />

              </>
            }
          />
          <Route path="/login" element={<Login />} /> {/* Login page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
