var React = require('react');
var Pattern = require('../patternlab-components/pattern.jsx');
var Code = require('../patternlab-components/code.jsx');
var Form = require("../../../infl-components/form.jsx");
var InputLabel = require("../../../infl-components/input_label.jsx");
var TextInput = require("../../../infl-components/text_input.jsx");

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
                <br />
                &lt;/Form&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Form" />
              <Code.Props patternProps={this._buildFormProps()} />
            </Code>
          </Pattern.Detail>
          <Pattern.Detail title="Form - Rows">
            <p>Should be used with Form.  Otherwise there will be no styling</p>
            <Pattern.Show>
              <Form>
                <Form.Row>
                  <InputLabel label="Text Input">
                    <TextInput name="text-input" placeholder="Text Input" />
                  </InputLabel>
                </Form.Row>
              </Form>
            </Pattern.Show>
            <Code>
              <Code.JSX>
                &lt;Form&gt;
                  <br />
                  &lt;Form.Row inputSize="large"&gt;
                    <br />
                    &lt;InputLabel label="Text Input" &gt;
                      <br />
                      &lt;TextInput name="text-input" placeholder="Text Input" /&gt;
                      <br />
                    &lt;/InputLabel&gt;
                    <br />
                  &lt;/Form.Row&gt;
                  <br />
                &lt;/Form&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Form.Row" />
              <Code.Props patternProps={this._buildFormRowProps()} />
            </Code>
          </Pattern.Detail>
        </Pattern>
      </div>
    );
  },
  _buildFormProps : function(){
    return {
      acceptCharset : {
        type : "string",
        description : "character encodings that are to be used for the form submission"
      },
      action : {
        type : "string",
        description : "url"
      },
      autocomplete : {
        type : "string",
        description : "one of 'on', 'off' defaults to empty string"
      },
      enctype : {
        type : "string",
        description : "one of 'application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'. defaults to empty string"
      },
      method : {
        type : "string",
        description : "one of 'get', 'post'.  defaults to empty string"
      },
      name : {
        type : "string",
        description : "name of the form"
      },
      novalidate : {
        type : "boolean",
        description : "determines if html 5 validation is on.  defaults to false"
      },
      target : {
        type : "string",
        description : "one of '_blank', '_self', '_parent', '_top'.  defaults to empty string"
      }
    };
  },
  _buildFormRowProps : function(){
    return {
      children : {
        type : "[...]",
        description : "array or TextInput, SelectDropdown, Checkbox, RadioButton, etc."
      },
      inputSize : {
        type : "string",
        description : "determines how large the input will be small, medium ro large.  defaults to large"
      }
    };
  }
});

module.exports = FormPattern;
