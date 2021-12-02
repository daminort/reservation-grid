export interface Locale {
  mo: string;
  tu: string;
  we: string;
  th: string;
  fr: string;
  sa: string;
  su: string;
}

export interface Locales {
  en: Locale,
  ua: Locale,
  ru: Locale,
}

export type LocaleKey = 'en' | 'ua' | 'ru';
