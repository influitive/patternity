var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Example1 = require('./popover_example1.jsx');

var PopoverPattern = React.createClass({
  render : function(){
    return (
      <div className="popover-pattern">
        <Pattern title="popover">
          <p>The Popover component is a floating menu used to expose more options.</p>

          <Pattern.Detail title="Popover">
            <Example1.Demo/>
            <Code>
              <Example1.Code/>
              <Code.Props patternProps={this._getProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
            var Popover = require("patternity/infl-components/popover.jsx");
            </Require.JS>
            <Require.CSS>
            @import "patternity/infl-styles/popover";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
      );
  },
  _getProps : function(){
    return {
      ref : {
        type : "string",
        defaultValue : "",
        required : true,
        description : "react reference key."
      },
      children : {
        type : "array",
        defaultValue : "[...] ",
        required : true,
        description : "Children elements to show within the popover."
      },
      autoclose : {
        type : "boolean",
        defaultValue : "false",
        required : false,
        description : "clicking inside the popover will automatically close it"
      }
    };
  }
});

module.exports = PopoverPattern;


