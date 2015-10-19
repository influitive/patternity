import React, { Component, PropTypes } from 'react';
import Button from '../button2';
import ButtonDropdown from '../button-dropdown';
import ButtonGroup from '../button-group';

class SplitButtonDropdown extends Component {
  static defaultProps = {
    icon:                 '',
    type:                 'primary',
    disabled:             false,
    style:                {},
    options:              [],
    onDropdownItemSelect: () => {}
  }

  static propTypes = {
    icon:           PropTypes.string,
    type:           PropTypes.oneOf(['primary', 'secondary', 'important', 'success', 'danger', 'text']),
    onPrimaryClick: PropTypes.func.isRequired,
    disabled:       PropTypes.bool,
    style:          PropTypes.shape({
      borderColor: function(props, propName) {
        const { type } = props;
        if (type != 'secondary') {
          return new Error('Cannot use border with non-secondary type.');
        }
      }
    }),
    options:              PropTypes.array,
    onDropdownItemSelect: PropTypes.func
  }

  render() {
    return (
      <ButtonGroup grouped={true}>
        <Button icon={this.getIcon()}
          type={this.props.type}
          onClick={this.props.onPrimaryClick}
          disabled={this.props.disabled}/>
        <ButtonDropdown type={this.props.type}
          options={this.props.options}
          alignDropdown='right'
          onChange={this.props.onDropdownItemSelect}
          disabled={this.props.disabled}/>
      </ButtonGroup>
    );
  }
}

export default SplitButtonDropdown;
