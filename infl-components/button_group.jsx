var React = require('react');
var classNames = require('classnames');

var ButtonGroup = React.createClass({
  getDefaultProps : function(){
    return {
      isVertical : false,
      grouped : false
    };
  },
  propTypes : {
    isVertical : React.PropTypes.bool,
    grouped : React.PropTypes.bool
  },
  render: function () {
    return (
      <div className={this._determineButtonGroupStyling()} ref="buttonGroup">
        {this.props.children}
      </div>
    );
  },
  _determineButtonGroupStyling : function(){
    return classNames({
      'button-group' : true,
      'is-vertical': this.props.isVertical,
      'is-horizontal': !this.props.isVertical,
      'grouped' : this.props.grouped
    });
  }
});

module.exports = ButtonGroup;
