import { Locales } from 'lib/interfaces/locale.interface';

const LOCALES: Locales = {
  en: { mo: 'Mo', tu: 'Tu', we: 'We', th: 'Th', fr: 'Fr', sa: 'Sa', su: 'Su' },
  ua: { mo: 'Пн', tu: 'Вт', we: 'Ср', th: 'Чт', fr: 'Пт', sa: 'Сб', su: 'Нд' },
  ru: { mo: 'Пн', tu: 'Вт', we: 'Ср', th: 'Чт', fr: 'Пт', sa: 'Сб', su: 'Вс' },
};

const FORMATS = {
  date: 'yyyy-MM-dd',
}

export {
  LOCALES,
  FORMATS,
}
