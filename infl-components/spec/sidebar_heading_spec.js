var es5Shim   = require('es5-shim'),
    React     = require('react'),
    expect    = require('chai').expect,
    TestUtils = require('react/addons').addons.TestUtils,
    simulate  = TestUtils.Simulate;

var SidebarHeading = require('sidebar').heading;

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

