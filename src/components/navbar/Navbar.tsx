// src/components/navbar/Navbar.tsx

import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#242e2e] shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Homeroom Logo" className="h-8 w-auto" />
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-white hover:text-gray-900">
            Lease & Rooms
          </a>
          <a href="#" className="text-white hover:text-gray-900">
            List Your Home
          </a>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition duration-300">
            Sign Up / Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
