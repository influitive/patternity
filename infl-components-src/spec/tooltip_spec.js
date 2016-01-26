/* jshint expr:true */
const React  = require('react/addons');
const ReactDOM = require('react-dom');
const ReactTestUtils = React.addons.TestUtils;
const simulate  = ReactTestUtils.Simulate;
const simulateNative = ReactTestUtils.SimulateNative;

const Tooltip = require('tooltip');

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const expect = chai.expect;


xdescribe('Tooltip Component', function() {
  let subject, tooltipElement, tipElement, closeElement, titleElement, elementElement, detailsElement;

  function renderHelpTooltip(tooltipComponent){
    subject = ReactTestUtils.renderIntoDocument(tooltipComponent);
    populateTestRefs();
  }

  function populateTestRefs(){
    tooltipElement = ReactDOM.findDOMNode(subject.refs.tooltip);
    tipElement = ReactDOM.findDOMNode(subject.refs.tip);
    closeElement = ReactDOM.findDOMNode(subject.refs.close);
    titleElement = ReactDOM.findDOMNode(subject.refs.title);
    elementElement = ReactDOM.findDOMNode(subject.refs.element);
    detailsElement = ReactDOM.findDOMNode(subject.refs.tip);
  }

  function simulateMouseOver(from, to) {
    simulateNative.mouseOut(from, { relatedTarget: to });
    simulateNative.mouseOver(to, { relatedTarget: from });
  }

  beforeEach(function(){
      renderHelpTooltip(
        <Tooltip title="Tooltip Title" element={<span>test</span>}>
            <p>My tooltip Body</p>
        </Tooltip>
      );
    });

  it('will render the tooltip component', function() {
    expect(tooltipElement.className).to.contain("pt-tooltip");
    // expect(tipElement.className).to.contain("pt-tooltip-content");
  });

  xit('will render any children passed to the tip', function() {
    expect(detailsElement.childElementCount).to.equal(1);
  });

  describe('Show/Hide', function () {
    it('will show the tooltip when the tooltip is hovered over', function () {
      simulateNative.mouseOver(elementElement);
      expect(tipElement.className).not.to.contain("hide");
    });

    it('will hide the tooltip when the tooltip is left', function () {
      const tempMouseFocusElement = ReactTestUtils.renderIntoDocument(<div></div>);
      simulateNative.mouseOver(tempMouseFocusElement);
      simulateNative.mouseOver(elementElement);
      simulateNative.mouseOut(elementElement);
      expect(tipElement.className).to.contain("hide");
    });

    it('will show the tooltip when the tooltip is clicked', function () {
      simulate.click(elementElement);
      expect(tipElement.className).not.to.contain("hide");
    });

    it('will hide when the close button is clicked', function () {
      simulate.click(elementElement);
      simulate.click(closeElement);
      expect(tipElement.className).to.contain("hide");
    });
  });
});
