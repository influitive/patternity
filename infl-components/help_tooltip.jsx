var React = require('react');

var Icon = require('./icon.jsx');
var Tooltip = require('./tool_tip.jsx');

var HelpTooltip = React.createClass({
  propTypes : {
    title: React.PropTypes.string
  },

  getDefaultProps: function(){
    return {
      title : ""
    };
  },

  render : function(){
    return (
      <Tooltip title={this.props.title} element={<Icon icon="question-circle-o" />} >
        {this.props.children}
      </Tooltip>
    );
  }
});

module.exports = HelpTooltip;
