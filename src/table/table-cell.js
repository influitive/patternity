import React, {Component} from 'react';
import classnames from 'classnames';

export default class Cell extends Component {

  render() {
    let {className, ...props} = this.props;

    return (
      <div className={classnames('pt-table-cell', className)} {...props}>
      </div>
    );
  }
}
