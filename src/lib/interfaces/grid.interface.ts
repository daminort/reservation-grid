type TDefaultDateStatus = 'free' | 'awaiting' | 'confirmed' | 'disabled';
type TDatePosition = 'none' | 'start' | 'middle' | 'end';

type TDateStatus<TCustomStatus extends string = ''> = TDefaultDateStatus | TCustomStatus;

type TDayType =
  | 'single.free'
  | 'single.disabled'
  | 'single.full'
  | 'single.start'
  | 'single.end'
  | 'intersection';

type TClickCellEventData = {
  id: string;
  date: string;
  dayType: TDayType;
};

export type {
  TDateStatus,
  TDatePosition,
  TDayType,
  TClickCellEventData,
};
