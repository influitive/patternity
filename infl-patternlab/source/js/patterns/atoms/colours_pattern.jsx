var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var ColourPattern = React.createClass({
  render : function(){
    return (
      <div className="colours-pattern">
        <Pattern title="colours">
          <p>The colours are set via sass variables and can be found in theme.scss.  The first two can change via white labeling, and are set by each company.</p>

          <ul className="sg-colors">
            <li>
              <span className="sg-swatch color-primary-background"></span>
              <span className="sg-name">
                <strong>Bright Blue</strong>
              </span>
              <span className="sg-label">#08a5c5</span>
            </li>
            <li>
              <span className="sg-swatch color-secondary-background"></span>
              <span className="sg-name">
                <strong>Dark Blue</strong>
              </span>
              <span className="sg-label">#046f99</span>
            </li>
            <li>
              <span className="sg-swatch color-success-background"></span>
              <span className="sg-name">
                <strong>Green</strong>
              </span>
              <span className="sg-label">#8BC540</span>
            </li>
            <li>
              <span className="sg-swatch color-error-background"></span>
              <span className="sg-name">
                <strong>Red</strong>
              </span>
              <span className="sg-label">#c54040</span>
            </li>
            <li>
              <span className="sg-swatch color-warning-background"></span>
              <span className="sg-name">
                <strong>Yellow</strong>
              </span>
              <span className="sg-label">#ffcc00</span>
            </li>
            <li>
              <span className="sg-swatch color-darker-grey-background"></span>
              <span className="sg-name">
                <strong>Darker Grey</strong>
              </span>
              <span className="sg-label">#444444</span>
            </li>
            <li>
              <span className="sg-swatch color-dark-grey-background"></span>
              <span className="sg-name">
                <strong>Dark Grey</strong>
              </span>
              <span className="sg-label">#666666</span>
            </li>
            <li>
              <span className="sg-swatch color-medium-grey-background"></span>
              <span className="sg-name">
                <strong>Medium Grey</strong>
              </span>
              <span className="sg-label">#666666</span>
            </li>
            <li>
              <span className="sg-swatch color-light-grey-background"></span>
              <span className="sg-name">
                <strong>Light Grey</strong>
              </span>
              <span className="sg-label">#d0d2d3</span>
            </li>
            <li>
              <span className="sg-swatch color-lighter-grey-background"></span>
              <span className="sg-name">
                <strong>Lighter Grey</strong>
              </span>
              <span className="sg-label">#eeeeee</span>
            </li>
          </ul>

          <Require>
            <Require.CSS>
              @import "patternity/infl-styles/theme";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  }
});

module.exports = ColourPattern;
