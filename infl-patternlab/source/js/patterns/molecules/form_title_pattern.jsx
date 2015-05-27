var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form        = require("../../../../infl-components/form.jsx");
var ButtonGroup = require("../../../../infl-components/button_group.jsx");

var FormTitlePattern = React.createClass({
  render : function(){
    return (
      <div className="form-title-pattern">
        <Pattern title="form title">
          <p>The form component is used for wrapping form sub components and aids in the styling and layout for forms.</p>

          <Pattern.Detail title="Form - Title">
            <p>Form Title comes with optional actions and description.  Actions placed in the title should be used in place of Form.Actions</p>
            <Pattern.Show>
              <Form>
                <Form.Title title="My Form Title" actions={this._buildTitleActions()}>
                  <p>This is my form title description</p>
                </Form.Title>
              </Form>
            </Pattern.Show>
            <Code>
              <Code.JSX>
                &lt;Form&gt;
                  &lt;Form.Title title="My Form Title" actions="form_title_actions"&gt;
                    &lt;p&gt;This is my form title description&lt;/p&gt;
                  &lt;/Form.Title&gt;
                &lt;/Form&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Form.Title" />
              <Code.Props patternProps={this._buildFormTitleProps()} />
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
  _buildTitleActions : function(){
    return (
      <ButtonGroup>
        <button className="secondary">Cancel</button>
        <button className="primary">Save</button>
      </ButtonGroup>
    );
  },
  _buildFormTitleProps : function(){
    return {
      title : {
        type : "string",
        defaultValue : "",
        required : true,
        description : "Title of the form."
      },
      actions : {
        type : "React Element or DOM Node",
        defaultValue : "",
        required : false,
        description : "Optional actions for the form used in place of Form.Actions.  Actions should be Button Group."
      },
      children: {
        type : "array",
        defaultValue : "[...]",
        required : false,
        description : "Array of React Elements, HTML, etc."
      }
    }
  }
});

module.exports = FormTitlePattern;
