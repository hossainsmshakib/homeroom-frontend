// components/landingPage/FeaturedProperties.tsx

import React from 'react';
import featureproperties1 from '../../assets/featureproperties1.jpg';
import featureproperties2 from '../../assets/featureproperties2.jpg';

const FeaturedProperties: React.FC = () => {
  const features = [
    { image: featureproperties1 },
    { image: featureproperties2 },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PropertyCard
            title="Overland Park, Kansas"
            image={features[0].image.src}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <PropertyCard
            title="Arlington, Texas"
            image={features[1].image.src}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </section>
  );
};

const PropertyCard: React.FC<{ title: string; image: string; description: string }> = ({ title, image, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition duration-300">
        Learn More
      </button>
    </div>
  </div>
);

export default FeaturedProperties;