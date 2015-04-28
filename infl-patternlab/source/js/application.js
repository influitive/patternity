var inflComp = {};

inflComp.React = require('react');

/* Atoms */
inflComp.ColoursPattern           = require("./patterns/atoms/colours_pattern.jsx");
inflComp.FontsPattern             = require("./patterns/atoms/fonts_pattern.jsx");
inflComp.HeadingsPattern          = require("./patterns/atoms/headings_pattern.jsx");
inflComp.ParagraphPattern         = require("./patterns/atoms/paragraph_pattern.jsx");
inflComp.IconsPattern             = require("./patterns/atoms/icons_pattern.jsx");
inflComp.RadioButtonPattern       = require("./patterns/atoms/radio_button_pattern.jsx");
inflComp.TextInputPattern         = require("./patterns/atoms/text_input_pattern.jsx");
inflComp.TextareaPattern          = require("./patterns/atoms/textarea_pattern.jsx");
inflComp.SelectDropdownPattern    = require("./patterns/atoms/select_dropdown_pattern.jsx");
inflComp.ToggleSwitchPattern      = require("./patterns/atoms/toggle_switch_pattern.jsx");
inflComp.CheckboxPattern          = require("./patterns/atoms/checkbox_pattern.jsx");
inflComp.InputLabelPattern        = require("./patterns/atoms/input_label_pattern.jsx");
inflComp.ButtonPattern            = require("./patterns/atoms/button_pattern.jsx");
inflComp.ButtonDropdownPattern    = require("./patterns/atoms/button_dropdown_pattern.jsx");
inflComp.ButtonGroupPattern       = require("./patterns/atoms/button_group_pattern.jsx");

/* Moleclues */
inflComp.FormPattern              = require("./patterns/molecules/form_pattern.jsx");
inflComp.LoadingPattern           = require("./patterns/molecules/loading_pattern.jsx");
inflComp.HelpTooltipPattern       = require("./patterns/molecules/help_tooltip_pattern.jsx");
inflComp.AlertPattern             = require("./patterns/molecules/alert_pattern.jsx");
inflComp.ActionAlertPattern       = require("./patterns/molecules/action_alert_pattern.jsx");
inflComp.DetailedAlertPattern     = require("./patterns/molecules/detailed_alert_pattern.jsx");
inflComp.ModalDialogPattern       = require("./patterns/molecules/modal_dialog_pattern.jsx");
inflComp.AccordionPattern         = require("./patterns/molecules/accordion_pattern.jsx");
inflComp.TabsPattern              = require("./patterns/molecules/tabs_pattern.jsx");
inflComp.FormRowPattern           = require("./patterns/molecules/form_row_pattern.jsx");
inflComp.FormColumnPattern        = require("./patterns/molecules/form_column_pattern.jsx");
inflComp.FormActionsPattern       = require("./patterns/molecules/form_actions_pattern.jsx");
inflComp.FormTitlePattern         = require("./patterns/molecules/form_title_pattern.jsx");
inflComp.FormSectionPattern       = require("./patterns/molecules/form_section_pattern.jsx");
inflComp.FormAlertPattern         = require("./patterns/molecules/form_alert_pattern.jsx");

module.exports = inflComp;
