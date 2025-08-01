import React from 'react';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-100 shadow-lg border-b border-gray-300 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left side - Combined Logo */}
          <div className="flex items-center">
            <img 
              src="/combined logo.png" 
              alt="Combined Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Center - IATMSI-2026 */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-3xl font-bold text-gray-800">
              IATMSI-2026
            </h1>
          </div>
          
          {/* Right side - Navigation */}
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 text-base font-medium transition-colors rounded">
              Home
            </a>
            <a href="#" className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 text-base font-medium transition-colors rounded">
              Register
            </a>
            <a href="#" className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 text-base font-medium transition-colors rounded">
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar; 