var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form        = require("../../../../infl-components/form.jsx");
var InputLabel  = require("../../../../infl-components/input_label.jsx");
var TextInput   = require("../../../../infl-components/text_input.jsx");

var FormSectionPattern = React.createClass({
  render : function(){
    return (
      <div className="form-section-pattern">
        <Pattern title="form section">
          <p>The form component is used for wrapping form sub components and aids in the styling and layout for forms.</p>

          <Pattern.Detail title="Form - Section">
            <p>Form Section defines a section of a large form.  It helps with spacing and dividing the form.</p>
            <Pattern.Show>
              <Form>
                <Form.Section>
                  <Form.Row>
                    <InputLabel label="Text Input">
                      <TextInput name="text-input" placeholder="Text Input" />
                    </InputLabel>
                  </Form.Row>
                </Form.Section>
              </Form>
            </Pattern.Show>
            <Code>
              <Code.JSX>
                &lt;Form&gt;
                  &lt;Form.Section&gt;
                    &lt;Form.Row&gt;
                      &lt;InputLabel label="Text Input" &gt;
                        &lt;TextInput name="text-input" placeholder="Text Input" /&gt;
                      &lt;/InputLabel&gt;
                    &lt;/Form.Row&gt;
                  &lt;/Form.Section&gt;
                &lt;/Form&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Form.Section" />
              <Code.Props patternProps={this._buildFormSectonProps()} />
            </Code>
          </Pattern.Detail>

          <Pattern.Detail title="Form - SectionTitle">
            <p>Form Section Title is to be used with Form Section and comes with optional description (children).</p>
            <Pattern.Show>
              <Form>
                <Form.Section>
                  <Form.SectionTitle title="My Form Section Title">
                      <p>This is my form section title description</p>
                  </Form.SectionTitle>
                  <Form.Row>
                    <InputLabel label="Text Input">
                      <TextInput name="text-input" placeholder="Text Input" />
                    </InputLabel>
                  </Form.Row>
                </Form.Section>
              </Form>
            </Pattern.Show>
            <Code>
              <Code.JSX>
                &lt;Form&gt;
                  &lt;Form.Section&gt;
                    &lt;Form.SectionTitle title="My Form Section Title"&gt;
                      &lt;p&gt;This is my form section title description&lt;/p&gt;
                    &lt;/Form.SectionTitle&gt;
                    &lt;Form.Row&gt;
                      &lt;InputLabel label="Text Input" &gt;
                        &lt;TextInput name="text-input" placeholder="Text Input"&gt;&lt;/TextInput&gt;
                      &lt;/InputLabel&gt;
                    &lt;/Form.Row&gt;
                  &lt;/Form.Section&gt;
                &lt;/Form&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Form.SectionTitle" />
              <Code.Props patternProps={this._buildFormSectonTitleProps()} />
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
  _buildFormSectonProps : function(){
    return {
      hideDivider : {
        type : "boolean",
        default : "false",
        required : false,
        description : "Hides the divider for the section."
      }
    };
  },
  _buildFormSectonTitleProps : function(){
    return {
      title : {
        type : "string",
        default : "",
        required : false,
        description : "Title of the form section."
      },
      children: {
        type : "array",
        default : "[...]",
        required : false,
        description : "Array of React Elements, HTML, etc."
      }
    };
  }
});

module.exports = FormSectionPattern;
