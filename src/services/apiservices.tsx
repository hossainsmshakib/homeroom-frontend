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
// Signup function
export const signUp = async function signUp(data: SignUpUser) {
  try {
    const response = await axios.post(`${baseUrl}/signup`, data);
    console.log(response.data);
  } catch (error) {
    console.error("Error signing up:", error);
  }
};

// Login function
export const logIn = async function logIn(data: LogInUser) {
    try {
      const response = await axios.post(`${baseUrl}/login`, data);
      console.log(response.data); // Log the token or any response data
      return response.data; // Return the data so you can use it in the calling function
    } catch (error) {
      console.error("Error logging in:", error);
      throw error; // Throw the error to handle it in the calling function
    }
};
