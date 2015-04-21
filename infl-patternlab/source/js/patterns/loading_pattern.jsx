var React = require('react');
var Pattern = require('../patternlab-components/pattern.jsx');
var Code = require('../patternlab-components/code.jsx');
var Require = require('../patternlab-components/require.jsx');

var Loading = require("../../../infl-components/loading.jsx");

var LoadingPattern = React.createClass({
  render : function(){
    return (
      <div className="form-pattern">
        <Pattern title="loading">
          <p>The loading component is basically a loading icon with a bunch of options.  It allows for block, inline, modal along with 2 colours, white and grey.</p>

          <Require>
            <Require.JS>
              var Form = require("patternity/infl-components/loading.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/loading";
            </Require.CSS>
          </Require>

          <Pattern.Detail title="Loading">
            <Pattern.Show>
              <Loading />
            </Pattern.Show>
            <Code>
              <Code.JSX>
                &lt;Loading /&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Loading" />
              <Code.Props patternProps={this._buildLoadingProps()} />
            </Code>
          </Pattern.Detail>
        </Pattern>
      </div>
    );
  },
  _buildLoadingProps : function(){
    return {
      size : {
        type : "string",
        description : "one of small, medium, large"
      },
      type: {
        type : "string",
        description : "one of dark or light"
      },
      isModal : {
        type : "boolean",
        description : "determines if loading should be a modal dialog defaults to false"
      },
      isBlock : {
        type : "boolean",
        description : "determines if loading should display inline or block defaults to false"
      }
    };
  }
});

module.exports = LoadingPattern;
