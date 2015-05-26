/* jshint expr:true */
var React  = require("react/addons");
var ReactTestUtils = React.addons.TestUtils;
var simulate  = ReactTestUtils.Simulate;
var simulateNative = ReactTestUtils.SimulateNative;

var HelpTooltip = require("help_tooltip");

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.use(sinonChai);
var expect = chai.expect;


describe('Help Tooltip Component', function() {
  var subject,
      helpTooltipElement,
      tipElement,
      closeElement,
      titleElement,
      helpElement,
      detailsElement;

  function renderHelpTooltip(helpTooltipComponent){
    subject = ReactTestUtils.renderIntoDocument(helpTooltipComponent);
    populateTestRefs();
  }

  function populateTestRefs(){
    helpTooltipElement = React.findDOMNode(subject.refs.helpTooltip);
    tipElement = React.findDOMNode(subject.refs.tip);
    closeElement = React.findDOMNode(subject.refs.close);
    titleElement = React.findDOMNode(subject.refs.title);
    helpElement = React.findDOMNode(subject.refs.help);
    detailsElement = React.findDOMNode(subject.refs.details);
  }

  function simulateMouseOver(from, to) {
    simulateNative.mouseOut(from, { relatedTarget: to });
    simulateNative.mouseOver(to, { relatedTarget: from });
  }

  beforeEach(function(){
      renderHelpTooltip(
        <HelpTooltip title="Tooltip Title">
            <p>My tooltip Body</p>
        </HelpTooltip>
      );
    });

  it('will render the help tooltip component', function() {
    expect(helpTooltipElement.className).to.contain("help-tooltip");
    expect(helpElement.className.split(' ')).to.have.members(['help', 'ic', 'ic-question-circle-o']);
  });

  it('will render any children passed to the tip', function() {
    expect(detailsElement.childElementCount).to.equal(1);
  });

  describe('Show/Hide', function () {
    it('will show the tooltip when the help tooltip is hovered over', function () {
      simulateNative.mouseOver(helpElement);
      expect(tipElement.className).not.to.contain("hide");
    });

    it('will hide the tooltip when the help tooltip is left', function () {
      var tempMouseFocusElement = ReactTestUtils.renderIntoDocument(<div></div>);
      simulateNative.mouseOver(tempMouseFocusElement);
      simulateNative.mouseOver(helpElement);
      simulateNative.mouseOut(helpElement);
      expect(tipElement.className).to.contain("hide");
    });

    it('will show the tooltip when the help tooltip is clicked', function () {
      simulate.click(helpElement);
      expect(tipElement.className).not.to.contain("hide");
    });

    it('will hide when the close button is clicked', function () {
      simulate.click(helpElement);
      simulate.click(closeElement);
      expect(tipElement.className).to.contain("hide");
    });
  });
});
