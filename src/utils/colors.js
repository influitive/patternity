import Color from 'color';

export const darken = (color, amount) => Color(color).darken(amount).hexString();
export const lighten = (color, amount) => Color(color).lighten(amount).hexString();
