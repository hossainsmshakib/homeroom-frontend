// components/login/Login.tsx
import React, { useState } from 'react';
import Navbar from "../navbar/Navbar";

type Props = {}

const Login: React.FC<Props> = ({}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log({ email, password })
  }

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div><Navbar/></div>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
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
            <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-[#309797] text-white p-2 rounded hover:bg-[#287373]">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
