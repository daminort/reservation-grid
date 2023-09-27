/* eslint-disable object-curly-newline */
import type { Locales } from 'lib/interfaces/locale.interface';

const LOCALES: Locales = {
  en: { mo: 'Mo', tu: 'Tu', we: 'We', th: 'Th', fr: 'Fr', sa: 'Sa', su: 'Su' },
  ua: { mo: 'Пн', tu: 'Вт', we: 'Ср', th: 'Чт', fr: 'Пт', sa: 'Сб', su: 'Нд' },
  de: { mo: 'Mo', tu: 'Di', we: 'Mi', th: 'Do', fr: 'Fr', sa: 'Sa', su: 'So' },
  fr: { mo: 'Lu', tu: 'Ma', we: 'Me', th: 'Je', fr: 'Ve', sa: 'Sa', su: 'Di' },
  it: { mo: 'Lu', tu: 'Ma', we: 'Me', th: 'Gi', fr: 'Ve', sa: 'Sa', su: 'Do' },
  es: { mo: 'Lu', tu: 'Ma', we: 'Mi', th: 'Ju', fr: 'Vi', sa: 'Sa', su: 'Do' },
  pl: { mo: 'Po', tu: 'Wt', we: 'Sr', th: 'Cz', fr: 'Pi', sa: 'So', su: 'Ni' },
};

const FORMATS = { date: 'yyyy-MM-dd' };

export {
  LOCALES,
  FORMATS,
};
