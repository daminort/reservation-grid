import type { TDateStatus } from './grid.interface';

interface TTheme<TCustomStatus extends string = never> {
  'font.face': string;
  'font.size': string;
  'color.text': string;
  'color.background': string;
  'color.border': string;
  'color.today': string;
  'color.selected': string;
  'color.weekend': string;
  'width.title': string;
  'width.info': string;
  'date.status': Record<TDateStatus<TCustomStatus>, string>;
}

export type {
  TTheme,
};
