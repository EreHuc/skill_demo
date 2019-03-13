import {
  toggleNavAction,
  closeNavAction,
  openNavAction,
  toggleThemeAction,
  lightThemeAction,
  darkThemeAction,
} from './actions';

export const isNavActiveReducer = (state, action) => {
  switch (action.type) {
    case toggleNavAction:
      state = !state;
      return state;
    case closeNavAction:
      state = false;
      return state;
    case openNavAction:
      state = true;
      return state;
    default:
      return state;
  }
};

export const isDarkThemeReducer = (state, action) => {
  switch (action.type) {
    case toggleThemeAction:
      state = !state;
      return state;
    case lightThemeAction:
      state = false;
      return state;
    case darkThemeAction:
      state = true;
      return state;
    default:
      return state;
  }
};
