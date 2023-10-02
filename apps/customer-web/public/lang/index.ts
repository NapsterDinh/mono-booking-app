import en from './en.json';
import vi from './vi.json';

const languages = {
  en,
  vi,
};

export type language = keyof typeof languages;
export default languages;
