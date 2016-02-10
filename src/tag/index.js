import React, { Component, PropTypes } from 'react';
import Icon from '../../lib/icon';

export default class Tag extends Component {
  static props = {
    unTag: PropTypes.func
  }

  static defaultProps = {
    unTag: () => {}
  }

  render() {
    const { tag } = this.props;

    return (
      <li key={tag} className="pt-tag">
      {tag}
        <span className='pt-tag-close' onClick={this._unTag}>
          <Icon icon='close' />
        </span>
      </li>
    );
  }

  _unTag = () => {
    const { tag, id } = this.props;
    this.props.unTag(id || tag)
  };
}
