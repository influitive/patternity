import React, { Component, PropTypes } from 'react';

import { ThemeComponent } from '../utils/themeable';
import mapping from './theme';
import classnames from 'classnames';

export class Dropdown extends Component {
  static propTypes = {
    ref:       PropTypes.string,
    classList: PropTypes.string,
    type:      PropTypes.string,
    children:  PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.node]),
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
    const { children, ref } = this.props;
    
    return (
      <ul className={this._getClasses()} ref={ref}>
        {this._renderChildren(children)}
      </ul>
    );
  }

  _getClasses = () => {
    const { classes, classList} = this.props.sheet;
    const themeClass = classes[this.props.type];
    return classnames('options', this.props.type, classList, themeClass);
  };

  _renderChildren = (children) => {
    if (React.Children.count(children) === 0) return null;

    return React.Children.map(children, (opt, i) => {
      return <li className="option" key={opt + '-' + i} ref={opt}>{opt}</li>
    });
  };
}

export default ThemeComponent(Dropdown, mapping);
