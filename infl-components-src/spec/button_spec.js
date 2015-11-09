/* jshint expr:true */
const React  = require('react/addons');
const ReactTestUtils = React.addons.TestUtils;

const Button = require('button');

const chai = require('chai');
const expect = chai.expect;

if (!React.findDOMNode) {
  React.findDOMNode = function(n) {
    return n.getDOMNode();
  }
}

describe('Button Component', function() {

  it('will render the button', function() {
    const subject = ReactTestUtils.renderIntoDocument(<Button>text</Button>);
    expect(subject).to.exist;
    expect(React.findDOMNode(subject).nodeName).to.eq('BUTTON');
    expect(React.findDOMNode(subject).textContent).to.eq('text');
  });

  it('will add the icon class', function() {
    const subject = ReactTestUtils.renderIntoDocument(<Button icon="test">text</Button>);
    const classes = React.findDOMNode(subject).className.split(' ');
    expect(classes).to.contain('ic');
    expect(classes).to.contain('ic-test');
  });
});
