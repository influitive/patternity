/* jshint expr:true */
const React  = require('react/addons');
const ReactDOM = require('react-dom');
const ReactTestUtils = React.addons.TestUtils;
const simulate  = ReactTestUtils.Simulate;

const Form = require('form');

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const expect = chai.expect;


describe('Form Component', function() {
  let subject, formElement;

  function renderForm(formComponent){
    subject = ReactTestUtils.renderIntoDocument(formComponent);
    formElement = ReactDOM.findDOMNode(subject.refs.form);
  }

  describe('Form', function () {
    const emptyString = "";

    it('will render the form component', function() {
      renderForm(<Form></Form>);
      expect(formElement.className).to.contain("pt-form");
    });

    describe('No Validate', function () {
      it('will render the form with novalidate true by default', function() {
        renderForm(<Form></Form>);
        expect(formElement.getAttribute("novalidate")).not.to.be.null;
      });

      it('will render the form with novalidate true if novalidate is true', function() {
        renderForm(<Form novalidate={true}></Form>);
        expect(formElement.getAttribute("novalidate")).not.to.be.null;
      });

      it('will render the form with novalidate false if novalidate is false', function() {
        renderForm(<Form novalidate={false}></Form>);
        expect(formElement.getAttribute("novalidate")).to.be.null;
      });
    });

    describe('Accept Charset', function () {
      it('will render the form with acceptCharset empty by default', function() {
        renderForm(<Form></Form>);
        expect(formElement.getAttribute("accept-charset")).to.equal(emptyString);
      });

      it('will render the form with acceptCharset that is passed', function() {
        const testAcceptCharset = "test-charset";
        renderForm(<Form acceptCharset={testAcceptCharset}></Form>);
        expect(formElement.getAttribute("accept-charset")).to.equal(testAcceptCharset);
      });
    });

    describe('Action', function () {
      it('will render the form with action empty by default', function() {
        renderForm(<Form></Form>);
        expect(formElement.getAttribute("action")).to.equal(emptyString);
      });

      it('will render the form with action that is passed', function() {
        const testAction = "test-action";
        renderForm(<Form action={testAction}></Form>);
        expect(formElement.getAttribute("action")).to.equal(testAction);
      });
    });

    describe('Autocomplete', function () {
      it('will render the form with autocomplete empty by default', function() {
        renderForm(<Form></Form>);
        expect(formElement.getAttribute("autocomplete")).to.equal(emptyString);
      });

      it('will render the form with autocomplete with on if passed', function() {
        renderForm(<Form autocomplete="on"></Form>);
        expect(formElement.getAttribute("autocomplete")).to.equal("on");
      });

      it('will render the form with autocomplete with off if passed', function() {
        renderForm(<Form autocomplete="off"></Form>);
        expect(formElement.getAttribute("autocomplete")).to.equal("off");
      });
    });

    describe('Enctype', function () {
      it('will render the form with enctype empty by default', function() {
        renderForm(<Form></Form>);
        expect(formElement.getAttribute("enctype")).to.equal(emptyString);
      });

      it('will render the form with enctype with application/x-www-form-urlencoded', function() {
        const testEnctype = "application/x-www-form-urlencoded";
        renderForm(<Form enctype={testEnctype}></Form>);
        expect(formElement.getAttribute("enctype")).to.equal(testEnctype);
      });

      it('will render the form with enctype with multipart/form-data', function() {
        const testEnctype = "multipart/form-data";
        renderForm(<Form enctype={testEnctype}></Form>);
        expect(formElement.getAttribute("enctype")).to.equal(testEnctype);
      });

      it('will render the form with enctype with text/plain', function() {
        const testEnctype = "text/plain";
        renderForm(<Form enctype={testEnctype}></Form>);
        expect(formElement.getAttribute("enctype")).to.equal(testEnctype);
      });
    });

    describe('Method', function () {
      it('will render the form with method empty by default', function() {
        renderForm(<Form></Form>);
        expect(formElement.getAttribute("method")).to.equal(emptyString);
      });

      it('will render the form with method with get', function() {
        const testMethod = "get";
        renderForm(<Form method={testMethod}></Form>);
        expect(formElement.getAttribute("method")).to.equal(testMethod);
      });

      it('will render the form with method with post', function() {
        const testMethod = "post";
        renderForm(<Form method={testMethod}></Form>);
        expect(formElement.getAttribute("method")).to.equal(testMethod);
      });
    });

    describe('Name', function () {
      it('will render the form with name empty by default', function() {
        renderForm(<Form></Form>);
        expect(formElement.getAttribute("name")).to.equal(emptyString);
      });

      it('will render the form with name that is passed', function() {
        const testName = "test-name";
        renderForm(<Form name={testName}></Form>);
        expect(formElement.getAttribute("name")).to.equal(testName);
      });
    });

    describe('Target', function () {
      it('will render the form with target empty by default', function() {
        renderForm(<Form></Form>);
        expect(formElement.getAttribute("target")).to.equal(emptyString);
      });

      it('will render the form with target with _blank', function() {
        const testTarget = "_blank";
        renderForm(<Form target={testTarget}></Form>);
        expect(formElement.getAttribute("target")).to.equal(testTarget);
      });

      it('will render the form with target with _self', function() {
        const testTarget = "_self";
        renderForm(<Form target={testTarget}></Form>);
        expect(formElement.getAttribute("target")).to.equal(testTarget);
      });

      it('will render the form with target with _parent', function() {
        const testTarget = "_parent";
        renderForm(<Form target={testTarget}></Form>);
        expect(formElement.getAttribute("target")).to.equal(testTarget);
      });

      it('will render the form with target with _top', function() {
        const testTarget = "_top";
        renderForm(<Form target={testTarget}></Form>);
        expect(formElement.getAttribute("target")).to.equal(testTarget);
      });
    });
  });

  describe('Form Column', function () {
    let formColumnElement;

    function renderFormColumn(formColumnComponent){
      subject = ReactTestUtils.renderIntoDocument(formColumnComponent);
      formColumnElement = ReactDOM.findDOMNode(subject.refs.column);
    }

    it('will render the form column', function() {
      renderFormColumn(<Form.Column></Form.Column>);
      expect(formColumnElement.className).to.contain("pt-form-column");
    });

    it("will render the form column with it's children", function() {
      renderFormColumn(
        <Form.Column>
          <p>test</p>
        </Form.Column>
      );
      expect(formColumnElement.childElementCount).to.equal(1);
    });

    describe('Column Count', function () {
      it('will render form with 2 columns', function() {
        renderForm(
          <Form>
            <Form.Column></Form.Column>
            <Form.Column></Form.Column>
          </Form>
        );
        expect(formElement.firstChild.className).to.contain("column-num-2");
        expect(formElement.lastChild.className).to.contain("column-num-2");
      });

      it('will render form with 3 columns', function() {
        renderForm(
          <Form>
            <Form.Column></Form.Column>
            <Form.Column></Form.Column>
            <Form.Column></Form.Column>
          </Form>
        );
        expect(formElement.firstChild.className).to.contain("column-num-3");
        expect(formElement.children[1].className).to.contain("column-num-3");
        expect(formElement.lastChild.className).to.contain("column-num-3");
      });
    });
  });

  describe('Form Row', function () {
    let formRowElement;

    function renderFormRow(formRowComponent){
      subject = ReactTestUtils.renderIntoDocument(formRowComponent);
      formRowElement = ReactDOM.findDOMNode(subject.refs.row);
    }

    it('will render the form row', function() {
      renderFormRow(<Form.Row></Form.Row>);
      expect(formRowElement.className).to.contain("pt-form-row");
    });

    it('will render the form row with input size default large', function() {
      renderFormRow(<Form.Row></Form.Row>);
      expect(formRowElement.className).to.contain("large-input");
    });

    it('will render the form row with input size large if large is passed', function() {
      renderFormRow(<Form.Row inputSize="large"></Form.Row>);
      expect(formRowElement.className).to.contain("large-input");
    });

    it('will render the form row with input size large if medium is passed', function() {
      renderFormRow(<Form.Row inputSize="medium"></Form.Row>);
      expect(formRowElement.className).to.contain("medium");
    });

    it('will render the form row with input size large if small is passed', function() {
      renderFormRow(<Form.Row inputSize="small"></Form.Row>);
      expect(formRowElement.className).to.contain("small");
    });
  });

  describe('Form Actions', function () {
    let formActionsElement;

    function renderFormActions(formActionsComponent){
      subject = ReactTestUtils.renderIntoDocument(formActionsComponent);
      formActionsElement = ReactDOM.findDOMNode(subject.refs.actions);
    }

    it('will render the form actions component', function() {
      renderFormActions(<Form.Actions></Form.Actions>);
      expect(formActionsElement.className).to.contain("pt-form-actions");
    });

    it("will render the form actions with it's children", function() {
      renderFormActions(
        <Form.Actions>
          <p>test</p>
        </Form.Actions>
      );
      expect(formActionsElement.childElementCount).to.equal(1);
    });
  });

  describe('Form Title', function () {
    let formTitleElement, formTitleActionsElement, formTitleDescriptionElement;

    function renderFormActions(formActionsComponent){
      subject = ReactTestUtils.renderIntoDocument(formActionsComponent);
      formTitleElement = ReactDOM.findDOMNode(subject.refs.title);
      formTitleActionsElement = ReactDOM.findDOMNode(subject.refs.actions);
      formTitleDescriptionElement = ReactDOM.findDOMNode(subject.refs.description);
    }

    it('will render the form title component', function() {
      renderFormActions(<Form.Title></Form.Title>);
      expect(formTitleElement.className).to.contain("pt-form-title");
      expect(formTitleActionsElement.className).to.contain("pt-form-title-actions");
      expect(formTitleDescriptionElement.className).to.contain("pt-form-title-description");
    });

    it('will render the form title with a title', function() {
      const testTitle = "test title";
      renderFormActions(<Form.Title title={testTitle}></Form.Title>);
      expect(formTitleElement.firstChild.innerHTML).to.equal(testTitle);
    });

    it('will render the form description that is passed', function() {
      renderFormActions(
        <Form.Title>
          <p>test description</p>
        </Form.Title>
      );
      expect(formTitleDescriptionElement.childElementCount).to.equal(1);
    });

    it('will render the form actions that is passed', function() {
      const testActions = <button></button>;
      renderFormActions(<Form.Title actions={testActions}></Form.Title>);
      expect(formTitleActionsElement.childElementCount).to.equal(1);
    });
  });

  describe('Form Section', function () {
    let formSectionElement;

    function renderFormSection(formSectionComponent){
      subject = ReactTestUtils.renderIntoDocument(formSectionComponent);
      formSectionElement = ReactDOM.findDOMNode(subject.refs.section);
    }

    it('will render the form section component', function() {
      renderFormSection(<Form.Section></Form.Section>);
      expect(formSectionElement.className).to.contain("pt-form-section");
    });

    it('will render the form section with a divider by default', function() {
      renderFormSection(<Form.Section></Form.Section>);
      expect(formSectionElement.className).to.contain("pt-form-section-divider");
    });

    it('will render the form section with a divider if hideDivider is false', function() {
      renderFormSection(<Form.Section hideDivider={false}></Form.Section>);
      expect(formSectionElement.className).to.contain("pt-form-section-divider");
    });

    it('will render the form section without a divider if hideDivider is true', function() {
      renderFormSection(<Form.Section hideDivider={true}></Form.Section>);
      expect(formSectionElement.className).not.to.contain("pt-form-section-divider");
    });

    it('will render the form section with children that are passed to it', function() {
      renderFormSection(
        <Form.Section>
          <p>test</p>
        </Form.Section>
      );
      expect(formSectionElement.childElementCount).to.equal(1);
    });
  });

  describe('Form Section Title', function () {
    let formSectionTitleElement, formSectionTitleDescriptionElement;

    function renderFormSectionTitle(formSectionTitleComponent){
      subject = ReactTestUtils.renderIntoDocument(formSectionTitleComponent);
      formSectionTitleElement = ReactDOM.findDOMNode(subject.refs.title);
      formSectionTitleDescriptionElement = ReactDOM.findDOMNode(subject.refs.description);
    }

    it('will render the form section title component', function() {
      renderFormSectionTitle(<Form.SectionTitle></Form.SectionTitle>);
      expect(formSectionTitleElement.className).to.contain("pt-form-section-title");
      expect(formSectionTitleDescriptionElement.className).to.contain("pt-form-section-title-description");
    });

    it('will render the form section title with a title', function() {
      const testTitle = "test title";
      renderFormSectionTitle(<Form.SectionTitle title={testTitle}></Form.SectionTitle>);
      expect(formSectionTitleElement.firstChild.innerHTML).to.equal(testTitle);
    });

    it('will render the form section title with children that are passed to it', function() {
      renderFormSectionTitle(
        <Form.SectionTitle>
          <p>test</p>
        </Form.SectionTitle>
      );
      expect(formSectionTitleDescriptionElement.childElementCount).to.equal(1);
    });
  });

  describe('Form Alert', function () {
    let formAlertElement;

    function renderFormAlert(formAlertComponent){
      subject = ReactTestUtils.renderIntoDocument(formAlertComponent);
      formAlertElement = ReactDOM.findDOMNode(subject.refs.alert);
    }

    it('will render the form alert component', function() {
      renderFormAlert(<Form.Alert></Form.Alert>);
      expect(formAlertElement.className).to.contain("pt-form-alert");
    });

    it("will render the form alert with it's children", function() {
      renderFormAlert(
        <Form.Alert>
          <p>test</p>
        </Form.Alert>
      );
      expect(formAlertElement.childElementCount).to.equal(1);
    });
  });
});
