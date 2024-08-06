import React, { useState } from 'react';
import { FaSearch, FaSun, FaMoon, FaThList, FaThLarge, FaBars } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import './Header.css';
import './Navbar.css'; // You can include this if you have specific styles for Navbar

const Header = () => {
  const [isCardMode, setIsCardMode] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleModeSwitch = () => {
    setIsCardMode(!isCardMode);
  };

  const handleThemeSwitch = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="app-name">
          <FaBars className="icon menu-toggle-icon" onClick={toggleMenu} />
          <SiRedux color="green" /> <span className="app-name-text">DoIt</span>
        </div>
        <div className="buttons">
          <FaSearch className="icon search-icon" />
          <div className="icon mode-switch-icon" onClick={handleModeSwitch}>
            {isCardMode ? <FaThList /> : <FaThLarge />}
          </div>
          <div className="icon theme-switch-icon" onClick={handleThemeSwitch}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </div>
        </div>
      </header>
      <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="profile-section">
          <img src="profile_default.png" alt="Profile" className="profile-picture" />
          <div className="greeting">Hey, ABCD</div>
        </div>
      </div>
    </>
  );
};

export default Header;
