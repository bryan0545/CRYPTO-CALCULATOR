import {Theme} from '@react-navigation/native';

export interface ThemeState extends Theme {
  currentTheme: 'ligth' | 'dark';
}

export const lightTheme: ThemeState = {
  currentTheme: 'ligth',
  dark: false,
  colors: {
    primary: '#4d5bd6',
    background: '#ffffff',
    card: 'green',
    text: 'black',
    border: 'orange',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  colors: {
    primary: '#4899be',
    background: '#282c49',
    card: 'blue',
    text: 'white',
    border: 'orange',
    notification: 'teal',
  },
};
