/* jshint expr:true */
var React  = require("react/addons");
var ReactTestUtils = React.addons.TestUtils;

var Button = require("button");

var chai = require("chai");
var expect = chai.expect;

if (!React.findDOMNode) {
  React.findDOMNode = function(n) {
    return n.getDOMNode();
  }
}

describe('Button Component', function() {

  it('will render the button', function() {
    var subject = ReactTestUtils.renderIntoDocument(<Button>text</Button>);
    expect(subject).to.exist;
    expect(React.findDOMNode(subject).nodeName).to.eq('BUTTON');
    expect(React.findDOMNode(subject).textContent).to.eq('text');
  });

  it('will add the icon class', function() {
    var subject = ReactTestUtils.renderIntoDocument(<Button icon="test">text</Button>);
    var classes = React.findDOMNode(subject).className.split(' ');
    expect(classes).to.contain('ic');
    expect(classes).to.contain('ic-test');
  });
});
