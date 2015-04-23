var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var RadioButton     = require("../../../../infl-components/radio_button.jsx");
var Checkbox        = require("../../../../infl-components/checkbox.jsx");
var ToggleSwitch    = require("../../../../infl-components/toggle_switch.jsx");
var SelectDropdown  = require("../../../../infl-components/select_dropdown.jsx");
var Form            = require("../../../../infl-components/form.jsx");
var TextInput       = require("../../../../infl-components/text_input.jsx");

var InputLabel    = require("../../../../infl-components/input_label.jsx");

var FontsPattern = React.createClass({
  getInitialState : function(){
    return {
      layout : "inline",
      label : "Field Label",
      type : "text",
      radioButtonToggle : true
    };
  },
  render : function(){
    return (
      <div className="input-label-pattern">
        <Pattern title="input label">
          <p>The Input Label is used to add a label to a variety of inputs including:</p>
          <ul>
            <li>Text Inputs</li>
            <li>Select Dropdowns</li>
            <li>Checkboxes</li>
            <li>Radio Buttons</li>
            <li>Textareas</li>
            <li>ToggleSwitch</li>
          </ul>
          <p>Input Label helps with styling of the inputs and has two layouts inline and stacked</p>

          <Pattern.Detail title="Input Label">
            <Pattern.Show>
              <InputLabel label="Field Label">
                <TextInput type="text" placeholder="Text Input" message="Hint: Fill in this field." />
              </InputLabel>
            </Pattern.Show>

            <Pattern.Demo title="Input Label Demo">
              <div className="demo-output">
                <div className="demo-pattern">
                  <h4>Input Label:</h4>
                  <div className="demo-pattern-example">
                    <InputLabel label={this.state.label} layout={this.state.layout}>
                      {this._determineWhichInputToShow()}
                    </InputLabel>
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
              <InputLabelControls
                layout={this.state.layout}
                label={this.state.label}
                type={this.state.type}
                onChange={this._handleChange} />
            </Pattern.Demo>

            <Code>
              <Code.JSX>
                &lt;InputLabel layout="inline" label="Field Label"&gt;
                  &lt;TextInput type="text" placeholder="Text Input" message="Hint: Fill in this field."&gt;&lt;/TextInput&gt;
                &lt;/InputLabel&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="InputLabel" />
              <Code.Props patternProps={this._buildInputLabelProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var InputLabel = require("patternity/infl-components/input_label.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/form";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _determineWhichInputToShow : function(){
    if(this.state.type === "text"){
      return (<TextInput type="text" placeholder="Text Input" message="Hint: Fill in this field." />);
    } else if(this.state.type === "required"){
      return (<TextInput type="text" required={true} placeholder="Text Input" />);
    } else if(this.state.type === "select"){
      return (
        <SelectDropdown value="0">
          <option value="0">Option 0</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
        </SelectDropdown>
      );
    } else if(this.state.type === "radioButton"){
      var radioButtonOnChange = function(){
        this.setState({
          radioButtonToggle : !this.state.radioButtonToggle
        });
      };
      return (
        <RadioButton.Group>
          <RadioButton isChecked={this.state.radioButtonToggle} onChange={radioButtonOnChange} radioName="test" radioLabel="Radio Button 1" value="1"></RadioButton>
          <RadioButton isChecked={!this.state.radioButtonToggle} onChange={radioButtonOnChange} radioName="test" radioLabel="Radio Button 2" value="2"></RadioButton>
        </RadioButton.Group>
      );
    } else if(this.state.type === "checkbox"){
      return (
        <Checkbox.Group>
          <Checkbox checkboxLabel="My Checkbox One" />
          <Checkbox checkboxLabel="My Checkbox Two" />
          <Checkbox checkboxLabel="My Checkbox Three" />
        </Checkbox.Group>
      );
    } else if(this.state.type === "toggleSwitch"){
      return (<ToggleSwitch />);
    }
  },
  _buildDemoProps : function(){
    return "{\n" +
      "\tlayout : '" + this.state.layout + "',\n" +
      "\tlabel : " + this.state.label + "\n" +
    "}";
  },
  _buildDemoJSX : function(){
    return (
      '<InputLabel label="' + this.state.label + '" layout="' + this.state.layout + '">\n' +
        this._determineWhichJSXToShow() +
      '</InputLabel>'
    );
  },
  _determineWhichJSXToShow : function(){
    if(this.state.type === "text"){
      return ('<TextInput type="text" placeholder="Text Input" message="Hint: Fill in this field." />\n');
    } else if(this.state.type === "select"){
      return (
        '<SelectDropdown value="0">\n' +
          '\t<option value="0">Option 0</option>\n' +
          '\t<option value="1">Option 1</option>\n' +
          '\t<option value="2">Option 2</option>\n' +
          '\t<option value="3">Option 3</option>\n' +
          '\t<option value="4">Option 4</option>\n' +
          '\t<option value="5">Option 5</option>\n' +
        '</SelectDropdown>'
      );
    } else if(this.state.type === "radioButton"){
      return (
        '<RadioButton.Group>\n' +
          '\t<RadioButton isChecked="true"  radioName="test" radioLabel="Radio Button 1" value="1"></RadioButton>\n' +
          '\t<RadioButton isChecked="false"  radioName="test" radioLabel="Radio Button 2" value="2"></RadioButton>\n' +
        '</RadioButton.Group>'
      );
    } else if(this.state.type === "checkbox"){
      return (
        '<Checkbox.Group>\n' +
          '\t<Checkbox checkboxLabel="My Checkbox One" />\n' +
          '\t<Checkbox checkboxLabel="My Checkbox Two" />\n' +
          '\t<Checkbox checkboxLabel="My Checkbox Three" />\n' +
        '</Checkbox.Group>'
      );
    } else if(this.state.type === "toggleSwitch"){
      return ('<ToggleSwitch />');
    }
  },
  _handleChange : function(name, value){
    var currentState = this.state;
    currentState[name] = value;
    this.setState(currentState);
  },
  _buildInputLabelProps : function(){
    return {
      layout : {
        type : "string",
        default : "inline",
        required : false,
        description : "Determines InputLabel layout is either 'stacked' or 'inline'."
      },
      label : {
        type : "string",
        default : "",
        required : false,
        description : "Value of the label."
      },
      children : {
        type : "array",
        default : "[...]",
        required : false,
        description : "Input can be TextInput, SelectDropdown, ToggleSwitch, checkbox, etc."
      }
    };
  }
});

var InputLabelControls = React.createClass({
  getDefaultProps : function(){
    return {
      onChange : function(){},
      label : "",
      layout : ""
    };
  },
  render : function(){
    return (
      <div className="pattern-controls">
        <h4>Input Label Controls</h4>
        <Form>
          <Form.Row>
            <InputLabel label="Label">
              <TextInput placeholder="Add Label" value={this.props.label} name="label" onChange={this._handleChange}/>
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <InputLabel label="Layout">
              <RadioButton.Group>
                <RadioButton isChecked={this.props.layout === 'inline'} onChange={this._handleChange} radioName="layout" radioLabel="Inline" value="inline"></RadioButton>
                <RadioButton isChecked={this.props.layout === 'stacked'} onChange={this._handleChange} radioName="layout" radioLabel="Stacked" value="stacked"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <InputLabel label="Input Type">
              <RadioButton.Group layout="stacked">
                <RadioButton isChecked={this.props.type === 'text'} onChange={this._handleChange} radioName="type" radioLabel="Text Input" value="text"></RadioButton>
                <RadioButton isChecked={this.props.type === 'required'} onChange={this._handleChange} radioName="type" radioLabel="Required Text Input" value="required"></RadioButton>
                <RadioButton isChecked={this.props.type === 'select'} onChange={this._handleChange} radioName="type" radioLabel="Select" value="select"></RadioButton>
                <RadioButton isChecked={this.props.type === 'radioButton'} onChange={this._handleChange} radioName="type" radioLabel="Radio Button Group" value="radioButton"></RadioButton>
                <RadioButton isChecked={this.props.type === 'checkbox'} onChange={this._handleChange} radioName="type" radioLabel="Checkbox Group" value="checkbox"></RadioButton>
                <RadioButton isChecked={this.props.type === 'toggleSwitch'} onChange={this._handleChange} radioName="type" radioLabel="Toggle Switch" value="toggleSwitch"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
        </Form>
      </div>
    );
  },
  _handleChange : function(event){
    this.props.onChange(event.target.name, event.target.value)
  }
});

module.exports = FontsPattern;
