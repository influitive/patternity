var inflComp = {};

inflComp.React = require('react');
inflComp.PanelLeftSidebar = require("../../infl-components/pages/panel_left_sidebar.jsx");
inflComp.Conent = require("../../infl-components/content.jsx");
inflComp.Sidebar = require("../../infl-components/sidebar.jsx");
inflComp.SidebarHeading = require("../../infl-components/sidebar_heading.jsx");
inflComp.ListPicker = require("../../infl-components/list_picker.jsx");
inflComp.Accordion = require("../../infl-components/accordion.jsx");
inflComp.Alert = require("../../infl-components/alert.jsx");
inflComp.HelpTooltip = require("../../infl-components/help_tooltip.jsx");
inflComp.ToggleSwitch = require("../../infl-components/toggle_switch.jsx");
inflComp.ButtonDropdown = require("../../infl-components/button_dropdown.jsx");
inflComp.SelectDropdown = require("../../infl-components/select_dropdown.jsx");

inflComp.buttonDropdown = function(props, elementId){
  inflComp.React.render(
    inflComp.React.createElement(inflComp.ButtonDropdown, props),
    document.getElementById(elementId)
  );
};

inflComp.selectDropdown = function(props, elementId){
  inflComp.React.render(
    inflComp.React.createElement(inflComp.SelectDropdown, props),
    document.getElementById(elementId)
  );
};

module.exports = inflComp;
