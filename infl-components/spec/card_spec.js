var es5Shim   = require('es5-shim'),
    React     = require('react'),
    expect    = require('chai').expect,
    TestUtils = require('react/addons').addons.TestUtils;

var Card = require('cards/card.jsx');

describe('Card', function() {
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

