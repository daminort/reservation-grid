import { Theme } from '../../interfaces/theme.interface';
import { THEME } from '../../constants/theme';
import { styleUtils } from './index';

describe('styleUtils', () => {

  const customTheme: Partial<Theme> = {
    'font.face': 'arial',
    'font.size': '16px',
  };

  describe('createTheme', () => {

    it('correct input', () => {
      const theme: Theme = styleUtils.createTheme(customTheme);

      expect(theme['font.face']).toEqual('arial');
      expect(theme['font.size']).toEqual('16px');
    });

    it('empty input', () => {
      const theme: Theme = styleUtils.createTheme();
      expect(theme).toEqual(THEME);
    });

  });

});
