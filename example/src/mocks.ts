import { Row } from '@jylopez/reservation-grid';
import { SelectItem } from 'components/Select';

export const row01: Row = {
  value: '# 1',
  info: '4',
  column3: 'Banana',
  periods: [
    { start: '2021-11-04', end: '2021-11-09', status: 'confirmed', data: 'sample', onHoverToolTip:"<div><h2>hey</h2></div>", displayText:'test'},
    { start: '2021-11-09', end: '2021-11-12', status: 'awaiting',onHoverToolTip:"<div><p>hey</p></div>", displayText:'test' },
    { start: '2021-11-21', end: '2021-11-26', status: 'confirmed', data:'sample1',onHoverToolTip:"<div><p>hey</p></div>", displayText:'test' },
  ],
};

export const row02: Row = {
  value: '# 2',
  info: '3 + 1',
  periods: [
    { start: '2021-11-01', end: '2021-11-02', status: 'confirmed' , data:'test1', onHoverToolTip:"<div><li>hey</li></div>" },
    { start: '2021-11-14', end: '2021-11-27', status: 'paid', data:'test1', onHoverToolTip:"<div><ol>hey</ol></div>" },
  ],
};

export const row03: Row = {
  value: '# 3',
  info: '6',
  periods: [],
};

export const row04: Row = {
  value: '# 4',
  info: '2 + 1',
  periods: [
    { start: '2021-11-03', end: '2021-11-11', status: 'awaiting', data:'test2' ,onHoverToolTip:"<div><a href='https://stackoverflow.com'>hey</a></div>" },
  ],
};

export const row05: Row = {
  value: '# 5',
  info: '4',
  periods: [
    { start: '2021-11-01', end: '2021-11-05', status: 'inaccessible', data:'test3', onHoverToolTip:"<div><a href='https://stackoverflow.com'>hey</a></div>" },
  ],
};

export const grid = [
  row01,
  row02,
  row03,
  row04,
  row05,
];

export const monthItems: SelectItem[] = [
  { value: '01', title: 'January' },
  { value: '02', title: 'February' },
  { value: '03', title: 'March' },
  { value: '04', title: 'April' },
  { value: '05', title: 'May' },
  { value: '06', title: 'June' },
  { value: '07', title: 'July' },
  { value: '08', title: 'August' },
  { value: '09', title: 'September' },
  { value: '10', title: 'October' },
  { value: '11', title: 'November' },
  { value: '12', title: 'December' },
];

export const yearItems: SelectItem[] = [
  { value: '2021', title: '2021' },
  { value: '2022', title: '2022' },
  { value: '2023', title: '2023' },
  { value: '2024', title: '2024' },
  { value: '2025', title: '2025' },
];

export const localeItems: SelectItem[] = [
  { value: 'en', title: 'English' },
  { value: 'ua', title: 'Ukrainian' },
  { value: 'ru', title: 'Russian' },
];
