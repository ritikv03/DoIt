import React, { useState } from 'react';
import { FaSearch, FaSun, FaMoon, FaThList, FaThLarge } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import './Header.css';

const Header = () => {
  const [isCardMode, setIsCardMode] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeSwitch = () => {
    setIsCardMode(!isCardMode);
  };

  const handleThemeSwitch = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <header className="header">
      <div className="app-name">
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
  );
};

export default Header;
