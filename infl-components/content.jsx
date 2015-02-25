var React = require('react');

var Content = React.createClass({
  render: function () {
    return (
      <div className="panel-content">
        <div className="panel-content-inner">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Content;
