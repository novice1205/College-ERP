import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Utils.css';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
            alert('Password reset link sent to your email.');
        } catch (error) {
            alert('Error sending password reset link.');
        }
    };

    const handleSignIn = (e) =>{
        e.preventDefault();
        navigate('/login');
      };

    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-5 md:p-14 my-40 poppins" style={{ backgroundColor: 'inherit' }}>
      {/* Left section */}
      <div className="w-full md:w-1/2 space-y-4 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold" style={{ color: '#2B6CB0' }}>Forgot Your Password?</h1>
        <p style={{ color: '#4299E1', fontSize:"18px" }}>
          Don't worry! It happens. Please enter your email address to reset your password.
        </p>
      </div>

      {/* Right section - Forgot Password Form */}
      <div className="w-full md:w-1/2 max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-6" style={{ color: '#2B6CB0' }}>Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium" style={{ color: '#4299E1' }}>Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 rounded-md text-white"
            style={{ backgroundColor: '#3182CE', hover: { backgroundColor: '#2C5282' } }}
          >
            Send Reset Link
          </button>
        </form>
        <p className="mt-4 text-sm" style={{ color: '#4299E1' }}>
          Remembered your password? <a href="/login" onClick={handleSignIn} className="font-medium hover:underline">Log in</a>
        </p>
      </div>
    </div>
    );
};

export default ForgetPassword;
