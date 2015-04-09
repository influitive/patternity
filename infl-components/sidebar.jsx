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

Sidebar.heading = React.createClass({
  propTypes : {
    title: React.PropTypes.string
  },
  render: function(){
    var Component = this.props.headingComponent;
    return (
      <div className="panel-block" ref="heading">
        <h3>
          <Component {...this.props.headingComponentParams}>
            {this.props.title}
          </Component>
        </h3>
        {this._buildMessage()}
      </div>
    );
  },
  _buildMessage: function(){
    return this.props.message ? (<p>{ this.props.message }</p>) : "";
  }
});

module.exports = Sidebar;
