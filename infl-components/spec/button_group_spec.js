/* jshint expr:true */
var React  = require("react/addons");
var ReactTestUtils = React.addons.TestUtils;

var ButtonGroup = require("button_group");

var chai = require("chai");
var expect = chai.expect;


describe('Button Group Component', function() {
  var subject, buttonGroupElement;

  function renderButtonGroup(buttonGroupComponent){
    subject = ReactTestUtils.renderIntoDocument(buttonGroupComponent);
    buttonGroupElement = React.findDOMNode(subject.refs.buttonGroup);
  }

  it('will render the button group', function() {
    renderButtonGroup(<ButtonGroup />);
    expect(buttonGroupElement.className).to.contain('button-group');
  });

  describe('Layout', function () {
    it('will render inline by default', function() {
      renderButtonGroup(<ButtonGroup />);
      expect(buttonGroupElement.className).to.contain('inline');
    });

    it('will render inline', function() {
      renderButtonGroup(<ButtonGroup layout="inline" />);
      expect(buttonGroupElement.className).to.contain('inline');
    });

    it('will render stacked', function() {
      renderButtonGroup(<ButtonGroup layout="stacked" />);
      expect(buttonGroupElement.className).to.contain('stacked');
    });
  });

  describe('Grouped', function () {
    it('will not be grouped by default', function() {
      renderButtonGroup(<ButtonGroup />);
      expect(buttonGroupElement.className).to.not.contain('grouped');
    });

    it('will not be grouped if grouped is false', function() {
      renderButtonGroup(<ButtonGroup grouped={false} />);
      expect(buttonGroupElement.className).to.not.contain('grouped');
    });

    it('will not be grouped if grouped is true', function() {
      renderButtonGroup(<ButtonGroup grouped={true} />);
      expect(buttonGroupElement.className).to.contain('grouped');
    });
  });

  describe('Child buttons', function () {
    it('will render children passed to it', function() {
      renderButtonGroup(
        <ButtonGroup>
          <button></button>
          <button></button>
        </ButtonGroup>
      );

      expect(buttonGroupElement.childElementCount).to.equal(2);
    });
  });
});
