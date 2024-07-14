// components/landingPage/Features.tsx

import React from "react";
import featureImg1 from "../../assets/featureimg1.jpg";
import featureImg2 from "../../assets/featureimg2.jpg";
import featureImg3 from "../../assets/featureimg3.jpg";
import featureImg4 from "../../assets/featureimg4.jpg";

const Features: React.FC = () => {
  const features = [
    { title: "Amenities you'll actually love", image: featureImg1 },
    { title: "Seriously affordable rent", image: featureImg2 },
    { title: "No more hit-or-miss roommates", image: featureImg3 },
    { title: "An app for everything", image: featureImg4 },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
          More than just a house full of random roommates.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              image={feature.image.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ title: string; image: string }> = ({
  title,
  image,
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    </div>
  </div>
);

export default Features;
