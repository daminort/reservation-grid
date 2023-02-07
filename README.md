# Reservation Grid
A modular grid that allows managing reservations for a hotel

![Reservation Grid](images/rg.png)

## Installation
<a name="installation"></a>

```
npm install @jylopez/reservation-grid
```

## Usage
<a name="usage"></a>

```javascript
import React, { FC, useCallback } from 'react';
import { ReservationGrid, DayType, Row } from '@jylopez/reservation-grid';

const App: FC = () => {

  const onClickTitle = useCallback((value: string) => {
    console.log(`Selected row with # ${value}`);
  }, []);

  const onClickCell = useCallback(({ value: string, date: string, dayType: DayType }) => {
    console.log('Selected cell:', { value, date, dayType });
  }, []);

  const data: Row[] = [
    value: '# 1',
    info: '4',
    periods: [
      { start: '2021-11-04', end: '2021-11-09', status: 'confirmed', displayText:'User 1', onHoverToolTip: "<div><p>User 1</p></div>" },
      { start: '2021-11-09', end: '2021-11-12', status: 'awaiting', displayText:'User 2', onHonHoverToolTip: "<div><p>User 2</p></div>" },
    ],
  ];

  return (
    <ReservationGrid
      highlightToday
      showInfo
      showColumn3
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
|showColumn3|boolean|-|true|
|selectedColumns|string[]|-|[ ]|['2021-11-01', '2021-11-02']
|selectedRows|string[]|-|[ ]|['# 1']
|theme|Theme|-|default theme|
|locale|LocaleKey|-|en|
|title|string|-|'Number'|
|info|string|-|empty string|
|data|Row[]|*|-|see example above
|displayText|string|-|empty string|see example above
|onHoverToolTip|html element|*|-|see example above
|onClickTitle|Function|-|-|(value) => console.log(value)
|onClickCell|Function|-|-|({ value, date, dayType }) => console.log({ value, date, dayType })

#### Data
<a name="data"></a>

The data is an array of the Rows:
```javascript
type DateStatus = 'awaiting' | 'confirmed' | 'paid' | 'inaccessible';

interface ReservedPeriod {
  start: string;
  end: string;
  status: DateStatus;
}

interface Row {
  value: string;
  info: string;
  periods: ReservedPeriod[];
}

```

Example:
```javascript
const data: Row[] = [
  {
    value: 'Number 1',
    info: '4 seats',
    periods: [
      { start: '2021-11-04', end: '2021-11-09', status: 'confirmed', displayText:'User 1', onHoverToolTip: "<div><p>User 1</p></div>" },
      { start: '2021-11-09', end: '2021-11-12', status: 'awaiting', displayText:'User 2', onHoverToolTip: "<div><p>User 2</p></div>" },
      { start: '2021-11-21', end: '2021-11-26', status: 'confirmed', displayText:'User 3', onHoverToolTip: "<div><p>User 3</p></div>" },
    ],
  },
  {
    value: 'Number 2',
    info: '3 seats',
    periods: [
      { start: '2021-11-01', end: '2021-11-02', status: 'confirmed', displayText:'User 4', onHoverToolTip: "<div><p>User 4</p></div>" },
      { start: '2021-11-14', end: '2021-11-27', status: 'confirmed', displayText:'User 5', onHoverToolTip: "<div><p>User 5</p></div>" },
    ],
  },
];
```

#### Locale
<a name="locale"></a>

Locale can be either `en`, `ua` or `ru`:
```javascript
type LocaleKey = 'en' | 'ua' | 'ru';
```

#### Theme
<a name="theme"></a>

You can change appearance of the Reservation Grid. And you don't need to pass the entire theme: just pass keys you want to change.

Default theme:
```javascript
const THEME: Theme = {
  'font.face': 'sans-serif',
  'font.size': '14px',
  'color.text': '#30424F',
  'color.background': '#FFFFFF',
  'color.border': '#DDEBF3',
  'color.free': 'transparent',
  'color.awaiting': '#DDEBF3',
  'color.confirmed': '#006490',
  'color.paid': '#009074',
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

To set up dev environment:

1. Create link in root directory:
```
npm link
```

2. Go into example folder and link the package out to the root folder
```
cd example
npm link @jylopez/reservation-grid
```

That's it. You are now set up to develop. You just need to do the following steps everytime you make a change. (I know, it's annoying.)

1. Change something in the code.

2. `npm run build`

3. `cd example`

4. `npm run start`

## Publishing
<a name="publishing"></a>

```
npm login
npm publish --access public
```

## Publishing Demo to GitHub Pages
<a name="gh-pages"></a>

```
npm run deploy
```

It will build the demo application from `/example` folder and publish it via `gh-pages` package 

## License
<a name="license"></a>

[MIT](/LICENSE) © [Daminort](https://github.com/daminort)
