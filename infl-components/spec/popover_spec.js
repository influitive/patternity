/* jshint expr:true */
var React  = require("react/addons");
var ReactTestUtils = React.addons.TestUtils;

var Popover = require("popover");

var chai = require("chai");
var expect = chai.expect;

var $ = window.jQuery || require('jquery');

if (!React.findDOMNode) {
  React.findDOMNode = function(n) {
    return n.getDOMNode();
  }
}

describe('Popover Component', function() {

  var subject;

  function render() {
    var jsx = (<Popover>
      <Popover element={<a className="popoverlink" href="javascript://">x</a>}>
        <div/>
        <div/>
        <div/>
      </Popover>
    </Popover>);
    subject = ReactTestUtils.renderIntoDocument(jsx);
  }

  it('will render the popover', function() {
    render();
    expect(subject).to.exist;
    expect(React.findDOMNode(subject).nodeName).to.eq('SPAN');
    expect(React.findDOMNode(subject.refs.wrapper).nodeName).to.eq('SPAN');
  });

  it('the contents of the popover are only rendered when needed', function() {
    render();

    var node = React.findDOMNode(subject);

    var link = $(node).find('.popoverlink').get(0);
    expect(link).to.exist;

    // not done yet, will simulate click and compare number of children

//    var menu = $(node).find('.pt-popovermenu').get(0);
//    expect(menu).to.exist;
//    expect(React.findDOMNode(menu).childNodes.length).to.eq(1);
//    ReactTestUtils.Simulate.click(link);

  });

});
