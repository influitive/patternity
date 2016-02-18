import React, { Component, PropTypes } from 'react';
import DateTime from 'react-datetime';
import styles from '../../infl-styles/date-picker.css';

// This component really just extends react-datetime
// found at https://github.com/arqex/react-datetime.

export default class DatePicker extends Component {
  static props = {
    value:         PropTypes.any,
    defaultValue:  PropTypes.any,
    input:         PropTypes.bool,
    /**
     * The onchange event will be called with a date object
     * as the only parameter.
     **/
    onChange:      PropTypes.func,
    onBlur:        PropTypes.func,
    inputProps:    PropTypes.object,
    isValidDate:   PropTypes.func,
    closeOnSelect: PropTypes.bool,
    showTime:      PropTypes.bool
  }


  static defaultProps = {
    value:         '',
    defaultValue:  '',
    input:         true,
    onChange:      ()=>{},
    onBlur:        ()=>{},
    inputProps:    {},
    isValidDate:   ()=>{ return true;},
    showTime:      false,
    dateFormat:    'YYYY-MM-DD'
  }

  render() {
    const {showTime, isOpen, ...otherProps} = this.props;

    return <div className={styles.scope}>
      <DateTime
              timeFormat={showTime}
              {...otherProps}

      />
    </div>
  }
}
