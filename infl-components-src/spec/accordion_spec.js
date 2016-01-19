const es5Shim   = require('es5-shim');
// require('core/es5');
const React     = require('react/addons');
const ReactDOM  = require('react-dom');
const expect    = require('chai').expect;
const TestUtils = React.addons.TestUtils;
const _         = require('lodash');
const simulate  = TestUtils.Simulate;

const Accordion = require('../../lib/accordion');

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
      const subject = TestUtils.renderIntoDocument(<Accordion />);

      expect(ReactDOM.findDOMNode(subject).childNodes.length).to.equal(0);
    });

    it('will render an accordion with no sections if an empty array is passed', function() {
      const subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(0)} />);

      expect(ReactDOM.findDOMNode(subject).childNodes.length).to.equal(0);
    });

    it('will render an accordion with 1 sections if an array with 1 is passed', function() {
      const subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(1)} />);

      expect(ReactDOM.findDOMNode(subject).childNodes.length).to.equal(1);
    });

    it('will render an accordion with many sections if an array with many is passed', function() {
      const subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(3)} />);

      expect(ReactDOM.findDOMNode(subject).childNodes.length).to.equal(3);
    });
  });

  describe('Opening/Closing', function() {
    it('will open the body of a section when the header is clicked', function() {
      const subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(1)} />);
      const header = ReactDOM.findDOMNode(subject).firstChild.firstChild;
      simulate.click(header);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(1);
    });

    it('will close a section when the header is clicked and the section is already open', function() {
      const subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(1)} />);
      const header = ReactDOM.findDOMNode(subject).firstChild.firstChild;
      simulate.click(header);
      simulate.click(header);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(0);
    });

    it('will close an open section when a different section is opened', function() {
      const subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(2)} />);
      const firstHeader = ReactDOM.findDOMNode(subject).firstChild.firstChild;
      simulate.click(firstHeader);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(1);

      const secondHeader = ReactDOM.findDOMNode(subject).firstChild.lastChild;
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
      const subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(1)} />);
      const header = ReactDOM.findDOMNode(subject).firstChild.firstChild;
      simulate.click(header);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(1);
    });

    it('will NOT open a section details if the header is clicked and the section is disabled', function() {
      const sections = buildSections(1);
      const subject = TestUtils.renderIntoDocument(<Accordion sections={disableSection(sections)} />);
      const header = ReactDOM.findDOMNode(subject).firstChild.firstChild;
      simulate.click(header);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(0);
    });
  });

  describe('initialSectionIndex', function() {
    it('it will render with the initialSectionIndex open', function() {
      const subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(2)} initialSectionIndex={0} />);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(1);
    });

    it('it will render with the no open sections if initialSectionIndex is invalid', function() {
      let subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(2)} initialSectionIndex={-12} />);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(0);

      subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(2)} initialSectionIndex={'h'} />);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(0);
    });

    it('should not change open section after receiving new props', function() {
      const subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(2)} initialSectionIndex={0} />);

      subject.componentWillReceiveProps({ initialSectionIndex: 1 });
      expect(ReactDOM.findDOMNode(TestUtils.findRenderedDOMComponentWithClass(subject, 'open')))
        .to.equal(ReactDOM.findDOMNode(subject).firstChild.firstChild);

    });
  });

  describe('openSectionIndex', function() {
    it('it will render with the openSectionIndex open', function() {
      const subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(2)} openSectionIndex={0} />);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(1);
    });

    it('it will render with the no open sections if openSectionIndex is invalid', function() {
      let subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(2)} openSectionIndex={-12} />);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(0);

      subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(2)} openSectionIndex={'h'} />);

      expect(TestUtils.scryRenderedDOMComponentsWithClass(subject, 'open').length).to.equal(0);
    });

    it('should change open section after receiving new props', function() {
      const subject = TestUtils.renderIntoDocument(<Accordion sections={buildSections(2)} openSectionIndex={0} />);

      subject.componentWillReceiveProps({ openSectionIndex: 0 });
      expect(ReactDOM.findDOMNode(TestUtils.findRenderedDOMComponentWithClass(subject, 'open')))
        .to.equal(ReactDOM.findDOMNode(subject).firstChild.firstChild);

      subject.componentWillReceiveProps({ openSectionIndex: 1 });
      expect(ReactDOM.findDOMNode(TestUtils.findRenderedDOMComponentWithClass(subject, 'open')))
        .to.equal(ReactDOM.findDOMNode(subject).lastChild.firstChild);

    });
  });
});
