/* jshint expr:true */
var React  = require("react/addons");
var ReactTestUtils = React.addons.TestUtils;
var simulate  = ReactTestUtils.Simulate;
var simulateNative = ReactTestUtils.SimulateNative;

var Loading = require("loading");

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.use(sinonChai);
var expect = chai.expect;


describe('Loading Component', function() {
  var subject,
      loadingElement;

  function renderLoading(loadingComponent){
    subject = ReactTestUtils.renderIntoDocument(loadingComponent);
    populateTestRefs();
  }

  function populateTestRefs(){
    loadingElement = subject.refs.loading.getDOMNode();
  }

  it('will render the loading component', function() {
    renderLoading(<Loading></Loading>);
    expect(loadingElement.className).to.contain("loading-spinner");
  });

  describe('Size', function () {
    it('will render the loading as medium by default', function() {
      renderLoading(<Loading></Loading>);
      expect(loadingElement.className).to.contain("medium");
    });

    it('will render the loading as medium when size is medium', function() {
      renderLoading(<Loading size="medium"></Loading>);
      expect(loadingElement.className).to.contain("medium");
    });

    it('will render the loading as small when size is small', function() {
      renderLoading(<Loading size="small"></Loading>);
      expect(loadingElement.className).to.contain("small");
    });

    it('will render the loading as large when size is large', function() {
      renderLoading(<Loading size="large"></Loading>);
      expect(loadingElement.className).to.contain("large");
    });
  });

  describe('Type', function () {
    it('will render the loading as dark by default', function() {
      renderLoading(<Loading></Loading>);
      expect(loadingElement.className).to.contain("dark");
    });

    it('will render the loading as dark when type is dark', function() {
      renderLoading(<Loading type="dark"></Loading>);
      expect(loadingElement.className).to.contain("dark");
    });

    it('will render the loading as light when type is light', function() {
      renderLoading(<Loading type="light"></Loading>);
      expect(loadingElement.className).to.contain("light");
    });
  });

  describe('Modal', function () {
    it('will render the loading as not modal by default', function() {
      renderLoading(<Loading></Loading>);
      expect(loadingElement.className).not.to.contain("is-modal");
    });

    it('will render the loading as not modal when is modal is false', function() {
      renderLoading(<Loading isModal={false}></Loading>);
      expect(loadingElement.className).not.to.contain("is-modal");
    });

    it('will render the loading as modal when is modal is true', function() {
      renderLoading(<Loading isModal={true}></Loading>);
      expect(loadingElement.className).to.contain("is-modal");
    });
  });

  describe('Block', function () {
    it('will render the loading as inline by default', function() {
      renderLoading(<Loading></Loading>);
      expect(loadingElement.className).not.to.contain("is-block");
    });

    it('will render the loading as inline when is block is false', function() {
      renderLoading(<Loading isBlock={false}></Loading>);
      expect(loadingElement.className).not.to.contain("is-block");
    });

    it('will render the loading as block when is block is true', function() {
      renderLoading(<Loading isBlock={true}></Loading>);
      expect(loadingElement.className).to.contain("is-block");
    });
  });
});
