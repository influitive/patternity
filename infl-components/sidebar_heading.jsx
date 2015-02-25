var React = require('react');

var SidebarHeading = React.createClass({
  propTypes : {
    title: React.PropTypes.string
  },
  _buildMessage: function(){
    if (this.props.message) {
      return (<p>{ this.props.message }</p>);
    } else {
      return "";
    }
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
  }
});

module.exports = SidebarHeading;
