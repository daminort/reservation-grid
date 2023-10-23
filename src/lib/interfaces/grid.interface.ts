type TDefaultDateStatus = 'free' | 'awaiting' | 'confirmed' | 'disabled';
type TDatePosition = 'none' | 'start' | 'middle' | 'end';

type TDateStatus<TCustomStatus extends string = never> = TDefaultDateStatus | TCustomStatus;

type TDayType =
  | 'single.free'
  | 'single.disabled'
  | 'single.full'
  | 'single.start'
  | 'single.end'
  | 'intersection';

type TClickCellEventData<TCustomStatus extends string = never> = {
  id: string;
  date: string;
  dayType: TDayType;
  dayStatus: TDateStatus<TCustomStatus>[];
};

export type {
  TDateStatus,
  TDatePosition,
  TDayType,
  TClickCellEventData,
};
