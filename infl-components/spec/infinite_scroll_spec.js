/* jshint expr:true */
var React  = require("react/addons");
var ReactTestUtils = React.addons.TestUtils;

var InfiniteScroll = require("components/infinite_scroll");

var chai = require("chai");
var expect = chai.expect;

describe('Infinite Scroll Component', function() {
  var subject, infiniteScrollElement;

  beforeEach(function() {
    subject = ReactTestUtils.renderIntoDocument(<InfiniteScroll loadMore={function(){}} hasMore={false} />);
    infiniteScrollElement = React.findDOMNode(subject.refs.infiniteScroll);
  });

  it('renders infinite scroll component', function() {
    expect(infiniteScrollElement.tagName).to.equal('DIV');
    expect(infiniteScrollElement.className).to.contain('pt-infinite-scroll');
  });
});
