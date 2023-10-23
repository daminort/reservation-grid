import type { TTheme } from 'lib/interfaces/theme.interface';

const THEME: TTheme = {
  'font.face': 'sans-serif',
  'font.size': '14px',
  'color.text': '#30424F',
  'color.background': '#FFFFFF',
  'color.border': '#DDEBF3',
  'color.today': '#E4FFE6',
  'color.selected': '#FFF2F2',
  'color.weekend': '#F8FAFB',
  'width.title': '50%',
  'width.info': '50%',
  'date.status': {
    '': 'transparent',
    'free': 'transparent',
    'disabled': '#759AB5',
    'awaiting': '#DDEBF3',
    'confirmed': '#006490',
  },
};

export {
  THEME,
};
