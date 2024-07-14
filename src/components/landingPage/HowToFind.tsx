// components/landingPage/HowToFind.tsx

import React from "react";

const HowToFind: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-12 text-center text-gray-800">
          How To Find Your HomeRoom
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <Step icon="🏠" text="View our homes" />
          <Step icon="📅" text="Request a tour" />
          <Step icon="👥" text="Explore the space" />
          <Step icon="📝" text="Complete checks" />
          <Step icon="🔑" text="Make it official" />
          <Step icon="📦" text="Move in" />
        </div>
        <div className="text-center mt-12">
          <button className="bg-teal-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition duration-300">
            Book a Tour
          </button>
        </div>
      </div>
    </section>
  );
};

const Step: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <div className="text-center">
    <div className="text-4xl mb-2">{icon}</div>
    <p className="text-sm text-gray-600">{text}</p>
  </div>
);

export default HowToFind;
