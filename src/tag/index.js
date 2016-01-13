import { Component } from 'react';

import './tag.scss';

export default class Tag extends Component {

  getClassNames = () => {
    return 'pt-tag';
  }

  render() {
    return <span className={this.getClassNames()}>{this.props.children}</span>
  }
}
