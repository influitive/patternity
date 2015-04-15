var React = require('react');
var classNames = require('classnames');

var Checkbox = React.createClass({
  getInitialState: function () {
    return {
      isChecked: this.props.isChecked
    };
  },
  getDefaultProps: function() {
    return {
      id: "",
      enabled: true,
      isChecked : false,
      onChange: function(){},
      checkboxName : "",
      checkboxLabel : ""
    };
  },
  propTypes : {
    id: React.PropTypes.string,
    enabled: React.PropTypes.bool,
    isChecked: React.PropTypes.bool,
    onChange : React.PropTypes.func,
    checkboxName : React.PropTypes.string,
    checkboxLabel : React.PropTypes.string
  },
  componentWillReceiveProps: function (newProps) {
    this.setState({
      isChecked: newProps.isChecked
    });
  },
  render : function(){
    return (
      <span id={this.props.id} className={this._checkboxCSSClasses()} onClick={this._clickCheckBox} onTouchStart={this._toggleCheck}>
        <span className="stylized-checkbox"></span>
        <span className="pt-checkbox-label">{this.props.checkboxLabel}</span>
        <input type="checkbox" ref="checkbox" className="pt-native-checkbox" checked={this._isChecked()} name={this.props.checkboxName} onChange={this._handleChange} id={this.props.id} />
      </span>
    );
  },
  _isChecked : function(){
    return this.state.isChecked;
  },
  _checkboxCSSClasses : function(){
    return classNames({
      'pt-checkbox': true,
      'isChecked': this.state.isChecked,
      'disabled': !this.props.enabled
    });
  },
  _clickCheckBox : function(){
    if(this.props.enabled){
      this.refs.checkbox.getDOMNode().click();
    }
  },
  _handleChange : function(event){
    this.setState({isChecked: !this.state.isChecked});
    this.props.onChange(event);
  }
});

module.exports = Checkbox;
