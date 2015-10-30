var React = require('react');

var Icon = require('../icon.jsx');

var ClearAll = React.createClass({
  displayName: 'ClearAll',
  propTypes : {
    hasSelectedOptions : React.PropTypes.bool.isRequired,
    onClearAll : React.PropTypes.func.isRequired
  },

  render : function(){
    return (
      <span className={"clear-all " + this._showClearAll()} onClick={this.props.onClearAll}>
        <Icon icon="close" />
      </span>
    );
  },

  _showClearAll : function(){
    return this.props.hasSelectedOptions ? "show" : "";
  }
});

module.exports = ClearAll;
