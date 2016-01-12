import React, {Component} from 'react';
import _ from 'lodash';

export default class Row extends Component {
  render() {
    let {style, ...props} = this.props;
    return (
      <div
        className="pt-table-row" {...props}
        style={_.extend({ display: 'table-row', width: '100%'}, style)}>
      </div>
    );
  }
}
