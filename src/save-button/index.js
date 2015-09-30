import React, { Component, PropTypes } from 'react';

// import styles from './_save-button.scss';

class SaveButton extends Component {
  static propTypes = {
    saveStatus: PropTypes.oneOf(['unsaved', 'saved', 'saving', 'error']),
    onClick:    Proptypes.func
  }

  render() {
    const { saveStatus, onClick } = this.props;
    const text = (saveStatus) => {
      return {
        'error': 'Error',
        'saved': 'Saved'
      }[saveStatus] || 'Save';
    }
    return <button onClick={onClick} className={`pt-savebutton ${saveStatus}`}>
      {text(saveStatus)}
    </button>;
  }
}

export default SaveButton;
