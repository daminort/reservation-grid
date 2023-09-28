import type { TDatePosition, TDateStatus, TDayType } from 'lib/interfaces/grid.interface';

export type TDateString = Date | string;
export type TUnit = 'day' | 'month' | 'year';

export type TDayMapVariant = Record<Exclude<TDatePosition, 'none'>, TDayType>;
export type TDayMap = Record<Exclude<TDateStatus, 'inaccessible'>, TDayMapVariant>;

export type TIntersection = TDayType[];
