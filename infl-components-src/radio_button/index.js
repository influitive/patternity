const React = require('react');
const classNames = require('classnames');

class RadioButton extends React.Component {
  static displayName = 'RadioButton'

  static propTypes = {
    id:         React.PropTypes.string,
    enabled:    React.PropTypes.bool,
    isChecked:  React.PropTypes.bool,
    onChange:   React.PropTypes.func,
    radioName:  React.PropTypes.string,
    radioLabel: React.PropTypes.string,
    value:      React.PropTypes.string
  }

  static defaultProps = {
    id:         '',
    enabled:    true,
    isChecked:  false,
    onChange:   function() {},
    radioName:  '',
    radioLabel: '',
    value:      ''
  }

  state = {
    isChecked: this.props.isChecked
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      isChecked: newProps.isChecked
    });
  }

  render() {
    return <span id={this.props.id} className={this._radioCSSClasses()} onClick={this._clickRadioButton} ref="radioButton">
      <input disabled={!this.props.enabled}
          type="radio"
          ref="nativeRadioButton"
          checked={this.state.isChecked}
          value={this.props.value}
          className="pt-native-radio-button"
          name={this.props.radioName}
          onChange={this._handleChange} />
      <span className="stylized-radio-button" ref="stylizedRadioButton"></span>
      <span className="pt-radio-label" ref="label">{this.props.radioLabel}</span>
    </span>;
  }

  _radioCSSClasses() {
    return classNames({
      'pt-radio-button': true,
      'disabled':        !this.props.enabled
    });
  }

  _clickRadioButton = () => {
    if (this.props.enabled) {
      React.findDOMNode(this.refs.nativeRadioButton).click();
    }
  }

  _handleChange = (event) => {
    this.props.onChange(event);
  }
}

RadioButton.Group = React.createClass({
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
    return <span className={'pt-radio-button-group ' + this.props.layout} id={this.props.id} ref='radioButtonGroup'>
        {this.props.children}
      </span>;
  }
});

export default RadioButton;
