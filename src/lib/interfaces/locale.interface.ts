export interface TLocale {
  mo: string;
  tu: string;
  we: string;
  th: string;
  fr: string;
  sa: string;
  su: string;
}

export interface TLocales {
  en: TLocale,
  ua: TLocale,
  de: TLocale,
  fr: TLocale,
  it: TLocale,
  es: TLocale,
  pl: TLocale,
}

export type TLocaleKey = keyof TLocales;
