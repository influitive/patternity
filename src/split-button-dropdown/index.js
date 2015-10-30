import React, { Component, PropTypes } from 'react';
import Button from '../button2';
import ButtonDropdown from '../button-dropdown';
import ButtonGroup from '../button-group';

class SplitButtonDropdown extends Component {
  static defaultProps = {
    buttonText:          ' ',
    icon:                '',
    type:                'primary',
    disabled:            false,
    style:               {},
    options:             [],
    onDropdownItemClick: () => {}
  }

  static propTypes = {
    buttonText:    PropTypes.string,
    icon:          PropTypes.string,
    type:          PropTypes.oneOf(['primary', 'secondary', 'important', 'success', 'danger', 'text']),
    onButtonClick: PropTypes.func.isRequired,
    disabled:      PropTypes.bool,
    style:         PropTypes.shape({
      borderColor: function(props, propName) {
        const { type } = props;
        if (type != 'secondary') {
          return new Error('Cannot use border with non-secondary type.');
        }
      }
    }),
    options:             PropTypes.array,
    onDropdownItemClick: PropTypes.func
  }

  render() {
    return (
      <ButtonGroup grouped={true}>
        <Button icon={this.props.icon}
          type={this.props.type}
          onClick={this.props.onButtonClick}
          disabled={this.props.disabled}>
          {this.props.buttonText}
        </Button>
        <ButtonDropdown type={this.props.type}
          options={this.props.options}
          alignDropdown='right'
          onChange={this.props.onDropdownItemClick}
          disabled={this.props.disabled}>
          {this.props.children}
        </ButtonDropdown>
      </ButtonGroup>
    );
  }
}

export default SplitButtonDropdown;
