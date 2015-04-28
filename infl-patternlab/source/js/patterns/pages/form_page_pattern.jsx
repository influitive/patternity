var React     = require('react');

var PanelLeftSidebar  = require("../../../../infl-components/pages/panel_left_sidebar.jsx");
var Sidebar           = require("../../../../infl-components/sidebar.jsx");
var Content           = require("../../../../infl-components/content.jsx");

var Form            = require("../../../../infl-components/form.jsx");
var InputLabel      = require("../../../../infl-components/input_label.jsx");
var RadioButton     = require("../../../../infl-components/radio_button.jsx");
var TextInput       = require("../../../../infl-components/text_input.jsx");
var Checkbox        = require("../../../../infl-components/checkbox.jsx");

var FormPagePattern = React.createClass({
  render : function(){
    return (
      <div className="form-page-pattern">
        <div className="pt-page-header">
          <h1>this is the header</h1>
        </div>
        <PanelLeftSidebar id="form-page">
          <Sidebar>
            <Sidebar.Heading title="Form Page Demo" />
          </Sidebar>
          <Content>
            <h2>yeah</h2>
          </Content>
        </PanelLeftSidebar>
      </div>
    );
  }
});

module.exports = FormPagePattern;
