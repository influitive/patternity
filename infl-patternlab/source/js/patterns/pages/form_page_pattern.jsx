var React     = require('react');

var PanelLeftSidebar  = require("../../../../infl-components/pages/panel_left_sidebar.jsx");
var Sidebar           = require("../../../../infl-components/sidebar.jsx");
var Content           = require("../../../../infl-components/content.jsx");
var ListPicker        = require("../../../../infl-components/list_picker.jsx");

var Form            = require("../../../../infl-components/form.jsx");
var InputLabel      = require("../../../../infl-components/input_label.jsx");
var RadioButton     = require("../../../../infl-components/radio_button.jsx");
var TextInput       = require("../../../../infl-components/text_input.jsx");
var Checkbox        = require("../../../../infl-components/checkbox.jsx");
var SelectDropdown  = require("../../../../infl-components/select_dropdown.jsx");
var Alert           = require("../../../../infl-components/alert.jsx");
var ButtonGroup     = require("../../../../infl-components/button_group.jsx");
var ToggleSwitch    = require("../../../../infl-components/toggle_switch.jsx");

var FormPagePattern = React.createClass({
  getInitialState : function(){
    return {
      activeFormLayout : "one-column"
    };
  },
  render : function(){
    return (
      <div className="form-page-pattern page-pattern">
        <header className="pt-page-header">
          <h1>Form Page Demo</h1>
        </header>
        <PanelLeftSidebar id="form-page">
          <Sidebar>
            <Sidebar.Heading title="Form Page Layouts" />
            <ListPicker
                title="Select Layout"
                key="form-layouts"
                listItems={this._formLayoutItems()} />
          </Sidebar>
          <Content>
            {this._formLayoutContent()}
          </Content>
        </PanelLeftSidebar>
        <footer className="pt-page-footer">
          <h5>Form Page Footer</h5>
        </footer>
      </div>
    );
  },
  _formLayoutItems : function(){
    var that = this;
    return [
      {
        name : "One Column",
        listItemComponent : "a",
        listItemComponentProps : {
          className : this._isActiveLayout("one-column"),
          href : "javascript:void(0);",
          onClick : function(){
            that._switchActiveLayout("one-column");
          }
        },
        key : "one-column"
      },
      {
        name : "Two Column",
        listItemComponent : "a",
        listItemComponentProps : {
          className : this._isActiveLayout("two-column"),
          href : "javascript:void(0);",
          onClick : function(){
            that._switchActiveLayout("two-column");
          }
        },
        key : "two-column"
      }
    ];
  },
  _isActiveLayout : function(layout){
    return layout === this.state.activeFormLayout ? "active" : "";
  },
  _switchActiveLayout : function(layout){
    this.setState({
      activeFormLayout : layout
    });
  },
  _formLayoutContent : function(){
    var formLayouts = {
      "one-column" : <OneColumnLayout />,
      "two-column" : <TwoColumnLayout />
    };

    return formLayouts[this.state.activeFormLayout];
  }
});

var OneColumnLayout = React.createClass({
  getInitialState : function(){
    return {
      testRadioButton : "1"
    };
  },
  render : function(){
    return (
      <Form>
        <Form.Title title="One Column Form">
          <p>This is a sample of what a one column form layout looks like.</p>
        </Form.Title>
        <Form.Alert>
          <Alert title="Success!" type="success" showIcon={true} closeable={false}>
            <p>You have successfully updated the one column form layout</p>
          </Alert>
        </Form.Alert>
        <Form.Row inputSize="small">
          <InputLabel label="Small Text Input">
            <TextInput type="text" />
          </InputLabel>
        </Form.Row>
        <Form.Row inputSize="medium">
          <InputLabel label="Medium Text Input">
            <TextInput type="text" />
          </InputLabel>
        </Form.Row>
        <Form.Row inputSize="large">
          <InputLabel label="Large Text Input">
            <TextInput type="text" />
          </InputLabel>
        </Form.Row>
        <Form.Row inputSize="small">
          <InputLabel label="Required Input">
            <TextInput type="text" required={true} />
          </InputLabel>
        </Form.Row>
        <Form.Row>
          <InputLabel label="Checkboxes">
            <Checkbox.Group>
              <Checkbox checkboxLabel="First Checkbox" />
              <Checkbox checkboxLabel="Second Checkbox" />
              <Checkbox checkboxLabel="Third Checkbox" />
            </Checkbox.Group>
          </InputLabel>
        </Form.Row>
        <Form.Row>
          <InputLabel label="Radio Buttons">
            <RadioButton.Group layout="stacked">
              <RadioButton radioLabel="First Checkbox" radioName="testRadioButton" value="1" onChange={this._handleChange} isChecked={this.state.testRadioButton === "1"}/>
              <RadioButton radioLabel="Second Checkbox" radioName="testRadioButton" value="2" onChange={this._handleChange} isChecked={this.state.testRadioButton === "2"}/>
              <RadioButton radioLabel="Third Checkbox" radioName="testRadioButton" value="3" onChange={this._handleChange} isChecked={this.state.testRadioButton === "3"}/>
            </RadioButton.Group>
          </InputLabel>
        </Form.Row>
        <Form.Row inputSize="small">
          <InputLabel label="Select Dropdown">
            <SelectDropdown>
              <option value="1">First Option</option>
              <option value="2">Second Option</option>
              <option value="3">Third Option</option>
              <option value="4">Fourth Option</option>
              <option value="5">Fifth Option</option>
              <option value="6">Sixth Option</option>
            </SelectDropdown>
          </InputLabel>
        </Form.Row>
        <Form.Row>
          <InputLabel label="Toggle Switch">
            <ToggleSwitch />
          </InputLabel>
        </Form.Row>
        <Form.Actions>
          <ButtonGroup>
            <button className="secondary">Cancel</button>
            <button className="success">Save</button>
          </ButtonGroup>
        </Form.Actions>
      </Form>
    );
  },
  _handleChange : function(event){
    var currentState = this.state;
    currentState[event.target.name] = event.target.value;
    this.setState(currentState);
  }
});

