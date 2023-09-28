import type { TLocale } from './locale.interface';

export interface TDaysRangeOptions {
  start: string;
  end: string;
  locale: TLocale;
}

export interface TDaysRange {
  value: string;
  date: number;
  day: string;
  isWeekend: boolean;
  isToday: boolean;
}
