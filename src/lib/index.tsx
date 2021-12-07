import React, { FC } from 'react';

import { Grid, GridProps } from 'lib/components/Grid';

const ReservationGrid: FC<GridProps> = (props) => {
  return (
    <Grid {...props} />
  );
};

export default ReservationGrid;
export {
  ReservationGrid,
  GridProps,
}
