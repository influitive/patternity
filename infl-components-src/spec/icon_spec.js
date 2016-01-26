/* jshint expr:true */
const React  = require('react/addons');
const ReactDOM = require('react-dom');
const ReactTestUtils = React.addons.TestUtils;

const Icon = require('icon');

const chai = require('chai');
const expect = chai.expect;

describe('Icon Component', function() {
  let subject, iconElement;

  beforeEach(function() {
    subject = ReactTestUtils.renderIntoDocument(<Icon icon={'remove'} />);
    iconElement = ReactDOM.findDOMNode(subject.refs.icon);
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
