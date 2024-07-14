// components/landingPage/FeaturedOn.tsx

import React from 'react';
import npr from '../../assets/npr.png';
import forbes from '../../assets/forbes.png';
import twp from '../../assets/twp.png';
import abc from '../../assets/abc.png';
import bloom from '../../assets/bloom.png';


const FeaturedOn: React.FC = () => {
  const features = [
    { image: npr },
    { image: forbes },
    { image: twp },
    { image: abc },
    { image: bloom },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">Featured On</h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <img src={features[0].image.src} alt="NPR" className="h-8 opacity-50" />
          <img src={features[1].image.src} alt="Forbes" className="h-8 opacity-50" />
          <img src={features[2].image.src} alt="The Washington Post" className="h-8 opacity-50" />
          <img src={features[3].image.src} alt="ABC News" className="h-8 opacity-50" />
          <img src={features[4].image.src} alt="Bloomberg" className="h-8 opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;