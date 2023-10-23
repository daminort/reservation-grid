const types = `import { ReservationGrid } from '@daminort/reservation-grid';
import type { TTheme, TRow, TGridProps } from '@daminort/reservation-grid';

type TCustomStatus = 'reserved' | 'renovation';

type TGridRow = TRow<TCustomStatus>;
type TMainTheme = TTheme<TCustomStatus>;

const props: TGridProps<TCustomStatus> = %PROPS%;

const Grid = () => {
  return (
    <ReservationGrid {...props} />
  );
};
`;

const createCode = (props: string) => {
  return types.replace('%PROPS%', props);
};

export {
  createCode,
};
