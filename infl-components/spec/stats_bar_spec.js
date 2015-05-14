/* jshint expr:true */
var React  = require("react/addons");
var ReactTestUtils = React.addons.TestUtils;

var StatsBar = require("stats_bar");

var chai = require("chai");
var expect = chai.expect;

describe('Stats Bar Component', function() {
  var subject, statsBarElement;

  describe("Stats Bar", function(){
    function renderStatsBar(statsBarComponent){
      subject = ReactTestUtils.renderIntoDocument(statsBarComponent);
      populateTestRefs();
    }

    function populateTestRefs(){
      statsBarElement = subject.refs.statsBar.getDOMNode();
    }

    it('will render the stats bar', function() {
      renderStatsBar(<StatsBar />);
      expect(statsBarElement.tagName).to.equal('DIV');
      expect(statsBarElement.className).to.contain('pt-stats-bar');
    });

    it('will render the stats bar as points style by default', function() {
      renderStatsBar(<StatsBar />);
      expect(statsBarElement.className).to.contain('points');
    });

    it('will render the stats bar as points when statType is points', function() {
      renderStatsBar(<StatsBar statType="points" />);
      expect(statsBarElement.className).to.contain('points');
    });

    it('will render the stats bar as activity when statType is activity', function() {
      renderStatsBar(<StatsBar statType="activity" />);
      expect(statsBarElement.className).to.contain('activity');
    });

    it('will render children passed to it', function() {
      renderStatsBar(
        <StatsBar>
          <StatsBar.Stat title="test" value="test" />
          <StatsBar.Stat title="test" value="test" />
        </StatsBar>
      );
      expect(statsBarElement.childElementCount).to.equal(2);
    });
  });


  describe("Stat", function(){
    var statElement, statTitleElement, statValueElement;

    function renderStat(statComponent){
      subject = ReactTestUtils.renderIntoDocument(statComponent);
      populateTestRefs();
    }

    function populateTestRefs(){
      statElement = subject.refs.stat.getDOMNode();
      statTitleElement = subject.refs.title.getDOMNode();
      statValueElement = subject.refs.value.getDOMNode();
    }

    it('will render the stats bar stat', function() {
      renderStat(<StatsBar.Stat title="test" value="test" />);
      expect(statElement.tagName).to.equal('SPAN');
      expect(statElement.className).to.contain('pt-stat');
    });

    it('will render passed title', function() {
      var testTitle = "test title";
      renderStat(<StatsBar.Stat title={testTitle} value="test" />);
      expect(statTitleElement.firstChild.innerHTML).to.equal(testTitle);
    });

    it('will render passed value', function() {
      var testValue = 123433;
      renderStat(<StatsBar.Stat title="test" value={testValue} />);
      expect(statValueElement.innerHTML).to.equal(testValue.toString());
    });

    it('will render a negative value with special styling', function() {
      var testValue = -123433;
      renderStat(<StatsBar.Stat title="test" value={testValue} />);
      expect(statElement.className).to.contain('negative');
    });
  });
});
