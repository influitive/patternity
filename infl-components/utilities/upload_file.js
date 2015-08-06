var _ = require("lodash");

var UploadFile = function(initializeFilepicker, uploadOptions){

  function init(){
    initializeFilepicker();
  }

  function upload(onSuccess){
    window.filepicker.pick(uploadOptions(), onSuccess, onError);
  }

  function uploadWithCrop(onSuccess, ratio){
    var optionsWithCrop = uploadOptions();
    if(ratio){
      optionsWithCrop.cropRatio = ratio;
    }
    optionsWithCrop.services.push('CONVERT');

    window.filepicker.pick(optionsWithCrop, onSuccess, onError);
  }

  function covertToImage(onSuccess, blob, convertOptions, storageOptions){
    storageOptions = storageOptions || {};
    window.filepicker.convert(blob, convertOptions, storageOptions, onSuccess, onError);
  }

  function uploadAndCompress(onSuccess, compressionOptions){
    var optionsWithCompression = _.extend(uploadOptions(), compressionOptions);
    window.filepicker.pick(optionsWithCompression, onSuccess, onError);
  }

  function onError(FPError){
    console.log(FPError);
  }

  return {
    init : init,
    upload : upload,
    uploadWithCrop : uploadWithCrop,
    covertToImage : covertToImage,
    uploadAndCompress : uploadAndCompress
  };
};

var InitializeFilepicker = function(){
  var filepickerApiKey = 'A0HwTllqOQMGhtATyx9euz';
  var filepickerMethods = [
    "pick",
    "pickMultiple",
    "pickAndStore",
    "read",
    "write",
    "writeUrl",
    "export",
    "convert",
    "store",
    "storeUrl",
    "remove",
    "stat",
    "setKey",
    "constructWidget",
    "makeDropPane"
  ];
  var filepickerVersion = "v2";

  function init(_filepickerVersion){
    if(window.filepicker){
      return;
    }

    filepickerVersion = _filepickerVersion || filepickerVersion;

    _addScriptTagToDOM();
    _buildFilepicker();

    _setFilepickerApiKey();
  }

  function _addScriptTagToDOM(){
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(_createScriptTag(),firstScriptTag);
  }

  function _createScriptTag(){
    var filepickerScriptTag = document.createElement("script");
    filepickerScriptTag.type="text/javascript";
    filepickerScriptTag.async=!0;
    filepickerScriptTag.src=("https:"===document.location.protocol?"https:":"http:")+"//api.filepicker.io/" + filepickerVersion + "/filepicker.js";
    return filepickerScriptTag;
  }

  function _buildFilepicker(){
    var filepicker={};
    filepicker._queue=[];

    for(var i = 0 ;i < filepickerMethods.length; i++){
      filepicker[filepickerMethods[i]] = _buildFilepickerFunction(filepickerMethods[i],filepicker._queue);
    }

    window.filepicker = filepicker;
  }

  function _buildFilepickerFunction(method,filepickerQueue){
    return function(){
      filepickerQueue.push([method,arguments]);
    };
  }

  function _setFilepickerApiKey(){
    window.filepicker.setKey(filepickerApiKey);
  }

  function options(){
    return {
      extensions: ['.png', '.jpg', '.jpeg', '.gif'],
      services: ['COMPUTER', 'IMAGE_SEARCH', 'URL', 'GOOGLE_DRIVE',
      'DROPBOX', 'BOX','EVERNOTE', 'GMAIL', 'FACEBOOK', 'INSTAGRAM', 'FLICKR']
    };
  }

  return {
    init : init,
    options : options
  };
};

var Filepicker = new InitializeFilepicker();
var uploadFile = new UploadFile(Filepicker.init, Filepicker.options);
uploadFile.init();
module.exports = uploadFile;
