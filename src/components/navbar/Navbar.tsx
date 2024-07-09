// src/components/navbar/Navbar.tsx

import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#242e2e] p-4 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Homeroom Logo" className="h-8 w-auto mr-2" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
