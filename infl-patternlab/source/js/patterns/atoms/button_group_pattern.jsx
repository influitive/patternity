var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form            = require("../../../../infl-components/form.jsx");
var InputLabel      = require("../../../../infl-components/input_label.jsx");
var RadioButton     = require("../../../../infl-components/radio_button.jsx");

var ButtonGroup      = require("../../../../infl-components/button_group.jsx");

var ButtonGroupPattern = React.createClass({
  getInitialState : function(){
    return {
      type : "",
      layout : false,
      grouped : false
    };
  },
  render : function(){
    return (
      <div className="button-group-pattern">
        <Pattern title="button group">
          <p>Button group is a wrapper for buttons to help with styling groups of buttons.  It can take any button styling and make it into a group.</p>

          <Pattern.Detail title="Button Group">
            <Pattern.Show>
              <ButtonGroup>
                <button>First Button</button>
                <button>Second Button</button>
                <button>Third Button</button>
              </ButtonGroup>
            </Pattern.Show>

            <Pattern.Demo title="Button Group Demo">
              <div className="demo-output">
                <div className="demo-pattern">
                  <h4>Button Group</h4>
                  <div className="demo-pattern-example">
                    <ButtonGroup layout={this.state.layout} grouped={this.state.grouped}>
                      <button className={this.state.type}>First Button</button>
                      <button className={this.state.type}>Second Button</button>
                      <button className={this.state.type}>Third Button</button>
                    </ButtonGroup>
                  </div>
                </div>
                <Code>
                  <Code.HTML>
                    {this._buildDemoHTML()}
                  </Code.HTML>
                </Code>
              </div>
              <ButtonControls
                type={this.state.type}
                layout={this.state.layout}
                grouped={this.state.grouped}
                onChange={this._handleChange} />
            </Pattern.Demo>

            <Code>
              <Code.JSX>
                &lt;ButtonGroup&gt;
                  &lt;button&gt;First Button&lt;/button&gt;
                  &lt;button&gt;Second Button&lt;/button&gt;
                  &lt;button&gt;Third Button&lt;/button&gt;
                &lt;/ButtonGroup&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="ButtonGroup" />
              <Code.Props patternProps={this._buildButtonGroupProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var ButtonGroup = require("patternity/infl-components/button_group.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/button";
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
  _buildDemoHTML : function(){
    return (
      '<ButtonGroup layout="' + this.state.layout + '" grouped="' + this.state.grouped + '">\n' +
        '\t<button class="' + this.state.type + '">First Button</button>\n' +
        '\t<button class="' + this.state.type + '">Second Button</button>\n' +
        '\t<button class="' + this.state.type + '">Third Button</button>\n' +
      '</ButtonGroup>'
    );
  },
  _buildButtonGroupProps : function(){
    return {
      layout : {
        type : "string",
        default : "inline",
        required : false,
        description : "Determines if the button group is inline or stacked."
      },
      grouped : {
        type : "boolean",
        default : "false",
        required : false,
        description : "Determines if the button group shoul be grouped, not space between the buttons."
      },
      children : {
        type : "array",
        default : "[...]",
        required : false,
        description : "Array of button(s) or link(s) with .button class."
      }
    };
  }
});

var ButtonControls = React.createClass({
  getDefaultProps : function(){
    return {
      type : "",
      grouped : false,
      layout : "inline",
      onChange : function(){}
    }
  },
  render : function(){
    return (
      <div className="pattern-controls">
        <h4>Button Group Controls</h4>
        <Form>
          <Form.Row>
            <InputLabel label="Button Group Layout">
              <RadioButton.Group>
                <RadioButton isChecked={this.props.layout === "inline"} onChange={this._handleChange} radioName="layout" radioLabel="Inline" value="inline"></RadioButton>
                <RadioButton isChecked={this.props.layout === "stacked"} onChange={this._handleChange} radioName="layout" radioLabel="Stacked" value="stacked"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <InputLabel label="Grouped">
              <RadioButton.Group>
                <RadioButton isChecked={!this.props.grouped} onChange={this._handleGroupedChange} radioName="grouped" radioLabel="Default" value="false"></RadioButton>
                <RadioButton isChecked={this.props.grouped} onChange={this._handleGroupedChange} radioName="grouped" radioLabel="Grouped" value="true"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <InputLabel label="Button Type">
              <RadioButton.Group layout="stacked">
                <RadioButton isChecked={this.props.type === ''} onChange={this._handleChange} radioName="type" radioLabel="Default" value=""></RadioButton>
                <RadioButton isChecked={this.props.type === 'primary'} onChange={this._handleChange} radioName="type" radioLabel="Primary" value="primary"></RadioButton>
                <RadioButton isChecked={this.props.type === 'secondary'} onChange={this._handleChange} radioName="type" radioLabel="Secondary" value="secondary"></RadioButton>
                <RadioButton isChecked={this.props.type === 'disabled'} onChange={this._handleChange} radioName="type" radioLabel="Disabled" value="disabled"></RadioButton>
                <RadioButton isChecked={this.props.type === 'important'} onChange={this._handleChange} radioName="type" radioLabel="Important" value="important"></RadioButton>
                <RadioButton isChecked={this.props.type === 'success'} onChange={this._handleChange} radioName="type" radioLabel="Success" value="success"></RadioButton>
                <RadioButton isChecked={this.props.type === 'danger'} onChange={this._handleChange} radioName="type" radioLabel="Danger" value="danger"></RadioButton>
                <RadioButton isChecked={this.props.type === 'text'} onChange={this._handleChange} radioName="type" radioLabel="Text" value="text"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
        </Form>
      </div>
    );
  },
  _handleChange : function(event) {
    this.props.onChange(event.target.name, event.target.value);
  },
  _handleGroupedChange : function(event){
    this.props.onChange(event.target.name, event.target.value === "true");
  }
});

module.exports = ButtonGroupPattern;
