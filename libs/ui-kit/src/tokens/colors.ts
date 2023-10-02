export const baseColors = {
  transparent: 'transparent',
  white: 'white',
  black: 'black',
  cardBorder: '#e4e8ed',
  scrollbar: '#e68842',
  background: 'white',
  backgroundGrey: '#f4f6fa',
  backgroundGrey2: '#edf0f3',
  backgroundGreySecondary: '#f6f7f9',
  backgroundLightOrange: '#faf7f1',
  backgroundBlue: '#f0fbff',
  link: '#0355A1',
  darkOrange: '#C14E2C',
  darkOrangeSecondary: '#ef5124',
  gradientOrange: 'linear-gradient(315deg, #D35900 0%, #FF9900 100%)',
  gradientOrangeLight: 'linear-gradient(180deg, #FFE2BF 0%, #FCCD93 100%)',
  textSecondary: '#4A4F63',
  textWarning: '#DC6803',
  textWarning2: '#F79009',
  functionYellow2: '#FFF3E1',
  colorError: '#D92D20',
  error: '#B42318',
  divider: '#E4E8ED',
  success: '#039855',
  successSecond: '#12B75E',
  successGradient: 'linear-gradient(315deg, #039836 0%, #12B75E 100%)',
  aliasColorOrange: '#F37A2A',
};

const buttonColors = {
  buttonPrimary: baseColors.gradientOrange,
  buttonSecondary: baseColors.functionYellow2,
  buttonTertiary: 'linear-gradient(315deg, #B34401 0%, #D27202 100%)',
  buttonDisabled: baseColors.backgroundGrey2,
  buttonActivePrimary: baseColors.darkOrange,
  buttonActiveSecondary: '#FBE9CF',
  buttonActiveText: '#FBE9CF',
};

const textColors = {
  textDisabled: '#A9B2BE',
  textLink: '#0355A1',
  textPrimary: '#020B27',
  textTertiary: '#657384',
  textFocus: baseColors.darkOrange,
};

const tagColors = {
  tagPrimaryBackground: '#EAEFFA',
  tagWarningBackground: '#FBE9CF',
  tagSuccessBackground: '#DEFCEA',
  tagErrorBackground: '#FEE4E2',
};

export const lightColors = {
  ...baseColors,
  ...buttonColors,
  ...textColors,
  ...tagColors,
};

export const darkColors = {
  ...baseColors,
  ...buttonColors,
  ...textColors,
  ...tagColors,
};
