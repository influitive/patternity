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
  getInitialState : function(){
    return {
      showAllTabs : false,
      openTabIndex : null
    };
  },
  render : function(){
    return (
      <div className="tabs-pattern">
        <Pattern title="tabs">
          <p>The Tabs component handles displaying data in a tab format.  It has one sub-component Tab.</p>

          <Pattern.Detail title="Tabs">
            <p>Tabs have 2 ways of being responsive.</p>
            <p>The first (showAllTabs=false/default) is to hide the right most tabs as the screen shrinks.  The idea being that the most important items are on the left, they will be prioritized as the screen shrinks.</p>
            <p>The second (showAllTabs=true) is to convert the tabs into a dropdown menu when there is not enough room to display all the tabs</p>
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

            <Pattern.Demo title="Tabs Demo">
              <div className="demo-output">
                <div className="demo-pattern">
                  <h4>Tabs</h4>
                  <div className="demo-pattern-example">
                    <Tabs showAllTabs={this.state.showAllTabs} openTabIndex={this.state.openTabIndex}>
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
                  </div>
                </div>
                <Code>
                  <Code.JSX>
                    {this._buildDemoJSX()}
                  </Code.JSX>
                </Code>
                <h5>Props</h5>
                <div className="demo-props">
                  <pre>
                    <code>
                      {this._buildDemoProps()}
                    </code>
                  </pre>
                </div>
              </div>
              <TabsControls
                showAllTabs={this.state.showAllTabs}
                openTabIndex={this.state.openTabIndex}
                view={this.state.view}
                onChange={this._handleChange} />
            </Pattern.Demo>

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
  _handleChange : function(name, value){
    var currentState = this.state;
    currentState[name] = value;
    this.setState(currentState);
  },
  _buildDemoProps : function(){
    return (
      '{' +
        '\topenTabIndex : ' + this.state.openTabIndex  + '",\n' +
        '\tshowAllTabs : ' + this.state.showAllTabs  + '\n' +
      '}'
    );
  },
  _buildDemoJSX : function(){
    return (
      '<Tabs showAllTabs={' + this.state.showAllTabs + '} openTabIndex={' + this.state.openTabIndex + '} >' +
        '\t<Tabs.Tab title="First Tab">\n' +
          '\t\t<h2>First Tab</h2>\n' +
          '\t\t<p>This is the first tabs content.</p>\n' +
        '\t</Tabs.Tab>\n' +
        '\t<Tabs.Tab title="Second Tab">\n' +
          '\t\t<h2>Second Tab</h2>\n' +
          '\t\t<p>This is the second tabs content.</p>\n' +
        '\t</Tabs.Tab>\n' +
        '\t<Tabs.Tab title="Third Tab">\n' +
          '\t\t<h2>Third Tab</h2>\n' +
          '\t\t<p>This is the third tabs content.</p>\n' +
        '\t</Tabs.Tab>\n' +
      '</Tabs>'
    );
  },
  _buildTabsProps : function(){
    return {
      id : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "Id for the tab component."
      },
      key : {
        type : "string",
        defaultValue : "unique string",
        required : false,
        description : "react key of the tabs.  defaults to a unique value."
      },
      openTabIndex : {
        type : "integer",
        defaultValue : "0",
        required : false,
        description : "Index of which tab will be open first."
      },
      onChange : {
        type : "function",
        defaultValue : "empty function",
        required : false,
        description : "Callback for when the tab changes.  Called with the index of that tab."
      },
      children : {
        type : "array",
        defaultValue : "[...] ",
        required : true,
        description : "Array of Tabs.Tab components."
      },
      showAllTabs : {
        type : "boolean",
        defaultValue : "false",
        required : false,
        description : "When true it will enable tabs displaying in a drop down when the number of tabs don't fit on the page.  When false the right most tab is hidden when the tabs don't fit the width of the page."
      }
    };
  },
  _buildTabProps : function(){
    return {
      title : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "Title that will be displayed on the tab."
      },
      children : {
        type : "array",
        defaultValue : "[...] ",
        required : true,
        description : "Array of react elements, html, text that will be the tab content."
      }
    };
  }
});

var TabsControls = React.createClass({
  getDefaultProps : function(){
    return {
      showAllTabs : true,
      onChange : function(){},
      openTabIndex : null
    };
  },
  render : function(){
    return (
      <div className="pattern-controls">
        <h4>Tabs Controls</h4>
        <Form>
          <Form.Row>
            <InputLabel label="Show All Tabs">
              <RadioButton.Group layout="stacked">
                <RadioButton isChecked={this.props.showAllTabs} onChange={this._handleBooleanChange} radioName="showAllTabs" radioLabel="True" value="true"></RadioButton>
                <RadioButton isChecked={!this.props.showAllTabs} onChange={this._handleBooleanChange} radioName="showAllTabs" radioLabel="False" value="false"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <p>To view the responsive feature of the tabs see the <a href="javascript:void(0);" onClick={this._goToChallnegePageDemo}>Challenge Page Demo</a></p>
          </Form.Row>
          <Form.Row>
            <InputLabel label="openTabIndex">
              <RadioButton.Group layout="stacked">
                <RadioButton isChecked={this.props.openTabIndex === null} onChange={this._handleOpenTabIndexChange} radioName="openTabIndex" radioLabel="No open tab index" value="null"></RadioButton>
                <RadioButton isChecked={this.props.openTabIndex === 0} onChange={this._handleOpenTabIndexChange} radioName="openTabIndex" radioLabel="First Tab" value="0"></RadioButton>
                <RadioButton isChecked={this.props.openTabIndex === 1} onChange={this._handleOpenTabIndexChange} radioName="openTabIndex" radioLabel="Second Tab" value="1"></RadioButton>
                <RadioButton isChecked={this.props.openTabIndex === 2} onChange={this._handleOpenTabIndexChange} radioName="openTabIndex" radioLabel="Third Tab" value="2"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
        </Form>
      </div>
    );
  },
  _handleBooleanChange : function(event){
    this.props.onChange(event.target.name, event.target.value === "true");
  },
  _handleOpenTabIndexChange : function(event){
    var value = (event.target.value === "null") ? null : parseInt(event.target.value);
    this.props.onChange(event.target.name, value);
  },
  _goToChallnegePageDemo : function(){
    var challengesLink = document.getElementById("link-challenges-page-demo");
    challengesLink.click();
  }
});

module.exports = TabsPattern;
