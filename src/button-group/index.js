import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class ButtonGroup extends Component {

  static defaultProps = {
    layout:    'inline',
    grouped:   false,
    classList: ''
  };

  static propTypes = {
    layout:    PropTypes.oneOf(['inline', 'stacked']),
    grouped:   PropTypes.bool,
    classList: PropTypes.string,
  };

  render() {
    return(
      <div className={this._returnClasses()} ref='buttonGroup'>
        {this.props.children}
      </div>
    );
  };

  _returnClasses = () => {
    const { layout, grouped, classList } = this.props;
    const layoutGroup = grouped ? layout + '-grouped' : layout;

    return classNames('button-group ', layoutGroup, classList);
  };

};
