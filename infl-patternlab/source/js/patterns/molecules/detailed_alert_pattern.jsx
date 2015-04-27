var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form            = require("../../../../infl-components/form.jsx");
var InputLabel      = require("../../../../infl-components/input_label.jsx");
var RadioButton     = require("../../../../infl-components/radio_button.jsx");
var TextInput       = require("../../../../infl-components/text_input.jsx");

var DetailedAlert   = require("../../../../infl-components/alert/detailed_alert.jsx");

var DetailedAlertPattern = React.createClass({
  getInitialState : function(){
    return {
      type : "info",
      showIcon : true,
      hideIn : 0,
      showAlert : true,
      closeable : true
    };
  },
  render : function(){
    return (
      <div className="detailed-alert-pattern">
        <Pattern title="detailed alert">
          <p>The detailed alert can also take a sub component detail.  All other alert data is still valid.  See Alert for more details.</p>

          <Pattern.Detail title="Detailed Alert">
            <p>The alert detailed is an additional space to add more data to an alert</p>

            <Pattern.Show>
              <DetailedAlert title="Action Alert" showIcon={true}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <DetailedAlert.Detail title="Detail Title" action={this._detailedAction()}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </DetailedAlert.Detail>
              </DetailedAlert>
            </Pattern.Show>

            <Pattern.Demo title="Detailed Alert Demo">
              <div className="demo-output">
                <div className="demo-pattern">
                  <h4>Detailed Alert</h4>
                  <div className="demo-pattern-example">
                    <DetailedAlert title="Action Alert" showAlert={this.state.showAlert} showIcon={this.state.showIcon} type={this.state.type} hideIn={this.state.hideIn}  closeable={this.state.closeable}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <DetailedAlert.Detail title="Detail Title" action={this._detailedAction()}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </DetailedAlert.Detail>
                    </DetailedAlert>
                  </div>
                </div>
                <Code>
                  <Code.JSX>
                    {this._buildDemoHTML()}
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
              <AlertControls
                type={this.state.type}
                showIcon={this.state.showIcon}
                hideIn={this.state.hideIn}
                closeable={this.state.closeable}
                onChange={this._handleChange} />
            </Pattern.Demo>

            <Code>
              <Code.JSX>
                &lt;DetailedAlert title="Your Title" &gt;
                  &lt;p&gt;Your Body&lt;/p&gt;
                  &lt;p&gt;Your Body&lt;/p
                  &gt;&lt;DetailedAlert.Detail title="Single Sign-On" action="react_element"&gt;
                    &lt;p&gt;Your Detailed Body&lt;/p&gt;
                  &lt;/DetailedAlert.Detail&gt;
                &lt;/DetailedAlert&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="DetailedAlert" />
              <Code.Props patternProps={this._buildDetailedAlertProps()} />
            </Code>
          </Pattern.Detail>

          <Pattern.Detail title="Detailed Alert - Detail">
            <p>Detailed Alert Detail is a sub component of Alert Detail.  It provides extra styling, and functionality.</p>
            <Code>
              <Code.JSX>
                &lt;DetailedAlert.Detail title="Single Sign-On" action="react_element"&gt;
                  &lt;p&gt;Your Detailed Body&lt;/p&gt;
                &lt;DetailedAlert.Detail/&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="DetailedAlert.Detail" />
              <Code.Props patternProps={this._buildDetailedAlertDetailProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var DetailedAlert = require("patternity/infl-components/alert/detailed_alert.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/alert";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _buildDemoProps : function(){
    return (
      '{\n' +
        '\ttype: "' + this.state.type + '",\n' +
        '\tshowIcon: ' + this.state.showIcon + ',\n' +
        '\tcloseable : ' + this.state.closeable + ',\n' +
        '\tshowAlert : ' + this.state.showAlert + ',\n' +
        '\tonClose : function(){},\n' +
        '\thideIn  : ' + this.state.hideIn + '\n' +
      '}'
    );
  },
  _detailedAction : function(){
    return (<button className="secondary">Do Something</button>);
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
      '<DetailedAlert title="Action Alert" showAlert="' + this.state.showAlert.toString() + '" showIcon="' + this.state.showIcon.toString() + '" type="' + this.state.type + '" hideIn="' + this.state.hideIn + '"  closeable="' + this.state.closeable.toString() + '">\n' +
        '\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n' +
        '\t<DetailedAlert.Detail title="Detail Title" action={this._detailedAction()}>\n' +
          '\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n' +
        '\t</DetailedAlert.Detail>\n' +
      '</DetailedAlert>'
    );
  },
  _buildDetailedAlertProps : function(){
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
      closeable : {
        type : "boolean",
        default : "false",
        required : false,
        description : "Determines if the alert is closeable or not."
      },
      children: {
        type : "array",
        default : "[...]",
        required : false,
        description : "Array of text, html, react elements."
      }
    };
  },
  _buildDetailedAlertDetailProps : function(){
    return {
      title : {
        type : "string",
        default : "",
        required : true,
        description : "Title of details."
      },
      action : {
        type : "react element, button",
        default : "",
        required : false,
        description : "User action associated with details."
      },
      children: {
        type : "array",
        default : "[...]",
        required : true,
        description : "Array of text, html, react elements."
      }
    }
  }
});

var AlertControls = React.createClass({
  getDefaultProps : function(){
    return {
      type : "info",
      hideIn : 0,
      showIcon : true,
      onChange : function(){},
      closeable : true
    };
  },
  render : function(){
    return (
      <div className="pattern-controls">
        <h4>Detailed Alert Controls</h4>
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
            <InputLabel label="Closeable">
              <RadioButton.Group>
                <RadioButton isChecked={this.props.closeable} onChange={this._handleCloseableChange} radioName="closeable" radioLabel="Yes" value="true"></RadioButton>
                <RadioButton isChecked={!this.props.closeable} onChange={this._handleCloseableChange} radioName="closeable" radioLabel="No" value="false"></RadioButton>
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
  _handleCloseableChange : function(event){
    this.props.onChange(event.target.name, event.target.value === "true");
  },
  _handleChange : function(){
    this.props.onChange(event.target.name, event.target.value);
  },
  _handleHideInChange : function(event){
    this.props.onChange(event.target.name, parseInt(event.target.value));
  }
});

module.exports = DetailedAlertPattern;
