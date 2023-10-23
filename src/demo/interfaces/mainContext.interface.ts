import type { TLocaleKey } from 'lib/index';

import type { TGridRow, TMainTheme } from './common.interface';

interface TMainContext {
  year: string;
  month: string;
  highlightToday: boolean;
  showInfo: boolean;
  title: string;
  info: string;
  selectedColumns: string[];
  selectedRows: string[];
  theme: TMainTheme;
  locale: TLocaleKey;

  data: TGridRow[];

  onChangeYear: (year: string) => void;
  onChangeMonth: (month: string) => void;
  onChangeHighlightToday: (value: boolean) => void;
  onChangeShowInfo: (value: boolean) => void;

  onChangeTitle: (title: string) => void;
  onChangeInfo: (info: string) => void;

  onChangeSelectedColumns: (columns: string[]) => void;
  onChangeSelectedRows: (rows: string[]) => void;

  onChangeTheme: (theme: Partial<TMainTheme>) => void;
  onChangeLocale: (locale: TLocaleKey) => void;

  onChangeData: (data: TGridRow[]) => void;
}

export type {
  TMainContext,
};
