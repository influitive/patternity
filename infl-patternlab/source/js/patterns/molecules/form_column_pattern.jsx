var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form        = require("../../../../infl-components/form.jsx");
var InputLabel  = require("../../../../infl-components/input_label.jsx");
var TextInput   = require("../../../../infl-components/text_input.jsx");

var FormColumnPattern = React.createClass({
  render : function(){
    return (
      <div className="form-column-pattern">
        <Pattern title="form column">
          <p>The form component is used for wrapping form sub components and aids in the styling and layout for forms.</p>

          <Pattern.Detail title="Form - Column">
            <p>Should be used with Form.  Otherwise there will be no styling.  Form can handle none, 2 and 3 columns</p>
            <Pattern.Show>
              <Form>
                <Form.Column>
                  <Form.Row>
                    <InputLabel label="Text Input">
                      <TextInput name="text-input" placeholder="Text Input" />
                    </InputLabel>
                  </Form.Row>
                  <Form.Row>
                    <InputLabel label="Text Input">
                      <TextInput name="text-input" placeholder="Text Input" />
                    </InputLabel>
                  </Form.Row>
                  <Form.Row>
                    <InputLabel label="Text Input">
                      <TextInput name="text-input" placeholder="Text Input" />
                    </InputLabel>
                  </Form.Row>
                </Form.Column>
                <Form.Column>
                  <Form.Row>
                    <InputLabel label="Text Input">
                      <TextInput name="text-input" placeholder="Text Input" />
                    </InputLabel>
                  </Form.Row>
                  <Form.Row>
                    <InputLabel label="Text Input">
                      <TextInput name="text-input" placeholder="Text Input" />
                    </InputLabel>
                  </Form.Row>
                  <Form.Row>
                    <InputLabel label="Text Input">
                      <TextInput name="text-input" placeholder="Text Input" />
                    </InputLabel>
                  </Form.Row>
                </Form.Column>
              </Form>
            </Pattern.Show>
            <Code>
              <Code.JSX>
                &lt;Form&gt;
                  &lt;Form.Column&gt;
                    &lt;Form.Row&gt;
                      &lt;InputLabel label="Text Input" &gt;
                        &lt;TextInput name="text-input" placeholder="Text Input"&gt;&lt;/TextInput&gt;
                      &lt;/InputLabel&gt;
                    &lt;/Form.Row&gt;
                    &lt;Form.Row&gt;
                      &lt;InputLabel label="Text Input" &gt;
                        &lt;TextInput name="text-input" placeholder="Text Input"&gt;&lt;/TextInput&gt;
                      &lt;/InputLabel&gt;
                    &lt;/Form.Row&gt;
                    &lt;Form.Row&gt;
                      &lt;InputLabel label="Text Input" &gt;
                        &lt;TextInput name="text-input" placeholder="Text Input"&gt;&lt;/TextInput&gt;
                      &lt;/InputLabel&gt;
                    &lt;/Form.Row&gt;
                  &lt;/Form.Column&gt;
                  &lt;Form.Column&gt;
                    &lt;Form.Row&gt;
                      &lt;InputLabel label="Text Input" &gt;
                        &lt;TextInput name="text-input" placeholder="Text Input"&gt;&lt;/TextInput&gt;
                      &lt;/InputLabel&gt;
                    &lt;/Form.Row&gt;
                    &lt;Form.Row&gt;
                      &lt;InputLabel label="Text Input" &gt;
                        &lt;TextInput name="text-input" placeholder="Text Input"&gt;&lt;/TextInput&gt;
                      &lt;/InputLabel&gt;
                    &lt;/Form.Row&gt;
                    &lt;Form.Row&gt;
                      &lt;InputLabel label="Text Input" &gt;
                        &lt;TextInput name="text-input" placeholder="Text Input"&gt;&lt;/TextInput&gt;
                      &lt;/InputLabel&gt;
                    &lt;/Form.Row&gt;
                  &lt;/Form.Column&gt;
                &lt;/Form&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Form.Column" />
              <Code.Props patternProps={this._buildFormColumnProps()} />
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
  _buildFormColumnProps : function(){
    return {
      children : {
        type : "array",
        default : "[...]",
        required : false,
        description : "Array of Form Row React elements."
      }
    };
  }
});

module.exports = FormColumnPattern;
