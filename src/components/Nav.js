import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Toggle from './Toggle';
import Burger from './Burger';
import BurgerMenu from './BurgerMenu';
import myStore, { darkThemeAction, lightThemeAction, toggleThemeAction } from '../store';
import Routes from '../data/routes';
import '../styles/nav.scss';
import { closeNavAction, openNavAction, toggleNavAction } from '../store/actions';

const Nav = () => {
  const state = myStore.getState();
  const [isNavActive, toggleNavState] = useState(state.isNavOpen);
  const [isDarkTheme, toggleTheme] = useState(state.isDarkTheme);

  const onChange = () => {
    myStore.dispatch({ type: toggleThemeAction });
  };

  const closeNavBar = () => {
    myStore.dispatch({ type: closeNavAction });
  };

  useEffect(() => {
    const navId = myStore.subscribe([toggleNavAction, openNavAction, closeNavAction], ({ state }) => {
      toggleNavState(state.isNavOpen);
    });

    const themeId = myStore.subscribe([toggleThemeAction, darkThemeAction, lightThemeAction], ({ state }) => {
      toggleTheme(state.isDarkTheme);
    });

    return function cleanup() {
      myStore.unSubscribe(navId);
      myStore.unSubscribe(themeId);
    };
  }, []);

  return (
    <nav>
      <BurgerMenu toggleOnChange={onChange} isDarkTheme={isDarkTheme} />
      <div className={`nav ${isNavActive ? 'active' : ''}`}>
        <Burger />
        <ul>
          {Object.entries(Routes).map(([path, experience], index) =>
            path === '/' ? (
              <li key={index}>
                <Link to={path} onClick={closeNavBar}>
                  Home
                </Link>
              </li>
            ) : (
              <li key={index}>
                <Link to={path} onClick={closeNavBar}>
                  {experience.title}
                </Link>
              </li>
            ),
          )}
        </ul>
        <div className="dark-theme">
          <span>{isDarkTheme ? 'Disable' : 'Enable'} dark theme :</span>
          <Toggle id="darkTheme" onChange={onChange} theme={isDarkTheme ? 'dark' : 'light'} checked={isDarkTheme} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
