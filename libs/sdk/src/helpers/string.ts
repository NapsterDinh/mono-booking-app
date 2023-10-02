import { VIETNAMESE_PHONE_NUMBER_REGEX } from '../constants/regex';

export const isVietnamesePhoneNumber = (number?: string) => {
  return VIETNAMESE_PHONE_NUMBER_REGEX.test(number ?? '');
};
