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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('babel/polyfill');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _reactOverlays = require('react-overlays');

var _popoverContent = require('./popover-content');

var _popoverContent2 = _interopRequireDefault(_popoverContent);

var _popoverScss = require('./_popover.scss');

var _popoverScss2 = _interopRequireDefault(_popoverScss);

var Popover = (function (_Component) {
  _inherits(Popover, _Component);

  function Popover() {
    _classCallCheck(this, Popover);

    _get(Object.getPrototypeOf(Popover.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Popover, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.isOpen) {
        this.props.onOpen();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _reactOverlays.Overlay,
          {
            show: this.props.isOpen,
            placement: this.props.position,
            container: document.body,
            target: function (props) {
              return _this.refs.element;
            }
          },
          _react2['default'].createElement(
            _popoverContent2['default'],
            {
              position: this.props.position,
              shouldHaveBorder: this._shouldHaveBorder(),
              style: this.props.style
            },
            this.props.children
          )
        ),
        _react2['default'].createElement(
          'div',
          { ref: 'element', style: { display: 'inline-block' } },
          this.props.element
        )
      );
    }
  }, {
    key: '_shouldHaveBorder',
    value: function _shouldHaveBorder() {
      var _props$style = this.props.style;
      var borderColor = _props$style.borderColor;
      var background = _props$style.background;

      return borderColor && !background.includes('rgba');
    }
  }], [{
    key: 'propTypes',
    value: {
      isOpen: _react.PropTypes.bool.isRequired,
      position: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
      containerSelector: _react.PropTypes.string,
      element: _react.PropTypes.any.isRequired,
      onOpen: _react.PropTypes.func,

      style: _react.PropTypes.shape({
        background: _react.PropTypes.string.isRequired,
        borderColor: function borderColor(props, propName) {
          var background = props.background;
          var borderColor = props.borderColor;

          if (borderColor && background.includes('rgba')) {
            return new Error('Cannot use border with transparent background');
          }
        }
      })
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      isOpen: false,
      position: 'top',
      containerSelector: 'body',
      onOpen: function onOpen() {},

      style: {
        borderColor: '#ccc',
        background: 'white'
      }
    },
    enumerable: true
  }]);

  return Popover;
})(_react.Component);

exports['default'] = Popover;
module.exports = exports['default'];