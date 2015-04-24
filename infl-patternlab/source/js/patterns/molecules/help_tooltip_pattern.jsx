var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var HelpTooltip   = require("../../../../infl-components/help_tooltip.jsx");

var HelpTooltipPattern = React.createClass({
  render : function(){
    return (
      <div className="help-tooltip-pattern">
        <Pattern title="help tooltip">
          <p>The help tooltip should be used for more indepth tooltip information that can also include links.  There are two ways of interacting with it, hover and click.</p>

          <Pattern.Detail title="Help Tooltip">
            <Pattern.Show>
              <div style={{ marginTop: "200px", marginLeft: "200px"}}>
                <HelpTooltip title="Tooltip Title">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <a href="#">Test Link</a>
                </HelpTooltip>
              </div>
            </Pattern.Show>
            <Code>
              <Code.JSX>
                &lt;HelpTooltip title="Tooltip Title"&gt;
                  &lt;p&gt;My tooltip Body&lt;/p&gt;
                &lt;/HelpTooltip&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="HelpTooltip" />
              <Code.Props patternProps={this._buildHelpTooltipProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var HelpTooltip = require("patternity/infl-components/help_tooltip.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/help_tooltip";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _buildHelpTooltipProps : function(){
    return {
      title : {
        type : "string",
        default : "",
        required : false,
        description : "Title of the help tooltip."
      },
      children : {
        type : "string",
        default : "[...] ",
        required : true,
        description : "Array of text, html, react elements."
      }
    };
  }
});

module.exports = HelpTooltipPattern;
