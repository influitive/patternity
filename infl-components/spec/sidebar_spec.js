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

  describe('Sidebar.Heading', function() {
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

  describe('Sidebar.NavList', function() {
    var key = "testKey",
        title = "test title",
        listItemComponent = "div",
        listItemName = "test name";

    function buildListItems(numberOfItems) {
      var listItems = [];
      for(var i = 0; i < numberOfItems; i++) {
        listItems.push(buildListItem(i));
      }
      return listItems;
    }

    function buildListItem(index) {
      return {
          name: listItemName,
          adapter: 'testAdapter',
          key: 'testKey' + index,
          listItemComponent : listItemComponent,
          listItemComponentProps : {
            to: 'testTo',
            params : {
              providerName : 'testAdapter'
            }
          }
        };
    }

    it('will have a list title', function () {
      var subject = TestUtils.renderIntoDocument(<Sidebar.NavList key={key} title={title} />);

      expect(subject.refs.title.getDOMNode().firstChild.firstChild.nodeValue).to.equal(title);
    });

    describe("Build", function(){
      it('will render an empty list by default', function () {
        var subject = TestUtils.renderIntoDocument(<Sidebar.NavList key={key} title={title} />);

        expect(subject.refs.list.getDOMNode().childNodes.length).to.equal(0);
      });

      it('will render an empty list if an empty array is passed', function () {
        var subject = TestUtils.renderIntoDocument(<Sidebar.NavList key={key} title={title} listItems={buildListItems(0)} />);

        expect(subject.refs.list.getDOMNode().childNodes.length).to.equal(0);
      });

      it('will render a list with 1 item if an array of 1 item is passed', function () {
        var subject = TestUtils.renderIntoDocument(<Sidebar.NavList key={key} title={title} listItems={buildListItems(1)} />);

        expect(subject.refs.list.getDOMNode().childNodes.length).to.equal(1);
      });

      it('will render a list with many items if an array of many items is passed', function () {
        var subject = TestUtils.renderIntoDocument(<Sidebar.NavList key={key} title={title} listItems={buildListItems(3)} />);

        expect(subject.refs.list.getDOMNode().childNodes.length).to.equal(3);
      });
    });

    describe("List item", function(){
      it('will have a name', function () {
        var subject = TestUtils.renderIntoDocument(<Sidebar.NavList key={key} title={title} listItems={buildListItems(1)} />);

        expect(subject.refs.list.getDOMNode().firstChild.firstChild.lastChild.firstChild.nodeValue).to.equal(listItemName);
      });

      it('will create the correct component that is passed in', function () {
        var subject = TestUtils.renderIntoDocument(<Sidebar.NavList key={key} title={title} listItems={buildListItems(1)} />);
        expect(subject.refs.list.getDOMNode().firstChild.firstChild.nodeName).to.equal(listItemComponent.toUpperCase());
      });
    });
  });
});

