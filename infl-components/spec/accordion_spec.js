var es5Shim   = require('es5-shim');
var React     = require('react');
var expect    = require('chai').expect;
var TestUtils = require('react/addons').addons.TestUtils;
var _         = require('lodash');
var simulate  = TestUtils.Simulate;

var Accordion = require('accordion');

describe('Accordion', function() {
  function buildSectionData(index) {
    return {
      'header':    'test header',
      'body':      'test body',
      'type':      'uniqueId' + index,
      'isEnabled': true
    };
  }

  function buildSections(numberOfSections) {
    return _.range(numberOfSections).map(buildSectionData);
  }


  describe('Building', function() {
    it('will render an accordion with no sections as the default', function() {
      var subject = TestUtils.renderIntoDocument(<Accordion />);

      expect(React.findDOMNode(subject).childNodes.length).to.equal(0);
    });

    it('will render an accordion with no sections if an empty array is passed', function() {
      var subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(0)} />);

      expect(React.findDOMNode(subject).childNodes.length).to.equal(0);
    });

    it('will render an accordion with 1 sections if an array with 1 is passed', function() {
      var subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(1)} />);

      expect(React.findDOMNode(subject).childNodes.length).to.equal(1);
    });

    it('will render an accordion with many sections if an array with many is passed', function() {
      var subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(3)} />);

      expect(React.findDOMNode(subject).childNodes.length).to.equal(3);
    });
  });

  describe('Opening/Closing', function() {
    it('will open the body of a section when the header is clicked', function() {
      var subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(1)} />);
      var header = React.findDOMNode(subject).firstChild.firstChild;
      simulate.click(header);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(1);
    });

    it('will close a section when the header is clicked and the section is already open', function() {
      var subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(1)} />);
      var header = React.findDOMNode(subject).firstChild.firstChild;
      simulate.click(header);
      simulate.click(header);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(0);
    });

    it('will close an open section when a different section is opened', function() {
      var subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(2)} />);
      var firstHeader = React.findDOMNode(subject).firstChild.firstChild;
      simulate.click(firstHeader);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(1);

      var secondHeader = React.findDOMNode(subject).firstChild.lastChild;
      simulate.click(secondHeader);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(1);
    });
  });

  describe('Enable/Disable', function() {
    function disableSection(sections) {
      sections[0].isEnabled = false;
      return sections;
    }

    it('will open a section details if the header is clicked and the section is enabled', function() {
      var subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(1)} />);
      var header = React.findDOMNode(subject).firstChild.firstChild;
      simulate.click(header);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(1);
    });

    it('will NOT open a section details if the header is clicked and the section is disabled', function() {
      var sections = buildSections(1);
      var subject = TestUtils.renderIntoDocument(<Accordion sections={disableSection(sections)} />);
      var header = React.findDOMNode(subject).firstChild.firstChild;
      simulate.click(header);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(0);
    });
  });

  describe('OpenSectionIndex', function() {
    it('it will render with the OpenSectionIndex open', function() {
      var subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(2)} openSectionIndex={0} />);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(1);
    });

    it('it will render with the no open sections if openSectionIndex is invalid', function() {
      var subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(2)} openSectionIndex={-12} />);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(0);

      var subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(2)} openSectionIndex={'h'} />);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(0);
    });

    it('should change open section after receiving new props', function() {
      var subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(2)} openSectionIndex={0} />);

      subject.componentWillReceiveProps({ openSectionIndex: 0 });
      expect(TestUtils.findRenderedDOMComponentWithClass(subject, 'open').getDOMNode())
        .to.equal(React.findDOMNode(subject).firstChild.firstChild);

      subject.componentWillReceiveProps({ openSectionIndex: 1 });
      expect(TestUtils.findRenderedDOMComponentWithClass(subject, 'open').getDOMNode())
        .to.equal(React.findDOMNode(subject).lastChild.firstChild);

    });
  });
});
