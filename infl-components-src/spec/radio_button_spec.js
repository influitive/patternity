/* jshint expr:true */
const React  = require('react/addons');
const ReactDOM = require('react-dom');
const ReactTestUtils = React.addons.TestUtils;
const simulate  = ReactTestUtils.Simulate;
const simulateNative = ReactTestUtils.SimulateNative;

const RadioButton = require('radio_button');

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const expect = chai.expect;


describe('Radio Button Component', function() {
  let subject, radioButtonElement, nativeRadioButtonElement, labelElement;

  function renderRadioButton(loadingComponent){
    subject = ReactTestUtils.renderIntoDocument(loadingComponent);
    populateTestRefs();
  }

  function populateTestRefs(){
    radioButtonElement = ReactDOM.findDOMNode(subject.refs.radioButton);
    nativeRadioButtonElement = ReactDOM.findDOMNode(subject.refs.nativeRadioButton);
    labelElement = ReactDOM.findDOMNode(subject.refs.label);
  }

  it('will render the radio button component', function() {
    renderRadioButton(<RadioButton></RadioButton>);
    expect(radioButtonElement.className).to.contain("pt-radio-button");
  });

  it('will render the radio button with the provided id', function() {
    const testId = "test-id";
    renderRadioButton(<RadioButton id={testId}></RadioButton>);
    expect(radioButtonElement.id).to.equal(testId);
  });

  describe("Enabled/Disabled", function(){
    it('will be enabled by default', function() {
      renderRadioButton(<RadioButton></RadioButton>);
      expect(radioButtonElement.className).not.to.contain("disabled");
      expect(nativeRadioButtonElement.hasAttribute("disabled")).not.to.be.ok();
    });

    it('will be enabled when enabled is true', function() {
      renderRadioButton(<RadioButton enabled={true}></RadioButton>);
      expect(radioButtonElement.className).not.to.contain("disabled");
      expect(nativeRadioButtonElement.hasAttribute("disabled")).not.to.be.ok();
    });

    it('will be disabled when enabled is false', function() {
      renderRadioButton(<RadioButton enabled={false}></RadioButton>);
      expect(radioButtonElement.className).to.contain("disabled");
      expect(nativeRadioButtonElement.hasAttribute("disabled")).to.be.ok();
    });
  });

  it('will set the input name to the provided name', function () {
    const testName = "this-is-a-test-name";
    renderRadioButton(<RadioButton radioName={testName}></RadioButton>);
    expect(nativeRadioButtonElement.getAttribute("name")).to.equal(testName);
  });

  it('will set the label to the provided label', function () {
    const testLabel = "this is a test label";
    renderRadioButton(<RadioButton radioLabel={testLabel}></RadioButton>);
    expect(labelElement.innerHTML).to.equal(testLabel);
  });

  it('will set the value to the provided value', function () {
    const testValue = "testValue";
    renderRadioButton(<RadioButton value={testValue}></RadioButton>);
    expect(nativeRadioButtonElement.getAttribute("value")).to.equal(testValue);
  });

  describe('Checked', function () {
    it('will render the native input before the stylized input for css rules', function () {
      renderRadioButton(<RadioButton></RadioButton>);
      expect(radioButtonElement.firstChild.tagName).to.equal("INPUT");
      expect(radioButtonElement.children[1].className).to.contain("stylized-radio-button");
    });

    it('will render unchecked by default', function () {
      renderRadioButton(<RadioButton></RadioButton>);
      expect(nativeRadioButtonElement.hasAttribute("checked")).to.not.be.ok();
    });

    it('will render unchecked when isChecked is false', function () {
      renderRadioButton(<RadioButton isChecked={false}></RadioButton>);
      expect(nativeRadioButtonElement.hasAttribute("checked")).to.not.be.ok();
    });

    it('will render checked when isChecked is true', function () {
      renderRadioButton(<RadioButton isChecked={true}></RadioButton>);
      expect(nativeRadioButtonElement.hasAttribute("checked")).to.be.ok();
    });

    it('will updated checked when new prop value for isChecked is passed', function () {
      renderRadioButton(<RadioButton isChecked={true}></RadioButton>);
      subject.componentWillReceiveProps({
        isChecked : false
      });
      expect(nativeRadioButtonElement.getAttribute("checked")).to.not.be.a('null');
    });
  });

  describe('Click/Change', function () {
    xit('will call the onChange callback if enabled', function () {
      const mockOnChange = sinon.spy();
      renderRadioButton(<RadioButton onChange={mockOnChange}></RadioButton>);
      simulate.change(nativeRadioButtonElement, {target: {checked: true}});
      expect(mockOnChange).to.have.been.called();
    });

    xit('will NOT call the onChange callback if disabled', function () {
      const mockOnChange = sinon.spy();
      renderRadioButton(<RadioButton onChange={mockOnChange}></RadioButton>);
      simulate.click(nativeRadioButtonElement);
      expect(mockOnChange).to.not.have.been.called();
    });

    xit('will updated checked when clicked', function () {
      renderRadioButton(<RadioButton isChecked={true}></RadioButton>);
      simulate.click(radioButtonElement);
      expect(nativeRadioButtonElement.getAttribute("checked")).to.be.a('null');
    });
  });
});
