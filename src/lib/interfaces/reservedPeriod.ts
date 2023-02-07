import { DateStatus } from './grid.interface'

export interface ReservedPeriod {
  start: string;
  end: string;
  status: DateStatus;
  data: string;
  displayText:string;
  onHoverToolTip: React.ReactNode;
}
