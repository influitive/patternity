var inflComp = {};

inflComp.React = require('react');

inflComp.FormPattern        = require("./patterns/molecules/form_pattern.jsx");
inflComp.LoadingPattern     = require("./patterns/molecules/loading_pattern.jsx");
inflComp.ColoursPattern     = require("./patterns/atoms/colours_pattern.jsx");
inflComp.FontsPattern       = require("./patterns/atoms/fonts_pattern.jsx");
inflComp.HeadingsPattern    = require("./patterns/atoms/headings_pattern.jsx");
inflComp.ParagraphPattern   = require("./patterns/atoms/paragraph_pattern.jsx");
inflComp.IconsPattern       = require("./patterns/atoms/icons_pattern.jsx");



/* old way of building patternity docs */
inflComp.PanelLeftSidebar = require("../../infl-components/pages/panel_left_sidebar.jsx");
inflComp.Conent = require("../../infl-components/content.jsx");
inflComp.Sidebar = require("../../infl-components/sidebar.jsx");
inflComp.ListPicker = require("../../infl-components/list_picker.jsx");
inflComp.Accordion = require("../../infl-components/accordion.jsx");
inflComp.Alert = require("../../infl-components/alert.jsx");
inflComp.ActionAlert = require("../../infl-components/alert/action_alert.jsx");
inflComp.DetailedAlert = require("../../infl-components/alert/detailed_alert.jsx");
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
inflComp.Checkbox = require("../../infl-components/checkbox.jsx");
inflComp.RadioButton = require("../../infl-components/radio_button.jsx");

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
