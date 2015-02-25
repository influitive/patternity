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

module.exports = Sidebar;
