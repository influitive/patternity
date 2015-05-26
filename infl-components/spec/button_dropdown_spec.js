/* jshint expr:true */
var React  = require("react/addons");
var ReactTestUtils = React.addons.TestUtils;
var simulate  = ReactTestUtils.Simulate;

var ButtonDropdown = require("button_dropdown");

var chai = require("chai");
var expect = chai.expect;


describe('Button Dropdown Component', function() {
  var subject,
      buttonDropdownElement,
      buttonDropdownTitle,
      buttonDropdownIcon,
      buttonDropdownButton,
      buttonDropdownOptions;

  function renderButtonGroup(buttonGroupComponent){
    subject = ReactTestUtils.renderIntoDocument(buttonGroupComponent);
    populateTestRefs();
  }

  function populateTestRefs(){
    buttonDropdownElement = React.findDOMNode(subject.refs.buttonDropdown);
    buttonDropdownTitle   = React.findDOMNode(subject.refs.title);
    buttonDropdownIcon    = React.findDOMNode(subject.refs.icon);
    buttonDropdownButton  = React.findDOMNode(subject.refs.button);
    buttonDropdownOptions = React.findDOMNode(subject.refs.options);
  }

  it('will render the button dropdown', function() {
    renderButtonGroup(<ButtonDropdown  />);
    expect(buttonDropdownElement.className).to.contain('button-dropdown');
  });

  it('will render the button dropdown icon', function() {
    renderButtonGroup(<ButtonDropdown />);
    expect(buttonDropdownIcon.className.split(' ')).to.have.members(['arrow', 'ic', 'ic-chevron-down']);
  });

  it('will render the button dropdown with a title', function() {
    var title = "Test Title";
    renderButtonGroup(<ButtonDropdown title={title} />);
    expect(buttonDropdownTitle.innerHTML).to.contain(title);
  });

  describe('Button Type', function () {
    it('will render the button as default', function() {
      renderButtonGroup(<ButtonDropdown />);
      expect(buttonDropdownButton.className).to.equal("");
    });

    it('will render the button as primary', function() {
      var type = "primary";
      renderButtonGroup(<ButtonDropdown type={type} />);
      expect(buttonDropdownButton.className).to.contain(type);
    });
  });

  describe('Dropdown Options/ Children', function () {
    it('will render the children passed to it', function() {
      renderButtonGroup(
        <ButtonDropdown>
          <a href="#">test</a>
          <a href="#">test</a>
        </ButtonDropdown>
      );
      expect(buttonDropdownOptions.childElementCount).to.equal(2);
    });

    it('will render the options passed to it', function() {
      var options = [
        <a href="#">test</a>,
        <a href="#">test</a>
      ];
      renderButtonGroup(<ButtonDropdown options={options} />);
      expect(buttonDropdownOptions.childElementCount).to.equal(2);
    });

    it('will render the the option correctly', function() {
      renderButtonGroup(
        <ButtonDropdown>
          <a href="#">test</a>
          <a href="#">test</a>
        </ButtonDropdown>
      );
      expect(buttonDropdownOptions.firstChild.className).to.contain("option");
    });
  });

  describe('Toggle Dropdown', function () {
    it('will be closed by default', function() {
      renderButtonGroup(
        <ButtonDropdown>
          <a href="#">test</a>
          <a href="#">test</a>
        </ButtonDropdown>
      );
      expect(buttonDropdownElement.className).to.not.contain("show");
    });

    it('will open when the button is clicked', function() {
      renderButtonGroup(
        <ButtonDropdown>
          <a href="#">test</a>
          <a href="#">test</a>
        </ButtonDropdown>
      );
      simulate.click(buttonDropdownButton);
      expect(buttonDropdownElement.className).to.contain("show");
    });

    it('will close if open when the button is clicked', function() {
      renderButtonGroup(
        <ButtonDropdown>
          <a href="#">test</a>
          <a href="#">test</a>
        </ButtonDropdown>
      );
      simulate.click(buttonDropdownButton);
      simulate.click(buttonDropdownButton);
      expect(buttonDropdownElement.className).to.not.contain("show");
    });
  });
});
