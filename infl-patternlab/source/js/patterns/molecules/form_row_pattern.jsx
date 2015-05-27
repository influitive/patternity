var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form        = require("../../../../infl-components/form.jsx");
var InputLabel  = require("../../../../infl-components/input_label.jsx");
var TextInput   = require("../../../../infl-components/text_input.jsx");

var FormRowPattern = React.createClass({
  render : function(){
    return (
      <div className="form-row-pattern">
        <Pattern title="form row">
          <p>The form component is used for wrapping form sub components and aids in the styling and layout for forms.</p>

          <Pattern.Detail title="Form - Row">
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
                  &lt;Form.Row inputSize="large"&gt;
                    &lt;InputLabel label="Text Input" &gt;
                      &lt;TextInput name="text-input" placeholder="Text Input" /&gt;
                    &lt;/InputLabel&gt;
                  &lt;/Form.Row&gt;
                &lt;/Form&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Form.Row" />
              <Code.Props patternProps={this._buildFormRowProps()} />
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
  _buildFormRowProps : function(){
    return {
      children : {
        type : "array",
        defaultValue : "[...]",
        required : false,
        description : "array or TextInput, SelectDropdown, Checkbox, RadioButton, etc."
      },
      inputSize : {
        type : "string",
        defaultValue : "large",
        required : false,
        description : "determines how large the input will be small, medium ro large."
      }
    };
  }
});

module.exports = FormRowPattern;
