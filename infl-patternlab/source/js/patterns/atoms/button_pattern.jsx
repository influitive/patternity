var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form            = require("../../../../infl-components/form.jsx");
var InputLabel      = require("../../../../infl-components/input_label.jsx");
var RadioButton     = require("../../../../infl-components/radio_button.jsx");

var ButtonPattern = React.createClass({
  getInitialState : function(){
    return {
      type : "",
      inverse : false,
      icon : "",
      isInverseAllowed : false
    };
  },
  render : function(){
    return (
      <div className="button-pattern">
        <Pattern title="button">
          <p>We have a variety of buttons that are used in specific circumstances.  The default and primary styling will be affected by white labeling.  Buttons can also have icons.  View demo to see an example.</p>
          <p>Buttons can either be an HTML tag "button" or an anchor with a ".button" class</p>

          <Pattern.Detail title="Button">
            <Pattern.Show>
              <button>Default Button</button>
            </Pattern.Show>

            <Pattern.Demo title="Button Demo">
              <div className="demo-output">
                <div className="demo-pattern">
                  <h4>Button</h4>
                  <div className={"demo-pattern-example " + this._isInverse()}>
                    <button className={this.state.type + " " + this._isInverse()}>
                      {this._hasIcon()}
                      <span>Default Button</span>
                    </button>
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
              <Code.HTML>
                &lt;button&gt;Default Button&lt;/button&gt;
                &lt;a href="#" class="button"&gt;Default Button&lt;/a&gt;
              </Code.HTML>
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.CSS>
              @import "patternity/infl-styles/button";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _handleChange : function(name, value){
    console.log(name + " - " + value);
    var currentState = this.state;
    currentState[name] = value;
    if(value === "secondary" || value === "text"){
      currentState.isInverseAllowed = true;
    } else if(name !== "inverse") {
      currentState.isInverseAllowed = false;
      currentState.inverse = false;
    }
    this.setState(currentState);
  },
  _isInverse : function(){
    return this.state.inverse ? "inverse" : "";
  },
  _buildDemoHTML : function(){
    return (
      '<button className="' + this.state.type + " " + this._isInverse() + '">\n' +
        this._hasIconHTML() +
        '\t<span>Default Button</span>\n' +
      '</button>'
    );
  },
  _hasIconHTML : function(){
    if(this.state.icon !== ""){
      return '<span class="ic ic-' + this.state.icon + '"></span>';
    }
    return "";
  },
  _hasIcon : function(){
    if(this.state.icon !== ""){
      return (<span className={"ic ic-" + this.state.icon}></span>);
    }
    return "";
  }
});

var ButtonControls = React.createClass({
  getDefaultProps : function(){
    return {
      type : "",
      inverse : false,
      icon : "",
      onChange : function(){},
      isInverseAllowed : false
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
                <RadioButton isChecked={this.props.type === 'disabled'} onChange={this._handleChange} radioName="type" radioLabel="Disabled" value="disabled"></RadioButton>
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
