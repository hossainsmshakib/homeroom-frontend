// src/components/citylist/CityList.tsx

import React from "react";
import Navbar from "../navbar/Navbar";
import atlanta from "../../assets/atlanta.jpg";
import austin from "../../assets/austin.jpg";
import charlotte from "../../assets/charlotte.jpg";
import dallas from "../../assets/dallas.jpg";
import houston from "../../assets/houston.jpg";
import indianapolis from "../../assets/indianapolis.jpg";
import kansascity from "../../assets/kansascity.jpg";
import sanantonio from "../../assets/sanantonio.jpg";
import tampa from "../../assets/tampa.jpg";

type City = {
  name: string;
  image: string;
};

const cities: City[] = [
  { name: "Atlanta", image: atlanta.src },
  { name: "Austin", image: austin.src },
  { name: "Charlotte", image: charlotte.src },
  { name: "Dallas", image: dallas.src },
  { name: "Houston", image: houston.src },
  { name: "Indianapolis", image: indianapolis.src },
  { name: "Kansas City", image: kansascity.src },
  { name: "San Antonio", image: sanantonio.src },
  { name: "Tampa", image: tampa.src },
];

const CityList: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-24 px-4 pb-8">
        <h2 className="text-center text-xl font-semibold mb-8">
          Select the city you are looking to rent in
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cities.map((city) => (
            <div
              key={city.name}
              className="relative h-64 bg-cover bg-center rounded shadow-lg cursor-pointer transition duration-300 transform hover:scale-105"
              style={{ backgroundImage: `url(${city.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded">
                <h2 className="text-white text-2xl font-bold">{city.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityList;
