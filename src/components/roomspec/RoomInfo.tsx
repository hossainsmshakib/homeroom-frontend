"use client"; // Ensures the component is treated as a client component

import React, { useState } from "react";

type Props = {};

const RoomInfo: React.FC<Props> = ({}) => {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  //const [latitude, setLatitude] = useState("");
  //const [longitude, setLongitude] = useState("");
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
    SmartTelivision: false,
    InHouseLaundry: false,
    Pets: false,
  });

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      description,
      location,
      // coordinates: { latitude, longitude },
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Room Information</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 mb-2">
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
            <label htmlFor="location" className="block text-gray-700 mb-2">
              Location:
            </label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Select Location</option>
              <option value="Atlanta">Atlanta</option>
              <option value="Austin">Austin</option>
              <option value="Charlotte">Charlotte</option>
              <option value="Dallas">Dallas</option>
              <option value="Houston">Houston</option>
              <option value="Indianapolis">Indianapolis</option>
              <option value="Kansas City">Kansas City</option>
              <option value="San Antonio">San Antonio</option>
              <option value="Tampa">Tampa</option>
            </select>
          </div>
          {/* <div className="mb-4">
            <label htmlFor="latitude" className="block text-gray-700 mb-2">
              Latitude:
            </label>
            <input
              type="text"
              id="latitude"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="longitude" className="block text-gray-700 mb-2">
              Longitude:
            </label>
            <input
              type="text"
              id="longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div> */}
          <div className="mb-4">
            <label htmlFor="roomType" className="block text-gray-700 mb-2">
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
            <label htmlFor="bathroomType" className="block text-gray-700 mb-2">
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
            <label htmlFor="rent" className="block text-gray-700 mb-2">
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
          <div className="mb-4">
            <label htmlFor="pictures" className="block text-gray-700 mb-2">
              Upload Pictures (Up to 5):
            </label>
            <input
              type="file"
              id="pictures"
              accept="image/*"
              multiple
              onChange={(e) => setPictures(e.target.files)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="video" className="block text-gray-700 mb-2">
              Upload Video (Only 1):
            </label>
            <input
              type="file"
              id="video"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files ? e.target.files[0] : null)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Amenities:</label>
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
            <label htmlFor="availabilityType" className="block text-gray-700 mb-2">
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
                  />
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#309797] text-white p-2 rounded hover:bg-[#287373]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoomInfo;
