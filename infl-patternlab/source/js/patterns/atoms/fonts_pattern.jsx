var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var FontsPattern = React.createClass({
  render : function(){
    return (
      <div className="fonts-pattern">
        <Pattern title="fonts">
          <h4>Primary font:</h4>
          <p>
            <span className="font-title">Regular:</span> Proxima Nova Light
          </p>
          <p>
            <span className="font-title">Italic:</span> <em> Proxima Nova Light Italic</em>
          </p>
          <p>
            <span className="font-title">Bold:</span> <strong>Proxima Nova Semibold</strong>
          </p>

          <Require>
            <Require.CSS>
              @import "patternity/infl-styles/fonts";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  }
});

module.exports = FontsPattern;
