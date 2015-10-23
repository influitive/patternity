'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _popoverArrow = require('./popover-arrow');

var _popoverArrow2 = _interopRequireDefault(_popoverArrow);

var PopoverContent = (function (_Component) {
  _inherits(PopoverContent, _Component);

  function PopoverContent() {
    _classCallCheck(this, PopoverContent);

    _get(Object.getPrototypeOf(PopoverContent.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(PopoverContent, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'pt-popover ' + this.props.position, ref: 'popover', style: this._popoverPositioningStyle() },
        _react2['default'].createElement(_popoverArrow2['default'], {
          position: this.props.position,
          shouldHaveBorder: this.props.shouldHaveBorder,
          style: this.props.style,
          ref: 'arrow',
          arrowOffsetLeft: this.props.arrowOffsetLeft,
          arrowOffsetTop: this.props.arrowOffsetTop }),
        _react2['default'].createElement(
          'div',
          { className: 'pt-popover-content', ref: 'content', style: this._contentStyle() },
          this.props.children
        )
      );
    }
  }, {
    key: '_popoverPositioningStyle',
    value: function _popoverPositioningStyle() {
      return {
        left: this.props.style.left,
        top: this.props.style.top
      };
    }
  }, {
    key: '_contentStyle',
    value: function _contentStyle() {
      var borderColor = this.props.shouldHaveBorder ? this.props.style.borderColor : 'transparent';

      return {
        borderColor: borderColor,
        background: this.props.style.background
      };
    }
  }], [{
    key: 'propTypes',
    value: {
      position: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
      shouldHaveBorder: _react.PropTypes.bool.isRequired,

      style: _react.PropTypes.shape({
        background: _react.PropTypes.string.isRequired,
        borderColor: _react.PropTypes.string.isRequired
      }),
      arrowOffsetLeft: _react.PropTypes.string,
      arrowOffsetTop: _react.PropTypes.string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      position: 'top',
      style: {
        borderColor: '#ccc',
        background: 'white',
        top: null,
        left: null
      },
      arrowOffsetLeft: undefined,
      arrowOffsetTop: undefined
    },
    enumerable: true
  }]);

  return PopoverContent;
})(_react.Component);

exports['default'] = PopoverContent;
module.exports = exports['default'];