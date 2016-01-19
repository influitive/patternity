/* jshint expr:true */
const React  = require('react/addons');
const ReactDOM = require('react-dom');
const ReactTestUtils = React.addons.TestUtils;
const simulate  = ReactTestUtils.Simulate;

const Content = require('content');

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const expect = chai.expect;


describe('Content Component', function() {
  let subject, contentElement, contentInnerPannelElement;

  function renderContent(contentComponent){
    subject = ReactTestUtils.renderIntoDocument(contentComponent);
  }

  it('will render the content component', function() {
    renderContent(
      <Content>
        <p>test</p>
      </Content>
    );
    contentElement = ReactDOM.findDOMNode(subject.refs.contentPannel);
    expect(contentElement.className).to.contain("panel-content");
  });

  describe('Inner Pannel', function () {
    it('will render the content inner pannel', function() {
      renderContent(
        <Content>
          <p>test</p>
        </Content>
      );
      contentInnerPannelElement = ReactDOM.findDOMNode(subject.refs.contentInnerPannel);
      expect(contentInnerPannelElement).to.exist;
    });

    it('will not render the content inner pannel if hasInnerPanel is false', function() {
      renderContent(
        <Content hasInnerPanel={false}>
          <p>test</p>
        </Content>
      );
      expect(subject.refs.contentInnerPannel).to.be.undefined;
    });

    it('will render children inside inner pannel if hasInnerPanel is true', function() {
      renderContent(
        <Content hasInnerPanel={true}>
          <p>test</p>
        </Content>
      );
      contentInnerPannelElement = ReactDOM.findDOMNode(subject.refs.contentInnerPannel);
      expect(contentInnerPannelElement.childElementCount).to.equal(1);
    });

    it('will render children inside the content pannel if hasInnerPanel is false', function() {
      renderContent(
        <Content hasInnerPanel={false}>
          <p>test</p>
        </Content>
      );
      expect(subject.refs.contentInnerPannel).to.be.undefined;
      expect(contentElement.childElementCount).to.equal(1);
    });
  });

  describe('Has Background Color', function () {
    it('will render the content component with a background colour by default', function() {
      renderContent(
        <Content>
          <p>test</p>
        </Content>
      );
      contentElement = ReactDOM.findDOMNode(subject.refs.contentPannel);
      expect(contentElement.className).not.to.contain("no-colour");
    });

    it('will render the content component with a background colour if hasBackgroundColour is true', function() {
      renderContent(
        <Content hasBackgroundColour={true}>
          <p>test</p>
        </Content>
      );
      contentElement = ReactDOM.findDOMNode(subject.refs.contentPannel);
      expect(contentElement.className).not.to.contain("no-colour");
    });

    it('will render the content component without a background colour if hasBackgroundColour is false', function() {
      renderContent(
        <Content hasBackgroundColour={false}>
          <p>test</p>
        </Content>
      );
      contentElement = ReactDOM.findDOMNode(subject.refs.contentPannel);
      expect(contentElement.className).to.contain("no-colour");
    });
  });
});
