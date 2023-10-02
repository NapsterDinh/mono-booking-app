import { Theme } from '@emotion/react';
import get from 'lodash/get';

const getThemeValue = (theme: Theme, path: string, fallback?: string | number): string | number | undefined =>
  get(theme, path, fallback);

export default getThemeValue;
