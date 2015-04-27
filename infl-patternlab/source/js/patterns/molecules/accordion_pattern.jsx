var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form            = require("../../../../infl-components/form.jsx");
var InputLabel      = require("../../../../infl-components/input_label.jsx");
var RadioButton     = require("../../../../infl-components/radio_button.jsx");
var TextInput       = require("../../../../infl-components/text_input.jsx");

var Accordion   = require("../../../../infl-components/accordion.jsx");

var AccordionPattern = React.createClass({
  getInitialState : function(){
    return {
      sections : this._accordionSections()
    };
  },
  render : function(){
    return (
      <div className="accordion-pattern">
        <Pattern title="accordion">
          <p>The accordion is exactly what it sounds like, and accordion. Accordion sections have two states, enabled and disabled.</p>

          <Pattern.Detail title="Accordion">
            <Pattern.Show>
              <Accordion sections={this.state.sections} uniqueIdentifier="accordion-1" />
            </Pattern.Show>

            <Pattern.Demo title="Accordion Demo">
              <div className="demo-output">
                <div className="demo-pattern">
                  <h4>Accordion</h4>
                  <div className="demo-pattern-example">
                    <Accordion sections={this.state.sections} uniqueIdentifier="accordion-2" />
                  </div>
                </div>
                <Code>
                  <Code.JSX>
                    {this._buildDemoJSX()}
                  </Code.JSX>
                </Code>
                <h5>Props</h5>
                <div className="demo-props">
                  <pre>
                    <code>
                      {this._buildDemoProps()}
                    </code>
                  </pre>
                </div>
              </div>
              <AccordionControls
                onChange={this._handleChange}
                sections={this.state.sections} />
            </Pattern.Demo>

            <Code>
              <Code.JSX>
                &lt;Accordion sections="sections_array" uniqueIdentifier="unique-identfier-for-this-accordion" /&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Accordion" />
              <Code.Props patternProps={this._buildAccordionProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var Accordion = require("patternity/infl-components/accordion.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/accordion";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _buildDemoProps : function(){
    return (
      '{\n' +
        '\tsections: [\n' +
          '\t\t{\n' +
            '\t\t\theader:"' + this.state.sections[0].header + '",\n' +
            '\t\t\tbody:"' + this.state.sections[0].body + '",\n' +
            '\t\t\tkey:"' + this.state.sections[0].key + '",\n' +
            '\t\t\tisEnabled:' + this.state.sections[0].isEnabled + ',\n' +
          '\t\t}\n' +
          '\t\t{\n' +
            '\t\t\theader:"' + this.state.sections[1].header + '",\n' +
            '\t\t\tbody:"' + this.state.sections[1].body + '",\n' +
            '\t\t\tkey:"' + this.state.sections[1].key + '",\n' +
            '\t\t\tisEnabled:' + this.state.sections[1].isEnabled + ',\n' +
          '\t\t}\n' +
          '\t\t{\n' +
            '\t\t\theader:"' + this.state.sections[2].header + '",\n' +
            '\t\t\tbody:"' + this.state.sections[2].body + '",\n' +
            '\t\t\tkey:"' + this.state.sections[2].key + '",\n' +
            '\t\t\tisEnabled:' + this.state.sections[2].isEnabled + ',\n' +
          '\t\t}\n' +
        '\t],\n' +
        '\topenSectionIndex : -1,\n' +
        '\tuniqueIdentifier : "accordion-2"\n' +
      '}'
    );
  },
  _handleChange : function(name, value){
    var currentState = this.state;
    currentState[name] = value;
    this.setState(currentState);
  },
  _buildDemoJSX : function(){
    return (
      '<Accordion sections="sections_array" uniqueIdentifier="accordion-2" />'
    );
  },
  _accordionSections : function(){
    return [{
      "header" : "Section Header One",
      "body" : "Section Body One",
      "key" : "test-2",
      "isEnabled" : true
    },{
      "header" : "Section Header Two",
      "body" : "Section Body Two",
      "key" : "test-3",
      "isEnabled" : false
    },{
      "header" : "Section Header Three",
      "body" : "Section Body Three",
      "key" : "test-1",
      "isEnabled" : true
    }];
  },
  _buildAccordionProps : function(){
    return {
      openSectionIndex : {
        type : "integer",
        default : "-1",
        required : false,
        description : "Will open the section indicated if enabled starts at 0."
      },
      uniqueIdentifier : {
        type : "string",
        default : "",
        required : false,
        description : "Unique identfier for this accordion."
      },
      sections: {
        type : "array",
        default : "[...]",
        required : true,
        description : "Array of section objects."
      },
      'sections.header' : {
        type : "React Element, DOM Node, String",
        default : "",
        required : true,
        description : "Section header."
      },
      'sections.body' : {
        type : "React Element, DOM Node, String",
        default : "",
        required : true,
        description : "Section body."
      },
      'sections.key' : {
        type : "string",
        default : "",
        required : true,
        description : "Unique identifier for this accordion section."
      },
      'sections.isEnabled' : {
        type : "boolean",
        default : 'true',
        required : false,
        description : "Determines if this section is enabled or not."
      }
    };
  }
});

var AccordionControls = React.createClass({
  getDefaultProps : function(){
    return {
      sections : [],
    };
  },
  render : function(){
    return (
      <div className="pattern-controls">
        <h4>Accordion Controls</h4>
        <Form>
          {this._buildSectionControls()}
        </Form>
      </div>
    );
  },
  _buildSectionControls : function(){
    var that = this;
    return this.props.sections.map(function(section, index){
      return (
        <div>
          <h5>Section {index + 1}</h5>
          <Form.Row>
            <InputLabel label="Is Enabled">
              <RadioButton.Group>
                <RadioButton isChecked={section.isEnabled} onChange={that._handleBooleanChange} radioName={index} radioLabel="Yes" value="true"></RadioButton>
                <RadioButton isChecked={!section.isEnabled} onChange={that._handleBooleanChange} radioName={index} radioLabel="No" value="false"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
        </div>
      );
    });
  },
  _handleBooleanChange : function(event){
    var sections = this.props.sections;
    sections[event.target.name].isEnabled = (event.target.value === "true");
    this.props.onChange("sections", sections);
  }
});

module.exports = AccordionPattern;
