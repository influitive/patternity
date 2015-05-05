var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form            = require("../../../../infl-components/form.jsx");
var InputLabel      = require("../../../../infl-components/input_label.jsx");
var RadioButton     = require("../../../../infl-components/radio_button.jsx");
var TextInput       = require("../../../../infl-components/text_input.jsx");

var Tabs   = require("../../../../infl-components/tabs.jsx");

var TabsPattern = React.createClass({
  render : function(){
    return (
      <div className="tabs-pattern">
        <Pattern title="tabs">
          <p>The Tabs component handles displaying data in a tab format.  It has one sub-component Tab.</p>

          <Pattern.Detail title="Tabs">
            <Pattern.Show>
              <Tabs>
                <Tabs.Tab title="First Tab">
                  <h2>First Tab</h2>
                  <p>This is the first tabs content.</p>
                </Tabs.Tab>
                <Tabs.Tab title="Second Tab">
                  <h2>Second Tab</h2>
                  <p>This is the second tabs content.</p>
                </Tabs.Tab>
                <Tabs.Tab title="Third Tab">
                  <h2>Third Tab</h2>
                  <p>This is the third tabs content.</p>
                </Tabs.Tab>
              </Tabs>
            </Pattern.Show>

            <Code>
              <Code.JSX>
                &lt;Tabs&gt;
                  &lt;Tabs.Tab title="First Tab"&gt;
                    &lt;h2&gt;First Tab&lt;/h2&gt;
                    &lt;p&gt;This is the first tabs content.&lt;/p&gt;
                  &lt;/Tabs.Tab&gt;
                  &lt;Tabs.Tab title="Second Tab"&gt;
                    &lt;h2&gt;First Tab&lt;/h2&gt;
                    &lt;p&gt;This is the second tabs content.&lt;/p&gt;
                  &lt;/Tabs.Tab&gt;
                  &lt;Tabs.Tab title="Third Tab"&gt;
                    &lt;h2&gt;First Tab&lt;/h2&gt;
                    &lt;p&gt;This is the third tabs content.&lt;/p&gt;
                  &lt;/Tabs.Tab&gt;
                &lt;/Tabs&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Tabs" />
              <Code.Props patternProps={this._buildTabsProps()} />
            </Code>
          </Pattern.Detail>

          <Pattern.Detail title="Tab">
            <Code>
              <Code.JSX>
                &lt;Tabs.Tab title="First Tab"&gt;
                  &lt;h2&gt;First Tab&lt;/h2&gt;
                  &lt;p&gt;This is the first tabs content.&lt;/p&gt;
                &lt;/Tabs.Tab&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Tabs.Tab" />
              <Code.Props patternProps={this._buildTabProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var Tabs = require("patternity/infl-components/tabs.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/tabs";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _buildTabsProps : function(){
    return {
      id : {
        type : "string",
        default : "",
        required : false,
        description : "Id for the tab component."
      },
      key : {
        type : "string",
        default : "unique string",
        required : false,
        description : "react key of the tabs.  defaults to a unique value."
      },
      openTabIndex : {
        type : "integer",
        default : "0",
        required : false,
        description : "Index of which tab will be open first."
      },
      onChange : {
        type : "function",
        default : "empty function",
        required : false,
        description : "Callback for when the tab changes.  Called with the index of that tab."
      },
      children : {
        type : "array",
        default : "[...] ",
        required : true,
        description : "Array of Tabs.Tab components."
      }
    };
  },
  _buildTabProps : function(){
    return {
      title : {
        type : "string",
        default : "",
        required : false,
        description : "Title that will be displayed on the tab."
      },
      children : {
        type : "array",
        default : "[...] ",
        required : true,
        description : "Array of react elements, html, text that will be the tab content."
      }
    };
  }
});

module.exports = TabsPattern;
