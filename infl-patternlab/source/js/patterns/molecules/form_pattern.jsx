var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form        = require("../../../../infl-components/form.jsx");
var InputLabel  = require("../../../../infl-components/input_label.jsx");
var TextInput   = require("../../../../infl-components/text_input.jsx");

var FormPattern = React.createClass({
  render : function(){
    return (
      <div className="form-pattern">
        <Pattern title="form">
          <p>The form component is used for wrapping form sub components and aids in the styling and layout for forms.</p>

          <Pattern.Detail title="Form">
            <p>Form renders a form tag.  So there is not much to show... sorry</p>

            <Code>
              <Code.JSX>
                &lt;Form&gt;
                &lt;/Form&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Form" />
              <Code.Props patternProps={this._buildFormProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var Form = require("patternity/infl-components/form.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/form";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _buildFormProps : function(){
    return {
      acceptCharset : {
        type : "string",
        default : "",
        required : false,
        description : "character encodings that are to be used for the form submission"
      },
      action : {
        type : "string",
        default : "",
        required : false,
        description : "url"
      },
      autocomplete : {
        type : "string",
        default : "",
        required : false,
        description : "one of 'on', 'off' defaults to empty string"
      },
      enctype : {
        type : "string",
        default : "",
        required : false,
        description : "one of 'application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'. defaults to empty string"
      },
      method : {
        type : "string",
        default : "",
        required : false,
        description : "one of 'get', 'post'.  defaults to empty string"
      },
      name : {
        type : "string",
        default : "",
        required : false,
        description : "name of the form"
      },
      novalidate : {
        type : "boolean",
        default : "false",
        required : false,
        description : "determines if html 5 validation is on."
      },
      target : {
        type : "string",
        default : "",
        required : false,
        description : "one of '_blank', '_self', '_parent', '_top'"
      }
    };
  }
});

module.exports = FormPattern;
