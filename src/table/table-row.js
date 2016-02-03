import React, {Component} from 'react';
import classnames from 'classnames';
import classes from 'style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]!./table.css';

export default class Row extends Component {
  render() {
    let {style, className, ...props} = this.props;
    return (
      <div
        className={classnames('pt-table-row', classes.row, className)} {...props}
        style={ style }>
      </div>
    );
  }
}
