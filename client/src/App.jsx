import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import Home from './pages/home/Home';
import Hero from './pages/home/Hero';
import Navbar from './layout/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods/details" element={<Hero />} />
      </Routes> */}
    </div>
      
  )
}

export default App