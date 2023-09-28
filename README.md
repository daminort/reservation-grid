# Reservation Grid
A modular grid that allows managing reservations for a hotel

![Reservation Grid](images/rg.png)

## Installation
<a name="installation"></a>

```
npm install @daminort/reservation-grid
```

## Usage
<a name="usage"></a>

```javascript
import React, { useCallback } from 'react';
import type { FC } from 'react';

import { ReservationGrid } from '@daminort/reservation-grid';
import type { TDayType, TRow } from '@daminort/reservation-grid';
import '@daminort/reservation-grid/dist/style.css';

type TClickCell = {
  id: string;
  date: string;
  dayType: TDayType;
};

const App: FC = () => {

  const onClickTitle = useCallback((value: string) => {
    console.log(`Selected row with # ${value}`);
  }, []);

  const onClickCell = useCallback(({ id, date, dayType }: TClickCell) => {
    console.log('Selected cell:', { value, date, dayType });
  }, []);

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

## Props
<a name="props"></a>

|Name|Type|Required|Default|Example|
|----|----|--------|-------|-------|
|start|string|*|-|'2021-11-01'
|end|string|*|-|'2021-11-30'
|highlightToday|boolean|-|true|
|showInfo|boolean|-|true|
|selectedColumns|string[]|-|[ ]|['2021-11-01', '2021-11-02']
|selectedRows|string[]|-|[ ]|['# 1']
|theme|Theme|-|default theme|
|locale|TLocaleKey|-|en|
|title|string|-|'Number'|
|info|string|-|empty string|
|data|TRow[]|*|-|see example above
|onClickTitle|Function|-|-|(value) => console.log(value)
|onClickCell|Function|-|-|({ value, date, dayType }) => console.log({ value, date, dayType })

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
  'color.free': 'transparent',
  'color.awaiting': '#DDEBF3',
  'color.confirmed': '#006490',
  'color.inaccessible': '#759AB5',
  'color.today': '#E4FFE6',
  'color.selected': '#FFF2F2',
  'color.weekend': '#F8FAFB',
  'width.title': '50%',
  'width.info': '50%',
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
