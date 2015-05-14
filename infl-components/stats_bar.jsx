var React = require('react');
var classNames = require('classnames');

var StatsBar = React.createClass({
  getDefaultProps : function(){
    return {
      statType : "points"
    }
  },
  PropTypes : {
    statType : React.PropTypes.oneOf([
      'points',
      'activity'
    ])
  },
  render: function() {
    return (
      <div ref="statsBar" className={"pt-stats-bar " + this.props.statType}>
        {this._addAdditionalHeightProp()}
      </div>
    );
  },
  _addAdditionalHeightProp : function(){
    var that = this;
    return React.Children.map(this.props.children, function(child){
      child.props.height = 40;
      child.props.onHeightChange = that._onHeightChange;
      return child;
    });
  },
  _onHeightChange : function(newHeight){
    console.log(newHeight);
  }
});

StatsBar.Stat = React.createClass({
  getDefaultProps : function(){
    return {
      title : "",
      value : "",
      height : "auto",
      onHeightChange : function(){}
    }
  },
  PropTypes : {
    title : React.PropTypes.string.isRequired,
    value : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired,
    height : React.PropTypes.string,
    onHeightChange : React.PropTypes.func
  },
  handleResize: function(event) {
    if(this.refs.stat.getDOMNode().scrollHeight > this.props.height){
      this.props.onHeightChange(this.refs.stat.getDOMNode().scrollHeight);
    }
    // console.log(this.refs.stat.getDOMNode().scrollHeight);
    // this.setState({
    //   statHeight: event.target.height
    // });
  },
  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },
  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },
  render: function() {
    return (
      <span ref="stat" className="pt-stat" style={{height: this.props.height}}>
        <span className="pt-stat-title">{this.props.title}:</span>
        <strong className="pt-stat-value">{this.props.value}</strong>
      </span>
    );
  }
});

module.exports = StatsBar;
