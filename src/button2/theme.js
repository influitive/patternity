import { darken, lighten } from '../utils/colors.js';

export default function(theme) {
  const { themeColorPrimary } = theme;

  return {
    primary: {
      'background-color': themeColorPrimary + ' !important',
      'border-color': darken(themeColorPrimary, .1) + ' !important',
      'box-shadow': `0px 2px ${darken(themeColorPrimary, .25)} !important`,
      '&:hover': {
        'background-color': lighten(themeColorPrimary, .1) + ' !important',
        'box-shadow': `0px 2px ${themeColorPrimary} !important`
      }
    }
  }
}
