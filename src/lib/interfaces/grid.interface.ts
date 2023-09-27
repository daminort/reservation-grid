type DateStatus = 'awaiting' | 'confirmed' | 'inaccessible';
type DatePosition = 'none' | 'start' | 'middle' | 'end';

type DayType =
  | 'single.free'
  | 'single.disabled'
  | 'single.normal.full'
  | 'single.normal.start'
  | 'single.normal.end'
  | 'single.maybe.full'
  | 'single.maybe.start'
  | 'single.maybe.end'
  | 'double.normal.end.start'
  | 'double.maybe.end.start'
  | 'intersection.normal.end.maybe.start'
  | 'intersection.maybe.end.normal.start';

export type {
  DateStatus,
  DatePosition,
  DayType,
};
