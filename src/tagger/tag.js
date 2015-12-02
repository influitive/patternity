import React, { Component, PropTypes } from 'react';

export default class Tag extends Component {
  render() {
    const { tag } = this.props;

    return (
      <li key={tag} className="pt-tagger-tag">
        {tag}
        <span className="icon" onClick={this._unTag} >&times;</span>
      </li>
    );
  };

  _unTag = () => {
    this.props.unTag(this.props.tag)
  };
}
