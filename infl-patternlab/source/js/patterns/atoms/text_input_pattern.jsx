var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var RadioButton   = require("../../../../infl-components/radio_button.jsx");
var InputLabel    = require("../../../../infl-components/input_label.jsx");
var Form          = require("../../../../infl-components/form.jsx");

var TextInput = require("../../../../infl-components/text_input.jsx");

var TextInputPattern = React.createClass({
  getInitialState : function(){
    return {
      type : "text",
      required : false,
      error : false,
      valid : false,
      readOnly : false,
      disabled : false,
      placeholder : "Text Input",
      message : []
    };
  },
  render : function(){
    return (
      <div className="text-input-pattern">
        <Pattern title="text input">

          <TextInputControls onTypeChange={this._handleTypeChange} onOptionChange={this._handleOptionChange} onAdditionalChange={this._handleAdditionalChange}/>

          <Pattern.Detail title="Text Input">
            <Pattern.Show>
              <TextInput placeholder={this.state.placeholder} message={this.state.message} type={this.state.type} required={this.state.required} error={this.state.error} valid={this.state.valid} readOnly={this.state.readOnly} disabled={this.state.disabled}/>
            </Pattern.Show>
            <Code>
              <Code.JSX>
                &lt;TextInput type="text" placeholder="Text Input" &gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="TextInput" />
              <Code.Props patternProps={this._buildTextInputProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var Loading = require("patternity/infl-components/text_input.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/form";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _handleAdditionalChange : function(name, value){
    var currentState = this.state;
    currentState[name] = value;
    this.setState(currentState);
  },
  _handleTypeChange : function(type){
    this.setState({
      type : type
    });
  },
  _handleOptionChange : function(option){
    this.setState({
      required : option === 'required',
      error : option === 'error',
      valid : option === 'valid',
      readOnly : option === 'readOnly',
      disabled : option === 'disabled'
    });
  },
  _buildTextInputProps : function(){
    return {
      type: {
        type : "string",
        default : "text",
        required : false,
        description : "can be one of text, password, url, email, search, number."
      },
      placeholder : {
        type : "string",
        default : "",
        required : false,
        description : "placeholder text for the input."
      },
      name: {
        type : "string",
        default : "",
        required : false,
        description : "name for the input used with form tag."
      },
      id : {
        type : "string",
        default : "",
        required : false,
        description : "html id for the input."
      },
      pattern : {
        type : "string",
        default : "",
        required : false,
        description : "regex used to validate the input value."
      },
      message : {
        type : "string or array",
        default : "",
        required : false,
        description : "displayed under the input used for a hint, error, etc. text."
      },
      value : {
        type : "string",
        default : "",
        required : false,
        description : "default value of the input."
      },
      required : {
        type : "boolean",
        default : "false",
        required : false,
        description : "if true input is marked as required."
      },
      error : {
        type : "boolean",
        default : "false",
        required : false,
        description : "if true input is highlighted as an error field."
      },
      valid : {
        type : "boolean",
        default : "false",
        required : false,
        description : "if true input is highlighted as a valid field."
      },
      readOnly : {
        type : "boolean",
        default : "false",
        required : false,
        description : "if true input is read only but will still submit with a form."
      },
      disabled : {
        type : "boolean",
        default : "false",
        required : false,
        description : "if true input is disabled and will not submit with a form."
      }
    };
  }
});

var TextInputControls = React.createClass({
  getDefaultProps : function(){
    return {
      onTypeChange : function(){},
      onTypeChange : function(){},
      onAdditionalChange : function(){}
    };
  },
  render : function(){
    return (
      <Form>
        <Form.Column>
          <TextInputAdditionalControls onChange={this.props.onAdditionalChange} />
        </Form.Column>
        <Form.Column>
          <TextInputTypeControl onChange={this.props.onTypeChange} />
        </Form.Column>
        <Form.Column>
          <TextInputOptionControl onChange={this.props.onOptionChange} />
        </Form.Column>
      </Form>
    );
  }
});

var TextInputAdditionalControls = React.createClass({
  getDefaultProps : function(){
    return {
      onChange : function(){}
    };
  },
  render : function(){
    return (
      <div className="additional-controls">
        <Form.Row>
          <InputLabel label="Placeholder">
            <TextInput placeholder="Text Input" value="Text Input" name="placeholder" onChange={this._handleChange}/>
          </InputLabel>
        </Form.Row>
        <Form.Row>
          <InputLabel label="Message One">
            <TextInput placeholder="e.g. Hint: should be at least 5 characters" value="" ref="messageOne" name="message" onChange={this._handleMessageChange}/>
          </InputLabel>
        </Form.Row>
        <Form.Row>
          <InputLabel label="Message Two">
            <TextInput placeholder="e.g. Hint: should be at least 5 characters" value="" ref="messageTwo" name="message" onChange={this._handleMessageChange}/>
          </InputLabel>
        </Form.Row>
        <Form.Row>
          <InputLabel label="Message Three">
            <TextInput placeholder="e.g. Hint: should be at least 5 characters" value="" ref="messageThree" name="message" onChange={this._handleMessageChange}/>
          </InputLabel>
        </Form.Row>
      </div>
    );
  },
  _handleChange : function(event){
    this.props.onChange(event.target.name, event.target.value);
  },
  _handleMessageChange : function(event){
    this.props.onChange(event.target.name, [
      this.refs.messageOne.getDOMNode().firstChild.value,
      this.refs.messageTwo.getDOMNode().firstChild.value,
      this.refs.messageThree.getDOMNode().firstChild.value
    ]);
  }
});

var TextInputTypeControl = React.createClass({
  getDefaultProps : function(){
    return {
      onChange : function(){}
    };
  },
  getInitialState : function(){
    return {
      selectedValue : "text"
    };
  },
  render : function(){
    return (
      <Form.Row>
        <InputLabel label="Input Type">
          <RadioButton.Group layout="stacked">
            <RadioButton radioName="text-input-type" radioLabel="Text" isChecked={this._isTypeSelected('text')} onChange={this._handleChange} value="text"/>
            <RadioButton radioName="text-input-type" radioLabel="Search" isChecked={this._isTypeSelected('search')} onChange={this._handleChange} value="search"/>
            <RadioButton radioName="text-input-type" radioLabel="Password" isChecked={this._isTypeSelected('password')} onChange={this._handleChange} value="password"/>
            <RadioButton radioName="text-input-type" radioLabel="URL" isChecked={this._isTypeSelected('url')} onChange={this._handleChange} value="url"/>
            <RadioButton radioName="text-input-type" radioLabel="Email" isChecked={this._isTypeSelected('email')} onChange={this._handleChange} value="email"/>
            <RadioButton radioName="text-input-type" radioLabel="Number" isChecked={this._isTypeSelected('number')} onChange={this._handleChange} value="number"/>
          </RadioButton.Group>
        </InputLabel>
      </Form.Row>
    );
  },
  _isTypeSelected : function(value){
    return this.state.selectedValue === value;
  },
  _handleChange : function(event){
    this.setState({
      selectedValue : event.target.value
    });
    this.props.onChange(event.target.value);
  },
});

var TextInputOptionControl = React.createClass({
  getDefaultProps : function(){
    return {
      onChange : function(){}
    };
  },
  getInitialState : function(){
    return {
      selectedValue : ""
    };
  },
  render : function(){
    return (
      <Form.Row>
        <InputLabel label="Input Option">
          <RadioButton.Group layout="stacked">
            <RadioButton radioName="text-input-option" radioLabel="Base Input" isChecked={this._isOptionSelected('')} onChange={this._handleChange} value=""/>
            <RadioButton radioName="text-input-option" radioLabel="Required" isChecked={this._isOptionSelected('required')} onChange={this._handleChange} value="required"/>
            <RadioButton radioName="text-input-option" radioLabel="Error" isChecked={this._isOptionSelected('error')} onChange={this._handleChange} value="error"/>
            <RadioButton radioName="text-input-option" radioLabel="Valid" isChecked={this._isOptionSelected('valid')} onChange={this._handleChange} value="valid"/>
            <RadioButton radioName="text-input-option" radioLabel="Read Only" isChecked={this._isOptionSelected('readOnly')} onChange={this._handleChange} value="readOnly"/>
            <RadioButton radioName="text-input-option" radioLabel="Disabled" isChecked={this._isOptionSelected('disabled')} onChange={this._handleChange} value="disabled"/>
          </RadioButton.Group>
        </InputLabel>
      </Form.Row>
    );
  },
  _isOptionSelected : function(value){
    return this.state.selectedValue === value;
  },
  _handleChange : function(event){
    this.setState({
      selectedValue : event.target.value
    });
    this.props.onChange(event.target.value);
  },
});

module.exports = TextInputPattern;
