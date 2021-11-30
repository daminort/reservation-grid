import { Theme } from '../../interfaces/theme.interface';
import { THEME } from '../../constants/theme';

function createTheme(customTheme: Partial<Theme> = {}): Theme {
  return {
    ...THEME,
    ...customTheme,
  }
}

function setVariables(customTheme: Theme): void {

  const root = document.documentElement;

  Object.entries(customTheme).forEach((entry) => {
    const [key, value] = entry;
    const variable = `--knd-${key.replace('.', '-')}`;
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
