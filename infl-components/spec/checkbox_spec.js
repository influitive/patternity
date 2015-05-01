/* jshint expr:true */
var React  = require("react/addons");
var ReactTestUtils = React.addons.TestUtils;
var simulate  = ReactTestUtils.Simulate;

var Checkbox = require("checkbox");

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.use(sinonChai);
var expect = chai.expect;


describe('Checkbox Component', function() {
  var subject,
      checkboxElement,
      checkboxLabel,
      checkboxNative;

  function renderCheckbox(checkboxComponent){
    subject = ReactTestUtils.renderIntoDocument(checkboxComponent);
    populateTestRefs();
  }

  function populateTestRefs(){
    checkboxElement = subject.refs.checkbox.getDOMNode();
    checkboxNative  = subject.refs.nativeCheckbox.getDOMNode();
    checkboxLabel   = subject.refs.label.getDOMNode();
  }

  it('will render the button dropdown', function() {
    renderCheckbox(<Checkbox />);
    expect(checkboxElement.className).to.contain("pt-checkbox");
  });

  it('will render with the passed id', function() {
    var id = "test-id";
    renderCheckbox(<Checkbox id={id}/>);
    expect(checkboxElement.id).to.equal(id);
  });

  it('will render with the passed checkbox label', function() {
    var label = "My Checkbox";
    renderCheckbox(<Checkbox checkboxLabel={label} />);
    expect(checkboxLabel.innerHTML).to.equal(label);
  });

  describe('Enabled', function () {
    it('will be enabled by default', function() {
      renderCheckbox(<Checkbox />);
      expect(checkboxNative.getAttribute("disabled")).to.be.null;
    });

    it('will be enabled when enabled is true', function() {
      renderCheckbox(<Checkbox enabled={true}/>);
      expect(checkboxNative.getAttribute("disabled")).to.be.null;
    });

    it('will be disabled when enabled is false', function() {
      renderCheckbox(<Checkbox enabled={false}/>);
      expect(checkboxNative.getAttribute("disabled")).not.to.be.null;
    });
  });

  describe('Checked', function () {
    it('will be unchecked by default', function() {
      renderCheckbox(<Checkbox />);
      expect(checkboxNative.getAttribute("checked")).to.be.null;
    });

    it('will be unchecked if isChecked is false', function() {
      renderCheckbox(<Checkbox isChecked={false} />);
      expect(checkboxNative.getAttribute("checked")).to.be.null;
    });

    it('will be unchecked if isChecked is true', function() {
      renderCheckbox(<Checkbox isChecked={true} />);
      expect(checkboxNative.getAttribute("checked")).not.to.be.null;
    });
  });

  describe('On Change', function () {
    // it('will call on change when clicked', function() {
    //   var mockOnChange = sinon.spy();
    //   renderCheckbox(<Checkbox onChange={mockOnChange} enabled={true}/>);
    //   simulate.click(checkboxElement);
    //   expect(mockOnChange).to.have.been.called();
    // });

    it('will become checked when clicked if not checked', function() {
      renderCheckbox(<Checkbox isChecked={false} />);
      simulate.click(checkboxElement);
      expect(checkboxNative).to.have.property("checked", true);
    });

    it('will become unchecked when clicked if checked', function() {
      renderCheckbox(<Checkbox isChecked={true} />);
      simulate.click(checkboxElement);
      expect(checkboxNative).to.have.property("checked", false);
    });
  });

  describe('Group', function () {
    var checkboxGroupElement;

    function renderCheckboxGroup(checkboxGroupComponent){
      subject = ReactTestUtils.renderIntoDocument(checkboxGroupComponent);
      checkboxGroupElement = subject.refs.group.getDOMNode();
    }

    it('will render the button dropdown', function() {
      renderCheckboxGroup(
        <Checkbox.Group>
        </Checkbox.Group>
      );
      expect(checkboxGroupElement.className).to.contain("pt-checkbox-group");
    });

    it('will render the button dropdown with an id', function() {
      var id = "test-id";
      renderCheckboxGroup(
        <Checkbox.Group id={id}>
        </Checkbox.Group>
      );
      expect(checkboxGroupElement.id).to.equal(id);
    });

    describe('Layout', function () {
      it('will render inline by default', function() {
        renderCheckboxGroup(
          <Checkbox.Group>
          </Checkbox.Group>
        );
        expect(checkboxGroupElement.className).to.contain("inline");
      });

      it('will render inline when layout is inline', function() {
        renderCheckboxGroup(
          <Checkbox.Group layout="inline">
          </Checkbox.Group>
        );
        expect(checkboxGroupElement.className).to.contain("inline");
      });

      it('will render stacked when layout is stacked', function() {
        renderCheckboxGroup(
          <Checkbox.Group layout="stacked">
          </Checkbox.Group>
        );
        expect(checkboxGroupElement.className).to.contain("stacked");
      });
    });
  });
});
