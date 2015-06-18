var React       = require('react');
var _           = require('lodash');
var Pattern     = require('../../patternlab-components/pattern.jsx');
var Code        = require('../../patternlab-components/code.jsx');
var Require     = require('../../patternlab-components/require.jsx');
var ModalDialog = require("../../../../infl-components/modal_dialog.jsx");

var Icon        = require("../../../../infl-components/icon.jsx");

var icons = require("./influicons-list.js").icons;

var IconPattern = React.createClass({
  render : function(){
    return (
      <div className="icons-pattern">
        <Pattern title="icons">
          <p>All our icons are provided via a custom font.  This allows the size of the icon to be changed via font-size and the colour to be changed via font color.</p>
          <p>In order to standardize how icons are displayed, use the Icon react component to render an icon, use the CSS "ic" class, or the corresponding SASS mixin.</p>

          <div className="icons-container">
            {this._buildIcons()}
          </div>

          <Require>
            <Require.JS>
              var Icon = require("patternity/infl-components/icon.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/icon";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _buildIcons : function() {
    return _.map(icons, function(code, name){
      return (
        <IconExample key={name} code={code} name={name} />
      );
    });
  }
});

var IconExample = React.createClass({
  getDefaultProps : function(){
    return {
      name : "",
      code : ""
    };
  },
  propTypes : {
    name : React.PropTypes.string,
    code : React.PropTypes.string
  },
  getInitialState : function(){
    return {
      isModalOpen : false
    };
  },
  render : function(){
    return (
      <div className="icon-example">
        <div className="icon-example-icon" onClick={this._handleClick}>
          <span className="icon">
            <Icon icon={this.props.code} className="size-100" />
          </span>
          <h5>{this.props.name}</h5>
        </div>
        <div className="try-it-yourself">
          <ModalDialog size="large" isModalOpen={this.state.isModalOpen}>
            <ModalDialog.Header title="Icon Details" />
            <ModalDialog.Body>
              <IconDetails name={this.props.name} code={this.props.code} />
            </ModalDialog.Body>
          </ModalDialog>
        </div>
      </div>
    );
  },
  _buildJSXExample : function(){
    return '<Icon icon="' + this.props.code + '"/>';
  },
  _buildHTMLExample : function(){
    return '<span class="ic ic-' +  this.props.code + '"></span>';
  },
  _handleClick : function(){
    this.setState({
      isModalOpen : true
    });
  }
});

var IconDetails = React.createClass({
  getDefaultProps : function(){
    return {
      name : "",
      code : ""
    };
  },
  propTypes : {
    name : React.PropTypes.string,
    code : React.PropTypes.string
  },
  render : function(){
    return (
      <div className="icon-example-details">
        <Pattern.Detail title={this.props.name}>
          <Pattern.Show>
            <Icon icon={this.props.code} className="size-100" />
            <Icon icon={this.props.code} className="size-80" />
            <Icon icon={this.props.code} className="size-60" />
            <Icon icon={this.props.code} className="size-40" />
            <Icon icon={this.props.code} className="size-20" />
            <Icon icon={this.props.code} />
          </Pattern.Show>
          <Code>
            <Code.JSX>
              {this._buildJSXExample()}
            </Code.JSX>
            <Code.HTML>
              {this._buildHTMLExample()}
            </Code.HTML>
            <Code.SCSS>
              {this._buildSCSSExample()}
            </Code.SCSS>
          </Code>
        </Pattern.Detail>
      </div>
    );
  },
  _buildJSXExample : function(){
    return '<Icon icon="' + this.props.code + '"/>';
  },
  _buildHTMLExample : function(){
    return '<span class="ic ic-' +  this.props.code + '"></span>';
  },
  _buildSCSSExample : function(){
    return 'SPAN.customIcon {\n'+
      '  @include ic-link();\n'+
      '}\n';
  }
});

module.exports = IconPattern;
