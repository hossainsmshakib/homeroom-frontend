import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;

type SignUpUser = {
  name: string;
  permanentAddress: string;
  email: string;
  password: string;
};

type LogInUser = {
  email: string;
  password: string;
};

type RoomSpec = {
  description: string;
  location: string;
  latitude: number;
  longitude: number;
  homeAddress: string; // Ensure this matches your backend schema or remove if not needed
  roomType: string;
  bathroomType: string;
  rent: number;
  availability: string;
  amenities: string;
  pictures: string[]; // Array of picture paths
  video: string;
};

// Signup function
export const signUp = async (data: SignUpUser) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, data);
    console.log(response.data);
  } catch (error) {
    console.error("Error signing up:", error);
    throw error; // Handle or propagate the error as needed
  }
};

// Login function
export const logIn = async (data: LogInUser) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, data);
    console.log(response.data); // Log the token or any response data
    return response.data; // Return the data so you can use it in the calling function
  } catch (error) {
    console.error("Error logging in:", error);
    throw error; // Throw the error to handle it in the calling function
  }
};

// Create RoomSpec function
export const createRoomSpec = async (data: RoomSpec) => {
  try {
    console.log("=============================", data);
    const response = await axios.post(`${baseUrl}/roomspec`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating room specification:", error);
    throw error; // Handle or propagate the error as needed
  }
};
