import { MainTheme } from '.';
import base from './base';
import { darkColors } from './colors';

const darkTheme: MainTheme = {
  ...base,
  isDark: true,
  background: darkColors,
  colors: darkColors,
};

export default darkTheme;
