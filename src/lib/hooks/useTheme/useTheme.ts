import type { TTheme } from 'lib/interfaces/theme.interface';
import { THEME } from 'lib/constants/theme';
import { useMainContext } from 'lib/context';

const useTheme = (): TTheme => {
  const { theme } = useMainContext();
  return theme || THEME;
};

export {
  useTheme,
};
