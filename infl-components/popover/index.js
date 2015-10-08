'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('babel/polyfill');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _positionPopover = require('./position-popover');

var _positionPopover2 = _interopRequireDefault(_positionPopover);

// import style from './_popover.scss';

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
        _positionPopover2['default'](this.getPopoverElements(), this.props.position);
        this.props.onOpen();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var element = _props.element;
      var style = _props.style;
      var isOpen = _props.isOpen;
      var position = _props.position;
      var children = _props.children;

      var contentBorder = this.shouldHaveBorder() ? style.borderColor : 'transparent';

      return _react2['default'].createElement(
        'div',
        { className: 'pt-popover', ref: 'popover' },
        !isOpen ? null : _react2['default'].createElement(
          'div',
          null,
          this.createArrow(),
          _react2['default'].createElement(
            'div',
            { className: 'pt-popover-content', ref: 'content', style: _extends({}, style, { borderColor: contentBorder }) },
            children
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'pt-popover-element', ref: 'element' },
          element
        )
      );
    }
  }, {
    key: 'shouldHaveBorder',
    value: function shouldHaveBorder() {
      var _props$style = this.props.style;
      var borderColor = _props$style.borderColor;
      var background = _props$style.background;

      return borderColor && !background.includes('rgba');
    }
  }, {
    key: 'createArrow',
    value: function createArrow() {
      var _props2 = this.props;
      var position = _props2.position;
      var style = _props2.style;
      var borderColor = style.borderColor;
      var background = style.background;

      if (!this.shouldHaveBorder()) borderColor = 'transparent';

      var borderPos = position === 'bottom' ? 'Bottom' : 'Top';
      return _react2['default'].createElement(
        'div',
        { className: 'pt-popover-arrow-container ' + position, ref: 'arrow' },
        _react2['default'].createElement(
          'span',
          { className: 'pt-popover-arrow', style: _defineProperty({}, 'border' + borderPos + 'Color', borderColor) },
          _react2['default'].createElement('span', { className: 'pt-popover-arrow inner ' + (this.shouldHaveBorder() ? '' : 'no-border'),
            style: _defineProperty({}, 'border' + borderPos + 'Color', background) })
        )
      );
    }
  }, {
    key: 'getPopoverElements',
    value: function getPopoverElements() {
      return {
        arrow: _react2['default'].findDOMNode(this.refs.arrow),
        element: _react2['default'].findDOMNode(this.refs.element),
        content: _react2['default'].findDOMNode(this.refs.content),
        container: _jquery2['default'](this.props.containerSelector).get(0)
      };
    }
  }], [{
    key: 'propTypes',
    value: {
      isOpen: _react.PropTypes.bool.isRequired,
      position: _react.PropTypes.oneOf(['top', 'bottom']),
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