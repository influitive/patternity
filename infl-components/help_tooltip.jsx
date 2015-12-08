var React = require('react');

var Icon = require('./icon.jsx');
var Tooltip = require('./tooltip.jsx');

var HelpTooltip = React.createClass({
  displayName: 'HelpTooltip',
  propTypes : {
    title: React.PropTypes.string
  },

  getDefaultProps: function(){
    return {
      title : "",
      position : "top"
    };
  },

  render : function(){
    return (
      <Tooltip title={this.props.title} element={<Icon icon="question-circle-o" />} position={this.props.position}>
        {this.props.children}
      </Tooltip>
    );
  }
});

module.exports = HelpTooltip;
