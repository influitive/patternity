var es5Shim   = require('es5-shim'),
    React     = require('react'),
    expect    = require('chai').expect,
    TestUtils = require('react/addons').addons.TestUtils;

var Sidebar = require('sidebar');

describe('Sidebar', function() {
  it('will be empty if it has no children', function () {
    var subject = TestUtils.renderIntoDocument(
      <Sidebar></Sidebar>
    );

    expect(subject.refs.sidebar.getDOMNode().childNodes.length).to.equal(0);
  });

  it('will have 1 element if it has 1 children', function () {
    var subject = TestUtils.renderIntoDocument(
      <Sidebar>
        <span></span>
      </Sidebar>
    );

    expect(subject.refs.sidebar.getDOMNode().childNodes.length).to.equal(1);
  });

  it('will have many elements if it has many children', function () {
    var subject = TestUtils.renderIntoDocument(
      <Sidebar>
        <span></span>
        <span></span>
        <span></span>
      </Sidebar>
    );

    expect(subject.refs.sidebar.getDOMNode().childNodes.length).to.equal(3);
  });
});

