var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var MultiSelect   = require("../../../../infl-components/multi-select/multi_select.jsx");

var MultiSelectPattern = React.createClass({
  getDefaultProps : function(){
    return {
      options : [{
        name : "Linkedin",
        value : 0
      },
      {
        name : "Facebook",
        value : 1
      },
      {
        name : "Educational",
        value : 2
      },
      {
        name : "Referral",
        value : 3
      },
      {
        name : "Training",
        value : 4
      },
      {
        name : "Review",
        value : 5
      }]
    };
  },

  render : function(){
    return (
      <div className="multi-select-pattern">
        <Pattern title="multi select">

          <Pattern.Detail title="Multi Select">
            <Pattern.Show>
              <div style={{ height: "250px"}}>
                <MultiSelect options={this.props.options} />
              </div>
            </Pattern.Show>
            <Code>
              <Code.WithoutJSX patternName="MultiSelect" />
              <Code.Props patternProps={this._buildMultiSelectProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var MultiSelect = require("patternity/infl-components/multi-select/multi_select.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/form";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _buildMultiSelectProps : function(){
    return {
      options : {
        type : "array",
        defaultValue : "[]",
        required : false,
        description : "Array of options objects that contain name and value"
      },
      name : {
        type : "string",
        defaultValue : "''",
        required : false,
        description : "Name of the native select that can be used for form submission"
      },
      onOptionChange : {
        type : "function",
        defaultValue : "empty function",
        required : false,
        description : "Callback for when an option is added.  Called with the newly added option and the selected option list."
      },
      onTypeAheadChange : {
        type : "function",
        defaultValue : "empty function",
        required : false,
        description : "Callback for when the type ahead text changes.  Called with the updated type ahead text.  This can be used to add ajax functionality to multi-select."
      }
    };
  }
});

module.exports = MultiSelectPattern;
