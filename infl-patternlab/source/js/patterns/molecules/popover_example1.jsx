var React = require('react');
var Code = require('../../patternlab-components/code.jsx');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Popover       = require("../../../../infl-components/popover");

module.exports = {

  Demo : React.createClass({
    render : function() {
      return (
        <Pattern.Show>
          <Popover>
            <a href="javascript://">Open Popover Demo</a>
            <Popover.Menu>
              <a className="ic ic-pencil"href="javascript://">Edit</a>
              <a className="ic ic-lock"href="javascript://">Lock</a>
              <a className="ic ic-arrow-left"href="javascript://">Move</a>
              <a className="ic ic-trash" href="javascript://">Delete</a>
            </Popover.Menu>
          </Popover>
        </Pattern.Show>
        );
    }
  }),

  Code : React.createClass({
    render : function() {
      // for some reason the resulting code snippet loses the line breaks
      return (
        <Code.JSX>
&lt;Popover&gt;
&lt;a href="javascript://"&gt;Open Popover&lt;/a&gt;
&lt;Popover.Menu&gt;
&lt;a className="ic ic-pencil"href="javascript://"&gt;Edit&lt;/a&gt;
&lt;a className="ic ic-lock"href="javascript://"&gt;Lock&lt;/a&gt;
&lt;a className="ic ic-arrow-left"href="javascript://"&gt;Move&lt;/a&gt;
&lt;a className="ic ic-trash" href="javascript://"&gt;Delete&lt;/a&gt;
&lt;/Popover.Menu&gt;
&lt;/Popover&gt;
        </Code.JSX>
        );
    }
  })

};
