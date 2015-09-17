import React, { Component, PropTypes } from 'react';

import ProfilePopoverContent from './profile-popover-content';
import Tooltip from '../tooltip.jsx';

class ProfilePopover extends Component {
  static PropTypes = {
    user:         PropTypes.object.isRequired,
    defaultImage: PropTypes.string,
    underAvatar:  PropTypes.node,
    onOpen:       PropTypes.func,
    loading:      PropTypes.bool,
    trigger:      PropTypes.node
  }

  render() {
    const { children, onOpen, trigger, user, defaultImage, underAvatar, loading } = this.props;
    const triggerLink = () => trigger || <a className="profile-popover-link" href="javascript://">{user.name}</a>;

    return <div className={`profile-popover-wrapper${loading ? ' loader' : ''}`}>
      <Tooltip element={triggerLink()} onOpen={onOpen} position="bottom" dontHover={true}>
        <ProfilePopoverContent user={user} defaultImage={defaultImage} underAvatar={underAvatar} loading={loading}>
          {children}
        </ProfilePopoverContent>
      </Tooltip>
    </div>;
  }
}

export default ProfilePopover;
