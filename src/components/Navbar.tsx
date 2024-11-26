import React from 'react'
import { ModeToggle } from "@/components/dark-mode/mode-toggle";

function Navbar() {
  return (
    <nav className="py-4 px-8 border-b-gray-100 bg-[var(--navbar-background)]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">CTRL<span className='text-red-600'>PLAY</span></div>
        <ul className="flex items-center space-x-6">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><ModeToggle/></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar