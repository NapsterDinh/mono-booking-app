import endsWith from 'lodash/endsWith';
import { dayName, END_HOUR, START_HOUR } from './Constant';
import { removeVietnameseTones } from './String';

export const currentFormatting = (NumberFormat: number) => {
  return new Intl.NumberFormat('vi-EN', { maximumSignificantDigits: 8 }).format(NumberFormat);
};

export const getDateFullFormat = (d: Date | string | number) => {
  let date = new Date(d);
  if (isNaN(date.getDate())) {
    date = new Date();
  }

  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  const hour = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  const sec = String(date.getSeconds()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd} ${hour}:${min}:${sec}`;
};

export const getDateVN = (d: Date | string | number) => {
  let date = new Date(d);
  if (isNaN(date.getDate())) {
    date = new Date();
  }

  const day = date.getDay();
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return dayName[day] + ' ngày ' + dd + '/' + mm + '/' + yyyy;
};

export const getDayVN = (d: Date | string | number): string => {
  let date = new Date(d);
  if (isNaN(date.getDate())) {
    date = new Date();
  }
  const day = date.getDay();
  return dayName[day] || '';
};

export const loadHour = (d: Date | string | number) => {
  const now = new Date();
  const date = new Date(d),
    toEnd = END_HOUR;
  const array: { value: number; firstTitle: string; lastTitle: string; currentValue: number }[] = [];
  let hour = START_HOUR;
  if (isSameDate(now, date)) {
    hour = now.getHours() >= date.getHours() ? now.getHours() : date.getHours();
  } else if (hour < date.getHours()) {
    hour = date.getHours();
  }

  for (let i = hour; i <= toEnd; i++) {
    if (i === hour) {
      array.push({
        value: i,
        firstTitle: `Trước`,
        lastTitle: `${i + 1}:00`,
        currentValue: i,
      });
    } else {
      array.push({
        value: i,
        firstTitle: `${i}:00`,
        lastTitle: `${i + 1}:00`,
        currentValue: i,
      });
    }
  }
  return array;
};

export const commitHour = (d: { from: number; to: number }[]) => {
  const array: { value: number; firstTitle: string; lastTitle: string; currentValue: number }[] = [];
  for (let i = 0; i < d.length; i++) {
    const item = d[i];
    if (i === 0) {
      array.push({
        value: item.from,
        firstTitle: `Trước`,
        lastTitle: `${item.to}:00`,
        currentValue: item.from,
      });
    } else {
      array.push({
        value: item.from,
        firstTitle: `${item.from}:00`,
        lastTitle: `${item.to}:00`,
        currentValue: item.from,
      });
    }
  }
  return array;
};

export const isSameDate = (s: Date | string | number, e: Date | string | number) => {
  const start = new Date(s),
    end = new Date(e);
  if (start.toDateString() === end.toDateString()) {
    return true;
  } else {
    return false;
  }
};

export const isSameDateTime = (s: Date | string | number, e: Date | string | number) => {
  const start = new Date(s),
    end = new Date(e);
  if (start.toDateString() === end.toDateString()) {
    if (start.getHours() === end.getHours()) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const scrollToDestination = (targetClass = '') => {
  const destination = targetClass ? document.querySelector(`.${targetClass}`) : document.body;
  if (destination) {
    destination.scrollIntoView({
      behavior: 'smooth',
    });
  }
};

export const identifyPhoneUser = (phone: string): string => {
  let newPhone = '';
  if (phone) {
    newPhone = phone.replace(phone.substring(3, 8), 'xxxxx');
  }
  return newPhone;
};

export function sortAddress(address: NhapThuocResponse.Customers.Address[]) {
  return (
    address?.sort((a, b) => {
      if (a.isPrimary === true || b.isPrimary === true) return -1;
      return 0;
    }) || []
  );
}

export const removeEmoji = (str: string) => {
  str = str.replace(/[&\/\\#,+()$~%.'":*?<>{}×͜]/g, '');
  return str.replace(
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
    '',
  );
};

export const removeSpecialCharacters = (string: string) => {
  return removeEmoji(string.replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]+/g, ''));
};

export const isEmail = (email: string): boolean => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

export const getDateFormat = (d: Date | string | number, status = true, dashFormat = false) => {
  let date = new Date(d);
  if (isNaN(date.getDate())) {
    date = new Date();
  }

  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  if (dashFormat) {
    return yyyy + '-' + mm + '-' + dd;
  }

  if (status) {
    return yyyy + '/' + mm + '/' + dd;
  } else {
    return dd + '/' + mm + '/' + yyyy;
  }
};

export const getTimeHours = (d: Date | string | number, status = true) => {
  const date = new Date(d);
  let hour;
  if (status) {
    hour = String(date.getHours()).padStart(2, '0');
  } else {
    hour = String(date.getHours() - 1).padStart(2, '0');
  }
  const minutes = String(date.getMinutes()).padStart(2, '0');
  // let seconds = date.getSeconds();
  return `${hour}:${minutes}`;
};

export const isActiveProcessing = (enable: boolean, processing: boolean) => {
  if (enable && processing) {
    // true + true
    return 'active';
  }

  if (enable && !processing) {
    //true + false
    return 'is-processing';
  } else {
    return '';
  }
};

export const isVNPhone = (phone: string | number): boolean => {
  const regex = /(0(2|3|5|7|8|9))+([0-9]{8})\b|(02[0-3,5-9]{1}[0-9]{8})\b/;
  return regex.test(phone.toString());
};

export const checkNameWithOptions = (str: string, option = true) => {
  str = str.trim();
  const regexAcceptSpecial = /(^[A-Za-z0-9\.\&\,\()\@\!\#\%\*\$\^\<>\?\:\;\'\"\{}\[\]\+\=\-\_/\s]+$)|^$/,
    regexOnlyCharacter = /^[A-Za-z\s]+$/;
  const newValue = removeVietnameseTones(str);
  if (option) {
    return regexAcceptSpecial.test(newValue);
  } else {
    return regexOnlyCharacter.test(newValue);
  }
};

export const convertPriceToVNDPrice = (price?: number | string) => {
  try {
    if (!price) {
      return '0đ';
    }
    if (Number(price) <= 0) {
      return '0đ';
    }

    return price.toLocaleString('en-US').replace(/,/g, '.') + 'đ';
  } catch (error) {
    return '';
  }
};

export const scrollToSection = (className: string, headerOffset = 60) => {
  const element = document.querySelector(`.${className}`);
  if (element == null) {
    return;
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};
export const genCharArray = (startChar: string, endChar: string) => {
  const array: string[] = [];
  let i = startChar.charCodeAt(0);
  const j = endChar.charCodeAt(0);
  for (; i <= j; ++i) {
    array.push(String.fromCharCode(i));
  }
  return array;
};

export const createUUID = (): string => {
  let d: number = new Date().getTime();
  if (typeof window?.performance?.now === 'function') {
    d += performance.now(); // use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
};

export const classLister = (styles: any, classes: string[]) => {
  return classes.map((className) => styles[className]).join(' ');
};

export const isMultipleSpaceString = (value: string): boolean => {
  const multipleSpaceRegex = /\s{2,}/;
  return value.match(multipleSpaceRegex) !== null;
};

export const isContainEmojiInText = (value: string) => {
  if (!value || value?.length <= 0) {
    return false;
  }

  const regex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/;
  return regex.test(value);
};

export const isEmptyString = (value: string) => {
  return !value || value?.length <= 0;
};

export const standardizedSearchFilterOptions = (
  options: string[] | undefined | null,
  newOption: string,
  action: 'add' | 'remove',
) => {
  if (newOption === '') {
    return [''];
  }
  if (!options) {
    return [''];
  }
  if (action === 'add') {
    const optionsMatched = options.filter((option) => option !== '').concat(newOption);
    return optionsMatched
      .filter(function (item, pos) {
        return optionsMatched.indexOf(item) == pos;
      })
      .sort();
  }

  // Removed case
  if (options?.length === 1) {
    return [''];
  }

  const newOptions = options.filter((option) => option !== newOption).sort();
  if (newOptions?.length <= 0) {
    return [''];
  }

  return newOptions;
};

export const isProductPage = (slug: string[]) => {
  if (slug.length <= 0) {
    return false;
  }

  return endsWith(slug[slug.length - 1], '.html');
};

export const convertAccountNumber = (cc, num, mask = '*') =>
  ('' + cc).slice(0, -num).replace(/(?<!^).(?!$)/g, mask) + ('' + cc).slice(-num);
