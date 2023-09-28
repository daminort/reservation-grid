import {
  parse as libParse,
  format as libFormat,
  startOfDay,
  startOfMonth,
  startOfYear,
  endOfMonth,
  endOfYear,
  addDays,
} from 'date-fns';

import type { TLocale } from 'lib/interfaces/locale.interface';
import type { TDaysRange, TDaysRangeOptions } from 'lib/interfaces/daysRange.interface';
import type { TDatePosition, TDateStatus, TDayType } from 'lib/interfaces/grid.interface';
import type { TReservedPeriod } from 'lib/interfaces/reservedPeriod';

import { FORMATS } from 'lib/constants/locales';

import type { TDateString, TUnit, TDayMap, TIntersection } from './types';

function isInvalidDate(date: unknown): boolean {
  return date instanceof Date && date.toString() === 'Invalid Date';
}

function parse(date: string): Date {
  const datePart = date.substring(0, 10);
  const parsed = libParse(datePart, FORMATS.date, new Date());

  return !isInvalidDate(parsed) ? parsed : new Date(1970, 0, 1);
}

function format(date: Date): string {
  return libFormat(date, FORMATS.date);
}

function isToday(date: TDateString): boolean {
  const originDate = (typeof date === 'string')
    ? parse(date)
    : date;

  return format(originDate) === format(new Date());
}

function isWeekend(date: string): boolean {
  const parsed = parse(date);
  if (!parsed) {
    return false;
  }

  const dayKey = libFormat(parsed, 'cccccc').toLowerCase();

  return (dayKey === 'sa' || dayKey === 'su');
}

function startOf(date: TDateString, unit: TUnit = 'day'): string {
  const originDate = (typeof date === 'string')
    ? parse(date)
    : date;

  switch (unit) {
    case 'day':
      return format(startOfDay(originDate));
    case 'month':
      return format(startOfMonth(originDate));
    case 'year':
      return format(startOfYear(originDate));
    default:
      return format(startOfDay(originDate));
  }
}

function endOf(date: TDateString, unit: TUnit = 'month'): string {
  const originDate = (typeof date === 'string')
    ? parse(date)
    : date;

  switch (unit) {
    case 'month':
      return format(endOfMonth(originDate));
    case 'year':
      return format(endOfYear(originDate));
    default:
      return format(startOfDay(originDate));
  }
}

function addDay(date: TDateString, amount: number = 1): string {
  const originDate = (typeof date === 'string')
    ? parse(date)
    : startOfDay(date);

  return format(addDays(originDate, amount));
}

function createRange(start: string, end: string): string[] {
  if (!start || !end) {
    return [];
  }

  const dateStart = parse(start);
  const dateEnd = parse(end);
  if (dateStart > dateEnd) {
    return [];
  }

  const res = [];
  let date = dateStart;
  while (date <= dateEnd) {
    res.push(format(date));
    date = parse(addDay(date, 1));
  }

  return res;
}

function getDate(date: string): number {
  const parsed = parse(date);
  return parsed.getDate();
}

function getDay(date: string, locale: TLocale): string {
  const parsed = parse(date);
  if (!parsed || format(parsed) === '1970-01-01') {
    return '??';
  }

  const dayKey = libFormat(parsed, 'cccccc').toLowerCase();

  return locale[dayKey as keyof TLocale] || '??';
}

function createDaysRange(options: TDaysRangeOptions): TDaysRange[] {
  const { start, end, locale } = options;
  const result: TDaysRange[] = [];

  const range = createRange(start, end);
  if (range.length === 0) {
    return result;
  }

  for (const date of range) {
    result.push({
      value: date,
      date: getDate(date),
      day: getDay(date, locale),
      isWeekend: isWeekend(date),
      isToday: isToday(date),
    });
  }

  return result;
}

function detectDayPosition(date: string, start: string, end: string): TDatePosition {
  if (date === start) {
    return 'start';
  }

  if (date === end) {
    return 'end';
  }

  if (date > start && date < end) {
    return 'middle';
  }

  return 'none';
}

function detectDayType(status: TDateStatus, position: TDatePosition): TDayType {
  if (position === 'none') {
    return 'single.free';
  }
  if (status === 'inaccessible') {
    return 'single.disabled';
  }

  const map: TDayMap = {
    'awaiting': {
      'start': 'single.maybe.start',
      'middle': 'single.maybe.full',
      'end': 'single.maybe.end',
    },
    'confirmed': {
      'start': 'single.normal.start',
      'middle': 'single.normal.full',
      'end': 'single.normal.end',
    },
  };

  return map[status][position] || 'single.free';
}

function detectIntersectionDayType(intersection: TIntersection): TDayType {
  const [one, two] = intersection;

  if (one === 'single.normal.end' && two === 'single.normal.start') {
    return 'double.normal.end.start';
  }
  if (one === 'single.maybe.end' && two === 'single.maybe.start') {
    return 'double.maybe.end.start';
  }
  if (one === 'single.normal.end' && two === 'single.maybe.start') {
    return 'intersection.normal.end.maybe.start';
  }
  if (one === 'single.maybe.end' && two === 'single.normal.start') {
    return 'intersection.maybe.end.normal.start';
  }

  return one;
}

function getDayType(date: string, periods: TReservedPeriod[] = []): TDayType {

  const intersection: TIntersection = [];

  const sortedPeriods: TReservedPeriod[] = periods.sort((a, b) => {
    if (a.start === b.start) {
      return 0;
    }

    return a.start < b.start ? -1 : 1;
  });

  for (const period of sortedPeriods) {
    const position = detectDayPosition(date, period.start, period.end);
    const dayType = detectDayType(period.status, position);

    if (dayType !== 'single.free') {
      intersection.push(dayType);
    }
  }

  if (intersection.length === 0) {
    return 'single.free';
  }

  return intersection.length === 1
    ? intersection[0]
    : detectIntersectionDayType(intersection);
}

const dateUtils = {
  isInvalidDate,
  isToday,
  isWeekend,
  parse,
  format,
  startOf,
  endOf,
  addDay,
  createRange,
  getDate,
  getDay,
  createDaysRange,
  detectDayPosition,
  detectDayType,
  detectIntersectionDayType,
  getDayType,
};

export {
  dateUtils,
};
