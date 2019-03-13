import React from 'react';
import state from './state';
import { isDarkThemeReducer, isNavActiveReducer } from './reducers';
import createStore from './store';
import {
  closeNavAction,
  openNavAction,
  toggleNavAction,
  toggleThemeAction,
  lightThemeAction,
  darkThemeAction,
} from './actions';

const myStore = createStore(state, { isNavOpen: isNavActiveReducer, isDarkTheme: isDarkThemeReducer });
export { closeNavAction, openNavAction, toggleNavAction, toggleThemeAction, lightThemeAction, darkThemeAction };

export default myStore;
