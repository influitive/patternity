import React, { Component, PropTypes } from 'react';
import Quill from 'quill';

// Component File Template
export default class Toolbar extends Component {
  static propTypes = {

  };

  static defaultProps = {

  };

  render() {
    const children = this.props.items.map(this.renderItem);
    const html = children.map(React.renderToStaticMarkup).join('');

    return (
      <div className={ classes }>

      </div>
    );
  }

}
