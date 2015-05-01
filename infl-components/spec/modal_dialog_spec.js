/* jshint expr:true */
var React  = require("react/addons");
var ReactTestUtils = React.addons.TestUtils;
var simulate  = ReactTestUtils.Simulate;
var simulateNative = ReactTestUtils.SimulateNative;
var _ = require('lodash');

var ModalDailog = require("modal_dialog");
var ButtonGroup = require("button_group");

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.use(sinonChai);
var expect = chai.expect;


describe('Modal Dialog Component', function() {
  var subject,
      modalDialogElement,
      closeElement,
      modalElement;

  function renderModalDialog(modalDialogComponent){
    subject = ReactTestUtils.renderIntoDocument(modalDialogComponent);
    populateTestRefs();
  }

  function populateTestRefs(){
    modalDialogElement = subject.refs.modalDialog.getDOMNode();
    closeElement = subject.refs.close.getDOMNode();
    modalElement = subject.refs.modal.getDOMNode();
  }

  function buildModalDialog(config){
    var defaultConfig = {
      id : "",
      closeable : true,
      size : "medium",
      onClose : function(){},
      isModalOpen : false
    };

    _.defaults(defaultConfig, config);

    renderModalDialog(
      <ModalDailog id={config.id} closeable={config.closeable} size={config.size} onClose={config.onClose} isModalOpen={config.isModalOpen} >
        <ModalDailog.Header title="Modal Dialog Header Title" />
        <ModalDailog.Body>
            <p>This is the modal body. This is the modal body.</p>
            <p>This is the modal body. This is the modal body.</p>
            <p>This is the modal body. This is the modal body.</p>
        </ModalDailog.Body>
        <ModalDailog.Footer>
            <ButtonGroup>
                <button type="text">Cancel</button>
                <button type="success">Save</button>
            </ButtonGroup>
        </ModalDailog.Footer>
      </ModalDailog>
    );
  }

  it('will render the modal dialog component', function() {
    buildModalDialog({});
    expect(modalDialogElement.className).to.contain("pt-modal-dialog");
    expect(closeElement.className).to.contain("close-dialog");
    expect(modalElement.className).to.contain("pt-modal");
  });

  it('will render the modal dialog with the given id', function() {
    var testId = "test-id";
    buildModalDialog({
      id : testId
    });
    expect(modalDialogElement.id).to.equal(testId);
  });

  describe('Closeable', function () {
    it('will render the modal dialog closeable by default', function() {
      buildModalDialog({});
      expect(closeElement.className).not.to.contain("disable-close");
    });

    it('will render the modal dialog closeable when closeable is true', function() {
      buildModalDialog({
        closeable : true
      });
      expect(closeElement.className).not.to.contain("disable-close");
    });

    it('will render the modal dialog not closeable when closeable is false', function() {
      buildModalDialog({
        closeable : false
      });
      expect(closeElement.className).to.contain("disable-close");
    });
  });

  describe('Size', function () {
    it('will render the modal dialog medium by default', function() {
      buildModalDialog({});
      expect(modalElement.className).to.contain("medium");
    });

    it('will render the modal dialog medium by default', function() {
      buildModalDialog({
        size : "medium"
      });
      expect(modalElement.className).to.contain("medium");
    });

    it('will render the modal dialog small by default', function() {
      buildModalDialog({
        size : "small"
      });
      expect(modalElement.className).to.contain("small");
    });

    it('will render the modal dialog large by default', function() {
      buildModalDialog({
        size : "large"
      });
      expect(modalElement.className).to.contain("large");
    });
  });

  describe('On Close', function () {
    // it('will call on close when dialog closes', function() {
    //   var mockOnClose = sinon.spy();
    //   buildModalDialog({
    //     onClose : mockOnClose,
    //     isModalOpen : true
    //   });
    //   simulate.click(closeElement);
    //   expect(mockOnClose).to.have.been.called();
    // });
  });

  describe('Is Modal Open', function () {
    it('will render the modal dialog hidden by default', function() {
      buildModalDialog({});
      expect(modalDialogElement.className).to.contain("close");
    });

    it('will render the modal dialog hidden when isModalOpen is false', function() {
      buildModalDialog({
        isModalOpen : false
      });
      expect(modalDialogElement.className).to.contain("close");
    });

    it('will render the modal dialog visible when isModalOpen is true', function() {
      buildModalDialog({
        isModalOpen : true
      });
      expect(modalDialogElement.className).not.to.contain("close");
    });

    it('will show the modal after render when dialog receives new props', function() {
      buildModalDialog({});
      subject.componentWillReceiveProps({
        isModalOpen : true
      });
      expect(modalDialogElement.className).not.to.contain("close");
    });
  });
});
