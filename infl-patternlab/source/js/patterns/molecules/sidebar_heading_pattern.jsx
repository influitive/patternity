var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form            = require("../../../../infl-components/form.jsx");
var InputLabel      = require("../../../../infl-components/input_label.jsx");
var RadioButton     = require("../../../../infl-components/radio_button.jsx");
var TextInput       = require("../../../../infl-components/text_input.jsx");

var Sidebar   = require("../../../../infl-components/sidebar.jsx");

var SidebarHeadingPattern = React.createClass({
  render : function(){
    return (
      <div className="sidebar-heading-pattern">
        <Pattern title="sidebar heading">
          <p>The Sidebar.Heading should be used with the Sidebar component.  It controls the title, a link or not, and optional message for the sidebar.</p>

          <Pattern.Detail title="Sidebar Heading">
            <Pattern.Show>
              <Sidebar>
                <Sidebar.Heading
                    title="Sidebar Heading"
                    message="This is a sample sidebar heading."
                    headingComponent="a"
                    headingComponentParams={{
                      href : "javascript:void(0);"
                    }}/>
              </Sidebar>
            </Pattern.Show>

            <Code>
              <Code.JSX>
                &lt;Sidebar.Heading title="Sidebar Heading" message="This is a sample sidebar heading." headingComponent="a" headingComponentParams="params_object" /&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Sidebar.Heading" />
              <Code.Props patternProps={this._buildSidebarHeadingProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var Sidebar = require("patternity/infl-components/sidebar.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/sidebar";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _buildSidebarHeadingProps : function(){
    return {
      title : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "Title of the Sidebar Heading."
      },
      message : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "Optional message to be displayed under the title."
      },
      headingComponent : {
        type : "react link or a tag",
        defaultValue : "undefined",
        required : false,
        description : "Determines if the title should be a link or not."
      },
      headingComponentParams : {
        type : "object",
        defaultValue : "{ }",
        required : false,
        description : "Prams to be passed with the headingComponent if defined."
      }
    };
  }
});

module.exports = SidebarHeadingPattern;
