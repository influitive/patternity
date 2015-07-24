var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');

var PanelLeftSidebar  = require("../../../../infl-components/pages/panel_left_sidebar.jsx");
var Sidebar           = require("../../../../infl-components/sidebar.jsx");
var Content           = require("../../../../infl-components/content.jsx");

var ModalDialog     = require("../../../../infl-components/modal_dialog.jsx");
var Form            = require("../../../../infl-components/form.jsx");
var InputLabel      = require("../../../../infl-components/input_label.jsx");
var TextInput       = require("../../../../infl-components/text_input.jsx");
var ButtonGroup     = require("../../../../infl-components/button_group.jsx");
var Button          = require("../../../../infl-components/button.jsx");
var Checkbox        = require("../../../../infl-components/checkbox.jsx");
var SelectDropdown  = require("../../../../infl-components/select_dropdown.jsx");


var FullWidthModalInputPattern = React.createClass({
  getInitialState : function(){
    return {
      showModal : false
    };
  },
  render : function(){
    return (
      <div className="form-page-pattern page-pattern">
        <Pattern title="form page demo">
          <PanelLeftSidebar id="form-page">
            <Sidebar>
              <Sidebar.Heading title="Modal Full Width Inputs" />
            </Sidebar>
            <Content>
              <Button onClick={this._showModal}>Add Field</Button>
              {this._isModalVisible()}
            </Content>
          </PanelLeftSidebar>
        </Pattern>
      </div>
    );
  },

  _showModal : function(event){
    this.setState({
      showModal : true
    });
  },

  _isModalVisible : function(){
    if(this.state.showModal === false){
      return null;
    }

    return (
      <ModalDialog id="modal-id" closeable={true} size="small" isModalOpen={this.state.showModal} onClose={this._hideModal}>
        <ModalDialog.Header title="Add Field" />
        <ModalDialog.Body>
           <Form>
            <Form.Row inputSize="full">
              <InputLabel label="Label Name" layout="stacked">
                <TextInput type="text" required={true} />
              </InputLabel>
            </Form.Row>
            <Form.Row inputSize="full">
              <InputLabel label="input Type" layout="stacked">
                <SelectDropdown key="key" name="select_name" value="value 3">
                  <option value="value 1">option name</option>
                  <option value="value 2">option name</option>
                  <option value="value 3">option name</option>
                  <option value="value 4">option name</option>
                  <option value="value 5">option name</option>
                  <option value="value 6">option name</option>
                </SelectDropdown>
              </InputLabel>
            </Form.Row>
            <Form.Row inputSize="full">
              <InputLabel label="Maps to field" layout="stacked">
                <TextInput type="text" required={true} />
              </InputLabel>
            </Form.Row>
            <Form.Row inputSize="full">
              <Checkbox.Group>
                <Checkbox checkboxLabel="Required field" />
              </Checkbox.Group>
            </Form.Row>
          </Form>
        </ModalDialog.Body>
        <ModalDialog.Footer>
            <ButtonGroup>
                <Button type="primary">Add Field</Button>
            </ButtonGroup>
        </ModalDialog.Footer>
      </ModalDialog>
    );
  },

  _hideModal : function(event){
    this.setState({
      showModal : false
    });
  }
});

module.exports = FullWidthModalInputPattern;
