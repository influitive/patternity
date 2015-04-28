var es5Shim   = require('es5-shim'),
    React     = require('react'),
    expect    = require('chai').expect,
    TestUtils = require('react/addons').addons.TestUtils;

var Sidebar = require('sidebar');
var SidebarHeading = require('sidebar').Heading;

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

  describe('SidebarHeading', function() {
    var heading, title;

    beforeEach(function(){
      title = "test title";
      heading = {
        headingComponent : "span",
        title : title,
        headingComponentParams : {
          testParam : "testParam"
        }
      };
    });

    it('will have the correct title', function () {
      var subject = TestUtils.renderIntoDocument(<SidebarHeading {...heading} />);

      expect(subject.refs.heading.getDOMNode().firstChild.firstChild.firstChild.nodeValue).to.equal(title);
    });

    //Not sure how to test this case within React
    xit('will NOT have the message if one is not passed', function () {
      var subject = TestUtils.renderIntoDocument(<SidebarHeading {...heading} />);

      // expect(subject.refs.heading.getDOMNode().lastChild.firstChild.nodeValue).to.equal(message);
    });

    it('will have the message if one is passed', function () {
      var message = "test message";
      heading.message = message;
      var subject = TestUtils.renderIntoDocument(<SidebarHeading {...heading} />);

      expect(subject.refs.heading.getDOMNode().lastChild.firstChild.nodeValue).to.equal(message);
    });

  });
});

