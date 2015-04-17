var React = require('react');
var _ = require('lodash');

var Code = React.createClass({
  render : function(){
    return (
      <div className="pattern-detail-code">
        <h4 className="code-title">Code</h4>
        {this.props.children}
      </div>
    );
  }
});

Code.JSX = React.createClass({
  render : function(){
    return (
      <div className="code-jsx">
        <h5 className="code-title">JSX</h5>
        <pre className="code">
          <code>
            {this.props.children}
          </code>
        </pre>
      </div>
    );
  }
});

Code.WithoutJSX = React.createClass({
  getDefaultProps : function(){
    return {
      patternName : ""
    };
  },
  propTypes: {
    patternName: React.PropTypes.string.isRequired
  },
  render : function(){
    return (
      <div className="code-no-jsx">
        <h5 className="code-title">Without JSX</h5>
        <pre className="code">
          <code>
            {this._buildReactCode()}
          </code>
        </pre>
      </div>
    );
  },
  _buildReactCode : function(){
    return (
      "React.render(\n" +
        "\tReact.createElement(" + this.props.patternName + "}, props),\n" +
        "\t{DOM element to append {this.props.patternName} to}\n" +
      ");\n"
    );
  }
});

Code.Props = React.createClass({
  getDefaultProps : function(){
    return {
      patternProps : {}
    };
  },
  propTypes: {
    patternProps: React.PropTypes.object.isRequired
  },
  render : function(){
    return (
      <div className="code-props">
        <h4 className="code-title">Props</h4>
        <pre className="code">
          <code>
            {this._buildProps()}
          </code>
        </pre>
      </div>
    );
  },
  _buildProps : function(){
    var propsString = "{\n";
    _.forEach(this.props.patternProps, function(value, key){
      propsString += "\t" + key + " : " + value.type + " //" + value.description + "\n";
    });
    propsString += "}";
    return propsString;
  }
});

module.exports = Code;
