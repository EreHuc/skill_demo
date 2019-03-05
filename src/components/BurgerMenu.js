import React, { useState, useEffect } from 'react';
import Burger from './Burger';
import '../styles/burgerMenu.scss';

const BurgerMenu = () => {
  return (
    <div className="burger-menu">
      <Burger />
    </div>
  );
};

export default BurgerMenu;
