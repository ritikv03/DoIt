import React, { useState, useEffect } from 'react';
import { FaSearch, FaSun, FaMoon, FaThList, FaThLarge, FaBars } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import './Header.css';
import './Navbar.css';
import Hero from '../Hero/Hero';

const Header = () => {
  // Initialize dark mode state based on local storage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });
  const [isCardMode, setIsCardMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const handleModeSwitch = () => {
    setIsCardMode(!isCardMode);
  };

  const handleThemeSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open', !isMenuOpen);
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
      <main className={`hero ${isMenuOpen ? 'menu-open' : ''}`}>
        <Hero isCardMode={isCardMode} />
      </main>
    </>
  );
};

export default Header;
