import React from 'react';
import '../styles/navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="../hog-logo-bg.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href="#dashboard">Dashboard</a>
        <a href="#rewards">Rewards</a>
      </div>
      <div className="navbar-icons">
        <img src="/path/to/bell-icon.png" alt="Notifications" className="icon" />
        <img src="/path/to/user-profile.png" alt="User" className="icon" />
        <button className="user-button">User</button>
      </div>
    </nav>
  );
};

export default Navbar;
