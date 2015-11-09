const React = require('react');
const classNames = require('classnames');

class Checkbox extends React.Component {
  static displayName = 'Checkbox'

  static propTypes = {
    id:            React.PropTypes.string,
    enabled:       React.PropTypes.bool,
    isChecked:     React.PropTypes.bool,
    required:      React.PropTypes.bool,
    error:         React.PropTypes.bool,
    onChange:      React.PropTypes.func,
    checkboxName:  React.PropTypes.string,
    checkboxLabel: React.PropTypes.string,
    label:         React.PropTypes.string,
    name:          React.PropTypes.string,
    value:         React.PropTypes.string
  }

  static defaultProps = {
    id:            '',
    enabled:       true,
    isChecked:     false,
    onChange:      function() {},
    checkboxName:  '',
    checkboxLabel: '',
    value:         ''
  }

  state = {
    isChecked: props.isChecked
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      isChecked: newProps.isChecked
    });
  }

  render() {
    return <span id={this.props.id} className={this._checkboxCSSClasses()}
        ref='checkbox' onClick={this._clickCheckBox} onTouchStart={this._toggleCheck}>
      <span className='stylized-checkbox' ref='stylizedCheckbox'></span>
      <label htmlFor={this.props.id} className="pt-checkbox-label" ref="label" style={this._getStyle()}>
        { this._label() }
        { this._icon() }
      </label>
      <input id={this.props.id}
        ref='nativeCheckbox'
        name={this._name()}
        value={this.props.value}
        type="checkbox"
        disabled={!this.props.enabled}
        className="pt-native-checkbox"
        checked={this._isChecked()}
        onChange={this._handleChange} />
    </span> ;
  }

  _getStyle() {
    if (!this.props.label && !this.props.checkboxLabel && !this.props.required){
      return {display: 'none'};
    }
    else {
      return {};
    }
  }
  _isChecked() {
    return this.state.isChecked;
  }

  _checkboxCSSClasses() {
    return classNames({
      'pt-checkbox': true,
      'is-error':    this.props.error,
      'is-required': this.props.required,
      'isChecked':   this.state.isChecked,
      'disabled':    !this.props.enabled
    });
  }

  _clickCheckBox = () => {
    if (this.props.enabled) {
      React.findDOMNode(this.refs.nativeCheckbox).click();
    }
  }

  _handleChange = (event) => {
    this.setState({isChecked: !this.state.isChecked});
    this.props.onChange(event);
  }

  _label() {
    // TODO remove checkboxLabel to conform to all other input interfaces
    if (this.props.checkboxLabel) { console.warn('checkboxLabel has been deprecated, please use label instead'); }

    return this.props.checkboxLabel || this.props.label;
  }

  _name() {
    // TODO remove checkboxName to conform to all other input interfaces
    if (this.props.checkboxName) { console.warn('checkboxName has been deprecated, please use name instead'); }

    return this.props.checkboxName || this.props.name;
  }

  _icon() {
    if (this.props.required) {
      return (
        <span className='required-icon ic ic-asterisk'></span>
      );
    }
  }
}

Checkbox.Group = React.createClass({
  getDefaultProps: function() {
    return {
      id:     '',
      layout: 'inline'
    };
  },

  propTypes: {
    id:     React.PropTypes.string,
    layout: React.PropTypes.string
  },

  render: function() {
    return <span className={'pt-checkbox-group ' + this.props.layout} id={this.props.id} ref='group'>
        {this.props.children}
      </span>;
  }
});

module.exports = Checkbox;
