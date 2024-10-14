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
    <div className="home-container">
      <h2>Welcome, {user?.username}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
