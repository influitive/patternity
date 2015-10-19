var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form            = require("../../../../infl-components/form.jsx");
var InputLabel      = require("../../../../infl-components/input_label.jsx");
var RadioButton     = require("../../../../infl-components/radio_button.jsx");

var ButtonDropdown  = require("../../../../infl-components/button_dropdown.jsx");

var ButtonDropdownPattern = React.createClass({
  getInitialState : function(){
    return {
      type : ""
    };
  },
  render : function(){
    return (
      <div className="button-dropdown-pattern">
        <Pattern title="button dropdown">
          <p>Button dropdowns mix the awesomeness of a button with the functionality of a dropdown.</p>

          <Pattern.Detail title="Button Dropdown">
            <Pattern.Show>
              <div style={{ height: "200px"}}>
                <ButtonDropdown title="Button Title">
                  <a href="#">Option 1</a>
                  <a href="#">Option 2</a>
                  <a href="#">Option 3</a>
                </ButtonDropdown>
              </div>
            </Pattern.Show>

            <Pattern.Demo title="Button Dropdown Demo">
              <div className="demo-output">
                <div className="demo-pattern">
                  <h4>Button Dropdown</h4>
                  <div className="demo-pattern-example">
                    <ButtonDropdown title="Button Title" type={this.state.type} alignDropdown='right'>
                      <a href="#">Option 1</a>
                      <a href="#">Option 2</a>
                      <a href="#">Option 3</a>
                    </ButtonDropdown>
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
                inverse={this.state.inverse}
                icon={this.state.icon}
                isInverseAllowed={this.state.isInverseAllowed}
                onChange={this._handleChange} />
            </Pattern.Demo>

            <Code>
              <Code.JSX>
                &lt;ButtonDropdown title="Button Title" options="[...]" onChange="on_change_callback" /&gt;

                &lt;ButtonDropdown title="Button Title" onChange="on_change_callback"&gt;
                  &lt;Link "...props"&gt;&lt;/Link&gt;
                  &lt;Link "...props"&gt;&lt;/Link&gt;
                  &lt;Link "...props"&gt;&lt;/Link&gt;
                &lt;/ButtonDropdown&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="ButtonDropdown" />
              <Code.Props patternProps={this._buildButtonDropdownProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var ButtonDropdown = require("patternity/infl-components/button_dropdown.jsx");
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
      '<ButtonDropdown title="Button Title" type="' + this.state.type + '">\n' +
        '\t<a href="#">Option 1</a>\n' +
        '\t<a href="#">Option 2</a>\n' +
        '\t<a href="#">Option 3</a>\n' +
      '</ButtonDropdown>'
    );
  },
  _buildButtonDropdownProps : function(){
    return {
      title : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "Title to appear on button."
      },
      type : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "Button type: success, danger, primary, important, secondary."
      },
      options : {
        type : "array",
        defaultValue : "[...]",
        required : false,
        description : "Array of react link elements, or html hrefs."
      },
      children : {
        type : "array",
        defaultValue : "[...]",
        required : false,
        description : "Array of react link elements, or html hrefs."
      }
    };
  }
});

var ButtonControls = React.createClass({
  getDefaultProps : function(){
    return {
      type : "",
      onChange : function(){}
    }
  },
  render : function(){
    return (
      <div className="pattern-controls">
        <h4>Input Label Controls</h4>
        <Form>
          <Form.Row>
            <InputLabel label="Button Type">
              <RadioButton.Group layout="stacked">
                <RadioButton isChecked={this.props.type === ''} onChange={this._handleChange} radioName="type" radioLabel="Default" value=""></RadioButton>
                <RadioButton isChecked={this.props.type === 'primary'} onChange={this._handleChange} radioName="type" radioLabel="Primary" value="primary"></RadioButton>
                <RadioButton isChecked={this.props.type === 'secondary'} onChange={this._handleChange} radioName="type" radioLabel="Secondary" value="secondary"></RadioButton>
                <RadioButton isChecked={this.props.type === 'important'} onChange={this._handleChange} radioName="type" radioLabel="Important" value="important"></RadioButton>
                <RadioButton isChecked={this.props.type === 'success'} onChange={this._handleChange} radioName="type" radioLabel="Success" value="success"></RadioButton>
                <RadioButton isChecked={this.props.type === 'danger'} onChange={this._handleChange} radioName="type" radioLabel="Danger" value="danger"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
        </Form>
      </div>
    );
  },
  _handleChange : function(event) {
    this.props.onChange(event.target.name, event.target.value);
  }
});

module.exports = ButtonDropdownPattern;
