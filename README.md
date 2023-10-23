# Reservation Grid
A modular grid that allows managing reservations for a hotel

![Reservation Grid](images/rg.png)

## Installation
<a name="installation"></a>

```shell
npm install @daminort/reservation-grid
```

## Usage
<a name="usage"></a>

```typescript
import React from 'react';
import type { FC } from 'react';

import { ReservationGrid } from '@daminort/reservation-grid';
import type { TDayType, TRow, TClickCellEventData } from '@daminort/reservation-grid';
import '@daminort/reservation-grid/dist/style.css';

const App: FC = () => {

  const onClickTitle = (value: string) => {
    console.log(`Selected row with # ${value}`);
  };

  const onClickCell = ({ id, date, dayType, dayStatus }: TClickCellEventData) => {
    console.log('Selected cell:', { value, date, dayType, dayStatus });
  };

  const data: TRow[] = [
    id: '1',
    title: 'Room #1',
    info: '4',
    periods: [
      { start: '2021-11-04', end: '2021-11-09', status: 'confirmed' },
      { start: '2021-11-09', end: '2021-11-12', status: 'awaiting' },
    ],
  ];

  return (
    <ReservationGrid
      highlightToday
      showInfo
      start="2021-11-01"
      end="2021-11-30"
      title="Number"
      info="Seats"
      locale="en"
      data={data}
      onClickTitle={onClickTitle}
      onClickCell={onClickCell}
    />
  );
};
```

## Custom date statuses
<a name="custom-status"></a>

You can define your own date statuses in addition to pre-defined.<br />
Pre-defined statuses are:
- `free`
- `disabled`
- `awaiting`
- `confirmed`

In order to define your own date statuses you need to extend `TDateStatus` type and define colors for custom statuses:
```typescript
import { ReservationGrid, THEME } from '@daminort/reservation-grid';
import type { TTheme, TRow, TReservedPeriod } from '@daminort/reservation-grid';

type TCustomStatus = 'reserved' | 'renovation';

type TGridRow = TRow<TCustomStatus>;
type TMainTheme = TTheme<TCustomStatus>;

const data: TGridRow[] = [
  id: '1',
  title: 'Room #1',
  info: '4',
  periods: [
    { start: '2021-11-04', end: '2021-11-09', status: 'confirmed' },
    { start: '2021-11-09', end: '2021-11-12', status: 'reserved' },
  ],
];

const theme: Partial<TMainTheme> = {
  'date.status': { 
    reserved: 'green',
    renovation: 'blue',   
  },  
};
...

return (
  <ReservationGrid
    data={data}
    theme={theme}
    ...
  />
);

```

## Props
<a name="props"></a>

|Name| Type       |Required| Default       |Example|
|----|------------|--------|---------------|-------|
|start| string     |*| -             |'2021-11-01'
|end| string     |*| -             |'2021-11-30'
|highlightToday| boolean    |-| true          |
|showInfo| boolean    |-| true          |
|selectedColumns| string[]   |-| [ ]           |['2021-11-01', '2021-11-02']
|selectedRows| string[]   |-| [ ]           |['# 1']
|theme| TTheme     |-| default theme |
|locale| TLocaleKey |-| en            |
|title| string     |-| 'Room'        |
|info| string     |-| empty string  |
|data| TRow[]     |*| -             |see example above
|onClickTitle| Function   |-| -             |(value) => console.log(value)
|onClickCell| Function   |-| -             |({ value, date, dayType }) => console.log({ value, date, dayType })

#### Data
<a name="data"></a>

The data is an array of the Rows:

```javascript
type TDateStatus = 'awaiting' | 'confirmed' | 'inaccessible';

interface TReservedPeriod {
  start: string;
  end: string;
  status: TDateStatus;
}

interface TRow {
  id: string;
  title: string;
  info: string;
  periods: TReservedPeriod[];
}
```

Example:
```javascript
const data: TRow[] = [
  {
    id: '1',
    title: 'Number 1',
    info: '4 seats',
    periods: [
      { start: '2021-11-04', end: '2021-11-09', status: 'confirmed' },
      { start: '2021-11-09', end: '2021-11-12', status: 'awaiting' },
      { start: '2021-11-21', end: '2021-11-26', status: 'confirmed' },
    ],
  },
  {
    id: '2',
    title: 'Number 2',
    info: '3 seats',
    periods: [
      { start: '2021-11-01', end: '2021-11-02', status: 'confirmed' },
      { start: '2021-11-14', end: '2021-11-27', status: 'confirmed' },
    ],
  },
];
```

#### Locale
<a name="locale"></a>

Available locales:
- English
- Ukrainian
- German
- French
- Italian
- Spain
- Poland

```javascript
type TLocaleKey = 'en' | 'ua' | 'de' | 'fr' | 'it' | 'es' | 'pl';
```

#### Theme
<a name="theme"></a>

You can change appearance of the Reservation Grid. And you don't need to pass the entire theme: just pass keys you want to change.

Default theme:
```javascript
const THEME: TTheme = {
  'font.face': 'sans-serif',
  'font.size': '14px',
  'color.text': '#30424F',
  'color.background': '#FFFFFF',
  'color.border': '#DDEBF3',
  'color.today': '#E4FFE6',
  'color.selected': '#FFF2F2',
  'color.weekend': '#F8FAFB',
  'width.title': '50%',
  'width.info': '50%',
  'date.status': {
    'free': 'transparent',
    'disabled': '#759AB5',
    'awaiting': '#DDEBF3',
    'confirmed': '#006490',
  },
};
```

## Local development
<a name="local"></a>

Just start an application as usual:
```
npm start
```

## Publishing
<a name="publishing"></a>

```
npm run build
npm login
npm publish --access public
```

## Publishing Demo to GitHub Pages
<a name="gh-pages"></a>

```
npm run deploy
```

It will build the demo application from `/demo` folder and publish it via `gh-pages` package 

## License
<a name="license"></a>

[MIT](/LICENSE) © [Daminort](https://github.com/daminort)
