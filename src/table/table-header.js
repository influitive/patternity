import React, {Component} from 'react';
import _ from 'lodash';

export default class Header extends Component {
  render() {
    let {style, ...props} = this.props;
    return (
      <div {...props} style={_.extend({}, style, { display: 'table-header-group', width: '100%'})}>
      </div>
    );
  }
}
