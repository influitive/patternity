/* jshint expr:true */
var React  = require("react/addons");
var ReactTestUtils = React.addons.TestUtils;
var simulate  = ReactTestUtils.Simulate;
var simulateNative = ReactTestUtils.SimulateNative;

var Tooltip = require("tooltip");

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.use(sinonChai);
var expect = chai.expect;


xdescribe('Tooltip Component', function() {
  var subject,
      tooltipElement,
      tipElement,
      closeElement,
      titleElement,
      elementElement,
      detailsElement;

  function renderHelpTooltip(tooltipComponent){
    subject = ReactTestUtils.renderIntoDocument(tooltipComponent);
    populateTestRefs();
  }

  function populateTestRefs(){
    tooltipElement = React.findDOMNode(subject.refs.tooltip);
    tipElement = React.findDOMNode(subject.refs.tip);
    closeElement = React.findDOMNode(subject.refs.close);
    titleElement = React.findDOMNode(subject.refs.title);
    elementElement = React.findDOMNode(subject.refs.element);
    detailsElement = React.findDOMNode(subject.refs.tip);
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
      var tempMouseFocusElement = ReactTestUtils.renderIntoDocument(<div></div>);
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
