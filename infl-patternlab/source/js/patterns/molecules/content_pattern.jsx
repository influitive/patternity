var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Content = require("../../../../infl-components/pages/panel_left_sidebar.jsx");

var ContentPattern = React.createClass({
  render : function(){
    return (
      <div className="content-pattern">
        <Pattern title="content">
          <p>The Content component is used to help with page layout, and should be used with Panel Left Sidebar.</p>

          <Pattern.Detail title="Content">
            <p>Content renders a set of div tags.  So there is not much to show.  Below is a sample of the layout using PanelLeftSidebar and Content as children.</p>

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
              <Code.WithoutJSX patternName="Content" />
              <Code.Props patternProps={this._buildContentProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var Content = require("patternity/infl-components/content.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/infl_base";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _buildContentProps : function(){
    return {
      hasInnerPanel : {
        type : "boolean",
        default : "true",
        required : false,
        description : "Determines if the contents inner panel is rendered."
      },
      hasBackgroundColour : {
        type : "boolean",
        default : "true",
        required : false,
        description : "Determines if the content has a background colour of white or is transparent."
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
      backgroundColor : "#ffcc00",
    }
  }
});

module.exports = ContentPattern;
