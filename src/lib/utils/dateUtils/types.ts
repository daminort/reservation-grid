import type { DatePosition, DateStatus, DayType } from 'lib/interfaces/grid.interface';

export type DateString = Date | string;
export type Unit = 'day' | 'month' | 'year';

export type DayMapVariant = Record<Exclude<DatePosition, 'none'>, DayType>;
export type DayMap = Record<Exclude<DateStatus, 'inaccessible'>, DayMapVariant>;

export type Intersection = DayType[];
