'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function positionPopover(popoverElements, position) {
  positionArrow(popoverElements, position);
  positionContent(popoverElements, position);

  if (isContentOutOfContainer(popoverElements)) {
    adjustContentPosition(popoverElements);
  }
}

function positionArrow(popoverElements, position) {
  popoverElements.arrow.style.left = popoverElements.element.offsetWidth / 2 - popoverElements.arrow.offsetWidth / 2 + 'px';
  popoverElements.arrow.style[position] = -1 * (popoverElements.arrow.offsetHeight + 4) + 'px';
}

function positionContent(popoverElements, position) {
  popoverElements.content.style.left = popoverElements.element.offsetWidth / 2 - popoverElements.content.offsetWidth / 2 + 'px';
  popoverElements.content.style[position] = -1 * (popoverElements.content.offsetHeight + popoverElements.arrow.offsetHeight) + 'px';
}

function isContentOutOfContainer(popoverElements) {
  var tooltipPos = popoverElements.content.getBoundingClientRect();
  var containerPos = popoverElements.container.getBoundingClientRect();

  return containerPos.left > tooltipPos.left || tooltipPos.right > containerPos.right;
}

function adjustContentPosition(popoverElements) {
  var tooltipPos = popoverElements.content.getBoundingClientRect();
  var containerPos = popoverElements.container.getBoundingClientRect();

  if (containerPos.left > tooltipPos.left) {
    popoverElements.content.style.left = -1 * ((0, _jquery2['default'])(popoverElements.element).offset().left - (0, _jquery2['default'])(popoverElements.container).offset().left) + 'px';
  } else if (tooltipPos.right > containerPos.right) {
    popoverElements.content.style.left = popoverElements.element.offsetWidth / 2 - popoverElements.content.offsetWidth / 2 - (tooltipPos.right - containerPos.right) + 'px';
  }
}

exports['default'] = positionPopover;
module.exports = exports['default'];