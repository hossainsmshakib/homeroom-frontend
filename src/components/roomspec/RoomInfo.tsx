"use client"; // Ensures the component is treated as a client component

import React, { useState } from "react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

const locations = {
  Atlanta: [33.7490, -84.3880],
  Austin: [30.2672, -97.7431],
  Charlotte: [35.2271, -80.8431],
  Dallas: [32.7767, -96.7970],
  Houston: [29.7604, -95.3698],
  Indianapolis: [39.7684, -86.1581],
  "Kansas City": [39.0997, -94.5786],
  "San Antonio": [29.4241, -98.4936],
  Tampa: [27.9506, -82.4572],
};

type Props = {};

const RoomInfo: React.FC<Props> = ({}) => {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const [roomType, setRoomType] = useState("");
  const [bathroomType, setBathroomType] = useState("");
  const [rent, setRent] = useState("");
  const [pictures, setPictures] = useState<FileList | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [availabilityType, setAvailabilityType] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableStart, setAvailableStart] = useState("");
  const [availableEnd, setAvailableEnd] = useState("");
  const [amenities, setAmenities] = useState({
    Wifi: false,
    Maintenance: false,
    CleaningService: false,
    SmartTelevision: false,
    InHouseLaundry: false,
    Pets: false,
  });
  const [currentStep, setCurrentStep] = useState(1);

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      description,
      location,
      homeAddress,
      coordinates,
      roomType,
      bathroomType,
      rent,
      pictures,
      video,
      availability: {
        type: availabilityType,
        from: availableFrom,
        start: availableStart,
        end: availableEnd,
      },
      amenities,
    });
  };

  const handleAmenityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setAmenities((prevAmenities) => ({
      ...prevAmenities,
      [name]: checked,
    }));
  };

  const nextStep = () => {
    if ((currentStep === 1 && (!description || !location || !homeAddress)) ||
        (currentStep === 2 && (!roomType || !bathroomType || !rent))) {
      alert("Please fill in all required fields");
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Room Information</h1>
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <>
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                  Description:
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
                  Location:
                </label>
                <select
                  id="location"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    const coords = locations[e.target.value as keyof typeof locations];
                    setCoordinates(coords ? [coords[0], coords[1]] : null);
                  }}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="">Select Location</option>
                  {Object.keys(locations).map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
             {/*  <div className="mb-4">
                <label htmlFor="homeAddress" className="block text-gray-700 font-bold mb-2">
                  Home Address:
                </label>
                <input
                  type="text"
                  id="homeAddress"
                  value={homeAddress}
                  onChange={(e) => setHomeAddress(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                  readOnly
                />
              </div> */}
              {coordinates && (
                <MapComponent
                  coordinates={coordinates}
                  setCoordinates={setCoordinates}
                  setHomeAddress={setHomeAddress}
                />
              )}
              <button
                type="button"
                onClick={nextStep}
                className="w-full bg-[#309797] text-white p-2 rounded hover:bg-[#287373]"
              >
                Next
              </button>
            </>
          )}
          {currentStep === 2 && (
            <>
              <div className="mb-4">
                <label htmlFor="roomType" className="block text-gray-700 font-bold mb-2">
                  Room Type:
                </label>
                <select
                  id="roomType"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="">Select Room Type</option>
                  <option value="shared">Shared</option>
                  <option value="private">Private</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="bathroomType" className="block text-gray-700 font-bold mb-2">
                  Bathroom Type:
                </label>
                <select
                  id="bathroomType"
                  value={bathroomType}
                  onChange={(e) => setBathroomType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="">Select Bathroom Type</option>
                  <option value="common">Common</option>
                  <option value="attached">Attached</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="rent" className="block text-gray-700 font-bold mb-2">
                  Rent:
                </label>
                <input
                  type="number"
                  id="rent"
                  value={rent}
                  onChange={(e) => setRent(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="w-1/2 bg-gray-400 text-white p-2 rounded hover:bg-gray-500 mr-2"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="w-1/2 bg-[#309797] text-white p-2 rounded hover:bg-[#287373]"
                >
                  Next
                </button>
              </div>
            </>
          )}
          {currentStep === 3 && (
            <>
              <div className="mb-4">
                <label htmlFor="pictures" className="block text-gray-700 font-bold mb-2">
                  Upload Pictures (Up to 5):
                </label>
                <input
                  type="file"
                  id="pictures"
                  accept="image/*"
                  multiple
                  onChange={(e) => setPictures(e.target.files)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="video" className="block text-gray-700 font-bold mb-2">
                  Upload Video (Only 1):
                </label>
                <input
                  type="file"
                  id="video"
                  accept="video/*"
                  onChange={(e) => setVideo(e.target.files ? e.target.files[0] : null)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Amenities:</label>
                <div className="grid grid-cols-2 gap-4">
                  {Object.keys(amenities).map((key) => (
                    <div key={key}>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name={key}
                          checked={(amenities as any)[key]}
                          onChange={handleAmenityChange}
                          className="mr-2"
                        />
                        {key.split(/(?=[A-Z])/).join(" ")}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="availabilityType" className="block text-gray-700 font-bold mb-2">
                  Availability:
                </label>
                <div className="flex flex-col">
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="availabilityType"
                      value="fromDate"
                      checked={availabilityType === "fromDate"}
                      onChange={(e) => setAvailabilityType(e.target.value)}
                      className="mr-2"
                      required
                    />
                    Available from - 
                  </label>
                  {availabilityType === "fromDate" && (
                    <div className="mt-4">
                      <label htmlFor="availableFrom" className="block text-gray-700 mb-2">
                        Available From:
                      </label>
                      <input
                        type="date"
                        id="availableFrom"
                        value={availableFrom}
                        onChange={(e) => setAvailableFrom(e.target.value)}
                        min={today}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </div>
                  )}
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="availabilityType"
                      value="shortTime"
                      checked={availabilityType === "shortTime"}
                      onChange={(e) => setAvailabilityType(e.target.value)}
                      className="mr-2"
                      required
                    />
                    Available for a limited time - 
                  </label>
                  {availabilityType === "shortTime" && (
                    <div className="mt-4">
                      <label htmlFor="availableStart" className="block text-gray-700 mb-2">
                        Available Start Date:
                      </label>
                      <input
                        type="date"
                        id="availableStart"
                        value={availableStart}
                        onChange={(e) => setAvailableStart(e.target.value)}
                        min={today}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                      <label htmlFor="availableEnd" className="block text-gray-700 mb-2 mt-4">
                        Available End Date:
                      </label>
                      <input
                        type="date"
                        id="availableEnd"
                        value={availableEnd}
                        onChange={(e) => setAvailableEnd(e.target.value)}
                        min={today}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="w-1/2 bg-gray-400 text-white p-2 rounded hover:bg-gray-500 mr-2"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-[#309797] text-white p-2 rounded hover:bg-[#287373]"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default RoomInfo;
