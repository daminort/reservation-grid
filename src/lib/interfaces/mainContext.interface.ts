import { DayType } from './grid.interface'
import { Theme } from './theme.interface';
import { LocaleKey } from './locale.interface';

type OnClickTitle = (value: string) => void;
type OnClickCell = (value: string, date: number, dayType: DayType) => void;

export interface MainContext {
  start: string;
  end: string;
  highlightToday: boolean;
  showInfo: boolean;
  selectedColumns: string[];
  selectedRows: string[];
  theme: Theme;
  locale: LocaleKey;
  onClickTitle: OnClickTitle,
  onClickCell: OnClickCell,
}
