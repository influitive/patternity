var React = require('react');

var ButtonDropdown = React.createClass({
  getInitialState: function() {
    return {
      isDropdownOpen: false
    };
  },
  getDefaultProps: function() {
    return {
      title: "",
      type : "",
      options : [],
      children : [],
    };
  },
  propTypes : {
    title: React.PropTypes.string,
    type: React.PropTypes.oneOf(['success', 'danger', 'primary', 'important', 'secondary', '']),
    options : React.PropTypes.array,
    children : React.PropTypes.array,
  },
  render : function(){
    return (
      <div className={"button-dropdown " + this._isDropdownOpen()}>
        <button className={this.props.type} onClick={this._toggleDropdownOptions}>
          <span>{this.props.title}</span>
          <span className="arrow ic ic-chevron-down"></span>
        </button>
        <ul className="options">
          {this._buildDropdown()}
        </ul>
      </div>
    );
  },
  _toggleDropdownOptions: function(event){
    // event.stopPropagation();
    // event.nativeEvent.stopImmediatePropagation();
    this.setState({ isDropdownOpen : !this.state.isDropdownOpen });
  },
  _isDropdownOpen : function(){
    return this.state.isDropdownOpen ? "show" : "";
  },
  _buildDropdown : function(){
    return this._populateOptions().map(this._buildOption);
  },
  _populateOptions : function(){
    return this.props.children.length > 0 ? this.props.children : this.props.options;
  },
  _buildOption : function(option, index){
    return (<li className="option" onClick={this._handleChange} key={"option-" + index}>{option}</li>);
  },
  _handleChange : function(key){
    this.props.onChange(key);
  }
});

module.exports = ButtonDropdown;
