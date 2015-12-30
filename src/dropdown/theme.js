import { darken, lighten } from '../utils/colors.js';

export default function(theme) {
  const { themeColorPrimary } = theme;

  return {
    primary: {
      'background-color': themeColorPrimary + ' !important',
      '& .option': {
        'border-color': darken(themeColorPrimary, .1) + ' !important',
        '&:hover': {
          'background-color': lighten(themeColorPrimary, .1) + ' !important'
        }
      }
    }
  };
}
