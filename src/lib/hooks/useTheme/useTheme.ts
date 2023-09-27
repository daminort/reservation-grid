import type { Theme } from 'lib/interfaces/theme.interface';
import { THEME } from 'lib/constants/theme';
import { useMainContext } from 'lib/context';

const useTheme = (): Theme => {
  const { theme } = useMainContext();
  return theme || THEME;
};

export {
  useTheme,
};
