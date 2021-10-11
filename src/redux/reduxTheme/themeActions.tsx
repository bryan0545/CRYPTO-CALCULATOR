import {Dispatch} from 'react';
import {ThemeState, lightTheme, darkTheme} from './theme';

export const DARK_THEME = 'DARK_THEME';
export const LIGHT_THEME = 'LIGHT_THEME';

export type ThemeAction =
  | {type: 'DARK_THEME'; payload: ThemeState}
  | {type: 'LIGHT_THEME'; payload: ThemeState};

export const setDarkTheme = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: 'DARK_THEME',
      payload: darkTheme,
    });
  };
};

export const setLightTheme = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: 'LIGHT_THEME',
      payload: lightTheme,
    });
  };
};
