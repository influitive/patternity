import classNames from 'classNames';
import { includes } from 'lodash';

const buttonTypes = ['primary', 'secondary', 'important', 'success', 'danger', 'text'];
const { disabled, inverse, type, icon, children } = {
  disabled: false,
  inverse:  true,
  type:     'primary',
  icon:     'blue',
  children: []
};

const className = 'blah hi';

const classes = classNames({
    button:   true,
    disabled: disabled,
    iconButton: children && children.length === 0
  },
  className,
  icon && 'ic ic-' + icon,
  !disabled && {
    [type]:  (type && !includes(buttonTypes, type)),
    inverse: type === 'secondary' || type === 'text' && inverse
  },
);

console.log(classes);
