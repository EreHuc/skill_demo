import React from 'react';
import Burger from './Burger';
import Toggle from './Toggle';
import '../styles/burgerMenu.scss';

const BurgerMenu = ({ toggleOnChange, isDarkTheme }) => {
  return (
    <div className="burger-menu">
      <div className="dark-theme">
        <Toggle
          id="burger-menu-toggle"
          onChange={toggleOnChange}
          theme={isDarkTheme ? 'dark' : 'light'}
          checked={isDarkTheme}
        />
      </div>
      <Burger />
    </div>
  );
};

export default BurgerMenu;
