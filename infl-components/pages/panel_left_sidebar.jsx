var React = require('react');

var PanelLeftSideBar = React.createClass({
  render: function () {
    return (
      <section id={this.props.id} className="panel">
          {this.props.children}
      </section>
    );
  }
});

module.exports = PanelLeftSideBar;
