import React, {Component} from 'react';
import _ from 'lodash';

export default class Cell extends Component {
  render() {
    let {style, ...props} = this.props;
    return (
      <div className="pt-table-cell" {...props} style={_.extend({}, style, { display: 'table-cell', verticalAlign: 'middle'})}>
      </div>
    );
  }
}
