'use strict';

exports.__esModule = true;

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

var PopoverArrow = (function (_Component) {
  _inherits(PopoverArrow, _Component);

  function PopoverArrow() {
    _classCallCheck(this, PopoverArrow);

    _get(Object.getPrototypeOf(PopoverArrow.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(PopoverArrow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._updateArrowPosition();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this._updateArrowPosition();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var position = _props.position;
      var style = _props.style;
      var shouldHaveBorder = _props.shouldHaveBorder;
      var borderColor = style.borderColor;
      var background = style.background;

      if (!shouldHaveBorder) borderColor = 'transparent';

      var borderPos = position === 'bottom' ? 'Bottom' : 'Top';
      return _react2['default'].createElement(
        'div',
        { className: 'pt-popover-arrow-container ' + position, ref: 'arrowContainer' },
        _react2['default'].createElement(
          'span',
          { className: 'pt-popover-arrow', ref: 'arrow', style: _defineProperty({}, 'border' + borderPos + 'Color', borderColor) },
          _react2['default'].createElement('span', { className: 'pt-popover-arrow inner ' + (shouldHaveBorder ? '' : 'no-border'),
            style: _defineProperty({}, 'border' + borderPos + 'Color', background) })
        )
      );
    }
  }, {
    key: '_updateArrowPosition',
    value: function _updateArrowPosition() {
      var arrow = this.refs.arrow;
      var arrowContainer = this.refs.arrowContainer;
      arrowContainer.style.left = this._determineArrowPositionStyling(this.props.arrowOffsetLeft, arrow.offsetWidth);
      arrowContainer.style.top = this._determineArrowPositionStyling(this.props.arrowOffsetTop, arrow.offsetHeight);
    }
  }, {
    key: '_determineArrowPositionStyling',
    value: function _determineArrowPositionStyling(offset, width) {
      return "calc(" + offset + " - " + width / 2 + "px)";
    }
  }], [{
    key: 'propTypes',
    value: {
      position: _react.PropTypes.oneOf(['top', 'bottom']),
      shouldHaveBorder: _react.PropTypes.bool.isRequired,
      style: _react.PropTypes.shape({
        background: _react.PropTypes.string.isRequired,
        borderColor: _react.PropTypes.string.isRequired
      })
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      position: 'top',
      style: {
        borderColor: '#ccc',
        background: 'white'
      }
    },
    enumerable: true
  }]);

  return PopoverArrow;
})(_react.Component);

exports['default'] = PopoverArrow;
module.exports = exports['default'];