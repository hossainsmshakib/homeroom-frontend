import React, { useState } from "react";
import dynamic from "next/dynamic";
import { createRoomSpec } from "../../services/apiservices";

const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

const locations = {
  Atlanta: [33.749, -84.388],
  Austin: [30.2672, -97.7431],
  Charlotte: [35.2271, -80.8431],
  Dallas: [32.7767, -96.797],
  Houston: [29.7604, -95.3698],
  Indianapolis: [39.7684, -86.1581],
  "Kansas City": [39.0997, -94.5786],
  "San Antonio": [29.4241, -98.4936],
  Tampa: [27.9506, -82.4572],
};

const RoomInfo: React.FC = () => {
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [homeAddress, setHomeAddress] = useState<string>("");
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const [roomType, setRoomType] = useState<string>("");
  const [bathroomType, setBathroomType] = useState<string>("");
  const [rent, setRent] = useState<number | "">(0);
  const [pictures, setPictures] = useState<FileList | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [availability, setAvailability] = useState<string>("");
  const [amenities, setAmenities] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const today = new Date().toISOString().split("T")[0];

  const validateStep = () => {
    const newErrors: { [key: string]: string } = {};

    if (currentStep === 1) {
      if (!description) newErrors.description = "Description is required";
      if (!location) newErrors.location = "Location is required";
      if (!homeAddress) newErrors.homeAddress = "Home Address is required";
    } else if (currentStep === 2) {
      if (!roomType) newErrors.roomType = "Room Type is required";
      if (!bathroomType) newErrors.bathroomType = "Bathroom Type is required";
      if (!rent || rent === 0)
        newErrors.rent = "Rent is required and must be greater than 0";
      if (!availability)
        newErrors.availability = "Availability Date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateStep()) {
      return;
    }

    const data = {
      description,
      location,
      latitude: coordinates ? coordinates[0] : 0,
      longitude: coordinates ? coordinates[1] : 0,
      homeAddress,
      roomType,
      bathroomType,
      rent: typeof rent === "number" ? rent : 0,
      availability, // Keeping it as string
      amenities,
      pictures: pictures ? Array.from(pictures).map((file) => file.name) : [],
      video: video ? video.name : "",
    };

    try {
      const result = await createRoomSpec(data);
      console.log("Room specification created successfully:", result);
      // Handle success (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.error("Error creating room specification:", error);
      // Handle error (e.g., show an error message)
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Room Information</h1>
        <form onSubmit={handleSubmit} noValidate>
          {currentStep === 1 && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description:
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.description && (
                  <p className="text-red-500 text-xs italic">
                    {errors.description}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Location:
                </label>
                <select
                  id="location"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    const coords =
                      locations[e.target.value as keyof typeof locations];
                    setCoordinates(coords ? [coords[0], coords[1]] : null);
                  }}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">Select Location</option>
                  {Object.keys(locations).map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                {errors.location && (
                  <p className="text-red-500 text-xs italic">
                    {errors.location}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="homeAddress"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Home Address:
                </label>
                <input
                  type="text"
                  id="homeAddress"
                  value={homeAddress}
                  onChange={(e) => setHomeAddress(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  readOnly
                />
                {errors.homeAddress && (
                  <p className="text-red-500 text-xs italic">
                    {errors.homeAddress}
                  </p>
                )}
              </div>
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
                <label
                  htmlFor="roomType"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Room Type:
                </label>
                <select
                  id="roomType"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">Select Room Type</option>
                  <option value="shared">Shared</option>
                  <option value="private">Private</option>
                </select>
                {errors.roomType && (
                  <p className="text-red-500 text-xs italic">
                    {errors.roomType}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="bathroomType"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Bathroom Type:
                </label>
                <select
                  id="bathroomType"
                  value={bathroomType}
                  onChange={(e) => setBathroomType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">Select Bathroom Type</option>
                  <option value="common">Common</option>
                  <option value="attached">Attached</option>
                </select>
                {errors.bathroomType && (
                  <p className="text-red-500 text-xs italic">
                    {errors.bathroomType}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="rent"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Rent:
                </label>
                <input
                  type="number"
                  id="rent"
                  value={rent}
                  onChange={(e) => setRent(Number(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.rent && (
                  <p className="text-red-500 text-xs italic">{errors.rent}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="availability"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Availability Date:
                </label>
                <input
                  type="date"
                  id="availability"
                  value={availability}
                  min={today}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.availability && (
                  <p className="text-red-500 text-xs italic">
                    {errors.availability}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={prevStep}
                className="w-full bg-[#309797] text-white p-2 rounded hover:bg-[#287373] mb-2"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="w-full bg-[#309797] text-white p-2 rounded hover:bg-[#287373]"
              >
                Next
              </button>
            </>
          )}
          {currentStep === 3 && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="pictures"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Upload Pictures:
                </label>
                <input
                  type="file"
                  id="pictures"
                  multiple
                  onChange={(e) => setPictures(e.target.files)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="video"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Upload Video:
                </label>
                <input
                  type="file"
                  id="video"
                  onChange={(e) => setVideo(e.target.files?.[0] || null)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="amenities"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Amenities:
                </label>
                <textarea
                  id="amenities"
                  value={amenities}
                  onChange={(e) => setAmenities(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="button"
                onClick={prevStep}
                className="w-full bg-[#309797] text-white p-2 rounded hover:bg-[#287373] mb-2"
              >
                Previous
              </button>
              <button
                type="submit"
                className="w-full bg-[#309797] text-white p-2 rounded hover:bg-[#287373]"
              >
                Submit
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default RoomInfo;
