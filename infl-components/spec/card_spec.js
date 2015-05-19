var es5Shim   = require('es5-shim'),
    React     = require('react'),
    expect    = require('chai').expect,
    TestUtils = require('react/addons').addons.TestUtils;

var Card = require('cards/card.jsx');

describe('Card Component', function() {
  describe('Card', function () {
    var subject, cardElement;

    function renderCardComponent(cardComponent) {
      subject = TestUtils.renderIntoDocument(cardComponent);
      populateTestRefs();
    }

    function populateTestRefs(){
      cardElement = subject.refs.card.getDOMNode();
    }

    it('will render the card component', function () {
      renderCardComponent(<Card></Card>);
      expect(cardElement.className).to.contain("pt-card");
      expect(cardElement.tagName).to.equal("DIV");
    });

    it('will render children passed to it', function () {
      renderCardComponent(
        <Card>
          <p>test</p>
        </Card>
      );
      expect(cardElement.children.length).to.equal(1);
    });
  });

  describe('Card Container', function () {
    var subject, cardContainerElement;

    function renderCardContainerComponent(cardContainerComponent) {
      subject = TestUtils.renderIntoDocument(cardContainerComponent);
      populateTestRefs();
    }

    function populateTestRefs(){
      cardContainerElement = subject.refs.container.getDOMNode();
    }

    it('will render the card component', function () {
      renderCardContainerComponent(<Card.Container></Card.Container>);
      expect(cardContainerElement.className).to.contain("pt-card-container");
      expect(cardContainerElement.tagName).to.equal("DIV");
    });

    it('will render children passed to it', function () {
      renderCardContainerComponent(
        <Card.Container>
          <Card></Card>
        </Card.Container>
      );
      expect(cardContainerElement.children.length).to.equal(1);
    });
  });
});

