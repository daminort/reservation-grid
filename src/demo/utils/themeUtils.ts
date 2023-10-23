import { THEME } from 'lib/index';

import type { TMainTheme } from 'demo/interfaces/common.interface';

function createTheme(): TMainTheme {
  return {
    ...THEME,
    'date.status': {
      ...THEME['date.status'],
      reserved: '#93F6A0',
      renovation: '#CEC3FA',
    },
  };
}

const themeUtils = {
  //
  createTheme,
};

export {
  themeUtils,
};
