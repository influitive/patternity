var inflComp = {};

inflComp.React = require('react');
inflComp.PanelLeftSidebar = require("../../infl-components/pages/panel_left_sidebar.jsx");
inflComp.Conent = require("../../infl-components/content.jsx");
inflComp.Sidebar = require("../../infl-components/sidebar.jsx");
inflComp.ListPicker = require("../../infl-components/list_picker.jsx");
inflComp.Accordion = require("../../infl-components/accordion.jsx");
inflComp.Alert = require("../../infl-components/alert.jsx");
inflComp.HelpTooltip = require("../../infl-components/help_tooltip.jsx");
inflComp.ToggleSwitch = require("../../infl-components/toggle_switch.jsx");
inflComp.ButtonDropdown = require("../../infl-components/button_dropdown.jsx");
inflComp.SelectDropdown = require("../../infl-components/select_dropdown.jsx");
inflComp.TextInput = require("../../infl-components/text_input.jsx");
inflComp.InputLabel = require("../../infl-components/input_label.jsx");
inflComp.Icon = require("../../infl-components/icon.jsx");
inflComp.Loading = require("../../infl-components/loading.jsx");
inflComp.ButtonGroup = require("../../infl-components/button_group.jsx");
inflComp.Form = require("../../infl-components/form.jsx");
inflComp.ModalDialog = require("../../infl-components/modal_dialog.jsx");
inflComp.Tabs = require("../../infl-components/tabs.jsx");

inflComp.inputLabel = function(props, elementId){
  inflComp.React.render(
    inflComp.React.createElement(inflComp.InputLabel, props),
    document.getElementById(elementId)
  );
};

inflComp.textInput = function(props, elementId){
  inflComp.React.render(
    inflComp.React.createElement(inflComp.TextInput, props),
    document.getElementById(elementId)
  );
};

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
