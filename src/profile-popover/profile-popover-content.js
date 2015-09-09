import React, { Component, PropTypes } from 'react';
import { compact } from 'lodash';

import Avatar from '../avatar';

// import styles from './_profile-popup.scss';

class ProfilePopoverContent extends Component {
  displayName = 'ProfilePopup'

  static propTypes = {
    user:        PropTypes.object.isRequired,
    underAvatar: PropTypes.node,
    loading:     PropTypes.bool
  }

  render() {
    const { user, children, underAvatar, loading, defaultImage } = this.props;
    const position = () => compact([user.title, user.company]).join(' at ');

    if (loading) return <div className="popover-user-profile">...</div>;

    return <div className="popover-user-profile">
      <div className="user-profile">
        <div className="user-profile-info">
          <div className="user-image">
            <Avatar src={user.small} defaultImage={defaultImage}/>
            {underAvatar}
          </div>
          <div className="user-detail">
            <span className="user-name">{user.name}</span>
            <span className="user-position">{position()}</span>
          </div>
        </div>
        {children}
      </div>
    </div>;
  }
}

export default ProfilePopoverContent;
