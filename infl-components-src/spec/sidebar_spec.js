const es5Shim   = require('es5-shim'), React     = require('react'), expect    = require('chai').expect, TestUtils = require('react/addons').addons.TestUtils;

const ReactDOM = require('react-dom');

const Sidebar = require('sidebar');
const SidebarHeading = require('sidebar').Heading;

describe('Sidebar', function() {
  it('will be empty if it has no children', function () {
    const subject = TestUtils.renderIntoDocument(
      <Sidebar></Sidebar>
    );

    expect(ReactDOM.findDOMNode(subject.refs.sidebar).childNodes.length).to.equal(0);
  });

  it('will have 1 element if it has 1 children', function () {
    const subject = TestUtils.renderIntoDocument(
      <Sidebar>
        <span></span>
      </Sidebar>
    );

    expect(ReactDOM.findDOMNode(subject.refs.sidebar).childNodes.length).to.equal(1);
  });

  it('will have many elements if it has many children', function () {
    const subject = TestUtils.renderIntoDocument(
      <Sidebar>
        <span></span>
        <span></span>
        <span></span>
      </Sidebar>
    );

    expect(ReactDOM.findDOMNode(subject.refs.sidebar).childNodes.length).to.equal(3);
  });

  describe('Sidebar.Heading', function() {
    let heading, title;

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
      const subject = TestUtils.renderIntoDocument(<SidebarHeading {...heading} />);

      expect(ReactDOM.findDOMNode(subject.refs.heading).firstChild.firstChild.firstChild.nodeValue).to.equal(title);
    });

    //Not sure how to test this case within React
    xit('will NOT have the message if one is not passed', function () {
      const subject = TestUtils.renderIntoDocument(<SidebarHeading {...heading} />);

      // expect(ReactDOM.findDOMNode(subject.refs.heading).lastChild.firstChild.nodeValue).to.equal(message);
    });

    it('will have the message if one is passed', function () {
      const message = "test message";
      heading.message = message;
      const subject = TestUtils.renderIntoDocument(<SidebarHeading {...heading} />);

      expect(ReactDOM.findDOMNode(subject.refs.heading).lastChild.firstChild.nodeValue).to.equal(message);
    });
  });

  describe('Sidebar.NavList', function() {
    const key = "testKey", title = "test title", listItemComponent = "div", listItemName = "test name";

    function buildListItems(numberOfItems) {
      const listItems = [];
      for(let i = 0; i < numberOfItems; i++) {
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
      const subject = TestUtils.renderIntoDocument(<Sidebar.NavList key={key} title={title} />);

      expect(ReactDOM.findDOMNode(subject.refs.title).firstChild.firstChild.nodeValue).to.equal(title);
    });

    describe("Build", function(){
      it('will render an empty list by default', function () {
        const subject = TestUtils.renderIntoDocument(<Sidebar.NavList key={key} title={title} />);

        expect(ReactDOM.findDOMNode(subject.refs.list).childNodes.length).to.equal(0);
      });

      it('will render an empty list if an empty array is passed', function () {
        const subject = TestUtils.renderIntoDocument(<Sidebar.NavList key={key} title={title} listItems={buildListItems(0)} />);

        expect(ReactDOM.findDOMNode(subject.refs.list).childNodes.length).to.equal(0);
      });

      it('will render a list with 1 item if an array of 1 item is passed', function () {
        const subject = TestUtils.renderIntoDocument(<Sidebar.NavList key={key} title={title} listItems={buildListItems(1)} />);

        expect(ReactDOM.findDOMNode(subject.refs.list).childNodes.length).to.equal(1);
      });

      it('will render a list with many items if an array of many items is passed', function () {
        const subject = TestUtils.renderIntoDocument(<Sidebar.NavList key={key} title={title} listItems={buildListItems(3)} />);

        expect(ReactDOM.findDOMNode(subject.refs.list).childNodes.length).to.equal(3);
      });
    });

    describe("List item", function(){
      it('will have a name', function () {
        const subject = TestUtils.renderIntoDocument(<Sidebar.NavList key={key} title={title} listItems={buildListItems(1)} />);

        expect(ReactDOM.findDOMNode(subject.refs.list).firstChild.firstChild.lastChild.firstChild.nodeValue).to.equal(listItemName);
      });

      it('will create the correct component that is passed in', function () {
        const subject = TestUtils.renderIntoDocument(<Sidebar.NavList key={key} title={title} listItems={buildListItems(1)} />);
        expect(ReactDOM.findDOMNode(subject.refs.list).firstChild.firstChild.nodeName).to.equal(listItemComponent.toUpperCase());
      });
    });
  });
});
