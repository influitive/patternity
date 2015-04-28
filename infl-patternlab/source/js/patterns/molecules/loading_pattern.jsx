var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form            = require("../../../../infl-components/form.jsx");
var InputLabel      = require("../../../../infl-components/input_label.jsx");
var RadioButton     = require("../../../../infl-components/radio_button.jsx");
var ButtonGroup     = require("../../../../infl-components/button_group.jsx");

var Loading   = require("../../../../infl-components/loading.jsx");

var LoadingPattern = React.createClass({
  getInitialState : function(){
    return {
      size : "medium",
      type : "dark",
      isModal : false,
      isBlock : false
    };
  },
  componentDidMount : function(){
    this._addLoadingToDemoArea();
  },
  render : function(){
    return (
      <div className="loading-pattern">
        <Pattern title="loading">
          <p>The loading component is basically a loading icon with a bunch of options.  It allows for block, inline, modal along with 2 colours, white and grey.</p>
          <Pattern.Detail title="Loading">
            <Pattern.Show>
              <Loading />
            </Pattern.Show>
            <Pattern.Demo title="Loading Demo">
              <div className="demo-output">
                <div className="demo-pattern">
                  <h4>Loading</h4>
                  <div className={"demo-pattern-example " + this._isLightLoading()}>
                    <div ref="loadingDemoArea" className="loading-demo-area"></div>
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
              <LoadingControls
                  onChange={this._handleChange}
                  size={this.state.size}
                  type={this.state.type}
                  isModal={this.state.isModal}
                  isBlock={this.state.isBlock} />
            </Pattern.Demo>
            <Code>
              <Code.JSX>
                &lt;Loading /&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Loading" />
              <Code.Props patternProps={this._buildLoadingProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var Loading = require("patternity/infl-components/loading.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/loading";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _isLightLoading : function(){
    return this.state.type === "light" ? "inverse" : "";
  },
  _buildDemoProps : function(){
    return (
      '{\n' +
        '\tsize : "' + this.state.size + '",\n' +
        '\ttype : "' + this.state.type + '",\n' +
        '\tisModal : ' + this.state.isModal + ',\n' +
        '\tisBlock : ' + this.state.isBlock + ',\n' +
      '}'
    );
  },
  _addLoadingToDemoArea : function(){
    this.refs.loadingDemoArea.getDOMNode().innerHTML = this._demoLoading();
  },
  _demoLoading : function(){
    return React.renderToString(
      <Loading isModal={this.state.isModal} size={this.state.size} type={this.state.type} isBlock={this.state.isBlock} />
    );
  },
  _buildDemoJSX : function(){
    return (
      '<Loading isModal="' + this.state.isModal + '" size="' + this.state.size + '" type="' + this.state.type + '" isBlock="' + this.state.isBlock + '"/>'
    );
  },
  _handleChange : function(name, value){
    var currentState = this.state;
    currentState[name] = value;
    this.setState(currentState, this._addLoadingToDemoArea);
  },
  _buildLoadingProps : function(){
    return {
      size : {
        type : "string",
        default : "medium",
        required : false,
        description : "one of small, medium, large"
      },
      type: {
        type : "string",
        default : "dark",
        required : false,
        description : "one of dark or light"
      },
      isModal : {
        type : "boolean",
        default : "false",
        required : false,
        description : "determines if loading should be a modal dialog."
      },
      isBlock : {
        type : "boolean",
        default : "false",
        required : false,
        description : "determines if loading should display inline or block."
      }
    };
  }
});

var LoadingControls = React.createClass({
  getDefaultProps : function(){
    return {
      onChange : function(){},
      size: "small",
      type: "dark",
      isModal : false,
      isBlock : false
    };
  },
  render : function(){
    return (
      <div className="pattern-controls">
        <h4>
          <span>Modal Dialog Controls</span>
        </h4>
        <Form>
          <Form.Row>
            <InputLabel label="Size">
              <RadioButton.Group layout="stacked">
                <RadioButton isChecked={this.props.size === "small"} onChange={this._handleChange} radioName="size" radioLabel="Small" value="small"></RadioButton>
                <RadioButton isChecked={this.props.size === "medium"} onChange={this._handleChange} radioName="size" radioLabel="Medium" value="medium"></RadioButton>
                <RadioButton isChecked={this.props.size === "large"} onChange={this._handleChange} radioName="size" radioLabel="Large" value="large"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <InputLabel label="Type">
              <RadioButton.Group>
                <RadioButton isChecked={this.props.type === "dark"} onChange={this._handleChange} radioName="type" radioLabel="Dark" value="dark"></RadioButton>
                <RadioButton isChecked={this.props.type === "light"} onChange={this._handleChange} radioName="type" radioLabel="Light" value="light"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <InputLabel label="Is Modal">
              <RadioButton.Group>
                <RadioButton isChecked={this.props.isModal} onChange={this._handleBooleanChange} radioName="isModal" radioLabel="Yes" value="true"></RadioButton>
                <RadioButton isChecked={!this.props.isModal} onChange={this._handleBooleanChange} radioName="isModal" radioLabel="No" value="false"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <InputLabel label="Is Block">
              <RadioButton.Group>
                <RadioButton isChecked={this.props.isBlock} onChange={this._handleBooleanChange} radioName="isBlock" radioLabel="Yes" value="true"></RadioButton>
                <RadioButton isChecked={!this.props.isBlock} onChange={this._handleBooleanChange} radioName="isBlock" radioLabel="No" value="false"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
        </Form>
      </div>
    );
  },
  _handleChange : function(event){
    this.props.onChange(event.target.name, event.target.value);
  },
  _handleBooleanChange : function(event){
    this.props.onChange(event.target.name, event.target.value === "true");
  }
});

module.exports = LoadingPattern;
