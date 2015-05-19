var React     = require('react');
var Pattern   = require('../../../patternlab-components/pattern.jsx');
var Code      = require('../../../patternlab-components/code.jsx');
var Require   = require('../../../patternlab-components/require.jsx');

var Card = require("../../../../../infl-components/cards/card.jsx");

var ContentPattern = React.createClass({
  render : function(){
    return (
      <div className="card-pattern">
        <Pattern title="card">
          <p>The Card component is used to help with styling of cards used through out the app.  Challenge, provider details, etc.</p>

          <Pattern.Detail title="Card">
            <p>Content renders a div tag.  So there is not much to show.</p>

            <Pattern.Show>
              <div style={this.sampleCardStyling}>
                <Card>
                  <h4>Sample Card</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Card>
              </div>
            </Pattern.Show>

            <Code>
              <Code.JSX>
                &lt;Card&gt;
                  &lt;h4&gt;Sample Card&lt;/h4&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
                &lt;/Card&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Card" />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var Card = require("patternity/infl-components/cards/card.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/card";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  sampleCardStyling : {
    width: "300px",
    padding: "10px",
    backgroundColor: "#eeeeee"
  }
});

module.exports = ContentPattern;
