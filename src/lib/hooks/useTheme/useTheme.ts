import { Theme } from 'lib/interfaces/theme.interface';
import { useMainContext } from 'lib/context';

const useTheme = (): Theme => {
  const { theme } = useMainContext();
  return theme;
}

export {
  useTheme,
}
