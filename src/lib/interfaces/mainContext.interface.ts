import { DayType } from './grid.interface'
import { Theme } from './theme.interface';
import { LocaleKey } from './locale.interface';

type OnClickEventData = {
  value: string;
  date: string;
  dayType: DayType;
};

type OnClickTitle = (value: string) => void;
type OnClickCell = (eventData: OnClickEventData) => void;

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
