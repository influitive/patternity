var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Checkbox   = require("../../../../infl-components/checkbox.jsx");

var CheckboxPattern = React.createClass({
  render : function(){
    return (
      <div className="checkbox-pattern">
        <Pattern title="checkbox">
          <p>The checkbox form element can be used in place of a native checkbox.  It also still acts as a form element checkbox and can be used with a form tag and form submit.</p>
          <p>It has two states enabled and disabled</p>

          <Pattern.Detail title="Checkbox">
            <Pattern.Show>
              <Checkbox checkboxLabel="My Checkbox" />
            </Pattern.Show>
            <Code>
              <Code.JSX>
                &lt;Checkbox id="checkbox-1" enabled="true" isChecked="true" onChange="on_change_callback" checkboxNAme="my-checkbox-name" checkboxLabel="My Checkbox" value="checkbox-1"&gt;&lt;/Checkbox&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="CheckBox" />
              <Code.Props patternProps={this._buildCheckBoxProps()} />
            </Code>
          </Pattern.Detail>

          <Pattern.Detail title="Checkbox Group">
            <p>Checkbox also comes with a subcomponent Group.  It is used to help with styling of checkboxes buttons.</p>
            <p>It also has two layout options inline and stacked</p>

            <Pattern.Show>
              <CheckboxGroupComponent />
            </Pattern.Show>
            <Code>
              <Code.JSX>
                &lt;Checkbox.Group&gt;
                  &lt;Checkbox isChecked="false" enabled="true" onChange="callback_function" checkboxName="form_element_name" checkboxLabel="label_to_go_with_checkbox" &gt;&lt;/Checkbox&gt;
                  &lt;Checkbox isChecked="false" enabled="true" onChange="callback_function" checkboxName="form_element_name" checkboxLabel="label_to_go_with_checkbox" &gt;&lt;/Checkbox&gt;
                  &lt;Checkbox isChecked="false" enabled="true" onChange="callback_function" checkboxName="form_element_name" checkboxLabel="label_to_go_with_checkbox" &gt;&lt;/Checkbox&gt;
                &lt;/Checkbox.Group&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Checkbox.Group" />
              <Code.Props patternProps={this._buildCheckBoxGroupProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var Loading = require("patternity/infl-components/checkbox.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/checkbox";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _buildCheckBoxProps : function(){
    return {
      isChecked : {
        type : "boolean",
        default : "false",
        required : false,
        description : "determines if the checkbox is checked or not."
      },
      enabled : {
        type : "boolean",
        default : "true",
        required : false,
        description : "determines if the checkbox is enabled or disabled."
      },
      onChange : {
        type : "function",
        default : "empty function",
        required : false,
        description : "the onChange will be called with an event if enabled."
      },
      checkboxName : {
        type : "string",
        default : "",
        required : false,
        description : "Name of the checkbox input to be used in a form."
      },
      id : {
        type : "string",
        default : "",
        required : false,
        description : "Id for the internal checkbox."
      },
      checkboxLabel : {
        type : "string",
        default : "",
        required : false,
        description : "Text to accompany the checkbox."
      }
    };
  },
  _buildCheckBoxGroupProps : function(){
    return {
      layout : {
        type : "string",
        default : "inline",
        required : false,
        description : "Determines if the checkbox group is displayed stacked or inline."
      },
      id : {
        type : "string",
        default : "",
        required : false,
        description : "Id for the checkbox group."
      }
    };
  }
});

var CheckboxGroupComponent = React.createClass({
  render : function(){
    return (
      <Checkbox.Group>
        <Checkbox checkboxLabel="My Checkbox One" />
        <Checkbox checkboxLabel="My Checkbox Two" />
        <Checkbox checkboxLabel="My Checkbox Three" />
      </Checkbox.Group>
    );
  }
});

module.exports = CheckboxPattern;
