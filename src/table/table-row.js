import React, {Component} from 'react';
import _ from 'lodash';

export default class Row extends Component {
  render() {
    let {style, ...props} = this.props;
    return (
      <div {...props} style={_.extend({}, style, { display: 'table-row', width: '100%'})}>
      </div>
    );
  }
}
