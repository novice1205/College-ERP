import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/Utils.css";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
         email, name, password
      });
      console.log(response.data);
      alert('Registration successful!');
      navigate('/verify-email'); // Redirect to the verify email page
    } catch (error) {
      console.error(error);
      alert('Registration failed!');
    }
  };

  const handleSignIn = (e) =>{
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-5 md:p-14 my-20 poppins" style={{ backgroundColor: 'inherit', borderRadius:'10px' }}>
    {/* Left section */}
    <div className="w-full md:w-1/2 space-y-4 mb-8 md:mb-0">
      <h1 className="text-3xl md:text-5xl font-bold" style={{ color: '#2B6CB0' }}>Register Now to be a part of the team</h1>
      <p style={{ color: '#4299E1', fontSize:"18px" }}>
        An Organization that you can trust on.
      </p>
    </div>

    {/* Right section */}
    <div className="w-full md:w-1/2 max-w-md bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6" style={{ color: '#2B6CB0' }}>Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium" style={{ color: '#4299E1' }}>Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium" style={{ color: '#4299E1' }}>Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium" style={{ color: '#4299E1' }}>Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 rounded-md text-white"
          style={{ backgroundColor: '#3182CE', hover: { backgroundColor: '#2C5282' } }}
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-sm" style={{ color: '#4299E1' }}>
        Literally you probably haven't heard of them.
      </p>
      <p className="mt-4 text-sm" style={{ color: '#4299E1' }}>
          Already have an account? <a href="/login" onClick={handleSignIn} className="font-medium hover:underline">Sign in</a>
        </p>
    </div>
  </div>    
  );
};

export default Register;
