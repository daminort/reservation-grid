import type { TTheme } from 'lib/interfaces/theme.interface';
import { THEME } from 'lib/constants/theme';

function createTheme(customTheme: Partial<TTheme> = {}): TTheme {
  return {
    ...THEME,
    ...customTheme,
  };
}

function setVariables(customTheme: TTheme): void {

  const root = document.documentElement;

  Object.entries(customTheme).forEach((entry) => {
    const [key, value] = entry;
    const variable = `--rvg-${key.replace('.', '-')}`;
    root.style.setProperty(variable, value);
  });
}

const styleUtils = {
  createTheme,
  setVariables,
};

export {
  styleUtils,
};
