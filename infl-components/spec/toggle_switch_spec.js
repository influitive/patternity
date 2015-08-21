var React  = require('react/addons');
var TestUtils = React.addons.TestUtils;

var ToggleSwitch = require('toggle_switch');

var chai = require('chai');
var expect = chai.expect;

describe('ToggleSwitch', function() {
  it('will render the correct text for "on" and "off" states', function() {
    var subject = TestUtils.renderIntoDocument(<ToggleSwitch isOn={true} />);
    expect(React.findDOMNode(subject.refs.text).innerHTML).to.equal('On');

    subject = TestUtils.renderIntoDocument(<ToggleSwitch isOn={false} />);
    expect(React.findDOMNode(subject.refs.text).innerHTML).to.equal('Off');
  });

  it('will have correct classnames', function() {
    var subject = TestUtils.renderIntoDocument(<ToggleSwitch isOn={true} />);
    expect(React.findDOMNode(subject).className.indexOf('on')).to.not.equal(-1);
    expect(React.findDOMNode(subject).className.indexOf('off')).to.equal(-1);

    var subject = TestUtils.renderIntoDocument(<ToggleSwitch isOn={false} />);
    expect(React.findDOMNode(subject).className.indexOf('off')).to.not.equal(-1);
    expect(React.findDOMNode(subject).className.indexOf('on')).to.equal(-1);
  });

  it('will have the correct state for the underlying checkbox', function() {
    var subject = TestUtils.renderIntoDocument(<ToggleSwitch isOn={true} />);
    expect(React.findDOMNode(subject.refs.checkbox).checked).to.equal(true);

    var subject = TestUtils.renderIntoDocument(<ToggleSwitch isOn={false} />);
    expect(React.findDOMNode(subject.refs.checkbox).checked).to.equal(false);
  });

  it('will be disable properly', function() {
    var subject = TestUtils.renderIntoDocument(<ToggleSwitch isOn={true} enabled={false} />);
    expect(React.findDOMNode(subject).className.indexOf('disabled')).to.not.equal(-1);
  });
});
