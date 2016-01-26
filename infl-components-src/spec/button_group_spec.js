/* jshint expr:true */
const React  = require('react/addons');
const ReactDOM  = require('react-dom');
const ReactTestUtils = React.addons.TestUtils;

const ButtonGroup = require('../../lib/button-group');

const chai = require('chai');
const expect = chai.expect;


describe('Button Group Component', function() {
  let subject, buttonGroupElement;

  function renderButtonGroup(buttonGroupComponent){
    subject = ReactTestUtils.renderIntoDocument(buttonGroupComponent);
    buttonGroupElement = ReactDOM.findDOMNode(subject.refs.buttonGroup);
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
