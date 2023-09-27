import type { DayType } from './grid.interface';
import type { Theme } from './theme.interface';
import type { LocaleKey } from './locale.interface';

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
  highlightToday?: boolean;
  showInfo?: boolean;
  selectedColumns?: string[];
  selectedRows?: string[];
  theme?: Theme;
  locale?: LocaleKey;
  onClickTitle?: OnClickTitle,
  onClickCell?: OnClickCell,
}
