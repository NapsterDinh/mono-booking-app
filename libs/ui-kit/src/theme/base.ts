import { breakpoints, mediaQueries, vars } from '@tsu-org/ui';

const themeBreakpoints: string[] = [];

Object.entries(breakpoints).forEach(([screen, resolution]) => {
  themeBreakpoints.push(`${resolution}px`);

  // @ts-ignore
  themeBreakpoints[screen] = `${resolution}px`;
});

export default {
  breakpoints: themeBreakpoints,
  fontSizes: vars.fontSizes,
  mediaQueries,
  radii: vars.radii,
  shadows: vars.shadows,
  siteWidth: 1216,
  sizes: vars.space,
  space: vars.space,
  zIndices: { ribbon: 9, dropdown: 10, modal: 100 },
};
