/* jshint expr:true */
const React  = require('react/addons');
const ReactDOM = require('react-dom');
const ReactTestUtils = React.addons.TestUtils;
const simulate  = ReactTestUtils.Simulate;
const simulateNative = ReactTestUtils.SimulateNative;

const InputLabel = require('input_label');
const TextInput = require('text_input');

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const expect = chai.expect;


describe('Input Label Component', function() {
  let subject, inputLabelElement, labelElement;

  function renderInputLabel(inputLabelComponent){
    subject = ReactTestUtils.renderIntoDocument(inputLabelComponent);
    populateTestRefs();
  }

  function populateTestRefs(){
    inputLabelElement = ReactDOM.findDOMNode(subject.refs.inputLabel);
    labelElement = ReactDOM.findDOMNode(subject.refs.label);
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
    const testLabel = "test label";
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
    const testName = "testName";
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
