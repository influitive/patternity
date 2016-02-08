import React, {Component} from 'react';
import classnames from 'classnames';
import classes from 'css?modules!./table.css';

export default class Header extends Component {
  render() {
    let {className, ...props} = this.props;
    return (
      <div
        className={classnames('pt-table-header',classes.row, className)} {...props}>
      </div>
    );
  }
}
