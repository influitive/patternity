var _ = require("lodash");

var FileUpload = function(_filepicker){
  function init(){
    _filepicker.init();
  }

  function upload(onSuccess){
    window.filepicker.pick(window.filepicker.options, onSuccess);
  }

  function uploadWithCrop(onSuccess, ratio){
    var optionsWithCrop = window.filepicker.options;
    if(ratio){
      optionsWithCrop.cropRatio = ratio;
    }
    optionsWithCrop.services.push('CONVERT');

    window.filepicker.pick(optionsWithCrop, onSuccess);
  }

  function covertToImage(onSuccess, blob, convertOptions, storageOptions){
    storageOptions = storageOptions || {};
    window.filepicker.convert(blob, convertOptions, storageOptions, onSuccess);
  }

  function uploadAndCompress(compressionOptions){
    var optionsWithCompression = _.extend(window.filepicker.options, compressionOptions);
    window.filepicker.pick(optionsWithCompression, onSuccess);
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
  var options = {
    mimetype: 'image/*',
    services: ['COMPUTER', 'IMAGE_SEARCH', 'URL', 'GOOGLE_DRIVE',
    'DROPBOX', 'BOX','EVERNOTE', 'GMAIL', 'FACEBOOK', 'INSTAGRAM', 'FLICKR']
  };

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

  return {
    init : init,
    options : options
  };
};

var fileUpload = new FileUpload(new InitializeFilepicker());
fileUpload.init();
module.exports = fileUpload;
