import React, { Component } from 'react';

import ProfilePopoverContent from './profile-popover-content';
import Popover from '../popover.jsx';

class ProfilePopover extends Component {
  render() {
    const { user, defaultImage, children, underAvatar, onOpen, loading, trigger} = this.props;
    const triggerLink = () => trigger || <a href="javascript://">{user.name}</a>;

    return <Popover ref="profilePopover" className="profile-popover" autoclose={true} onOpen={onOpen}>
      {triggerLink()}
      <ProfilePopoverContent user={user} underAvatar={underAvatar} loading={loading}>
        {children}
      </ProfilePopoverContent>
    </Popover>;
  }
}

export default ProfilePopover;
