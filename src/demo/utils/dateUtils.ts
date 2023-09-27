import { format, startOfMonth, endOfMonth } from 'date-fns';

function createStartEnd(year: number, month: number) {
  const date = new Date(year, month - 1, 1);

  return {
    start: format(startOfMonth(date), 'yyyy-MM-dd'),
    end: format(endOfMonth(date), 'yyyy-MM-dd'),
  };
}

export {
  createStartEnd,
};
