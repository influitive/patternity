/* jshint expr:true */
const React  = require('react/addons');
const ReactDOM = require('react-dom');
const ReactTestUtils = React.addons.TestUtils;

const SelectDropdown = require('select_dropdown');

const chai = require('chai');
const expect = chai.expect;

function textOnChange() {
}

describe('SelectDropdown Component', function() {
  let subject;

  beforeEach(function() {
    subject = ReactTestUtils.renderIntoDocument(
      <SelectDropdown key="key" name="select_name" value="value3" onChange={ textOnChange }>
        <optgroup id="group1" label="label">
          <option id="opt1" value="value1">option 1</option>
          <option id="opt2" value="value2">option 2</option>
          <option id="opt3" value="value3">option 3</option>
        </optgroup>
        <optgroup id="group2" label="label">
          <option id="opt4" value="value4">option 4</option>
          <option id="opt5" value="value5">option 5</option>
          <option id="opt6" value="value6">option 6</option>
        </optgroup>
      </SelectDropdown>
    );
  });

  context('SelectDropdown', function() {
    it('renders a span with a select inside it', function() {
      const subjectNode = ReactDOM.findDOMNode(subject);
      expect(subjectNode.tagName).to.eq('SPAN');

      const selectNode = ReactDOM.findDOMNode(subject.refs.select);
      expect(selectNode.tagName).to.eq('SELECT');
    });

    it('renders the children with the correct child element selected', function() {
      const selectNode = ReactDOM.findDOMNode(subject.refs.select);
      expect(selectNode.childNodes[0].id).to.eq('group1');
      expect(selectNode.childNodes[0].childNodes.length).to.eq(3);
      expect(selectNode.childNodes[1].id).to.eq('group2');
      expect(selectNode.childNodes[1].childNodes.length).to.eq(3);

      expect(selectNode.childNodes[0].childNodes[2].id).to.eq('opt3');
      expect(selectNode.childNodes[0].childNodes[2].value).to.eq('value3');
      expect(selectNode.childNodes[0].childNodes[1].selected).to.eq(false);
      expect(selectNode.childNodes[0].childNodes[2].selected).to.eq(true);  // yeah, baby!

      const titleNode = ReactDOM.findDOMNode(subject.refs.title);

      expect(titleNode.textContent).to.eq("option 3");
    });
  });
});