var TwoColumnLayout = React.createClass({
  getInitialState : function(){
    return {
      testRadioButtonTwo : "1"
    };
  },
  render : function(){
    return (
      <Form>
        <Form.Title title="Two Column Form" actions={this._buildFormActions()}>
          <p>This is a sample of what a two column form layout looks like.</p>
        </Form.Title>
        <Form.Alert>
          <Alert title="Success!" type="success" showIcon={true} closeable={false}>
            <p>You have successfully updated the one column form layout</p>
          </Alert>
        </Form.Alert>
        <Form.Column>
          <Form.Row inputSize="small">
            <InputLabel label="Small Text Input">
              <TextInput type="text" />
            </InputLabel>
          </Form.Row>
          <Form.Row inputSize="medium">
            <InputLabel label="Medium Text Input">
              <TextInput type="text" />
            </InputLabel>
          </Form.Row>
          <Form.Row inputSize="small">
            <InputLabel label="Select Dropdown">
              <SelectDropdown>
                <option value="1">First Option</option>
                <option value="2">Second Option</option>
                <option value="3">Third Option</option>
                <option value="4">Fourth Option</option>
                <option value="5">Fifth Option</option>
                <option value="6">Sixth Option</option>
              </SelectDropdown>
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <InputLabel label="Checkboxes">
              <Checkbox.Group layout="stacked">
                <Checkbox checkboxLabel="First Checkbox" />
                <Checkbox checkboxLabel="Second Checkbox" />
                <Checkbox checkboxLabel="Third Checkbox" />
              </Checkbox.Group>
            </InputLabel>
          </Form.Row>
        </Form.Column>
        <Form.Column>
          <Form.Row inputSize="large">
            <InputLabel label="Large Text Input">
              <TextInput type="text" />
            </InputLabel>
          </Form.Row>
           <Form.Row inputSize="small">
            <InputLabel label="Required Input">
              <TextInput type="text" required={true} />
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <InputLabel label="Toggle Switch">
              <ToggleSwitch />
            </InputLabel>
          </Form.Row>
          <Form.Row>
            <InputLabel label="Radio Buttons">
              <RadioButton.Group layout="stacked">
                <RadioButton radioLabel="First Checkbox" radioName="testRadioButtonTwo" value="1" onChange={this._handleTwoChange} isChecked={this.state.testRadioButtonTwo === "1"}/>
                <RadioButton radioLabel="Second Checkbox" radioName="testRadioButtonTwo" value="2" onChange={this._handleTwoChange} isChecked={this.state.testRadioButtonTwo === "2"}/>
                <RadioButton radioLabel="Third Checkbox" radioName="testRadioButtonTwo" value="3" onChange={this._handleTwoChange} isChecked={this.state.testRadioButtonTwo === "3"}/>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
        </Form.Column>
      </Form>
    );
  },
  _buildFormActions : function(){
    return (
      <ButtonGroup>
        <button className="secondary">Cancel</button>
        <button className="primary">Save Changes</button>
      </ButtonGroup>
    );
  },
  _handleTwoChange : function(event){
    var currentState = this.state;
    currentState[event.target.name] = event.target.value;
    this.setState(currentState);
  }
});

module.exports = FormPagePattern;
