var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var FontsPattern = React.createClass({
  render : function(){
    return (
      <div className="textarea-pattern">
        <Pattern title="textarea">
          <Pattern.Show>
            <textarea rows="8" cols="48" placeholder="Enter your message here"></textarea>
          </Pattern.Show>
          <Code>
            <Code.HTML>
              {this._buildHTMLExample()}
            </Code.HTML>
          </Code>

          <Require>
            <Require.CSS>
              @import "patternity/infl-styles/form";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _buildHTMLExample : function(){
    return '<textarea rows="8" cols="48" placeholder="Enter your message here"></textarea>';
  },
});

module.exports = FontsPattern;
