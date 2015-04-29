var React = require('react');

var PanelLeftSideBar = React.createClass({
  getDefaultProps : function(){
    return {
      id : ""
    };
  },
  propTypes : {
    id: React.PropTypes.string
  },
  render: function () {
    return (
      <section id={this.props.id} className="panel">
          {this.props.children}
      </section>
    );
  }
});

module.exports = PanelLeftSideBar;
