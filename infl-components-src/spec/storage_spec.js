const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const storage   = require('utilities/storage');

chai.use(sinonChai);

xdescribe('Storage', function() {
  let subject, key, value;
  const sandbox = sinon.sandbox.create();

  beforeEach(function(){
    subject = storage;
    key = "test-key";
  });

  describe("Set item", function(){
    beforeEach(function(){
      sandbox.stub(localStorage, 'setItem');
    });

    afterEach(function(){
      sandbox.restore();
    });

    it('will save a key value pair', function () {
      value = "test string";
      subject.setItem(key, value);
      expect(localStorage.setItem).to.have.been.calledWith(key, JSON.stringify(value));
    });

    it('stringify the value before storing it', function () {
      value = {"test string" : "test"};
      subject.setItem(key, value);
      expect(localStorage.setItem).to.have.been.calledWith(key, JSON.stringify(value));
    });
  });
});
