import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger';
import Toggle from './Toggle';
import myStore, { darkThemeAction, lightThemeAction } from '../store';
import Routes from '../data/routes';
import '../styles/nav.scss';
import { closeNavAction, openNavAction, toggleNavAction, toggleThemeAction } from '../store/actions';

const Nav = () => {
  const [isNavActive, toggleNavState] = useState(false);
  const [isDarkTheme, toggleTheme] = useState(false);

  const onChange = () => {
    myStore.dispatch({ type: toggleThemeAction });
  };

  useEffect(() => {
    const navId = myStore.subscribe([toggleNavAction, openNavAction, closeNavAction], ({ state }) => {
      toggleNavState(state.isNavOpen);
    });

    const themeId = myStore.subscribe([toggleThemeAction, darkThemeAction, lightThemeAction], ({ state }) => {
      toggleTheme(state.isDarkTheme);

      myStore.dispatch({ type: closeNavAction });
    });

    return function cleanup() {
      myStore.unSubscribe(navId);
      myStore.unSubscribe(themeId);
    };
  }, []);

  return (
    <>
      <Burger />
      <nav className={isNavActive ? 'active' : ''}>
        <Burger />
        <Toggle id="darkTheme" onChange={onChange} theme={isDarkTheme ? 'dark' : 'light'} />
        <ul>
          {Object.entries(Routes).map(([path, experience], index) =>
            path === '/' ? (
              <li key={index}>
                <Link to={path}>Home</Link>
              </li>
            ) : (
              <li key={index}>
                <Link to={path}>{experience.title}</Link>
              </li>
            ),
          )}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
