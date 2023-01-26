import { Theme, LocaleKey, Row } from '@jylopez/reservation-grid';
import { Partial } from 'rollup-plugin-typescript2/dist/partial';

export interface MainContext {
  year: string;
  month: string;
  highlightToday: boolean;
  showInfo: boolean;
  title: string;
  info: string;
  selectedColumns: string[];
  selectedRows: string[];
  theme: Theme;
  locale: LocaleKey;

  data: Row[];

  onChangeYear: (year: string) => void;
  onChangeMonth: (month: string) => void;
  onChangeHighlightToday: (value: boolean) => void;
  onChangeShowInfo: (value: boolean) => void;

  onChangeTitle: (title: string) => void;
  onChangeInfo: (info: string) => void;

  onChangeSelectedColumns: (columns: string[]) => void;
  onChangeSelectedRows: (rows: string[]) => void;

  onChangeTheme: (theme: Partial<Theme>) => void;
  onChangeLocale: (locale: LocaleKey) => void;

  onChangeData: (data: Row[]) => void;
}
