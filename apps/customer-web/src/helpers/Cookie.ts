import { CookieKey } from '@customer-web/enums/Cookie';
import { parse } from 'cookie';

export const getToken = () => {
  if (typeof window !== 'undefined') {
    const cookies = parse(document.cookie);

    return cookies[CookieKey.ACCESS_TOKEN] || '';
  }
  return '';
};

export const getRefreshToken = () => {
  if (typeof window !== 'undefined') {
    const cookies = parse(document.cookie);

    return cookies[CookieKey.REFRESH_TOKEN] || '';
  }
  return '';
};
