var es5Shim   = require('es5-shim'),
    React     = require('react'),
    expect    = require('chai').expect,
    TestUtils = require('react/addons').addons.TestUtils,
    simulate  = TestUtils.Simulate;

var ListPicker = require('components/list_picker');

describe('ListPicker', function() {
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
    var subject = TestUtils.renderIntoDocument(<ListPicker key={key} title={title} />);

    expect(subject.refs.title.getDOMNode().firstChild.firstChild.nodeValue).to.equal(title);
  });

  describe("Build", function(){
    it('will render an empty list by default', function () {
      var subject = TestUtils.renderIntoDocument(<ListPicker key={key} title={title} />);

      expect(subject.refs.list.getDOMNode().childNodes.length).to.equal(0);
    });

    it('will render an empty list if an empty array is passed', function () {
      var subject = TestUtils.renderIntoDocument(<ListPicker key={key} title={title} listItems={buildListItems(0)} />);

      expect(subject.refs.list.getDOMNode().childNodes.length).to.equal(0);
    });

    it('will render a list with 1 item if an array of 1 item is passed', function () {
      var subject = TestUtils.renderIntoDocument(<ListPicker key={key} title={title} listItems={buildListItems(1)} />);

      expect(subject.refs.list.getDOMNode().childNodes.length).to.equal(1);
    });

    it('will render a list with many items if an array of many items is passed', function () {
      var subject = TestUtils.renderIntoDocument(<ListPicker key={key} title={title} listItems={buildListItems(3)} />);

      expect(subject.refs.list.getDOMNode().childNodes.length).to.equal(3);
    });
  });

  describe("List item", function(){
    it('will have a name', function () {
      var subject = TestUtils.renderIntoDocument(<ListPicker key={key} title={title} listItems={buildListItems(1)} />);

      expect(subject.refs.list.getDOMNode().firstChild.firstChild.lastChild.firstChild.nodeValue).to.equal(listItemName);
    });

    it('will create the correct component that is passed in', function () {
      var subject = TestUtils.renderIntoDocument(<ListPicker key={key} title={title} listItems={buildListItems(1)} />);
      expect(subject.refs.list.getDOMNode().firstChild.firstChild.nodeName).to.equal(listItemComponent.toUpperCase());
    });
  });
});

