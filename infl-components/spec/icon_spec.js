/* jshint expr:true */
var React  = require("react/addons");
var ReactTestUtils = React.addons.TestUtils;

var Icon = require("icon");

var chai = require("chai");
var expect = chai.expect;

describe('Icon Component', function() {
  var subject, iconElement;

  beforeEach(function() {
    subject = ReactTestUtils.renderIntoDocument(<Icon icon={'remove'} />);
    iconElement = subject.refs.icon.getDOMNode();
  });

  context('influitive icon', function() {
    it('renders a span tag', function() {
      expect(iconElement.tagName).to.eq('SPAN');
    });

    it('renders the remove icon', function() {
      expect(iconElement.className.split(' ')).to.have.members(['ic', 'ic-remove']);
    });
  });
});
