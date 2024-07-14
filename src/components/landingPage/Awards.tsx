// components/landingPage/Awards.tsx

import React from "react";
import award1 from "../../assets/award1.jpg";
import award2 from "../../assets/award2.jpg";
import award3 from "../../assets/award3.png";
import award4 from "../../assets/award4.png";
import award5 from "../../assets/award5.jpg";

const Awards: React.FC = () => {
  const features = [
    { image: award1 },
    { image: award2 },
    { image: award3 },
    { image: award4 },
    { image: award5 },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">
          HomeRoom is winning awards!
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {features.map((feature, index) => (
            <img
              key={index}
              src={feature.image.src}
              alt={`Award ${index + 1}`}
              className="h-16"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
