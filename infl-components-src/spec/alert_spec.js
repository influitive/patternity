const es5Shim   = require('es5-shim'), React     = require('react'), expect    = require('chai').expect, TestUtils = require('react/addons').addons.TestUtils, Simulate  = TestUtils.Simulate;

const Alert = require('../../lib/alert');

describe('Alert', function() {
  let title, body, alertIconClass;

  beforeEach(function(){
    title = "test title";
    body = "test body";
    alertIconClass = "alert-icon"
  });

  it('will display the title that is provided', function () {
    const subject = TestUtils.renderIntoDocument(<Alert title={title} body={body} />);

    expect(React.findDOMNode(subject.refs.title).lastChild.firstChild.nodeValue).to.equal(title);
  });

  it('will display the body that is provided', function () {
    const subject = TestUtils.renderIntoDocument(<Alert title={title}>{body}</Alert>);

    expect(React.findDOMNode(subject.refs.body).firstChild.nodeValue).to.equal(body);
  });

  describe("Icon", function(){
    it("will not display an icon if it isn't told to", function(){
      const subject = TestUtils.renderIntoDocument(<Alert title={title} />);

      expect(React.findDOMNode(subject.refs.title).firstChild.className.indexOf(alertIconClass)).to.equal(-1);
    });

    it('will display an icon if it is told to', function(){
      const subject = TestUtils.renderIntoDocument(<Alert title={title} body={body} showIcon={true} />);

      expect(React.findDOMNode(subject.refs.title).firstChild.className.indexOf(alertIconClass)).to.above(-1);
    });

    describe("Type", function(){
      let successIconClass, errorIconClass, defaultIconClass, warningIconClass;

      beforeEach(function(){
        defaultIconClass = "ic-alert-caution";
        successIconClass = "ic-check-circle-o";
        errorIconClass = "ic-exclamation-circle-o";
        warningIconClass = "ic-info-circle-o";
      });

      it('will display the correct icon for default', function(){
        const subject = TestUtils.renderIntoDocument(<Alert title={title} body={body} showIcon={true} />);

        expect(React.findDOMNode(subject.refs.title).firstChild.className.indexOf(defaultIconClass)).to.above(-1);
      });

      it('will display the correct icon for warning', function(){
        const subject = TestUtils.renderIntoDocument(<Alert title={title} body={body} showIcon={true} type="warning" />);

        expect(React.findDOMNode(subject.refs.title).firstChild.className.indexOf(warningIconClass)).to.above(-1);
      });

      it('will display the correct icon for success', function(){
        const subject = TestUtils.renderIntoDocument(<Alert type="success" title={title} body={body} showIcon={true} />);

        expect(React.findDOMNode(subject.refs.title).firstChild.className.indexOf(successIconClass)).to.above(-1);
      });

      it('will display the correct icon for error', function(){
        const subject = TestUtils.renderIntoDocument(<Alert type="error" title={title} body={body} showIcon={true} />);

        expect(React.findDOMNode(subject.refs.title).firstChild.className.indexOf(errorIconClass)).to.above(-1);
      });
    });
  });

  describe("Closeable", function(){
    it('will not have a close action if it is not closeable', function(){
      const subject = TestUtils.renderIntoDocument(<Alert type="error" title={title} body={body} />);

      expect(subject.refs.close).to.equal(undefined);
    });

    it('will have a close action if it is closeable', function(){
      const subject = TestUtils.renderIntoDocument(<Alert type="error" title={title} body={body} closeable={true} />);

      expect(subject.refs.close).to.not.equal(undefined);
    });

    it('will close if it is closeable and the close action is clicked', function(){
      const subject = TestUtils.renderIntoDocument(<Alert type="error" title={title} body={body} closeable={true} />);
      const close = React.findDOMNode(subject.refs.close);
      Simulate.click(close);

      expect(subject.refs.notice).to.equal(undefined);
    });
  });
});
