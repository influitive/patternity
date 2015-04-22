var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var ToggleSwitch   = require("../../../../infl-components/toggle_switch.jsx");

var ToggleSwitchPattern = React.createClass({
  render : function(){
    return (
      <div className="toggle-switch-pattern">
        <Pattern title="toggle switch">
          <p>The toggle switch form element can be used in place of a checkbox to better visually indicate that a feature is turned on or off.  It also still acts as a form element checkbox and can be used with a form tag and form submit.</p>
          <p>It has two states enabled and disabled</p>
          <Pattern.Detail title="Toggle Switch">
            <Pattern.Show>
              <ToggleSwitch />
            </Pattern.Show>
            <Code>
              <Code.JSX>
                &lt;ToggleSwitch isOn="false" enabled="true" onChange="callback_function" inputName="form_element_name" /&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="ToggleSwitch" />
              <Code.Props patternProps={this._buildToggleSwitchProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var Loading = require("patternity/infl-components/toggle_switch.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/toggle_switch";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _buildToggleSwitchProps : function(){
    return {
      id: {
        type : "string",
        default : "",
        required : false,
        description : "Id for the internal checkbox."
      },
      enabled: {
        type : "boolean",
        default : "true",
        required : false,
        description : "Determines if the switch is enabled or disabled."
      },
      isOn : {
        type : "boolean",
        default : "false",
        required : false,
        description : "Is the on/ off state of the toggle."
      },
      onChange: {
        type : "function",
        default : "empty function",
        required : false,
        description : "The onChange will be called with the current state of enabled as a boolean."
      },
      inputName : {
        type : "string",
        default : "",
        required : false,
        description : "Name of the checkbox input to be used in a form."
      }
    };
  }
});

module.exports = ToggleSwitchPattern;
