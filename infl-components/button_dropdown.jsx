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
      children : []
    };
  },
  propTypes : {
    title: React.PropTypes.string,
    children : React.PropTypes.array
  },
  componentDidMount: function() {
    document.addEventListener("click", this._hideDropdownOptions);
  },
  componentWillUnmount: function() {
    document.removeEventListener("click", this._hideDropdownOptions);
  },
  _hideDropdownOptions: function(){
    this.setState({ isDropdownOpen : false });
  },
  render : function(){
    return (
      <div className="button-dropdown">
        <button className={this.props.type} onClick={this._toggleDropdownOptions}>
          <span>{this.props.title}</span>
          <span className="arrow ic ic-chevron-down"></span>
        </button>
        <ul className={"options " + this._isDropdownOpen()}>
          {this._buildDropdown()}
        </ul>
      </div>
    );
  },
  _toggleDropdownOptions: function(event){
    console.log(event.relatedTarget);
    event.stopPropagation();
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
    return (<li className="option" key={"option-" + index}>{option}</li>);
  }
});

module.exports = ButtonDropdown;

// GOAL
// <ButtonDropDown title=‘info” onChange={callback}>
//     <SomeOptionThing>
//     <SomeOtherOptionThing>
// </ButtonDropDown>

// or:
// <ButtonDropDown title=‘info” onChange={callback} dropdown={dropdownOptions} />
