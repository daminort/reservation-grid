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
import type { TDayParams } from 'lib/components/Row/Row.interface';

import type { TLocale } from 'lib/interfaces/locale.interface';
import type { TDaysRange, TDaysRangeOptions } from 'lib/interfaces/daysRange.interface';
import type { TDatePosition, TDateStatus, TDayType } from 'lib/interfaces/grid.interface';
import type { TReservedPeriod } from 'lib/interfaces/reservedPeriod';

import { FORMATS } from 'lib/constants/locales';

import type { TDateString, TUnit } from './types';

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

function detectDayType<TCustomStatus extends string = ''>(status: TDateStatus<TCustomStatus>, position: TDatePosition): TDayType {
  if (status === 'disabled') {
    return 'single.disabled';
  }

  const dayTypes: Record<TDatePosition, TDayType> = {
    none: 'single.free',
    start: 'single.start',
    end: 'single.end',
    middle: 'single.full',
  };

  return dayTypes[position] || 'single.free';
}

function getDayParams<TCustomStatus extends string = ''>(date: string, periods: TReservedPeriod<TCustomStatus>[] = []): TDayParams<TCustomStatus> {

  const intersections: TDayType[] = [];
  const dayStatus: TDateStatus<TCustomStatus>[] = [];

  const sortedPeriods: TReservedPeriod<TCustomStatus>[] = periods.sort((a, b) => {
    if (a.start === b.start) {
      return 0;
    }

    return a.start < b.start ? -1 : 1;
  });

  for (const period of sortedPeriods) {
    const position = detectDayPosition(date, period.start, period.end);
    const dayType = detectDayType(period.status, position);

    if (dayType !== 'single.free') {
      intersections.push(dayType);
      dayStatus.push(period.status);
    }
  }

  if (intersections.length === 0) {
    return {
      dayType: 'single.free',
      dayStatus,
    };
  }

  if (intersections.length === 1) {
    return {
      dayType: intersections[0],
      dayStatus,
    };
  }

  return {
    dayType: 'intersection',
    dayStatus,
  };
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
  getDayParams,
};

export {
  dateUtils,
};
