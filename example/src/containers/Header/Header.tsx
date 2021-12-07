import React, { FC } from 'react';

import s from './Header.module.css';

const Header: FC = () => {

  return (
    <div className={s.container}>
      <h2>Reservation Grid</h2>
      <p>A modular grid that allows managing reservations for a hotel</p>
    </div>
  );
};

export {
  Header,
}
