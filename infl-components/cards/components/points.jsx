var React = require('react');
var Icon = require('../../icon.jsx');

var Points = React.createClass({
  getDefaultProps : function(){
    return {
      points : 0,
    };
  },
  propTypes : {
    points : React.PropTypes.number,
  },
  render : function(){
    return (
      <span className="pt-card-points">
        <Icon icon="coins-old" />
        {this.props.points}
      </span>
    );
  }
});

module.exports = Points;
