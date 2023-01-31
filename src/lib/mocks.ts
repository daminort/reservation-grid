import { Row } from 'lib/interfaces/row';

export const row01: Row = {
  value: 'Number 1',
  info: '4 seats',
  column3: 'Banana',
  periods: [
    { start: '2021-11-04', end: '2021-11-09', status: 'confirmed' },
    { start: '2021-11-09', end: '2021-11-12', status: 'awaiting' },
    { start: '2021-11-21', end: '2021-11-26', status: 'confirmed' },
  ],
};

export const row02: Row = {
  value: 'Number 2',
  info: '3 seats',
  periods: [
    { start: '2021-11-01', end: '2021-11-02', status: 'confirmed' },
    { start: '2021-11-14', end: '2021-11-27', status: 'confirmed' },
  ],
};

export const row03: Row = {
  value: 'Number 3',
  info: '6 seats',
  periods: [],
};

export const row04: Row = {
  value: 'Number 4',
  info: '2 seats',
  periods: [
    { start: '2021-11-03', end: '2021-11-11', status: 'awaiting' },
  ],
};

export const row05: Row = {
  value: 'Number 5',
  info: '4 seats',
  periods: [
    { start: '2021-11-01', end: '2021-11-05', status: 'inaccessible' },
  ],
};

export const grid = [
  row01,
  row02,
  row03,
  row04,
  row05,
];
