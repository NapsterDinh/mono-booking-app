import { MainTheme } from '.';
import base from './base';
import { lightColors } from './colors';

const lightTheme: MainTheme = {
  ...base,
  isDark: false,
  background: lightColors,
  colors: lightColors,
};

export default lightTheme;
