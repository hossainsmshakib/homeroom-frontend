// components/roomInfo/RoomInfo.tsx

"use client"; // Ensures the component is treated as a client component

import React, { useState } from "react";

type Props = {};

const RoomInfo: React.FC<Props> = ({}) => {
  const [location, setLocation] = useState("");
  const [roomType, setRoomType] = useState("");
  const [bathroomType, setBathroomType] = useState("");
  const [rent, setRent] = useState("");
  const [pictures, setPictures] = useState<FileList | null>(null);
  const [videos, setVideos] = useState<FileList | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ location, roomType, bathroomType, rent, pictures, videos });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Room Information</h1>
        <form onSubmit={handleSubmit}>
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
              Upload Pictures:
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
            <label htmlFor="videos" className="block text-gray-700 mb-2">
              Upload Videos:
            </label>
            <input
              type="file"
              id="videos"
              accept="video/*"
              multiple
              onChange={(e) => setVideos(e.target.files)}
              className="w-full p-2 border border-gray-300 rounded"
            />
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
