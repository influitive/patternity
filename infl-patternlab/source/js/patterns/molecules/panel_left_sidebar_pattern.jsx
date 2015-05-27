var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var PanelLeftSidebar = require("../../../../infl-components/pages/panel_left_sidebar.jsx");

var PanelLeftSidebarPattern = React.createClass({
  render : function(){
    return (
      <div className="panel-left-sidebar-pattern">
        <Pattern title="panel left sidebar">
          <p>Panel Left Sidebar is used to help with page layout.  Specifically a left Sidebar and a Content react component.</p>

          <Pattern.Detail title="Panel Left Sidebr">
            <p>Panel Left Sidebar renders a section tag.  So there is not much to show.  Below is a sample of the layout using Sidebar and Content as children.</p>

            <Pattern.SampleLayout>
              <div style={this.sampleStyle.panelLeftSidebar}>
                <div style={this.sampleStyle.sidebar}></div>
                <div style={this.sampleStyle.content}></div>
              </div>
            </Pattern.SampleLayout>

            <Code>
              <Code.JSX>
                &lt;PanelLeftSidebar&gt;
                  &lt;Sidebar&gt;&lt;/Sidebar&gt;
                  &lt;Content&gt;&lt;/Content&gt;
                &lt;/PanelLeftSidebar&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="PanelLeftSidebar" />
              <Code.Props patternProps={this._buildPanelLeftSidebarProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var PanelLeftSidebar = require("patternity/infl-components/pages/panel_left_sidebar.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/infl_base";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _buildPanelLeftSidebarProps : function(){
    return {
      id : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "HTML id for the section tag."
      },
      children : {
        type : "array",
        defaultValue : "[...]",
        required : false,
        description : "Array of patternity components.  Sidebar and Content."
      }
    };
  },
  sampleStyle : {
    panelLeftSidebar : {
      overflow: "hidden",
      width: "200px",
      height : "150px",
      backgroundColor : "#eeeeee",
      padding: "5px"
    },
    sidebar : {
      float: "left",
      width: "60px",
      height: "100%",
      backgroundColor : "white"
    },
    content : {
      float: "left",
      width: "125px",
      height: "100%",
      marginLeft : "5px",
      backgroundColor : "white"
    }
  }
});

module.exports = PanelLeftSidebarPattern;
