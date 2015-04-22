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

Pattern.Demo = React.createClass({
  getDefaultProps : function(){
    return {
      onClick : function(){},
      title : ""
    }
  },
  render : function(){
    return (
      <div className="pattern-demo">
        <button className="important" onClick={this.props.onClick}>{this.props.title}</button>
      </div>
    );
  }
});

Pattern.Requires = React.createClass({
  render : function(){
    return (
      <div className="pattern-requires">
        <pre className="code">
          <code>
            {this._formatRequires()}
          </code>
        </pre>
      </div>
    );
  },
  _formatRequires : function(){
    return beautify_html(this.props.children.toString(), {
      "--indent-inner-html" : true,
      "--preserve-newlines" : true,
      "--indent-size" : 2
    });
  }
});

module.exports = Pattern;
