/* jshint expr:true */
const React  = require('react/addons');
const ReactDOM = require('react-dom');
const ReactTestUtils = React.addons.TestUtils;

const Popover = require('../../lib/popover');

const chai = require('chai');
const expect = chai.expect;

const $ = window.jQuery || require('jquery');

xdescribe('Popover Component', function() {

  let subject;

  function render() {
    const jsx = (
      <Popover element={<a className="popoverlink" href="javascript://">x</a>}>
        <div/>
        <div/>
        <div/>
      </Popover>
    );
    subject = ReactTestUtils.renderIntoDocument(jsx);
  }

  it('will render the popover', function() {
    render();
    expect(subject).to.exist;
  });

  xit('the contents of the popover are only rendered when needed', function() {
    render();

    const node = ReactDOM.findDOMNode(subject);

    const link = $(node).find('.popoverlink').get(0);
    expect(link).to.exist;

    // not done yet, will simulate click and compare number of children

//    var menu = $(node).find('.pt-popovermenu').get(0);
//    expect(menu).to.exist;
//    expect(ReactDOM.findDOMNode(menu).childNodes.length).to.eq(1);
//    ReactTestUtils.Simulate.click(link);

  });

});
