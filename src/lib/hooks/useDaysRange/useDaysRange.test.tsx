import { renderHook } from '@testing-library/react';

import type { DaysRange } from 'lib/interfaces/daysRange.interface';
import type { LocaleKey } from 'lib/interfaces/locale.interface';
import { useDaysRange } from 'lib/hooks/useDaysRange/useDaysRange';

describe('useTheme', () => {

  const start = '2021-07-04';
  const end = '2021-07-05';
  const locale: LocaleKey = 'en';

  const expected: DaysRange[] = [
    {
      value: '2021-07-04', date: 4, day: 'Su', isWeekend: true, isToday: false,
    },
    {
      value: '2021-07-05', date: 5, day: 'Mo', isWeekend: false, isToday: false,
    },
  ];

  it('normal render', () => {
    const { result, rerender } = renderHook(({ start, end, locale }) => useDaysRange(start, end, locale), {
      initialProps: {
        start,
        end,
        locale,
      },
    });
    expect(result.current).toEqual(expected);

    // incorrect input
    rerender({
      start: '2021-07-05',
      end: '2021-07-04',
      locale,
    });
    expect(result.current).toEqual([]);
  });
});
