import type { Locale } from './locale.interface';

export interface DaysRangeOptions {
  start: string;
  end: string;
  locale: Locale;
}

export interface DaysRange {
  value: string;
  date: number;
  day: string;
  isWeekend: boolean;
  isToday: boolean;
}
