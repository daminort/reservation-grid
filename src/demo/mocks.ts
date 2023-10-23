import type { TGridRow } from 'demo/interfaces/common.interface';
import type { TSelectItem } from 'demo/components/Select';

export const row01: TGridRow = {
  id: '1',
  title: 'Room #1',
  info: '4',
  periods: [
    { start: '2021-11-04', end: '2021-11-09', status: 'confirmed' },
    { start: '2021-11-09', end: '2021-11-12', status: 'awaiting' },
    { start: '2021-11-21', end: '2021-11-26', status: 'confirmed' },
  ],
};

export const row02: TGridRow = {
  id: '2',
  title: 'Room #2',
  info: '3 + 1',
  periods: [
    { start: '2021-10-25', end: '2021-11-05', status: 'confirmed' },
    { start: '2021-11-14', end: '2021-11-27', status: 'confirmed' },
  ],
};

export const row03: TGridRow = {
  id: '3',
  title: 'Room #3',
  info: '6',
  periods: [
    { start: '2021-11-09', end: '2021-11-15', status: 'reserved' },
    { start: '2021-11-15', end: '2021-11-20', status: 'awaiting' },
  ],
};

export const row04: TGridRow = {
  id: '4',
  title: 'Room #4',
  info: '2 + 1',
  periods: [
    { start: '2021-11-03', end: '2021-11-11', status: 'awaiting' },
  ],
};

export const row05: TGridRow = {
  id: '5',
  title: 'Room #5',
  info: '4',
  periods: [
    { start: '2021-11-01', end: '2021-11-05', status: 'disabled' },
    { start: '2021-11-08', end: '2021-12-31', status: 'renovation' },
  ],
};

const grid = [
  row01,
  row02,
  row03,
  row04,
  row05,
];

const monthItems: TSelectItem[] = [
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

const yearItems: TSelectItem[] = [
  { value: '2021', title: '2021' },
  { value: '2022', title: '2022' },
  { value: '2023', title: '2023' },
  { value: '2024', title: '2024' },
  { value: '2025', title: '2025' },
];

const localeItems: TSelectItem[] = [
  { value: 'en', title: 'English' },
  { value: 'ua', title: 'Ukrainian' },
  { value: 'de', title: 'German' },
  { value: 'fr', title: 'French' },
  { value: 'it', title: 'Italian' },
  { value: 'es', title: 'Spain' },
  { value: 'pl', title: 'Poland' },
];

const fontFaceItems: TSelectItem[] = [
  { value: 'sans-serif', title: 'Sans Serif' },
  { value: 'Arial', title: 'Arial' },
  { value: 'helvetica', title: 'Helvetica' },
  { value: 'times-new-roman', title: 'Times New Roman' },
  { value: 'Verdana', title: 'Verdana' },
  { value: 'Tahoma', title: 'Tahoma' },
  { value: 'Courier New', title: 'Courier New' },
];

const fontSizeItems: TSelectItem[] = [
  { value: '8px', title: '8px' },
  { value: '9px', title: '9px' },
  { value: '10px', title: '10px' },
  { value: '11px', title: '11px' },
  { value: '12px', title: '12px' },
  { value: '13px', title: '13px' },
  { value: '14px', title: '14px' },
  { value: '16px', title: '16px' },
  { value: '18px', title: '18px' },
  { value: '20px', title: '20px' },
];

export {
  grid,
  monthItems,
  yearItems,
  localeItems,
  fontFaceItems,
  fontSizeItems,
};
