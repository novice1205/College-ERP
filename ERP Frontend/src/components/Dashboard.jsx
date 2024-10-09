import React from 'react';
import { FaUniversity, FaList, FaCogs, FaSignOutAlt, FaPlus } from 'react-icons/fa';
import "../styles/Utils.css";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // Handle logout and redirect to login page
  const handleLogout = () => {
    // Clear any authentication tokens or session data here
    alert('Logged out');
    navigate('/login');  // Redirect to login page
  };

  return (
    <div className="flex h-screen bg-gray-100 poppins">
    {/* Sidebar */}
    <div className="w-64 bg-blue-600 text-white p-6" style={{backgroundColor:'#2B6CB0'}}>
      <h1 className="text-2xl font-bold mb-8">College ERP</h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center space-x-2 hover:text-blue-300">
              <FaPlus />
              <span>Add College</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 hover:text-blue-300">
              <FaUniversity />
              <span>View Colleges</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 hover:text-blue-300">
              <FaCogs />
              <span>Module Control</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">Welcome SuperAdmin</h2>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </header>

      {/* Dashboard Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add College Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaPlus className="mr-2 text-blue-600" />
              Add New College
            </h3>
            <p className="text-gray-600 mb-4">Create a new college profile in the system.</p>
            <button className="text-white px-4 py-2 rounded" style={{backgroundColor:'#2B6CB0'}}>
              Add College
            </button>
          </div>

          {/* View Colleges Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaUniversity className="mr-2 text-blue-600" />
              View Colleges
            </h3>
            <p className="text-gray-600 mb-4">Browse and manage existing college profiles.</p>
            <button className="text-white px-4 py-2 rounded" style={{backgroundColor:'#2B6CB0'}}>
              View Colleges
            </button>
          </div>

          {/* Module Control Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaCogs className="mr-2 text-blue-600" />
              Module Control
            </h3>
            <p className="text-gray-600 mb-4">Manage and configure system modules.</p>
            <button className="text-white px-4 py-2 rounded" style={{backgroundColor:'#2B6CB0'}}>
              Manage Modules
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
  );
};

export default Dashboard;
