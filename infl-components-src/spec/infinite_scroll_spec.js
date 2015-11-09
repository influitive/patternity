/* jshint expr:true */
const React  = require('react/addons');
const ReactTestUtils = React.addons.TestUtils;

const InfiniteScroll = require('components/infinite_scroll');

const chai = require('chai');
const expect = chai.expect;

describe('Infinite Scroll Component', function() {
  let subject, infiniteScrollElement;

  beforeEach(function() {
    subject = ReactTestUtils.renderIntoDocument(<InfiniteScroll loadMore={function(){}} hasMore={false} />);
    infiniteScrollElement = React.findDOMNode(subject.refs.infiniteScroll);
  });

  it('renders infinite scroll component', function() {
    expect(infiniteScrollElement.tagName).to.equal('DIV');
    expect(infiniteScrollElement.className).to.contain('pt-infinite-scroll');
  });
});
