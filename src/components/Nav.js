import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Burger } from '../assets/burger.svg';
import '../styles/nav.scss';

const Nav = () => {
  const [isNavActive, toogleNavState] = useState(false);

  const onClickHandler = (clickEvent) => {
    toogleNavState(!isNavActive);
  };

  return (
    <>
      <div className="nav">
        <Burger className="burger-menu" onClick={onClickHandler} />
      </div>

      <nav className={isNavActive ? 'active' : ''}>
        <div className="nav">
          <Burger className="burger-menu" onClick={onClickHandler} />
        </div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/other">Other</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
