var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Sidebar = require("../../../../infl-components/sidebar.jsx");

var SidebarPattern = React.createClass({
  render : function(){
    return (
      <div className="sidebar-pattern">
        <Pattern title="sidebar">
          <p>The Sidebar component is used to help with page layout, and should be used with Panel Left Sidebar.</p>

          <Pattern.Detail title="Sidebar">
            <p>Sidebar renders a set of div tags.  So there is not much to show.  Below is a sample of the layout using PanelLeftSidebar and Content as children.</p>

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
              <Code.WithoutJSX patternName="Sidebar" />
              <Code.Props patternProps={this._buildSidebarProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var Sidebar = require("patternity/infl-components/sidebar.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/sidebar";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _buildSidebarProps : function(){
    return {
      children : {
        type : "array",
        default : "[...]",
        required : false,
        description : "Array of Sidebar sub components (Heading, NavList), html, rect components, etc."
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
      backgroundColor : "#ffcc00"
    },
    content : {
      float: "left",
      width: "125px",
      height: "100%",
      marginLeft : "5px",
      backgroundColor : "white",
    }
  }
});

module.exports = SidebarPattern;
