var React = require('react');
var classNames = require('classnames');

class ToggleSwitch extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._clickCheckBox = this._clickCheckBox.bind(this);
    this._handleChange = this._handleChange.bind(this);

    this.state = {
      isOn: props.isOn
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      isOn: newProps.isOn
    });
  }

  render() {
    return (
      <span id={this.props.id} className={this._switchCSSClasses()} onClick={this._clickCheckBox} >
        <span className="toggle-text">{this._toggleText()}</span>
        <span className="switch">
          <span className="switch-line"></span>
          <span className="switch-line"></span>
          <span className="switch-line"></span>
        </span>
        <input type="checkbox" ref="checkbox" className="toggle-checkbox" checked={this._isChecked()} name={this.props.inputName} onChange={this._handleChange} id={this.props.id} />
      </span>
    );
  }

  _toggleText() {
    return this.state.isOn ? "On" : "Off";
  }

  _isChecked() {
    return this.state.isOn;
  }

  _switchCSSClasses() {
    return classNames({
      'toggle-switch': true,
      'on': this.state.isOn,
      'off': !this.state.isOn,
      'disabled': !this.props.enabled
    });
  }

  _clickCheckBox(event) {
    event.preventDefault();
    event.stopPropagation();
    if(this.props.enabled){
      React.findDOMNode(this.refs.checkbox).click();
    }
  }

  _handleChange(event) {
    this.setState({isOn: !this.state.isOn});
    this.props.onChange(event);
  }
}

ToggleSwitch.defaultProps = {
  id: "",
  enabled: true,
  isOn : false,
  onChange: function(){},
  inputName : ""
};

ToggleSwitch.displayName = 'ToggleSwitch';

ToggleSwitch.propTypes = {
  id: React.PropTypes.string,
  enabled: React.PropTypes.bool,
  isOn: React.PropTypes.bool,
  onChange : React.PropTypes.func,
  inputName : React.PropTypes.string
};

module.exports = ToggleSwitch;
