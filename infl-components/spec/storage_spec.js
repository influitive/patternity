var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

var storage   = require('utilities/storage');

chai.use(sinonChai);

xdescribe('Storage', function() {
  var subject, key, value;
  var sandbox = sinon.sandbox.create();

  beforeEach(function(){
    subject = new storage();
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
      expect(localStorage.setItem).to.have.been.calledWith(key, value);
    });

    it('stringify the value before storing it', function () {
      value = {"test string" : "test"};
      subject.setItem(key, value);
      expect(localStorage.setItem).to.have.been.calledWith(key, JSON.stringify(value));
    });
  });
});
