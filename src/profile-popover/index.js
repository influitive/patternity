import React, { Component, PropTypes } from 'react';

import ProfilePopoverContent from './profile-popover-content';
import Popover from '../popover2';

class ProfilePopover extends Component {
  static PropTypes = {
    user:         PropTypes.object.isRequired,
    defaultImage: PropTypes.string,
    underAvatar:  PropTypes.node,
    onOpen:       PropTypes.func,
    loading:      PropTypes.bool,
    trigger:      PropTypes.node
  }

  state = {
    isOpen: false
  }

  render() {
    const { children, onOpen, trigger, user, defaultImage, underAvatar, loading } = this.props;

    return <div className={`profile-popover-wrapper${loading ? ' loader' : ''}`}>
      <Popover
          element={<span onClick={this.togglePopover}>{this.triggerLink()}</span>}
          onOpen={onOpen}
          position="bottom"
          isOpen={this.state.isOpen}>
        <ProfilePopoverContent user={user} defaultImage={defaultImage} underAvatar={underAvatar} loading={loading}>
          {children}
        </ProfilePopoverContent>
      </Popover>
    </div>;
  }

  triggerLink = () => {
    return this.props.trigger || <a className="profile-popover-link" href="javascript://">{this.props.user.name}</a>;
  }

  togglePopover = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}

export default ProfilePopover;
