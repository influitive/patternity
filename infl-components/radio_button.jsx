var React = require('react');
var classNames = require('classnames');

// var RadioButton = React.createClass({
//   getDefaultProps: function() {
//     return {
//       id: "",
//       enabled: true,
//       isChecked : false,
//       onChange: function(){},
//       radioName : "",
//       radioLabel : "",
//       value : ""
//     };
//   },
//   propTypes : {
//     id: React.PropTypes.string,
//     enabled: React.PropTypes.bool,
//     isChecked: React.PropTypes.bool,
//     onChange : React.PropTypes.func,
//     radioName : React.PropTypes.string,
//     radioLabel : React.PropTypes.string,
//     value : React.PropTypes.string
//   },
//   getInitialState: function () {
//     return {
//       isChecked: this.props.isChecked
//     };
//   },
//   componentWillReceiveProps: function (newProps) {
//     this.setState({
//       isChecked: newProps.isChecked
//     });
//   },
//   render : function(){
//     // return (
//     //   <span id={this.props.id} className={this._checkboxCSSClasses()} onClick={this._clickCheckBox} onTouchStart={this._toggleCheck}>
//     //     <span className="stylized-radio-button"></span>
//     //     <span className="pt-radio-label">{this.props.radioLabel}</span>
//     //     <input disabled={!this.props.enabled} type="radio" ref="radio" value={this.props.value} className="pt-native-radio-button" checked={this._isChecked()} name={this.props.radioName} onChange={this._handleChange} id={this.props.id} />
//     //   </span>
//     // );
//     return (
//       <span id={this.props.id} className={this._checkboxCSSClasses()}>
//         <span className="stylized-radio-button"></span>
//         <span className="pt-radio-label">{this.props.radioLabel}</span>
//         <input disabled={!this.props.enabled} type="radio" ref="radio" value={this.props.value} className="pt-native-radio-button" checked={this._isChecked()} name={this.props.radioName} onChange={this._handleChange} id={this.props.id} />
//       </span>
//     );
//   },
//   _isChecked : function(){
//     return this.state.isChecked;
//   },
//   _checkboxCSSClasses : function(){
//     return classNames({
//       'pt-radio-button': true,
//       'isChecked': this.state.isChecked,
//       'disabled': !this.props.enabled
//     });
//   },
//   _clickCheckBox : function(){
//     if(this.props.enabled){
//       this.refs.radio.getDOMNode().click();
//     }
//   },
//   _handleChange : function(event){
//     this.setState({isChecked: !this.state.isChecked});
//     this.props.onChange(event);
//   }
// });

var RadioButton = React.createClass({
  getDefaultProps: function() {
    return {
      id: "",
      enabled: true,
      isChecked : false,
      onChange: function(){},
      radioName : "",
      radioLabel : "",
      value : ""
    };
  },
  propTypes : {
    id: React.PropTypes.string,
    enabled: React.PropTypes.bool,
    isChecked: React.PropTypes.bool,
    onChange : React.PropTypes.func,
    radioName : React.PropTypes.string,
    radioLabel : React.PropTypes.string,
    value : React.PropTypes.string
  },
  componentWillReceiveProps: function (newProps) {
    this.setState({
      isChecked: newProps.isChecked
    });
  },
  render : function(){
    return (
      <span id={this.props.id} className={this._checkboxCSSClasses()} onClick={this._clickCheckBox}>
        <input disabled={!this.props.enabled} type="radio" ref="radio" defaultChecked={this.props.isChecked} value={this.props.value} className="pt-native-radio-button"  name={this.props.radioName} onChange={this._handleChange} id={this.props.id} />
        <span className="stylized-radio-button"></span>
        <label className="pt-radio-label" htmlFor={this.props.id}>{this.props.radioLabel}</label>
      </span>
    );
  },
  _checkboxCSSClasses : function(){
    return classNames({
      'pt-radio-button': true,
      'disabled': !this.props.enabled
    });
  },
  _clickCheckBox : function(){
    if(this.props.enabled){
      this.refs.radio.getDOMNode().click();
    }
  },
  _handleChange : function(event){
    this.props.onChange(event);
  }
});

module.exports = RadioButton;
