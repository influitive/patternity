var React       = require('react');
var _           = require('lodash');
var Pattern     = require('../../patternlab-components/pattern.jsx');
var Code        = require('../../patternlab-components/code.jsx');
var Require     = require('../../patternlab-components/require.jsx');
var ModalDialog = require("../../../../infl-components/modal_dialog.jsx");

var Icon        = require("../../../../infl-components/icon.jsx");

var icons = {
  'User': 'user',
  'Bell': 'bell',
  'Search': 'search',
  'Mail': 'mail',
  'Check Mark': 'check',
  'Close (Times)': 'times',
  'Check Circle Hollow': 'check-circle-o',
  'Close (Times) Circle Hollow': 'times-circle-o',
  'Exclamation Circle Hollow': 'exclamation-circle-o',
  'Info Circle Hollow': 'info-circle-o',
  'Question Circle Hollow': 'question-circle-o',
  'Plus': 'plus',
  'Minus': 'minus',
  'Coins': 'coins',
  'Lock': 'lock',
  'Unlock': 'unlock',
  'Asterisk': 'asterisk',
  'Chevron Down': 'chevron-down',
  'Chevron Up': 'chevron-up',
  'Chevron Left': 'chevron-left',
  'Chevron Right': 'chevron-right',
  'Arrow Down': 'arrow-down',
  'Arrow Up': 'arrow-up',
  'Arrow Left': 'arrow-left',
  'Arrow Right': 'arrow-right',
  'Calendar': 'calendar',
  'Speech': 'speech',
  'Heart': 'heart',
  'Star': 'star',
  'Pin': 'pin',
  'Pencil': 'pencil',
  'Trash': 'trash',
  'Opening Quote' : 'quote-open',
  'Closing Quote' : 'quote-close',
  'Opening Quote Fill' : 'quote-fill-open',
  'Closing Quote Fill' : 'quote-fill-close',
  'Clock' : 'clock',
  'List' : 'list',
  'Grid' : 'grid',
  'Globe' : 'globe',
  'Speech': 'speech'
};

var IconPattern = React.createClass({
  render : function(){
    return (
      <div className="icons-pattern">
        <Pattern title="icons">
          <p>All our icons are provided via a custom font.  This allows the size of the icon to be changed via font-size and the colour to be changed via font color.</p>
          <p>In order to standardize how icons are displayed, use the Icon react component to render an icon</p>

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
  }
});

module.exports = IconPattern;
