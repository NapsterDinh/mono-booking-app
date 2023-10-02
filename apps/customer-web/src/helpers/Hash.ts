import { globalConfig } from '@customer-web/configs/env';
import CryptoJS from 'crypto-js';

export const encryptWithCryptoJS = (plainText: string): string => {
  const key = CryptoJS.enc.Utf8.parse(globalConfig.VOUCHER_PRIVATE_KEY);
  const iv = CryptoJS.enc.Utf8.parse(globalConfig.VOUCHER_IV_KEY);
  const encrypted = CryptoJS.AES.encrypt(plainText, key, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    iv,
  });

  return encrypted.toString();
};
