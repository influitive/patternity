var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var SelectDropdown   = require("../../../../infl-components/select_dropdown.jsx");

var SelectDropdownPattern = React.createClass({
  render : function(){
    return (
      <div className="select-dropdown-pattern">
        <Pattern title="select dropdown">
          <Pattern.Detail title="Select Dropdown">
            <Pattern.Show>
              <SelectDropdown value="3">
                <optgroup label="Option Group 1">
                    <option value="1">option 1</option>
                    <option value="2">option 2</option>
                    <option value="3">option 3</option>
                  </optgroup>
                  <optgroup label="Option Group 2">
                    <option value="4">option 4</option>
                    <option value="5">option 5</option>
                    <option value="6">option 6</option>
                  </optgroup>
              </SelectDropdown>
            </Pattern.Show>
            <Code>
              <Code.JSX>
                &lt;SelectDropdown key="key" name="select_name" onChange="handle_change_callback" value="value 3"&gt;
                  &lt;optgroup label="label"&gt;
                    &lt;option value="value 1"&gt;option name&lt;/option&gt;
                    &lt;option value="value 2"&gt;option name&lt;/option&gt;
                    &lt;option value="value 3"&gt;option name&lt;/option&gt;
                  &lt;/optgroup&gt;
                  &lt;optgroup label="label"&gt;
                    &lt;option value="value 4"&gt;option name&lt;/option&gt;
                    &lt;option value="value 5"&gt;option name&lt;/option&gt;
                    &lt;option value="value 6"&gt;option name&lt;/option&gt;
                  &lt;/optgroup&gt;
                &lt;/SelectDropdown&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="SelectDropdown" />
              <Code.Props patternProps={this._buildSelectDropdownProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var SelectDropdown = require("patternity/infl-components/select_dropdown.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/form";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _buildSelectDropdownProps : function(){
    return {
      key: {
        type : "string",
        defaultValue : "",
        required : false,
        description : "react key"
      },
      name : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "name of select"
      },
      onChange : {
        type : "function",
        defaultValue : "empty function",
        required : false,
        description : "Callback for when the selected value changes.  Only called if enabled."
      },
      value : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "Selected value of the dropdown."
      },
      children : {
        type : "array",
        defaultValue : "[...]",
        required : true,
        description : "Array of html option option group elements."
      },
      message : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "Hint, error etc. displayed below the select."
      },
      disabled : {
        type : "boolean",
        defaultValue : "false",
        required : false,
        description : "Determines if the select is disabled or not."
      },
      id : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "HTML id for the select dropdown."
      }
    };
  }
});

module.exports = SelectDropdownPattern;
