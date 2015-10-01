import React, { Component, PropTypes } from 'react';

// import styles from './_save-button.scss';
import Button2 from '../button2';

class SaveButton extends Component {
  static propTypes = {
    saveStatus: PropTypes.oneOf(['unsaved', 'saved', 'saving', 'error']).isRequired,
    onClick:    PropTypes.func
  }

  render() {
    const { saveStatus, onClick } = this.props;
    const status = this.buttonStatus();
    return <Button2 className="pt-save-button"
      onClick={onClick}
      type={status.type}
      icon={status.icon}>
      {status.text}
    </Button2>;
  }

  buttonStatus = () => {
    const { saveStatus } = this.props;
    return {
      'error':   { text: 'Error', type: 'danger', icon: 'exclamation-circle-o' },
      'saved':   { text: 'Saved', type: 'success', icon: 'check-circle-o' },
      'unsaved': { text: 'Save', type: 'primary' },
      'saving':  { text: 'Saving', type: 'primary', icon: 'circle-empty' }
    }[saveStatus];
  }
}

export default SaveButton;
