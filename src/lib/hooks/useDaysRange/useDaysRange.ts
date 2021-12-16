import { useMemo } from 'react';

import { DaysRange } from 'lib/interfaces/daysRange.interface';
import { LocaleKey } from 'lib/interfaces/locale.interface';
import { LOCALES } from 'lib/constants/locales';
import { dateUtils } from 'lib/utils/dateUtils';

const useDaysRange = (start: string, end: string, locale: LocaleKey ): DaysRange[] => {

  const range = useMemo(() => {
    const options = {
      start,
      end,
      locale: LOCALES[locale],
    }
    return dateUtils.createDaysRange(options);
  }, [start, end, locale]);

  return range;
};

export {
  useDaysRange,
}
