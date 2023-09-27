import type { TTheme } from 'lib/interfaces/theme.interface';
import { THEME } from 'lib/constants/theme';
import { styleUtils } from './index';

describe('styleUtils', () => {

  const customTheme: Partial<TTheme> = {
    'font.face': 'arial',
    'font.size': '16px',
  };

  describe('createTheme', () => {

    it('correct input', () => {
      const theme: TTheme = styleUtils.createTheme(customTheme);

      expect(theme['font.face']).toEqual('arial');
      expect(theme['font.size']).toEqual('16px');
    });

    it('empty input', () => {
      const theme: TTheme = styleUtils.createTheme();
      expect(theme).toEqual(THEME);
    });

  });

  describe('setVariables', () => {

    it('default theme', () => {
      const theme = styleUtils.createTheme();
      styleUtils.setVariables(theme);

      const fontFace = document.documentElement.style.getPropertyValue('--rvg-font-face');
      const fontSize = document.documentElement.style.getPropertyValue('--rvg-font-size');

      expect(fontFace).toEqual('sans-serif');
      expect(fontSize).toEqual('14px');
    });

    it('custom theme', () => {
      const theme = styleUtils.createTheme(customTheme);
      styleUtils.setVariables(theme);

      const fontFace = document.documentElement.style.getPropertyValue('--rvg-font-face');
      const fontSize = document.documentElement.style.getPropertyValue('--rvg-font-size');

      expect(fontFace).toEqual('arial');
      expect(fontSize).toEqual('16px');
    });

  });

});
