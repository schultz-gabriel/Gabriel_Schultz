import typographyVariants from './typographyVariants';

type breakpointTypes = {
  [key: string]: number
}

export const breakpoints:breakpointTypes = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

const borderRadius = '6px';
const transition = '200ms';

const draculaTheme = {
  Background: '#282a36',
  CurrentLine: '#44475a',
  Foreground: '#f8f8f2',
  Comment: '#6272a4',
  Cyan: '#8be9fd',
  Green: '#50fa7b',
  Orange: '#ffb86c',
  Pink: '#ff79c6',
  Purple: '#bd93f9',
  Red: '#ff5555',
  Yellow: '#f1fa8c',
};

export const light = {
  title: 'light',

  color: '#020202',
  backgroundColor: '#fff',

  primary: '#00a8e8',
  secondary: '#007ea7',

  paragraph: '#767676',
  cardBG: 'rgba(196, 196, 196, 0.2)',
  menuBG: '#e9e9e9',

  draculaTheme,
  breakpoints,
  typographyVariants,
  borderRadius,
  transition,
};

export const dark = {
  title: 'dark',

  color: '#fff',
  backgroundColor: '#020202',

  primary: '#007ea7',
  secondary: '#00a8e8',

  paragraph: '#767676',
  cardBG: 'rgba(196, 196, 196, 0.2)',
  menuBG: '#292929',

  draculaTheme,
  breakpoints,
  typographyVariants,
  transition,
  borderRadius,
};
