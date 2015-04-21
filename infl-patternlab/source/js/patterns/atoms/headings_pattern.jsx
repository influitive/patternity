var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var HeadingsPattern = React.createClass({
  render : function(){
    return (
      <div className="headings-pattern">
        <Pattern title="headings">
          <h1>Heading Level 1 - 32px (2em)      / 33px (2.0265em)</h1>
          <h2>Heading Level 2 - 24px (1.5em)    / 27px (1.6875em)</h2>
          <h3>Heading Level 3 - 19px (1.25em)   / 24px (1.5em)</h3>
          <h4>Heading Level 4 - 16px (1.125em)  / 21px (1.3125em)</h4>
          <h5>Heading Level 5 - 14px (0.83em)   / 19px (1.125em)</h5>
          <h6>Heading Level 6 - 11px (0.6875em) / 15px (0.9375em)</h6>

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

module.exports = HeadingsPattern;
