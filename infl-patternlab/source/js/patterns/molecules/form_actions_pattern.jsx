var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form        = require("../../../../infl-components/form.jsx");
var ButtonGroup = require("../../../../infl-components/button_group.jsx");

var FormActionsPattern = React.createClass({
  render : function(){
    return (
      <div className="form-actions-pattern">
        <Pattern title="form actions">
          <p>The form component is used for wrapping form sub components and aids in the styling and layout for forms.</p>

          <Pattern.Detail title="Form - Actions">
            <p>Should be used with Form.  Otherwise there will be no styling</p>
            <Pattern.Show>
              <Form>
                <Form.Actions>
                  <ButtonGroup>
                    <button className="secondary">Cancel</button>
                    <button className="success">Save</button>
                  </ButtonGroup>
                </Form.Actions>
              </Form>
            </Pattern.Show>
            <Code>
              <Code.JSX>
                &lt;Form&gt;
                  &lt;Form.Actions&gt;
                    &lt;ButtonGroup&gt;
                      &lt;Button type="text"&gt;Cancel&lt;/Button&gt;
                      &lt;Button type="success"&gt;Save&lt;/Button&gt;
                    &lt;/ButtonGroup&gt;
                  &lt;/Form.Actions&gt;
                &lt;/Form&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Form.Actions" />
              <Code.Props patternProps={this._buildFormActionsProps()} />
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
  _buildFormActionsProps : function(){
    return {
      children : {
        type : "array",
        defaultValue : "[...]",
        required : false,
        description : "Button Group React element."
      }
    };
  }
});

module.exports = FormActionsPattern;
