var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form            = require("../../../../infl-components/form.jsx");
var InputLabel      = require("../../../../infl-components/input_label.jsx");
var RadioButton     = require("../../../../infl-components/radio_button.jsx");
var ButtonGroup     = require("../../../../infl-components/button_group.jsx");

var ModalDialog   = require("../../../../infl-components/modal_dialog.jsx");

var ModalDialogPattern = React.createClass({
  getInitialState : function(){
    return {
      size : "medium",
      scrollingBody : false,
      lightbox : true,
      closeable : true
    };
  },
  componentDidMount : function(){
    this._addModalToDemoArea();
  },
  render : function(){
    return (
      <div className="modal-dialog-pattern">
        <Pattern title="modal dialog">
          <p>The Modal Dialog component helps you build modal dialogs.  It has 3 sub components Header, Body and Footer.</p>

          <Pattern.Detail title="Modal Dialog">
            <Pattern.Demo title="Modal Dialog Demo">
              <div className="demo-output">
                <div className="demo-pattern">
                  <h4>Modal Dialog</h4>
                  <div className="demo-pattern-example">
                    <div ref="modalDemoArea" className="modal-demo-area"></div>
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
              <ModalControls
                  onChange={this._handleChange}
                  size={this.state.size}
                  scrollingBody={this.state.scrollingBody}
                  lightbox={this.state.lightbox}
                  closeable={this.state.closeable} />
            </Pattern.Demo>
            <Code>
              <Code.JSX>
                &lt;ModalDailog id="modal-id" closeable="true" size="medium" onClose="onCloseCallback" isModalOpen="true" &gt;
                  &lt;ModalDailog.Header title="Modal Dialog Header Title" /&gt;
                  &lt;ModalDailog.Body&gt;
                    &lt;p&gt;This is the modal body.  This is the modal body.&lt;/p&gt;
                    &lt;p&gt;This is the modal body.  This is the modal body.&lt;/p&gt;
                    &lt;p&gt;This is the modal body.  This is the modal body.&lt;/p&gt;
                  &lt;/ModalDailog.Body&gt;
                  &lt;ModalDailog.Footer&gt;
                    &lt;ButtonGroup&gt;
                      &lt;Button type="text"&gt;Cancel&lt;/Button&gt;
                      &lt;Button type="success"&gt;Save&lt;/Button&gt;
                    &lt;/ButtonGroup&gt;
                  &lt;/ModalDailog.Footer&gt;
                &lt;/ModalDailog&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="ModalDialog" />
              <Code.Props patternProps={this._buildModalDialogProps()} />
            </Code>
          </Pattern.Detail>

          <Pattern.Detail title="Modal Dialog - Header">
            <p>The Modal Dialog Header adds a styled header to the modal dialog.</p>

            <Code>
              <Code.JSX>
                &lt;ModalDailog.Header title="Modal Dialog Header Title" /&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="ModalDialog.Header" />
              <Code.Props patternProps={this._buildModalDialogHeaderProps()} />
            </Code>
          </Pattern.Detail>

          <Pattern.Detail title="Modal Dialog - Body">
            <p>The Modal Dialog Body adds a styled content section to the modal dialog.</p>

            <Code>
              <Code.JSX>
                &lt;ModalDailog.Body&gt;
                  &lt;p&gt;This is the modal body.  This is the modal body.&lt;/p&gt;
                  &lt;p&gt;This is the modal body.  This is the modal body.&lt;/p&gt;
                  &lt;p&gt;This is the modal body.  This is the modal body.&lt;/p&gt;
                &lt;/ModalDailog.Body&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="ModalDialog.Body" />
              <Code.Props patternProps={this._buildModalDialogBodyProps()} />
            </Code>
          </Pattern.Detail>

          <Pattern.Detail title="Modal Dialog - Footer">
            <p>The Modal Dialog Footer adds a styled footer section to the modal dialog.</p>

            <Code>
              <Code.JSX>
                &lt;ModalDailog.Footer&gt;
                  &lt;ButtonGroup&gt;
                    &lt;Button type="text"&gt;Cancel&lt;/Button&gt;
                    &lt;Button type="success"&gt;Save&lt;/Button&gt;
                  &lt;/ButtonGroup&gt;
                &lt;/ModalDailog.Footer&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="ModalDialog.Footer" />
              <Code.Props patternProps={this._buildModalDialogFooterProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var ModalDialog = require("patternity/infl-components/modal_dialog.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/modal_dialog";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _buildDemoProps : function(){
    return (
      '{\n' +
        '\tid : "",\n' +
        '\tcloseable : ' + this.state.closeable + ',\n' +
        '\tsize : "' + this.state.size + '",\n' +
        '\tonClose : function(){},\n' +
        '\tisModalOpen : true,\n' +
        '\tscrollingBody : ' + this.state.scrollingBody + ',\n' +
        '\tlightbox : ' + this.state.lightbox + '\n' +
      '}'
    );
  },
  _addModalToDemoArea : function(){
    this.refs.modalDemoArea.getDOMNode().innerHTML = this._demoModal();
  },
  _demoModal : function(){
    return React.renderToString(
      <ModalDialog isModalOpen={true} size={this.state.size} closeable={this.state.closeable} scrollingBody={this.state.scrollingBody} lightbox={this.state.lightbox}>
        <ModalDialog.Header title="test" />
        <ModalDialog.Body>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </ModalDialog.Body>
        <ModalDialog.Footer>
          <ButtonGroup>
            <button className="secondary">Cancel</button>
            <button className="success">Success</button>
          </ButtonGroup>
        </ModalDialog.Footer>
      </ModalDialog>
    );
  },
  _buildDemoJSX : function(){
    return (
      '<ModalDialog isModalOpen="true" size="' + this.state.size + '" closeable="' + this.state.closeable + '" scrollingBody="' + this.state.scrollingBody + '" lightbox="' + this.state.lightbox + '">\n' +
        '\t<ModalDialog.Header title="test" />\n' +
        '\t<ModalDialog.Body>\n' +
          '\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n' +
          '\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n' +
          '\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n' +
        '\t</ModalDialog.Body>\n' +
        '\t<ModalDialog.Footer>\n' +
          '\t\t<ButtonGroup>\n' +
            '\t\t\t<button className="secondary">Cancel</button>\n' +
            '\t\t\t<button className="success">Success</button>\n' +
          '\t\t</ButtonGroup>\n' +
        '\t</ModalDialog.Footer>\n' +
      '</ModalDialog>'
    );
  },
  _handleChange : function(name, value){
    var currentState = this.state;
    currentState[name] = value;
    this.setState(currentState, this._addModalToDemoArea);
  },
  _buildModalDialogProps : function(){
    return {
      id : {
        type : "string",
        default : "",
        required : false,
        description : "Id for the modal."
      },
      closeable : {
        type : "boolean",
        default : "true",
        required : false,
        description : "Determines if the modal can be closed."
      },
      size : {
        type : "string",
        default : "medium",
        required : false,
        description : "Determines modal size can be small, medium or large."
      },
      onClose : {
        type : "function",
        default : "empty function",
        required : false,
        description : "Optional callback function when the modal is closed."
      },
      isModalOpen : {
        type : "boolean",
        default : "false",
        required : false,
        description : "Determines if the modal is open or not defaults to false."
      },
      scrollingBody : {
        type : "boolean",
        default : "false",
        required : false,
        description : "Controls styling to make the modal full screen height and body of the modal scroll."
      },
      lightbox : {
        type : "boolean",
        default : "true",
        required : false,
        description : "Determines if background is greyed out or not.  defaults to true."
      }
    };
  },
  _buildModalDialogHeaderProps : function(){
    return {
      title : {
        type : "string",
        default : "",
        required : false,
        description : "Title for the modal dialog."
      }
    }
  },
  _buildModalDialogBodyProps : function(){
    return {
      children : {
        type : "array",
        default : "[...]",
        required : false,
        description : "Array of text, react elements or html."
      }
    }
  },
  _buildModalDialogFooterProps : function(){
    return {
      children : {
        type : "array",
        default : "[...]",
        required : false,
        description : "Array of text, react elements or html."
      }
    }
  }
});

var ModalControls = React.createClass({
  getDefaultProps : function(){
    return {
      onChange : function(){},
      resetDemo : function(){},
      size : "medium",
      scrollingBody : false,
      lightbox : true
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
            <InputLabel label="Scrolling Body">
              <RadioButton.Group>
                <RadioButton isChecked={this.props.scrollingBody} onChange={this._handleBooleanChange} radioName="scrollingBody" radioLabel="Yes" value="true"></RadioButton>
                <RadioButton isChecked={!this.props.scrollingBody} onChange={this._handleBooleanChange} radioName="scrollingBody" radioLabel="No" value="false"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <InputLabel label="Lightbox">
              <RadioButton.Group>
                <RadioButton isChecked={this.props.lightbox} onChange={this._handleBooleanChange} radioName="lightbox" radioLabel="Yes" value="true"></RadioButton>
                <RadioButton isChecked={!this.props.lightbox} onChange={this._handleBooleanChange} radioName="lightbox" radioLabel="No" value="false"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <InputLabel label="Closeable">
              <RadioButton.Group>
                <RadioButton isChecked={this.props.closeable} onChange={this._handleBooleanChange} radioName="closeable" radioLabel="Yes" value="true"></RadioButton>
                <RadioButton isChecked={!this.props.closeable} onChange={this._handleBooleanChange} radioName="closeable" radioLabel="No" value="false"></RadioButton>
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

module.exports = ModalDialogPattern;
