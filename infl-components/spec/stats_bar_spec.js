/* jshint expr:true */
var React  = require("react/addons");
var ReactTestUtils = React.addons.TestUtils;

var StatsBar = require("stats_bar");

var chai = require("chai");
var expect = chai.expect;

describe('Stats Bar Component', function() {
  var subject, statsBarElement;

  beforeEach(function() {
    subject = ReactTestUtils.renderIntoDocument(<StatsBar />);
    statsBarElement = subject.refs.statsBar.getDOMNode();
  });

  it('renders a span tag', function() {
    expect(statsBarElement.tagName).to.eq('DIV');
  });
});
