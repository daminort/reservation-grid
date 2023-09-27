import type { TDayType } from './grid.interface';
import type { TTheme } from './theme.interface';
import type { TLocaleKey } from './locale.interface';

type TClickEventData = {
  id: string;
  date: string;
  dayType: TDayType;
};

type TClickTitle = (value: string) => void;
type TClickCell = (eventData: TClickEventData) => void;

export interface TMainContext {
  start: string;
  end: string;
  highlightToday?: boolean;
  showInfo?: boolean;
  selectedColumns?: string[];
  selectedRows?: string[];
  theme?: TTheme;
  locale?: TLocaleKey;
  onClickTitle?: TClickTitle,
  onClickCell?: TClickCell,
}
