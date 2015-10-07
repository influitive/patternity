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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var AccordionHeader = (function (_Component) {
  _inherits(AccordionHeader, _Component);

  function AccordionHeader() {
    var _this = this;

    _classCallCheck(this, AccordionHeader);

    _get(Object.getPrototypeOf(AccordionHeader.prototype), 'constructor', this).apply(this, arguments);

    this._toggleContent = function () {
      if (_this.props.isEnabled) {
        _this.props.toggleOne(_this.props.index);
      }
    };
  }

  _createClass(AccordionHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var open = _props.open;
      var isEnabled = _props.isEnabled;
      var header = _props.header;

      var classes = function classes() {
        return _classnames2['default']('section-heading', { open: open, disabled: !isEnabled });
      };

      return _react2['default'].createElement(
        'h3',
        { className: classes(), onClick: this._toggleContent },
        header
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      open: _react.PropTypes.bool,
      isEnabled: _react.PropTypes.bool
    },
    enumerable: true
  }]);

  return AccordionHeader;
})(_react.Component);

exports['default'] = AccordionHeader;
module.exports = exports['default'];