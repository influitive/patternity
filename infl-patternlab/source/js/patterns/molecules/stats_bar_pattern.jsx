var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var StatsBar = require("../../../../infl-components/stats_bar.jsx");

var StatsBarPattern = React.createClass({
  render : function(){
    return (
      <div className="stats-bar-pattern">
        <Pattern title="stats bar">
          <p>The Stats Bar is used to display a set of information to the user.  This could be points balances, roll up of activity, etc.</p>

          <Pattern.Detail title="Stats Bar">
            <Pattern.Show>
              <StatsBar statType="points">
                <StatsBar.Stat title="Points Required Points Required" value={1500} />
                <StatsBar.Stat title="Your Total" value={3500} />
                <StatsBar.Stat title="Balance" value={2000} />
                <StatsBar.Stat title="Points Required" value={1500} />
                <StatsBar.Stat title="Your Total" value={3500} />
                <StatsBar.Stat title="Balance" value={2000} />
              </StatsBar>
            </Pattern.Show>

            <Code>
              <Code.JSX>
                &lt;StatsBar &gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="StatsBar" />
              <Code.Props patternProps={this._buildStatsBarProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var StatsBar = require("patternity/infl-components/stats_bar.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/stats_bar";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _buildStatsBarProps : function(){
    return {
      children : {
        type : "array",
        default : "[...]",
        required : false,
        description : "Array of Sidebar sub components (Heading, NavList), html, rect components, etc."
      }
    };
  }
});

module.exports = StatsBarPattern;
