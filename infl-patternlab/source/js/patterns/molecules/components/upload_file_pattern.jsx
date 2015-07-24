var React     = require('react');
var Pattern   = require('../../../patternlab-components/pattern.jsx');
var Code      = require('../../../patternlab-components/code.jsx');
var Require   = require('../../../patternlab-components/require.jsx');

var Form            = require("../../../../../infl-components/form.jsx");
var InputLabel      = require("../../../../../infl-components/input_label.jsx");
var RadioButton     = require("../../../../../infl-components/radio_button.jsx");
var SelectDropdown  = require("../../../../../infl-components/select_dropdown.jsx");

var Button = require("../../../../../infl-components/button.jsx");

var UploadFile   = require("../../../../../infl-components/components/upload_file.jsx");

var UploadFilePattern = React.createClass({
  getInitialState : function(){
    return {
      withCrop : false,
      cropRatio : undefined
    };
  },
  render : function(){
    return (
      <div className="upload-file-pattern">
        <Pattern title="upload file">
          <p>The upload file component allows you to wrap any CTA you would like to initiate a file upload.</p>

          <Pattern.Detail title="Upload File">
            <Pattern.Show>
              <UploadFile onSuccess={function(){}}>
                <Button>Upload File</Button>
              </UploadFile>
            </Pattern.Show>

            <Pattern.Demo title="Upload File Demo">
              <div className="demo-output">
                <div className="demo-pattern">
                  <h4>Upload File</h4>
                  <div className="demo-pattern-example">
                    <UploadFile onSuccess={function(){}} withCrop={this.state.withCrop} cropRatio={this.state.cropRatio}>
                      <Button>Upload File</Button>
                    </UploadFile>
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
              <UploadFileControls
                onChange={this._handleChange}
                withCrop={this.state.withCrop}
                cropRatio={this.state.cropRatio} />
            </Pattern.Demo>

            <Code>
              <Code.JSX>
                &lt;UploadFile onSuccess=&#123;callback_function&#125;&gt;
                  &lt;Button&gt;Upload File&lt;/Button&gt;
                &lt;/UploadFile&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="UploadFile" />
              <Code.Props patternProps={this._buildUploadFileProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var UploadFile = require("patternity/infl-components/components/upload_file.jsx");
            </Require.JS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _buildDemoProps : function(){
    return (
      '{\n' +
        '\twithCrop : ' + this.state.withCrop + ',\n' +
        '\tcropRatio : ' + this.state.cropRatio + '\n' +
        '\tcompressFileOptions : ' + this.state.compressionOptions + '\n' +
      '}'
    );
  },
  _handleChange : function(name, value){
    var currentState = this.state;
    currentState[name] = value;
    this.setState(currentState);
  },
  _buildDemoJSX : function(){
    return (
      '<UploadFile onSuccess={callback_function} withCrop={' + this.state.withCrop + '} cropRatio={' + (this.state.cropRatio === undefined ? "" : this.state.cropRatio) + '} compressFileOptions={compress_file_object}>\n' +
        '\t<Button>Upload File</Button>\n' +
      '</UploadFile>\n'
    );
  },
  _buildUploadFileProps : function(){
    return {
      onSuccess : {
        type : "function",
        defaultValue : "",
        required : true,
        description : "function called on successful file upload."
      },
      withCrop : {
        type : "boolean",
        defaultValue : "false",
        required : false,
        description : "determines if the file upload will have the crop feature."
      },
      cropRatio : {
        type : "number",
        defaultValue : "undefined",
        required : false,
        description : "determines the crop ratio used when withCrop is true.  if not provided crop will be free form."
      },
      compressFileOptions : {
        type : "object",
        defaultValue : "empty object",
        required : false,
        description : "options used for compressing the file after upload.  see filepicker.io documentation for details."
      }
    };
  }
});

var UploadFileControls = React.createClass({
  PropTypes : {
    withCrop : React.PropTypes.bool.isRequired,
    onChange : React.PropTypes.func.isRequired,
    cropRatio : React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.string
    ]).isRequired
  },

  render : function(){
    return (
      <div className="pattern-controls">
        <h4>Upload File Controls</h4>
        <Form>
          <Form.Row>
            <InputLabel label="With Crop">
              <RadioButton.Group layout="stacked">
                <RadioButton isChecked={this.props.withCrop} onChange={this._handleBooleanChange} radioName="withCrop" radioLabel="Crop" value="true"></RadioButton>
                <RadioButton isChecked={!this.props.withCrop} onChange={this._handleBooleanChange} radioName="withCrop" radioLabel="No Crop" value="false"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <InputLabel label="Crop Ratio">
              <SelectDropdown
                  value={this.props.cropRatio === undefined ? "0" : this.props.cropRatio}
                  name="cropRatio"
                  onChange={this._handleCropRatioChange}
                  disabled={!this.props.withCrop}>
                <option value="0">Select Ratio</option>
                <option value="0.75">3/4</option>
                <option value="1.25">5/4</option>
                <option value="0.4">2/5</option>
              </SelectDropdown>
            </InputLabel>
          </Form.Row>
          <Form.Row>
              See <a href="javascript: void(0);" onClick={this._navigateToFilepicker}>filepicker.io</a> for compression options
          </Form.Row>
        </Form>
      </div>
    );
  },

  _handleBooleanChange : function(event){
    this.props.onChange(event.target.name, event.target.value === "true");
  },

  _handleCropRatioChange : function(event){
    this.props.onChange(event.target.name, event.target.value === "0" ? undefined : eval(event.target.value));
  },

  _navigateToFilepicker : function(event){
    window.open("https://www.filepicker.com/documentation/file_ingestion/javascript_api/compression?v=v2");
  }
});

module.exports = UploadFilePattern;
