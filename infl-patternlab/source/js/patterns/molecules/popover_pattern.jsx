var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Popover       = require("../../../../infl-components/popover.jsx");

var PopoverPattern = React.createClass({
  render : function(){
    return (
      <div className="popover-pattern">
        <Pattern title="popover">
          <p>The Popover component is a floating component that is used to hide and show content.</p>
          <p>Use an anchor tag with a <b>data-popover</b> attribute to reference the popover to open and bind the <b>Popover.clickEvent</b> function to the onClick event.</p>

          <Pattern.Detail title="Popover">
            <Pattern.Show>
              <a href="javascript://" data-popover="MyPopover1" onClick={ Popover.clickEvent.bind(this) }>Open "MyPopover1"</a>

              <Popover ref="MyPopover1">
                <ul>
                  <li><a className="ic ic-pencil"href="javascript://">Edit</a></li>
                  <li><a className="ic ic-lock"href="javascript://">Lock</a></li>
                  <li><a className="ic ic-arrow-left"href="javascript://">Move</a></li>
                  <li><a className="ic ic-trash" href="javascript://">Delete</a></li>
                </ul>
              </Popover>
            </Pattern.Show>

            <Code>
              <Code.JSX>
              &lt;a href="javascript://" data-popover="MyPopover1" onClick=&#123; Popover.clickEvent.bind(this) &#125;&gt;Open "MyPopover1"&lt;/a&gt;

              &lt;Popover ref="MyPopover1"&gt;
              &lt;ul&gt;
              &lt;li&gt;&lt;a className="ic ic-pencil"href="javascript://"&gt;Edit&lt;/a&gt;&lt;/li&gt;
              &lt;li&gt;&lt;a className="ic ic-lock"href="javascript://"&gt;Lock&lt;/a&gt;&lt;/li&gt;
              &lt;li&gt;&lt;a className="ic ic-arrow-left"href="javascript://"&gt;Move&lt;/a&gt;&lt;/li&gt;
              &lt;li&gt;&lt;a className="ic ic-trash" href="javascript://"&gt;Delete&lt;/a&gt;&lt;/li&gt;
              &lt;/ul&gt;
              &lt;/Popover&gt;
              </Code.JSX>

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
        default : "",
        required : true,
        description : "react reference key."
      },
      children : {
        type : "array",
        default : "[...] ",
        required : true,
        description : "Children elements to show within the popover."
      }
    };
  }
});

module.exports = PopoverPattern;


