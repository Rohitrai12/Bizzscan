import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="bg-gray-900 shadow-2xl rounded-xl p-12 max-w-lg text-center space-y-6 transform hover:scale-105 transition duration-500 ease-in-out">
        <h2 className="text-3xl font-extrabold text-white">
          Welcome, <span className="text-indigo-400">{user?.username}</span>!
        </h2>
        <p className="text-gray-400 text-lg">We're glad to have you here.</p>
        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-bold py-3 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
