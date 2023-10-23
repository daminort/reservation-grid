import type { TTheme } from 'lib/interfaces/theme.interface';
import { THEME } from 'lib/constants/theme';

function createTheme<TCustomStatus extends string = ''>(customTheme: Partial<TTheme<TCustomStatus>> = {}): TTheme<TCustomStatus> {
  return {
    ...THEME,
    ...customTheme,
  };
}

function setVariables<TCustomStatus extends string = ''>(customTheme: TTheme<TCustomStatus>): void {

  const root = document.documentElement;

  for (const entry of Object.entries(customTheme)) {
    const [key, value] = entry;
    if (key === 'date.status') {
      continue;
    }

    const variable = `--rvg-${key.replace('.', '-')}`;
    root.style.setProperty(variable, value);
  }

  for (const entry of Object.entries(customTheme['date.status'])) {
    const [key, value] = entry;
    const variable = `--rvg-date-status-${key}`;
    root.style.setProperty(variable, value);
  }
}

const styleUtils = {
  createTheme,
  setVariables,
};

export {
  styleUtils,
};
