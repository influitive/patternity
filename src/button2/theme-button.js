import { darken, lighten } from '../utils/colors.js';
import { ThemeComponent } from '../utils/themeable';
import Button from './index.js';

function mapping(theme) {
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


export default ThemeComponent(Button, mapping);
