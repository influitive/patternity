var React = require('react');

var Icon = require('../icon.jsx');

var MultiSelectArrow = React.createClass({
  PropTypes : {
    hideOptions : React.PropTypes.func.isRequired,
    showOptions : React.PropTypes.func.isRequired,
    areOptionsOpen : React.PropTypes.bool.isRequired
  },

  render : function(){
    return (
      <span className="pt-multi-select-arrow" onClick={this._toggleOptions}>
        <Icon icon={this._determineArrowDirection()} />
      </span>
    );
  },

  _determineArrowDirection : function(){
    return this.props.areOptionsOpen ? "chevron-up" : "chevron-down";
  },

  _toggleOptions : function(event){
    if(this.props.areOptionsOpen){
      this.props.hideOptions(event);
    } else {
      this.props.showOptions(event);
    }
  }
});

module.exports = MultiSelectArrow;
