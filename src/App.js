import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';
import myStore from './store';
import { darkThemeAction, lightThemeAction, toggleThemeAction } from './store';
import './styles/app.scss';

const App = () => {
  const state = myStore.getState();

  useEffect(() => {
    document.documentElement.setAttribute('theme', state.isDarkTheme ? 'dark' : 'light');

    myStore.subscribe([toggleThemeAction, darkThemeAction, lightThemeAction], ({ state }) => {
      document.documentElement.setAttribute('theme', state.isDarkTheme ? 'dark' : 'light');
    });
  }, []);

  return (
    <div className="App">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
