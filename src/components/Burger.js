import React from 'react';
import myStore, { toggleNavAction } from '../store';
import { ReactComponent as BurgerIcon } from '../assets/burger.svg';
import '../styles/burger.scss';

const Burger = () => {
  const clickHandler = () => {
    myStore.dispatch({ type: toggleNavAction });
  };
  return (
    <div className="burger-menu">
      <BurgerIcon className="burger-icon" onClick={clickHandler} />
    </div>
  );
};

export default Burger;
