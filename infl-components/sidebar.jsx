var React = require('react');

var Sidebar = React.createClass({
  render: function () {
    return (
      <div className="panel-sidebar">
        <div className="panel-sidebar-inner" ref="sidebar">
          {this.props.children}
        </div>
      </div>
    );
  }
});

Sidebar.Heading = React.createClass({
  propTypes : {
    title: React.PropTypes.string
  },
  render: function(){

    return (
      <div className="panel-block" ref="heading">
        <h3>
          {this._buildHeading()}
        </h3>
        {this._buildMessage()}
      </div>
    );
  },
  _buildMessage: function(){
    return this.props.message ? (<p>{ this.props.message }</p>) : "";
  },
  _buildHeading : function(){
    if(this.props.headingComponent){
      var Component = this.props.headingComponent;
      return (
        <Component {...this.props.headingComponentParams}>
          {this.props.title}
        </Component>
      );
    } else {
      return this.props.title;
    }
  }
});

module.exports = Sidebar;
