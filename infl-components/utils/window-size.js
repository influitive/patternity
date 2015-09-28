"use strict";

exports.__esModule = true;

exports["default"] = function () {
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  return { width: width, height: height };
};

module.exports = exports["default"];