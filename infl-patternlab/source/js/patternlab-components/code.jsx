var React         = require('react');
var _             = require('lodash');
var beautify_html = require('js-beautify').html;

var Icon          = require("../../../infl-components/icon.jsx");

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
            {this._formatCode()}
          </code>
        </pre>
      </div>
    );
  },
  _formatCode : function(){
    return beautify_html(this._getCode(), {
      "--indent-inner-html" : true,
      "--preserve-newlines" : true,
      "--indent-size" : 2
    });
  },
  _getCode : function() {
    if (this.props.src) {
      return this.props.src;
    }
    else {
      return this.props.children.toString()
    }
  }
});

Code.JS = React.createClass({
  render : function(){
    return (
      <div className="code-js">
        <h5 className="code-title">Javascript</h5>
        <pre className="code">
          <code>
            {this._formatCode()}
          </code>
        </pre>
      </div>
    );
  },
  _formatCode : function(){
    return beautify_html(this.props.children.toString(), {
      "--indent-inner-html" : true,
      "--preserve-newlines" : true,
      "--indent-size" : 2
    });
  }
});

Code.HTML = React.createClass({
  render : function(){
    return (
      <div className="code-html">
        <h5 className="code-title">HTML</h5>
        <pre className="code">
          <code>
            {this._formatCode()}
          </code>
        </pre>
      </div>
    );
  },
  _formatCode : function(){
    return beautify_html(this.props.children.toString(), {
      "--indent-inner-html" : true,
      "--preserve-newlines" : true,
      "--indent-size" : 2
    });
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
        "\tReact.createElement(" + this.props.patternName + ", props),\n" +
        "\t{DOM element to append " + this.props.patternName + " to}\n" +
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
        <table className="code-props-details">
          <thead>
            <tr>
              <th className="prop">Prop</th>
              <th className="type">Type</th>
              <th className="default">Default</th>
              <th className="required">Required</th>
              <th className="description">Description</th>
            </tr>
          </thead>
          <tbody>
            {this._buildPropsDetail()}
          </tbody>
        </table>
      </div>
    );
  },
  _buildPropsDetail : function(){
    var that = this;
    return _.map(this.props.patternProps, function(value, key){
      return (
        <tr key={key}>
          <td>{key}</td>
          <td>{value.type}</td>
          <td>{value.default}</td>
          <td className="code-props-required">
            {that._isPropRequired(value.required)}
          </td>
          <td>{value.description}</td>
        </tr>
      );
    });
  },
  _isPropRequired : function(required){
    return required ? <Icon icon="check" /> : "";
  }
});

module.exports = Code;
