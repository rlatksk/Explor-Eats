import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Hero from './pages/home/Hero';
import Navbar from './layout/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </Router>
  )
}

export default App