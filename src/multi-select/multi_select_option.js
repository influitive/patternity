const React = require('react');

class MultiSelectOption extends React.Component {
  static displayName = 'MultiSelectOption'

  static propTypes = {
    name:             React.PropTypes.string.isRequired,
    onClick:          React.PropTypes.func.isRequired,
    optionIsSelected: React.PropTypes.bool.isRequired,
    filteredOption:   React.PropTypes.bool.isRequired,
    onOptionHasFocus: React.PropTypes.func.isRequired,
    focusedOption:    React.PropTypes.object.isRequired,

    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  }

  static defaultProps = {
    value: ''
  }
  render() {
    return <span
      className={`pt-multi-select-option ${this._isOptionSelected()} ${this._doesOptionHaveFocus()}`}
      onClick={this._handleClick}
      onMouseOver={this._handleMouseOver}
      onMouseOut={this._handleMouseOut} >
        {this.props.name}
    </span>;
  }

  _isOptionSelected() {
    return this.props.optionIsSelected || this.props.filteredOption ? 'hide' : '';
  }

  _doesOptionHaveFocus() {
    if (this.props.name === this.props.focusedOption.name && this.props.value === this.props.focusedOption.value) {
      return 'has-focus';
    } else {
      return '';
    }
  }

  _handleClick = (event) => {
    event.stopPropagation();

    this.props.onClick({
      name:  this.props.name,
      value: this.props.value
    });
  }

  _handleMouseOver = () => {
    this.props.onOptionHasFocus({
      name:  this.props.name,
      value: this.props.value
    });
  }

  _handleMouseOut = () => {
    this.props.onOptionHasFocus({});
  }
}

export default MultiSelectOption;
