import type { TClickCellEventData } from './grid.interface';
import type { TTheme } from './theme.interface';
import type { TLocaleKey } from './locale.interface';

type TClickTitle = (value: string) => void;
type TClickCell = (eventData: TClickCellEventData) => void;

interface TMainContext<TCustomStatus extends string = ''> {
  start: string;
  end: string;
  highlightToday?: boolean;
  showInfo?: boolean;
  selectedColumns?: string[];
  selectedRows?: string[];
  customStatus?: string;
  theme?: TTheme<TCustomStatus>;
  locale?: TLocaleKey;
  onClickTitle?: TClickTitle,
  onClickCell?: TClickCell,
}

export type {
  TMainContext,
};
