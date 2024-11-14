import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full bg-black bg-opacity-50 p-4 z-50">
      <div className="container mx-auto flex justify-center items-center">
        <div className="space-x-4">
          <Link to="/" className="text-[#F1C84F] hover:text-[#A1883B] text-[24px]">Home</Link>
          <Link to="/list" className="text-gray-300 hover:text-[#A1883B] text-[16px] transition-all duration-500 ease-in-out hover:text-[24px]">Makanan</Link>
          <Link to="/" className="text-gray-300 hover:text-[#A1883B] text-[16px] transition-all duration-500 ease-in-out hover:text-[24px]">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar