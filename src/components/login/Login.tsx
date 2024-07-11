// components/login/Login.tsx
import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { logIn } from "@/services/apiservices";
import { toast } from "react-toastify";
import router from "next/router";

type Props = {};

const Login: React.FC<Props> = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ email, password });

    try {
      const data = await logIn({ email, password });
      //console.log("JWT Token:", data.token); // Log the JWT token
      toast.success("Login successful!");
      localStorage.setItem("token", data.token);
      router.push("/dashboard"); // Change the path to the desired route
    } catch (error) {
      toast.error("Error logging in. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div>
        <Navbar />
      </div>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#309797] text-white p-2 rounded hover:bg-[#287373]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
