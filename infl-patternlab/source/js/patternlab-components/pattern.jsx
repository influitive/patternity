var React = require('react');

var Pattern = React.createClass({
  getDefaultProps : function(){
    return {
      title : ""
    };
  },
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <section className="pattern-section">
        <header>
          <h3>{this.props.title}</h3>
        </header>

        {this.props.children}

      </section>
    );
  }
});

Pattern.Detail = React.createClass({
  getDefaultProps : function(){
    return {
      title : ""
    };
  },
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render : function(){
    return (
      <div className="pattern-detail">
        <h4>{this.props.title}:</h4>
        {this.props.children}
      </div>
    );
  }
});

Pattern.Show = React.createClass({
  render : function(){
    return (
      <div className="pattern-show">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Pattern;
