import { DayType } from './grid.interface'
import { Theme } from './theme.interface';
import { LocaleKey } from './locale.interface';
import { ReservedPeriod } from './reservedPeriod';

type OnClickEventData = {
  value: string;
  date: string;
  dayType: DayType;
  periods: ReservedPeriod;
};

type OnClickTitle = (value: string) => void;
type OnClickCell = (eventData: OnClickEventData) => void;
type OnCellHover = (eventData: OnClickEventData) => void;

export interface MainContext {
  start: string;
  end: string;
  highlightToday?: boolean;
  showInfo?: boolean;
  showColumn3?: boolean;
  showToolTip?: boolean;
  selectedColumns?: string[];
  selectedRows?: string[];
  theme?: Theme;
  locale?: LocaleKey;
  onClickTitle?: OnClickTitle,
  onClickCell?: OnClickCell,
  onCellHover?:OnCellHover
}
