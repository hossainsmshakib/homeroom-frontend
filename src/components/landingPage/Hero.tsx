// src/components/landingPage/Hero.tsx

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white pt-24 pb-20">
      {" "}
      {/* Adjusted pt-24 for top padding */}
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">Roommate Living. Perfected.</h1>
        <button className="bg-white text-teal-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
          View Our Rooms
        </button>
      </div>
    </section>
  );
};

export default Hero;
