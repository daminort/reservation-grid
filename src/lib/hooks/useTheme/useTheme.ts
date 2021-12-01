import { Theme } from '../../interfaces/theme.interface';
import { useMainContext } from '../../context';

const useTheme = (): Theme => {
  const { theme } = useMainContext();
  return theme;
}

export {
  useTheme,
}
