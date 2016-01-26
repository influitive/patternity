/* jshint expr:true */
const React  = require('react/addons');
const ReactDOM = require('react-dom');
const ReactTestUtils = React.addons.TestUtils;

const StatsBar = require('stats_bar');

const chai = require('chai');
const expect = chai.expect;

describe('Stats Bar Component', function() {
  let subject, statsBarElement;

  describe("Stats Bar", function(){
    function renderStatsBar(statsBarComponent){
      subject = ReactTestUtils.renderIntoDocument(statsBarComponent);
      populateTestRefs();
    }

    function populateTestRefs(){
      statsBarElement = ReactDOM.findDOMNode(subject.refs.statsBar);
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
    let statElement, statTitleElement, statValueElement;

    function renderStat(statComponent){
      subject = ReactTestUtils.renderIntoDocument(statComponent);
      populateTestRefs();
    }

    function populateTestRefs(){
      statElement = ReactDOM.findDOMNode(subject.refs.stat);
      statTitleElement = ReactDOM.findDOMNode(subject.refs.title);
      statValueElement = ReactDOM.findDOMNode(subject.refs.value);
    }

    it('will render the stats bar stat', function() {
      renderStat(<StatsBar.Stat title="test" value="test" />);
      expect(statElement.tagName).to.equal('SPAN');
      expect(statElement.className).to.contain('pt-stat');
    });

    it('will render passed title', function() {
      const testTitle = "test title";
      renderStat(<StatsBar.Stat title={testTitle} value="test" />);
      expect(statTitleElement.firstChild.innerHTML).to.equal(testTitle);
    });

    it('will render passed value', function() {
      const testValue = 123433;
      renderStat(<StatsBar.Stat title="test" value={testValue} />);
      expect(statValueElement.innerHTML).to.equal(testValue.toString());
    });

    it('will render a negative value with special styling', function() {
      const testValue = -123433;
      renderStat(<StatsBar.Stat title="test" value={testValue} />);
      expect(statElement.className).to.contain('negative');
    });
  });
});
