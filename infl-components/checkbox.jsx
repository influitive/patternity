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
      checkboxLabel : "",
      value : ""
    };
  },
  propTypes : {
    id: React.PropTypes.string,
    enabled: React.PropTypes.bool,
    isChecked: React.PropTypes.bool,
    onChange : React.PropTypes.func,
    checkboxName : React.PropTypes.string,
    checkboxLabel : React.PropTypes.string,
    value : React.PropTypes.string
  },
  componentWillReceiveProps: function (newProps) {
    this.setState({
      isChecked: newProps.isChecked
    });
  },
  render : function(){
    return (
      <span id={this.props.id} className={this._checkboxCSSClasses()} ref="checkbox" onClick={this._clickCheckBox} onTouchStart={this._toggleCheck}>
        <span className="stylized-checkbox" ref="stylizedCheckbox"></span>
        <span className="pt-checkbox-label" ref="label">{this.props.checkboxLabel}</span>
        <input disabled={!this.props.enabled} type="checkbox" ref="nativeCheckbox" className="pt-native-checkbox" value={this.props.value} checked={this._isChecked()} name={this.props.checkboxName} onChange={this._handleChange} id={this.props.id} />
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
      React.findDOMNode(this.refs.nativeCheckbox).click();
    }
  },
  _handleChange : function(event){
    this.setState({isChecked: !this.state.isChecked});
    this.props.onChange(event);
  }
});

Checkbox.Group = React.createClass({
    getDefaultProps: function() {
    return {
      id: "",
      layout : "inline"
    };
  },
  propTypes : {
    id: React.PropTypes.string,
    layout : React.PropTypes.string
  },
  render : function(){
    return (
      <span className={"pt-checkbox-group " + this.props.layout} id={this.props.id} ref="group">
        {this.props.children}
      </span>
    );
  }
});

module.exports = Checkbox;
