var React = require('react');

var SelectDropdown = React.createClass({
  getDefaultProps: function() {
    return {
      name : "",
      value : "",
      disabled : false,
      children : [],
      onChange : function(){},
      message : "",
      id : ""
    };
  },
  propTypes : {
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    disabled :  React.PropTypes.bool,
    children: React.PropTypes.array,
    onChange : React.PropTypes.func,
    message : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array
    ]),
    id: React.PropTypes.string
  },
  componentDidMount: function () {
    this._setTitle();
  },
  componentDidUpdate: function () {
    this._setTitle();
  },
  render : function(){
    return (
      <span className={"pt-select "  + this._isDisabled()} id={this.props.id}>
        <span className="select-box" ref="select-wrapper">

          <span className="title" ref="title"></span>
          <select className="default" name={this.props.name} ref="select"
            disabled={this.props.disabled} onChange={this._handleChange} value={this.props.value}>
            {this.props.children}
          </select>

        </span>

        {this._buildMessage()}
      </span>
    );
  },

  _isDisabled : function(){
    return this.props.disabled ? "is-disabled" : "";
  },

  _handleChange : function(e){
    if (!this.props.disabled) {
      this.props.onChange(e);
    }
  },

  _getSelectedOptionText : function() {
    var selectedOption = this._selectedOption();

    return (selectedOption && selectedOption.text) ? selectedOption.text : '';
  },

  _selectedOption : function(){
    if (this.refs && this.refs.select) {
      var select = React.findDOMNode(this.refs.select);
      return select.options[select.selectedIndex];
    }
  },

  _setTitle: function () {
    var title = React.findDOMNode(this.refs.title);

    title.textContent = this._getSelectedOptionText();
  },

  _buildMessage: function(){
    if(typeof this.props.message === "string"){
      return (<span className="input-message">{this.props.message}</span>);
    } else {
      return this.props.message.map(function(message){
        return (<span className="input-message">{message}</span>);
      });
    }
  }
});

module.exports = SelectDropdown;
