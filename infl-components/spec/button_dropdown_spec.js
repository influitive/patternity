/* jshint expr:true */
var React  = require("react/addons");
var ReactTestUtils = React.addons.TestUtils;

var ButtonDropdown = require("button_dropdown");

var chai = require("chai");
var expect = chai.expect;


describe('Button Dropdown Component', function() {
  var subject,
      buttonDropdownElement,
      buttonDropdownTitle,
      buttonDropdownIcon,
      buttonDropdownButton;

  function renderButtonGroup(buttonGroupComponent){
    subject = ReactTestUtils.renderIntoDocument(buttonGroupComponent);
    buttonDropdownElement = subject.refs.buttonDropdown.getDOMNode();
    buttonDropdownTitle = subject.refs.title.getDOMNode();
    buttonDropdownIcon = subject.refs.icon.getDOMNode();
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

  // describe('Button Type', function () {
  //   it('will render the button as default', function() {
  //     var type = "";
  //     renderButtonGroup(<ButtonDropdown title={title} />);
  //     expect(buttonDropdownTitle.innerHTML).to.contain(title);
  //   });
  // });
});
