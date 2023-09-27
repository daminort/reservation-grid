import type { TLocale } from 'lib/interfaces/locale.interface';
import type { TReservedPeriod } from 'lib/interfaces/reservedPeriod';
import { LOCALES } from 'lib/constants/locales';

import { dateUtils } from './index';

describe('dateUtils', () => {

  const start = '2021-07-28';
  const end = '2021-08-02';

  const range = [
    '2021-07-28',
    '2021-07-29',
    '2021-07-30',
    '2021-07-31',
    '2021-08-01',
    '2021-08-02',
  ];

  const locale: TLocale = LOCALES.en;

  describe('isWeekend', () => {

    it('ideal conditions', () => {
      const sa = dateUtils.isWeekend('2021-07-17');
      const su = dateUtils.isWeekend('2021-07-18');
      const mo = dateUtils.isWeekend('2021-07-19');

      expect(sa).toBeTruthy();
      expect(su).toBeTruthy();
      expect(mo).toBeFalsy();
    });

    it('wrong input', () => {
      const actual = dateUtils.isWeekend('20210717');
      expect(actual).toBeFalsy();
    });
  });

  describe('parse', () => {

    it('ideal conditions', () => {
      const dateStart = dateUtils.parse(start);
      const dateEnd = dateUtils.parse(end);

      expect(dateStart.getFullYear()).toBe(2021);
      expect(dateStart.getMonth()).toBe(6);
      expect(dateStart.getDate()).toBe(28);
      expect(dateStart.getHours()).toBe(0);
      expect(dateStart.getMinutes()).toBe(0);
      expect(dateStart.getSeconds()).toBe(0);

      expect(dateEnd.getFullYear()).toBe(2021);
      expect(dateEnd.getMonth()).toBe(7);
      expect(dateEnd.getDate()).toBe(2);
      expect(dateEnd.getHours()).toBe(0);
      expect(dateEnd.getMinutes()).toBe(0);
      expect(dateEnd.getSeconds()).toBe(0);
    });

    it('UTC date', () => {
      const date = dateUtils.parse('2021-07-28T15:22:37');

      expect(date.getFullYear()).toBe(2021);
      expect(date.getMonth()).toBe(6);
      expect(date.getDate()).toBe(28);
      expect(date.getHours()).toBe(0);
      expect(date.getMinutes()).toBe(0);
      expect(date.getSeconds()).toBe(0);
    });

    it('invalid string', () => {
      const date = dateUtils.parse('20210728T15:22:37');
      expect(date).toEqual(new Date(1970, 0, 1));
    });

  });

  describe('format', () => {

    it('ideal conditions', () => {
      const date = dateUtils.parse(start);
      const actual = dateUtils.format(date);

      expect(actual).toEqual(start);
    });
  });

  describe('startOf', () => {

    it('day', () => {
      const date = dateUtils.parse('2021-07-28');
      const actual = dateUtils.startOf(date, 'day');

      expect(actual).toEqual('2021-07-28');
    });

    it('month', () => {
      const date = dateUtils.parse('2021-07-28');
      const actual = dateUtils.startOf(date, 'month');

      expect(actual).toEqual('2021-07-01');
    });

    it('year', () => {
      const date = dateUtils.parse('2021-07-28');
      const actual = dateUtils.startOf(date, 'year');

      expect(actual).toEqual('2021-01-01');
    });
  });

  describe('endOf', () => {

    it('month', () => {
      const date = dateUtils.parse('2021-07-16');
      const actual = dateUtils.endOf(date, 'month');

      expect(actual).toEqual('2021-07-31');
    });

    it('year', () => {
      const date = dateUtils.parse('2021-07-28');
      const actual = dateUtils.endOf(date, 'year');

      expect(actual).toEqual('2021-12-31');
    });
  });

  describe('addDay', () => {

    it('positive value', () => {
      const actual = dateUtils.addDay('2021-07-28', 5);

      expect(actual).toEqual('2021-08-02');
    });

    it('negative value', () => {
      const actual = dateUtils.addDay('2021-07-28', -3);

      expect(actual).toEqual('2021-07-25');
    });
  });

  describe('createRange', () => {

    it('ideal conditions', () => {
      const actual = dateUtils.createRange(start, end);

      expect(actual).toEqual(range);
    });

    it('wrong input', () => {
      const actual = dateUtils.createRange(end, start);

      expect(actual).toEqual([]);
    });
  });

  describe('getDate', () => {

    it('ideal conditions', () => {
      const actual = dateUtils.getDate('2021-07-28');
      expect(actual).toEqual(28);
    });

    it('wrong input', () => {
      const actual = dateUtils.getDate('20210728');
      expect(actual).toEqual(1); // 1970-01-01
    });
  });

  describe('getDay', () => {

    it('ideal conditions', () => {
      const we = dateUtils.getDay('2021-07-28', locale);
      const tu = dateUtils.getDay('2021-07-20', locale);

      expect(we).toEqual('We');
      expect(tu).toEqual('Tu');
    });

    it('wrong input', () => {
      const actual = dateUtils.getDay('20210728', locale);
      expect(actual).toEqual('??');
    });
  });

  describe('createDaysRange', () => {

    it('ideal conditions', () => {
      const options = {
        start: '2021-07-04',
        end: '2021-07-05',
        locale,
      };

      const actual = dateUtils.createDaysRange(options);

      expect(actual).toEqual([
        {
          value: '2021-07-04', date: 4, day: 'Su', isWeekend: true, isToday: false,
        },
        {
          value: '2021-07-05', date: 5, day: 'Mo', isWeekend: false, isToday: false,
        },
      ]);
    });

    it('wrong range', () => {
      const options = {
        start: '2021-07-30',
        end: '2021-07-28',
        locale,
      };

      const actual = dateUtils.createDaysRange(options);

      expect(actual).toEqual([]);
    });
  });

  describe('detectDayPosition', () => {

    it('start', () => {
      const actual = dateUtils.detectDayPosition(start, start, end);
      expect(actual).toEqual('start');
    });

    it('end', () => {
      const actual = dateUtils.detectDayPosition(end, start, end);
      expect(actual).toEqual('end');
    });

    it('middle', () => {
      const actual = dateUtils.detectDayPosition('2021-07-30', start, end);
      expect(actual).toEqual('middle');
    });

    it('none', () => {
      const actual = dateUtils.detectDayPosition('2021-01-01', start, end);
      expect(actual).toEqual('none');
    });

  });

  describe('detectDayType', () => {

    it('correct input', () => {
      const free = dateUtils.detectDayType('confirmed', 'none');
      const disabled = dateUtils.detectDayType('inaccessible', 'middle');

      const maybeStart = dateUtils.detectDayType('awaiting', 'start');
      const maybeFull = dateUtils.detectDayType('awaiting', 'middle');
      const maybeEnd = dateUtils.detectDayType('awaiting', 'end');

      const start = dateUtils.detectDayType('confirmed', 'start');
      const full = dateUtils.detectDayType('confirmed', 'middle');
      const end = dateUtils.detectDayType('confirmed', 'end');

      expect(free).toEqual('single.free');
      expect(disabled).toEqual('single.disabled');

      expect(maybeStart).toEqual('single.maybe.start');
      expect(maybeFull).toEqual('single.maybe.full');
      expect(maybeEnd).toEqual('single.maybe.end');

      expect(start).toEqual('single.normal.start');
      expect(full).toEqual('single.normal.full');
      expect(end).toEqual('single.normal.end');
    });
  });

  describe('detectIntersectionDayType', () => {

    it('correct input', () => {
      const endStart = dateUtils.detectIntersectionDayType(['single.normal.end', 'single.normal.start']);
      const maybeEndStart = dateUtils.detectIntersectionDayType(['single.maybe.end', 'single.maybe.start']);
      const normalEndMaybeStart = dateUtils.detectIntersectionDayType(['single.normal.end', 'single.maybe.start']);
      const maybeEndNormalStart = dateUtils.detectIntersectionDayType(['single.maybe.end', 'single.normal.start']);

      expect(endStart).toEqual('double.normal.end.start');
      expect(maybeEndStart).toEqual('double.maybe.end.start');
      expect(normalEndMaybeStart).toEqual('intersection.normal.end.maybe.start');
      expect(maybeEndNormalStart).toEqual('intersection.maybe.end.normal.start');
    });

    it('incorrect input', () => {
      const actual = dateUtils.detectIntersectionDayType(['single.normal.end', 'single.normal.full']);
      expect(actual).toEqual('single.normal.end');
    });
  });

  describe('getDayType', () => {

    const periods: TReservedPeriod[] = [
      { start: '2021-06-04', end: '2021-06-09', status: 'confirmed' },
      { start: '2021-06-10', end: '2021-06-12', status: 'awaiting' },
      { start: '2021-06-16', end: '2021-06-20', status: 'confirmed' },
      { start: '2021-06-20', end: '2021-06-25', status: 'awaiting' },
      { start: '2021-06-25', end: '2021-06-28', status: 'awaiting' },
      { start: '2021-06-29', end: '2021-06-30', status: 'inaccessible' },
    ];

    it('start', () => {
      const actual = dateUtils.getDayType('2021-06-10', periods);
      expect(actual).toEqual('single.maybe.start');
    });

    it('middle', () => {
      const actual = dateUtils.getDayType('2021-06-19', periods);
      expect(actual).toEqual('single.normal.full');
    });

    it('end', () => {
      const actual = dateUtils.getDayType('2021-06-09', periods);
      expect(actual).toEqual('single.normal.end');
    });

    it('end + maybeStart', () => {
      const actual = dateUtils.getDayType('2021-06-20', periods);
      expect(actual).toEqual('intersection.normal.end.maybe.start');
    });

    it('maybeEnd + maybeStart', () => {
      const actual = dateUtils.getDayType('2021-06-25', periods);
      expect(actual).toEqual('double.maybe.end.start');
    });

    it('inaccessible', () => {
      const actual = dateUtils.getDayType('2021-06-29', periods);
      expect(actual).toEqual('single.disabled');
    });

    it('free', () => {
      const actual = dateUtils.getDayType('2021-06-14', periods);
      expect(actual).toEqual('single.free');
    });
  });
});
