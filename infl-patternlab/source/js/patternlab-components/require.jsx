var React         = require('react');
var beautify_html = require('js-beautify').html;

var Require = React.createClass({
  render : function(){
    return (
      <div className="pattern-requires">
        <h4>Requires</h4>
        {this.props.children}
      </div>
    );
  }
});

Require.JS = React.createClass({
  render : function(){
    return (
      <div className="pattern-requires-js">
        <h5>Javascript Require</h5>
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

Require.CSS = React.createClass({
  render : function(){
    return (
      <div className="pattern-requires-css">
        <h5>CSS Import</h5>
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

module.exports = Require;
