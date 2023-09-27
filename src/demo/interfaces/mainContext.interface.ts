import type { TTheme, TLocaleKey, TRow } from 'lib/index';

export interface TMainContext {
  year: string;
  month: string;
  highlightToday: boolean;
  showInfo: boolean;
  title: string;
  info: string;
  selectedColumns: string[];
  selectedRows: string[];
  theme: TTheme;
  locale: TLocaleKey;

  data: TRow[];

  onChangeYear: (year: string) => void;
  onChangeMonth: (month: string) => void;
  onChangeHighlightToday: (value: boolean) => void;
  onChangeShowInfo: (value: boolean) => void;

  onChangeTitle: (title: string) => void;
  onChangeInfo: (info: string) => void;

  onChangeSelectedColumns: (columns: string[]) => void;
  onChangeSelectedRows: (rows: string[]) => void;

  onChangeTheme: (theme: Partial<TTheme>) => void;
  onChangeLocale: (locale: TLocaleKey) => void;

  onChangeData: (data: TRow[]) => void;
}
