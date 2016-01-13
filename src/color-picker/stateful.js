import React, { Component, PropTypes } from 'react';
import ColorPicker from './color-picker';

export default class StatefulColorPicker extends Component {
  static propTypes = {
    /**
     * The initial color to be rendered in the color picker.
     */
    initialColor:    PropTypes.any,
    /**
     * Callback is called when the color is changed.
     */
    onChange: PropTypes.func,
    /**
     * Positioning of popup ColorPicker.
     */
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])

  };

  static defaultProps = {
    initialColor:    '',
    onChange: () => {},
    position: 'bottom'
  };

  state = {
    isOpen: false
  };

  render() {
    const color = this.state.color ? this.state.color : this.props.initialColor;
    return (
      <ColorPicker
        isOpen={this.state.isOpen}
        color={color}
        onChange={this._handleChange}
        onSwatchClick={this._onSwatchClick}
        position={this.props.position}
        onClickOut={this._onClickOut}/>
    );
  }

  _onSwatchClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  _handleChange = (color) => {
    this.setState({
      color: color
    });
    if (this.props.onChange) {
      this.props.onChange(color);
    }
  };

  _onClickOut = () => {
    this.setState({
      isOpen: false
    });
  }
}
