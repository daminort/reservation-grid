import type { TTheme } from 'lib/interfaces/theme.interface';
import { THEME } from 'lib/constants/theme';
import { useMainContext } from 'lib/context';

function useTheme<TCustomStatus extends string = ''>(): TTheme<TCustomStatus> {
  const { theme } = useMainContext();
  return theme || THEME;
}

export {
  useTheme,
};
