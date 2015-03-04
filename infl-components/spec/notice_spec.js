var es5Shim   = require('es5-shim'),
    React     = require('react'),
    expect    = require('chai').expect,
    TestUtils = require('react/addons').addons.TestUtils,
    Simulate  = TestUtils.Simulate;

var Notice = require('notice');

describe('Notice', function() {
  var title, body, noticeIconClass;

  beforeEach(function(){
    title = "test title";
    body = "test body";
    noticeIconClass = "notice-icon"
  });

  it('will display the title that is provided', function () {
    var subject = TestUtils.renderIntoDocument(<Notice title={title} body={body} />);

    expect(subject.refs.title.getDOMNode().lastChild.firstChild.nodeValue).to.equal(title);
  });

  it('will display the body that is provided', function () {
    var subject = TestUtils.renderIntoDocument(<Notice title={title} body={body} />);

    expect(subject.refs.body.getDOMNode().firstChild.nodeValue).to.equal(body);
  });

  describe("Icon", function(){
    it("will not display an icon if it isn't told to", function(){
      var subject = TestUtils.renderIntoDocument(<Notice title={title} body={body} />);

      expect(subject.refs.title.getDOMNode().firstChild.className.indexOf(noticeIconClass)).to.equal(-1);
    });

    it('will display an icon if it is told to', function(){
      var subject = TestUtils.renderIntoDocument(<Notice title={title} body={body} showIcon={true} />);

      expect(subject.refs.title.getDOMNode().firstChild.className.indexOf(noticeIconClass)).to.above(-1);
    });

    describe("Type", function(){
      var successIconClass, errorIconClass, defaultIconClass;

      beforeEach(function(){
        defaultIconClass = "fa-exclamation-triangle";
        successIconClass = "fa-check-circle";
        errorIconClass = "fa-exclamation-circle";
      });

      it('will display the correct icon for default', function(){
        var subject = TestUtils.renderIntoDocument(<Notice title={title} body={body} showIcon={true} />);

        expect(subject.refs.title.getDOMNode().firstChild.className.indexOf(defaultIconClass)).to.above(-1);
      });

      it('will display the correct icon for success', function(){
        var subject = TestUtils.renderIntoDocument(<Notice type="success" title={title} body={body} showIcon={true} />);

        expect(subject.refs.title.getDOMNode().firstChild.className.indexOf(successIconClass)).to.above(-1);
      });

      it('will display the correct icon for error', function(){
        var subject = TestUtils.renderIntoDocument(<Notice type="error" title={title} body={body} showIcon={true} />);

        expect(subject.refs.title.getDOMNode().firstChild.className.indexOf(errorIconClass)).to.above(-1);
      });
    });
  });

  describe("Closeable", function(){
    it('will not have a close action if it is not closeable', function(){
      var subject = TestUtils.renderIntoDocument(<Notice type="error" title={title} body={body} />);

      expect(subject.refs.close).to.equal(undefined);
    });

    xit('will have a close action if it is closeable', function(){
      var subject = TestUtils.renderIntoDocument(<Notice type="error" title={title} body={body} closeable={true} />);

      expect(subject.refs.close).to.not.equal(undefined);
    });

    it('will close if it is closeable and the close action is clicked', function(){
      var subject = TestUtils.renderIntoDocument(<Notice type="error" title={title} body={body} closeable={true} />);
      var close = subject.refs.close.getDOMNode();
      Simulate.click(close);

      expect(subject.refs.notice).to.equal(undefined);
    });
  });
});


