var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form        = require("../../../../infl-components/form.jsx");
var Alert        = require("../../../../lib/alert");

var FormAlertPattern = React.createClass({
  render : function(){
    return (
      <div className="form-alert-pattern">
        <Pattern title="form alert">
          <p>The form component is used for wrapping form sub components and aids in the styling and layout for forms.</p>

          <Pattern.Detail title="Form - Alert">
            <p>Form Alert is a wrapper for Alert.  It helps with spacing and styling.</p>
            <Pattern.Show>
              <Form>
                <Form.Alert>
                  <Alert title="All fields are required" type="error" showIcon={true}></Alert>
                </Form.Alert>
              </Form>
            </Pattern.Show>
            <Code>
              <Code.JSX>
                &lt;Form&gt;
                  &lt;Form.Alert&gt;
                    &lt;Alert title="All fields are required" type="error" showIcon="true"&gt;&lt;/Alert&gt;
                  &lt;/Form.Alert&gt;
                &lt;/Form&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Form.Alert" />
              <Code.Props patternProps={this._buildFormAlertProps()} />
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
  _buildFormAlertProps : function(){
    return {
      children: {
        type : "array",
        defaultValue : "[...]",
        required : false,
        description : "Array of Alert React Elements, preferably one."
      }
    };
  }
});

module.exports = FormAlertPattern;
