var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Button            = require("../../../../infl-components/button.jsx");
var Form            = require("../../../../infl-components/form.jsx");
var InputLabel      = require("../../../../infl-components/input_label.jsx");
var RadioButton     = require("../../../../infl-components/radio_button.jsx");

var ButtonPattern = React.createClass({
  getInitialState : function(){
    return {
      type : "",
      inverse : false,
      disabled : false,
      icon : "",
      text : "Sample Button",
      isInverseAllowed : false
    };
  },
  render : function(){
    return (
      <div className="button-pattern">
        <Pattern title="button">
          <p>We have a variety of buttons that are used in specific circumstances.
          The default and primary styling will be affected by white labeling.  Buttons can also have icons.  View demo to see an example.</p>
          <p>Buttons can implemented using the React "Button" component, the HTML button tag, or an anchor with a ".button" class</p>

          <Pattern.Detail title="Button">
            <Pattern.Show>
              <Button>Button</Button><br/><br/>
              <Button icon="check">Icon Button</Button><br/><br/>
              <Button type="primary">Primary Button</Button><br/><br/>
              <Button type="secondary">Secondary Button</Button><br/><br/>
              <Button disabled={true}>Disabled Button</Button><br/><br/>
              <Button icon="check" />
              <Button icon="trash" type="danger" />
              <Button icon="close" disabled={true} />
              <br/><br/>
              <Button className="button-customized">Custom Button Component</Button><br/><br/>
            </Pattern.Show>

            <Pattern.Demo title="Button Demo">
              <div className="demo-output">
                <div className="demo-pattern">

                  <h4>Button</h4>
                  <div className={"demo-pattern-example " + this._isInverse()}>

                    <Button type={this.state.type} inverse={this.state.inverse} disabled={this.state.disabled} icon={this.state.icon} >
                      { this.state.text }
                    </Button>

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
                disabled={this.state.disabled}
                icon={this.state.icon}
                text={this.state.text}
                isInverseAllowed={this.state.isInverseAllowed}
                onChange={this._handleChange} />
            </Pattern.Demo>

            <Code>
              <Code.HTML>
                &lt;Button&gt;Button&lt;/Button&gt;
                &lt;Button icon="check"&gt;Icon Button Component&lt;/Button&gt;
                &lt;Button type="primary"&gt;Primary Button&lt;/Button&gt;
                &lt;Button type="secondary"&gt;Secondary Button&lt;/Button&gt;
                &lt;Button disabled=(true)&gt;Disabled Button&lt;/Button&gt;
                &lt;Button icon="check" /&gt;
                &lt;Button icon="trash" type="danger" /&gt;
                &lt;Button icon="close" disabled=(true) /&gt;
                &lt;Button className="button-customized"&gt;Custom Button Component&lt;/Button&gt;
              </Code.HTML>
              <Code.Props patternProps={this._getProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
            var Button = require("patternity/infl-components/button.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/button";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _getProps : function(){
    return {
      icon : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "adds an icon class to the button"
      },
      className : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "css class name"
      },
      type : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "one of primary, secondary, important, success, danger, text"
      },
      onClick : {
        type : "function",
        defaultValue : "",
        required : false,
        description : "on click handler"
      },
      href : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "URL to load (optional)"
      },
      disabled : {
        type : "boolean",
        defaultValue : "",
        required : false,
        description : "disable the button"
      },
      inverse : {
        type : "boolean",
        defaultValue : "",
        required : false,
        description : "inverse the button colors (only affects 'secondary' and 'text' types)"
      }
    };
  },
  _handleChange : function(name, value){
    var currentState = this.state;
    currentState[name] = value;
    if(value === "secondary" || value === "text"){
      currentState.isInverseAllowed = true;
    } else if(name !== "inverse" && name !== 'icon') {
      currentState.isInverseAllowed = false;
      currentState.inverse = false;
    }
    this.setState(currentState);
  },
  _isInverse : function(){
    return this.state.inverse ? "inverse" : "";
  },
  _buildDemoHTML : function(){

    var type = this.state.type? ' type="'+this.state.type+'"' : '';

    var icon = this.state.icon? ' icon="'+this.state.icon+'"' : '';

    var inverse = '';
    if ((this.state.type=== "secondary" || this.state.type === "text") && this.state.inverse) {
      inverse = ' inverse={true}';
    }

    var disabled = this.state.disabled? ' disabled={true}' : '';

    var text = this.state.text? '\tButton\n' : '';
    return (
      '<Button'+type+icon+inverse+disabled+'>\n' +
      text+
      '</button>'
      );
    /*
    return (
      '<button className="' + this.state.type + " " + this._isInverse() + '">\n' +
        this._hasIconHTML() +
        '\t<span>Default Button</span>\n' +
      '</button>'
    );*/
  }
//  _hasIconHTML : function(){
//    if(this.state.icon !== ""){
//      return '<span class="ic ic-' + this.state.icon + '"></span>';
//    }
//    return "";
//  },
//  _hasIcon : function(){
//    if(this.state.icon !== ""){
//      return (<span className={"ic ic-" + this.state.icon}></span>);
//    }
//    return "";
//  }
});

var ButtonControls = React.createClass({
  getDefaultProps : function(){
    return {
      type : "",
      inverse : false,
      disabled : false,
      icon : "",
      text : "",
      onChange : function(){},
      isInverseAllowed : false
    }
  },
  render : function(){
    return (
      <div className="pattern-controls">
        <h4>Button Controls</h4>
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
                <RadioButton isChecked={this.props.type === 'text'} onChange={this._handleChange} radioName="type" radioLabel="Text" value="text"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <InputLabel label="Inverse">
              <RadioButton.Group>
                <RadioButton enabled={this.props.isInverseAllowed} isChecked={!this.props.inverse} onChange={this._handleInverseChange} radioName="inverse" radioLabel="Regular" value="false"></RadioButton>
                <RadioButton enabled={this.props.isInverseAllowed} isChecked={this.props.inverse} onChange={this._handleInverseChange} radioName="inverse" radioLabel="Inverse" value="true"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <InputLabel label="Icon">
              <RadioButton.Group layout="stacked">
                <RadioButton isChecked={this.props.icon === ''} onChange={this._handleChange} radioName="icon" radioLabel="No Icon" value=""></RadioButton>
                <RadioButton isChecked={this.props.icon === 'plus'} onChange={this._handleChange} radioName="icon" radioLabel="Add Icon" value="plus"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <InputLabel label="Text">
              <RadioButton.Group layout="stacked">
                <RadioButton isChecked={!!this.props.text} onChange={this._handleChange} radioName="text" radioLabel="Sample Text" value="Sample Button"></RadioButton>
                <RadioButton isChecked={!this.props.text} onChange={this._handleChange} radioName="text" radioLabel="No Text" value=""></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <InputLabel label="Disable">
              <RadioButton.Group layout="stacked">
                <RadioButton isChecked={this.props.disabled} onChange={this._handleChange} radioName="disabled" radioLabel="Disabled" value="disabled"></RadioButton>
                <RadioButton isChecked={!this.props.disabled} onChange={this._handleChange} radioName="disabled" radioLabel="Enabled" value=""></RadioButton>
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
  _handleInverseChange : function(event){
    this.props.onChange(event.target.name, event.target.value === "true");
  }
});

module.exports = ButtonPattern;
