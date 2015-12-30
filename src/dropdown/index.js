import React, { Component, PropTypes } from 'react';

import { ThemeComponent } from '../utils/themeable';
import mapping from './theme';

export class Dropdown extends Component {
  static propTypes = {
    ref:       PropTypes.string,
    classList: PropTypes.string,
    type:      PropTypes.string,
    children:  PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    onChange:  PropTypes.func,
    sheet:     PropTypes.object
  }

  static defaultProps = {
    children:  '',
    type:      '',
    classList: '',
    ref:       'dropdown',
    onChange:  () => {},
    sheet: { classes: {} }
  }

  render() {
    const { children, classList, ref } = this.props;
    console.log(this.props.sheet.classes);

    return (
      <ul className={this._getClasses(classList)} ref={ref}>
        {this._renderChildren(children)}
      </ul>
    );
  }

  _getClasses = (classList) => {
    const { classes } = this.props.sheet;
    return 'options ' + this.props.type  + ' ' + classList + classes[this.props.type];
  };

  _renderChildren = (children) => {
    if (children.length === 0) return null;

    return [].concat(children).map( (opt, i) => {
      return <li className="option" key={opt + '-' + i} ref={opt}>{opt}</li>
    });
  };
}

export default ThemeComponent(Dropdown, mapping);
