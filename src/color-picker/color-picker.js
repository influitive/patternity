import React, { Component, PropTypes } from 'react';
import ReactColorPicker from 'react-color';
import Popover from '../../lib/popover';
import _ from 'lodash';

export default class ColorPicker extends Component {
  static propTypes = {
    /**
     * The color to be rendered in the color picker.
     */
    color:    PropTypes.any,
    /**
     * Callback is called when the color is changed. The color is in hex.
     */
    onChange: PropTypes.func,
    /**
     * The type of color picker. Popover will show a clickable color swatch.
     */
    type: PropTypes.oneOf(['popover', 'inline']),
    /**
     * Display popup or not. Only applicable for type:popover
     */
    isOpen:  PropTypes.bool,
    /**
     * Calls when clicking the swatch. Only applicable for type:popover
     */
    onSwatchClick:  PropTypes.func,
    /**
     * Positioning of popup ColorPicker. Only applicable for type:popover
     */
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    /**
     * Called when a click occurs outside of ColorPicker. Only applicable for type:popover
     */
    onClickOut: PropTypes.func

  };

  static defaultProps = {
    type:          'popover',
    color:         'purple',
    onChange:      () => {},
    isOpen:        false,
    onSwatchClick: () => {},
    position:      'bottom',
    onClickOut:    null
  };

  render() {
    if (this.props.type == 'inline' ) {
      return this._renderPicker();
    }

    return (
      <span>
        <Popover element={this._getSwatch()}
          position={this.props.position}
          isOpen={this.props.isOpen}
          onClickOut={this.props.onClickOut}>
          {this._renderPicker()}
        </Popover>
      </span>
    );
  }

  _renderPicker = () => {
    return (
      <ReactColorPicker
            type='chrome'
            color={this.props.color}
            display={true}
            onChangeComplete={this._handleChangeComplete}
            positionCSS={this.styles.colorPickerOverrides}/>
    );
  };

  _handleChangeComplete = (color) => {
    this.props.onChange('#' + color.hex);
  };

  styles = {
    color: {
      width: '36px',
      height: '14px',
      borderRadius: '2px'
    },
    swatch: {
      padding: '5px',
      background: '#fff',
      borderRadius: '1px',
      boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
      cursor: 'pointer'
    },
    colorPickerOverrides: {
      position: 'relative',
      left: '0px',
      marginLeft: '0px'
    }
  }


  _getSwatch = () => {
    return (
      <div style={this.styles.swatch} onClick={ this.props.onSwatchClick }>
        <div style={ _.extend( {}, this.styles.color, {background: this.props.color } ) }/>
      </div>
    );
  }
}
