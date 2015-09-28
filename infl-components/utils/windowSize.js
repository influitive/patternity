"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
};

module.exports = exports["default"];