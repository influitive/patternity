var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form            = require("../../../../infl-components/form.jsx");
var InputLabel      = require("../../../../infl-components/input_label.jsx");
var RadioButton     = require("../../../../infl-components/radio_button.jsx");
var TextInput       = require("../../../../infl-components/text_input.jsx");

var ActionAlert   = require("../../../../infl-components/alert/action_alert.jsx");

var ActionAlertPattern = React.createClass({
  getInitialState : function(){
    return {
      type : "info",
      showIcon : true,
      hideIn : 0,
      showAlert : true
    };
  },
  render : function(){
    return (
      <div className="action-alert-pattern">
        <Pattern title="action alert">
          <p>An ActionAlert has the same functionaliy as Alert except it is not closeable.</p>

          <Pattern.Detail title="Action Alert">
            <p>The alert action allows you to add a new action to an alert.  It also comes with special styling.</p>

            <Pattern.Show>

            </Pattern.Show>

            <Pattern.Demo title="Alert Action Demo">
              <div className="demo-output">
                <div className="demo-pattern">
                  <h4>Alert Action</h4>
                  <div className="demo-pattern-example">
                    <ActionAlert title="Action Alert" showAlert={this.state.showAlert} showIcon={this.state.showIcon} type={this.state.type} hideIn={this.state.hideIn} action={{
                      title : "Do Something",
                      onClick : function(){ alert("You did something"); }
                    }}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </ActionAlert>
                  </div>
                </div>
                <Code>
                  <Code.HTML>
                    {this._buildDemoHTML()}
                  </Code.HTML>
                </Code>
              </div>
              <AlertControls
                type={this.state.type}
                showIcon={this.state.showIcon}
                hideIn={this.state.hideIn}
                onChange={this._handleChange} />
            </Pattern.Demo>

            <Code>
              <Code.JSX>
                &lt;ActionAlert title="Action Alert" showIcon="true"  actions="actions_object"&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&lt;/p&gt;
                &lt;/ActionAlert&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="ActionAlert" />
              <Code.Props patternProps={this._buildActionAlertProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var ActionAlert = require("patternity/infl-components/alert/action_alert.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/alert";
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
    this._handleHideIn(name, value);
  },
  _handleHideIn : function(name, value){
    if(name === "hideIn" && value > 0){
      var that = this;
      setTimeout(function(){
        that.setState({
          hideIn : 0
        });
      }, (value + 2) * 1000);
    }
  },
  _buildDemoHTML : function(){
    return (
      '<ActionAlert title="Action Alert" showIcon="' + this.state.showIcon.toString() + '" type="' + this.state.type + '" hideIn="' + this.state.hideIn + '" action="action_object">\n' +
        '\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n' +
      '</ActionAlert>'
    );
  },
  _buildActionAlertProps : function(){
    return {
      title : {
        type : "string",
        default : "",
        required : false,
        description : "Title of the action alert."
      },
      showIcon : {
        type : "boolean",
        default : "false",
        required : false,
        description : "Determines if the alert will have an icon."
      },
      children: {
        type : "array",
        default : "[...]",
        required : false,
        description : "Array of text, html, react elements."
      },
      type : {
        type : "string",
        default : "info",
        required : false,
        description : "Type of alert can be success, error, warning, info or ''."
      },
      showAlert : {
        type : "boolean",
        default : "true",
        required : false,
        description : "Determines if the alert is visible or not."
      },
      onClose : {
        type : "function",
        default : "empty function",
        required : false,
        description : "Called when alert is closed."
      },
      hideIn : {
        type : "integer",
        default : "0",
        required : false,
        description : "If greater than zero it determines the interval until the input is hidden in seconds."
      },
      action : {
        type : "object",
        default : "title, onClick",
        required : true,
        description : "The hash for the actions details."
      },
      "action.title" : {
        type : "string",
        default : "",
        required : false,
        description : "Action button title."
      },
      "action.onClick" : {
        type : "function",
        default : "empty function",
        required : false,
        description : "Callback function for when the action is clicked."
      }
    };
  }
});

var AlertControls = React.createClass({
  getDefaultProps : function(){
    return {
      type : "info",
      hideIn : 0,
      showIcon : true,
      onChange : function(){}
    };
  },
  render : function(){
    return (
      <div className="pattern-controls">
        <h4>Button Group Controls</h4>
        <Form>
          <Form.Row>
            <InputLabel label="Hide In">
              <RadioButton.Group layout="stacked">
                <RadioButton isChecked={this.props.hideIn === 0} onChange={this._handleHideInChange} radioName="hideIn" radioLabel="Dont' Hide" value="0"></RadioButton>
                <RadioButton isChecked={this.props.hideIn === 3} onChange={this._handleHideInChange} radioName="hideIn" radioLabel="3 seconds" value="3"></RadioButton>
                <RadioButton isChecked={this.props.hideIn === 5} onChange={this._handleHideInChange} radioName="hideIn" radioLabel="5 seconds" value="5"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <InputLabel label="Icon">
              <RadioButton.Group>
                <RadioButton isChecked={this.props.showIcon} onChange={this._handleIconChange} radioName="showIcon" radioLabel="Show" value="true"></RadioButton>
                <RadioButton isChecked={!this.props.showIcon} onChange={this._handleIconChange} radioName="showIcon" radioLabel="Hide" value="false"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <InputLabel label="Alert Type">
              <RadioButton.Group layout="stacked">
                <RadioButton isChecked={this.props.type === 'info'} onChange={this._handleChange} radioName="type" radioLabel="Info / Default" value="info"></RadioButton>
                <RadioButton isChecked={this.props.type === 'success'} onChange={this._handleChange} radioName="type" radioLabel="Success" value="success"></RadioButton>
                <RadioButton isChecked={this.props.type === 'error'} onChange={this._handleChange} radioName="type" radioLabel="Error" value="error"></RadioButton>
                <RadioButton isChecked={this.props.type === 'disabled'} onChange={this._handleChange} radioName="type" radioLabel="Warning" value="warning"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
        </Form>
      </div>
    );
  },
  _handleIconChange : function(event){
    this.props.onChange(event.target.name, event.target.value === "true");
  },
  _handleChange : function(){
    this.props.onChange(event.target.name, event.target.value);
  },
  _handleHideInChange : function(event){
    this.props.onChange(event.target.name, parseInt(event.target.value));
  }
});

module.exports = ActionAlertPattern;
