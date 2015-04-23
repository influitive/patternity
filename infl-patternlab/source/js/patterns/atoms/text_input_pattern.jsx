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
          <Pattern.Detail title="Text Input">

            <Pattern.Show>
              <TextInput placeholder="Text Input" />
            </Pattern.Show>

            <Pattern.Demo title="Text Input Demo">
              <div className="demo-output">
                <div className="demo-pattern">
                  <h4>Text Input:</h4>
                  <div className="demo-pattern-example">
                    <TextInput placeholder={this.state.placeholder} message={this.state.message} type={this.state.type} required={this.state.required} error={this.state.error} valid={this.state.valid} readOnly={this.state.readOnly} disabled={this.state.disabled}/>
                  </div>
                </div>
                <Code>
                  <Code.JSX>
                    {this._buildDempJSX()}
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
              <TextInputControls
                onTypeChange={this._handleTypeChange}
                onOptionChange={this._handleOptionChange}
                onAdditionalChange={this._handleAdditionalChange}
                type={this.state.type}
                required={this.state.required}
                error={this.state.error}
                valid={this.state.valid}
                readOnly={this.state.readOnly}
                disabled={this.state.disabled}
                placeholder={this.state.placeholder}
                message={this.state.message} />
            </Pattern.Demo>

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
              var TextInput = require("patternity/infl-components/text_input.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/form";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _buildDemoProps : function(){
    return "{\n" +
      "\ttype : '" + this.state.type + "',\n" +
      "\trequired : " + this.state.required.toString() + ",\n" +
      "\terror : " + this.state.error.toString() + ",\n" +
      "\tvalid : " + this.state.valid.toString() + ",\n" +
      "\treadOnly : " + this.state.readOnly.toString() + ",\n" +
      "\tdisabled : " + this.state.disabled.toString() + ",\n" +
      "\tplaceholder : '" + this.state.placeholder + "',\n" +
      "\tmessage : [\n" +
        this._handleEmptyMessage(this.state.message[0]) +
        this._handleEmptyMessage(this.state.message[1]) +
        this._handleEmptyMessage(this.state.message[2]) +
      "\t]\n" +
    "}";
  },
  _buildDempJSX : function(){
    return (
      '<TextInput placeholder="' + this.state.placeholder + '" message="[' + this.state.message + ']" type="' + this.state.type +  '" required="' + this.state.required + '" error="' + this.state.error + '" valid="' + this.state.valid + '" readOnly="' + this.state.readOnly + '" disabled="' + this.state.disabled + '"  />'
    );
  },
  _handleEmptyMessage : function(message){
    return message ? "\t\t" + message + ",\n" : "";
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
      },
      onChange : {
        type : "function",
        default : "empty function",
        required : false,
        description : "Callback with event when the text input changes.  Only called if enabled."
      },
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
      <div className="pattern-controls">
        <h4>Text Input Controls</h4>
        <Form>
          <TextInputAdditionalControls onChange={this.props.onAdditionalChange} />
          <TextInputTypeControl onChange={this.props.onTypeChange} type={this.props.type} />
          <TextInputOptionControl
              onChange={this.props.onOptionChange}
              required={this.props.required}
              error={this.props.error}
              valid={this.props.valid}
              readOnly={this.props.readOnly}
              disabled={this.props.disabled}  />
        </Form>
      </div>
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
      onChange : function(){},
      type : "text"
    };
  },
  getInitialState : function(){
    return {
      selectedValue : this.props.type
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
      onChange : function(){},
      required : false,
      error : false,
      valid : false,
      readOnly : false,
      disabled : false
    };
  },
  getInitialState : function(){
    return {
      selectedValue : this._determineSelectedValue(),
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
  _determineSelectedValue : function(){
    if(this.props.required){
      return "requied";
    } else if(this.props.error){
      return "error";
    } else if(this.props.valid){
      return "valid";
    } else if(this.props.readOnly){
      return "readOnly";
    } else if(this.props.disabled){
      return "disabled";
    } else {
      return "";
    }
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
