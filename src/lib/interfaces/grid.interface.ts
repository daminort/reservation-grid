type DateStatus = 'awaiting' | 'confirmed' | 'paid' | 'inaccessible';
type DatePosition = 'none' | 'start' | 'middle' | 'end';

type DayType = 'single.free'
  | 'single.disabled'
  | 'single.normal.full'
  | 'single.normal.start'
  | 'single.normal.end'
  | 'single.maybe.full'
  | 'single.maybe.start'
  | 'single.maybe.end'
  | 'single.paid.full'
  | 'single.paid.start'
  | 'single.paid.end'
  | 'double.normal.end.start'
  | 'double.maybe.end.start'
  | 'double.paid.end.start'
  | 'intersection.normal.end.maybe.start'
  | 'intersection.normal.end.paid.start'
  | 'intersection.maybe.end.normal.start'
  | 'intersection.maybe.end.paid.start'
  | 'intersection.paid.end.maybe.start'
  | 'intersection.paid.end.normal.start';

export {
  DateStatus,
  DatePosition,
  DayType,
}
