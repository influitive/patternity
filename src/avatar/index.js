import React, { Component, PropTypes } from 'react';

// import styles from './_avatar.scss';

class Avatar extends Component {
  displayName = 'Avatar'

  static propTypes = {
    defaultImage: PropTypes.string,
    src:          PropTypes.string,
    inline:       PropTypes.bool
  }

  static defaultProps = {
    defaultImage: '/assets/contacts/thumb/missing.png', // change to patternity image
  }

  render() {
    const { defaultImage, inline, src } = this.props;

    return <img className={`avatar-image${inline ? ' inline' : ''}`} src={src || defaultImage} />;
  }
}

export default Avatar;
