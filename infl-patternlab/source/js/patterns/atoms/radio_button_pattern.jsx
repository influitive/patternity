var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form            = require("../../../../infl-components/form.jsx");
var InputLabel      = require("../../../../infl-components/input_label.jsx");

var RadioButton   = require("../../../../infl-components/radio_button.jsx");

var RadioButtonPattern = React.createClass({
  getInitialState : function(){
    return {
      layout : "inline",
      selectedValue : "radio-button-1",
      selectedValueDemo : "radio-button-1"
    };
  },
  render : function(){
    return (
      <div className="radio-button-pattern">
        <Pattern title="radio button">
          <p>The radio button form element can be used in place of a native radio button.  It also still acts as a form element radio button and can be used with a form tag and form submit.</p>
          <p>It has two states enabled and disabled</p>

          <Pattern.Detail title="Radio Button">
            <Pattern.Show>
              <RadioButton radioLabel="My Radio Button" isChecked={true} />
            </Pattern.Show>
            <Code>
              <Code.JSX>
                &lt;RadioButton id="radio-id-1" enabled="true" isChecked="true" onChange="on_change_callback" radioName="my-radio-name" radioLabel="My Radio Button" value="radio-button-1"&gt;&lt;/RadioButton&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="RadioButton" />
              <Code.Props patternProps={this._buildRadioButtonProps()} />
            </Code>
          </Pattern.Detail>

          <Pattern.Detail title="Radio Button Group">
            <p>Radio Button also comes with a subcomponent Group.  It is used to help with styling of radio buttons... cause we never use one radio button at a time.</p>
            <p>It also has two layout options inline and stacked</p>

            <Pattern.Show>
              <RadioButton.Group>
                <RadioButton radioName="selectedValue" radioLabel="My Radio Button One" isChecked={this.state.selectedValue === 'radio-button-1'} onChange={this._handleChange} value="radio-button-1"/>
                <RadioButton radioName="selectedValue" radioLabel="My Radio Button Two" isChecked={this.state.selectedValue === 'radio-button-2'} onChange={this._handleChange} value="radio-button-2"/>
                <RadioButton radioName="selectedValue" radioLabel="My Radio Button Three" isChecked={this.state.selectedValue === 'radio-button-3'} onChange={this._handleChange} value="radio-button-3"/>
              </RadioButton.Group>
            </Pattern.Show>

            <Pattern.Demo title="Radio Button Group Demo">
              <div className="demo-output">
                <div className="demo-pattern">
                  <h4>Radio Button Group</h4>
                  <div className="demo-pattern-example">
                    <RadioButton.Group layout={this.state.layout}>
                    <RadioButton radioName="selectedValueDemo" radioLabel="My Radio Button One" isChecked={this.state.selectedValueDemo === 'radio-button-1'} onChange={this._handleChange} value="radio-button-1"/>
                    <RadioButton radioName="selectedValueDemo" radioLabel="My Radio Button Two" isChecked={this.state.selectedValueDemo === 'radio-button-2'} onChange={this._handleChange} value="radio-button-2"/>
                    <RadioButton radioName="selectedValueDemo" radioLabel="My Radio Button Three" isChecked={this.state.selectedValueDemo === 'radio-button-3'} onChange={this._handleChange} value="radio-button-3"/>
                  </RadioButton.Group>
                  </div>
                </div>
                <Code>
                  <Code.HTML>
                    {this._buildDemoHTML()}
                  </Code.HTML>
                </Code>
              </div>
              <RadioButtonControls
                type={this.state.type}
                layout={this.state.layout}
                grouped={this.state.grouped}
                onChange={this._handleChange} />
            </Pattern.Demo>

            <Code>
              <Code.JSX>
                &lt;RadioButton.Group layout="inline" &gt;
                  &lt;RadioButton id="radio-id-1" enabled="true" isChecked="true" onChange="on_change_callback" radioName="my-radio-name" radioLabel="My Radio Button" value="radio-button-1"&gt;&lt;/RadioButton&gt;
                  &lt;RadioButton id="radio-id-2" enabled="true" isChecked="false" onChange="on_change_callback" radioName="my-radio-name" radioLabel="My Radio Button" value="radio-button-2"&gt;&lt;/RadioButton&gt;
                  &lt;RadioButton id="radio-id-3" enabled="true" isChecked="false" onChange="on_change_callback" radioName="my-radio-name" radioLabel="My Radio Button" value="radio-button-3"&gt;&lt;/RadioButton&gt;
                &lt;/RadioButton.Group&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="RadioButton.Group" />
              <Code.Props patternProps={this._buildRadioButtonGroupProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var RadioButton = require("patternity/infl-components/radio_button.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/radio_button";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _handleChange : function(event){
    var currentState = this.state;
    currentState[event.target.name] = event.target.value;
    this.setState(currentState);
  },
  _buildDemoHTML : function(){
    return (
      '<RadioButton.Group layout="' + this.state.layout + '">\n' +
        '\t<RadioButton radioName="my-radio-name" radioLabel="My Radio Button One" isChecked="' + (this.state.selectedValueDemo ==='radio-button-1').toString() + '" onChange="this._handleChange" value="radio-button-1"/>\n' +
        '\t<RadioButton radioName="my-radio-name" radioLabel="My Radio Button Two" isChecked="' + (this.state.selectedValueDemo ==='radio-button-2').toString() + '" onChange="this._handleChange" value="radio-button-2"/>\n' +
        '\t<RadioButton radioName="my-radio-name" radioLabel="My Radio Button Three" isChecked="' + (this.state.selectedValueDemo ==='radio-button-3').toString() + '" onChange="this._handleChange" value="radio-button-3"/>\n' +
      '</RadioButton.Group>'
    );
  },
  _buildRadioButtonProps : function(){
    return {
      isChecked : {
        type : "boolean",
        defaultValue : "false",
        required : false,
        description : "determines if the radio button is checked or not"
      },
      enabled : {
        type : "boolean",
        defaultValue : "true",
        required : false,
        description : "determines if the radio button is enabled or disabled"
      },
      onChange : {
        type : "function",
        defaultValue : "empty function",
        required : false,
        description : "Callback with event when the radio button changes.  Only called if enabled."
      },
      radioName : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "name of the radio button input to be used in a form."
      },
      id : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "id of the internal radio button input."
      },
      radioLabel : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "text to accompany the radio button."
      },
      value : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "value of the radio button."
      }
    };
  },
  _buildRadioButtonGroupProps : function(){
    return {
      layout : {
        type : "string",
        defaultValue : "inline",
        required : false,
        description : "determines if the radio button group is displayed stacked or inline."
      },
      id : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "Id for the internal radio button group."
      },
    };
  }
});

var RadioButtonControls = React.createClass({
  getDefaultProps : function(){
    return {
      layout : "inline",
      onChange : function(){}
    };
  },
  render : function(){
    return (
      <div className="pattern-controls">
        <h4>Radio Button Group Controls</h4>
        <Form>
          <Form.Row>
            <InputLabel label="Layout">
              <RadioButton.Group>
                <RadioButton isChecked={this.props.layout === "inline"} onChange={this.props.onChange} radioName="layout" radioLabel="Inline" value="inline"></RadioButton>
                <RadioButton isChecked={this.props.layout === "stacked"} onChange={this.props.onChange} radioName="layout" radioLabel="Stacked" value="stacked"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
        </Form>
      </div>
    );
  }
});

module.exports = RadioButtonPattern;
