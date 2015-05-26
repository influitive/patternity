/* jshint expr:true */
var React  = require("react/addons");
var ReactTestUtils = React.addons.TestUtils;
var simulate  = ReactTestUtils.Simulate;
var simulateNative = ReactTestUtils.SimulateNative;

var InputLabel = require("input_label");
var TextInput = require("text_input");

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.use(sinonChai);
var expect = chai.expect;


describe('Input Label Component', function() {
  var subject,
      inputLabelElement,
      labelElement;

  function renderInputLabel(inputLabelComponent){
    subject = ReactTestUtils.renderIntoDocument(inputLabelComponent);
    populateTestRefs();
  }

  function populateTestRefs(){
    inputLabelElement = React.findDOMNode(subject.refs.inputLabel);
    labelElement = React.findDOMNode(subject.refs.label);
  }

  it('will render the input label component', function() {
    renderInputLabel(
      <InputLabel layout="inline" label="Field Label">
        <TextInput type="text" placeholder="Text Input" message="Hint: Fill in this field."></TextInput>
      </InputLabel>
    );
    expect(inputLabelElement.className).to.contain("pt-label");
  });

  it('will show the passed label', function() {
    var testLabel = "test label";
    renderInputLabel(
      <InputLabel layout="inline" label={testLabel}>
        <TextInput type="text" placeholder="Text Input" message="Hint: Fill in this field."></TextInput>
      </InputLabel>
    );
    expect(labelElement.firstChild.innerHTML).to.equal(testLabel + ":");
  });

  it('will show required if input is of type required', function() {
    renderInputLabel(
      <InputLabel layout="inline" label="Field Label">
        <TextInput type="text" required={true} placeholder="Text Input" message="Hint: Fill in this field."></TextInput>
      </InputLabel>
    );
    expect(labelElement.lastChild.className).to.contain("required-icon");
  });

  it('will set the for of the label to the name of the input', function() {
    var testName = "testName";
    renderInputLabel(
      <InputLabel layout="inline" label="Field Label">
        <TextInput type="text" required={true} name={testName} placeholder="Text Input" message="Hint: Fill in this field."></TextInput>
      </InputLabel>
    );
    expect(labelElement.getAttribute("for")).to.equal(testName);
  });

  it('will display the input that is passed to it', function() {
    renderInputLabel(
      <InputLabel layout="inline" label="Field Label">
        <TextInput type="text" required={true} placeholder="Text Input" message="Hint: Fill in this field."></TextInput>
      </InputLabel>
    );
    expect(inputLabelElement.lastChild.className).to.contain("pt-input");
  });
});
