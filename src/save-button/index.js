import React, { Component, PropTypes } from 'react';
import { forIn } from 'lodash';

// import styles from './_save-button.scss';
import Button2 from '../button2';

class SaveButton extends Component {
  static propTypes = {
    saveStatus: PropTypes.oneOf(['unsaved', 'saved', 'saving', 'error']).isRequired,
    onClick:    PropTypes.func,

    customText: PropTypes.shape({
      unsaved: PropTypes.string,
      saved:   PropTypes.string,
      saving:  PropTypes.string,
      error:   PropTypes.string
    })
  }

  render() {
    const { saveStatus, onClick } = this.props;
    const status = this.buttonStatus();
    return <span className="pt-save-button">
      <Button2
        onClick={onClick}
        type={status.type}
        icon={status.icon}>
        {status.text}
      </Button2>
    </span>
  }

  buttonStatus = () => {
    const { saveStatus, customText  } = this.props;
    const defaultButtonState = {
      'error':   { text: 'Error', type: 'danger', icon: 'exclamation-circle-o' },
      'saved':   { text: 'Saved', type: 'success', icon: 'check-circle-o' },
      'unsaved': { text: 'Save', type: 'primary' },
      'saving':  { text: 'Saving', type: 'primary', icon: 'circle-empty' }
    };

    forIn(customText, (value, key) => {
      defaultButtonState[key].text = value;
    });

    return defaultButtonState[saveStatus];
  }
}

export default SaveButton;
