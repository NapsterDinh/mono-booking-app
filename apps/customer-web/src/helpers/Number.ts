export const currentFormatting = (NumberFormat: number) => {
  return new Intl.NumberFormat('vi-EN', { maximumSignificantDigits: 8 }).format(NumberFormat);
};

export const isVNPhone = (phone: string | number): boolean => {
  const regex = /(0(2|3|5|7|8|9))+([0-9]{8})\b|(02[0-3,5-9]{1}[0-9]{8})\b/;
  return regex.test(phone.toString());
};

export const removeCodeNation = (phone: string) => {
  if (phone.startsWith('84')) {
    const newPhone = '0' + phone.slice(2);
    return newPhone;
  } else {
    return phone;
  }
};

export const addCodeNation = (phone: string) => {
  if (phone.startsWith('0')) {
    const newPhone = '84' + phone.slice(1);
    return newPhone;
  } else {
    return phone;
  }
};
export const identifyPhoneUser = (phone: string): string => {
  let newPhone = '';
  if (phone) {
    newPhone = phone.replace(phone.substring(3, 8), 'xxxxx');
  }
  return newPhone;
};

export const isEven = (number) => {
  return number % 2 === 0;
};
