var React = require('react');
var Code = require('../../patternlab-components/code.jsx');
var Pattern   = require('../../patternlab-components/pattern.jsx');

// keep adding each component to this list
var Popover       = require("../../../../infl-components/popover.jsx");
var Popover       = require("../../../../infl-components/button.jsx");

module.exports = {

  Demo : React.createClass({
    render : function() {
      return (
        <Pattern.Show>
          $DEMO
        </Pattern.Show>
        );
    }
  }),

  Code : React.createClass({
    render : function() {
      return (
        <Code.JSX>
        $CODE
        </Code.JSX>
        );
    }
  })

};

