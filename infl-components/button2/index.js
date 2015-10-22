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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

// Will need to break this style up between dropdown button a
// import styles from './_button.scss';

var Button = (function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    var _this = this;

    _classCallCheck(this, Button);

    _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).apply(this, arguments);

    this._buttonType = function () {
      if (_this.isSubmit) return 'submit';else return 'button';
    };

    this.getClasses = function () {
      var _ref;

      var buttonTypes = ['primary', 'secondary', 'important', 'success', 'danger', 'text'];
      var _props = _this.props;
      var disabled = _props.disabled;
      var inverse = _props.inverse;
      var type = _props.type;
      var children = _props.children;
      var className = _props.className;
      var icon = _props.icon;

      return _classnames2['default']({
        button: true,
        disabled: disabled,
        iconButton: children && children.length === 0
      }, icon && 'ic ic-' + icon, !disabled && (_ref = {}, _defineProperty(_ref, type, true), _defineProperty(_ref, 'inverse', (type === 'secondary' || type === 'text') && inverse), _ref));
    };
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var disabled = _props2.disabled;
      var onClick = _props2.onClick;
      var children = _props2.children;

      return _react2['default'].createElement(
        'button',
        { style: this.props.style, type: this._buttonType(), disabled: disabled, className: this.getClasses(), onClick: onClick },
        children
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      icon: _react.PropTypes.string,
      type: _react.PropTypes.oneOf(['primary', 'secondary', 'important', 'success', 'danger', 'text']),
      onClick: _react.PropTypes.func.isRequired,
      disabled: _react.PropTypes.bool,
      inverse: _react.PropTypes.bool,
      isSubmit: _react.PropTypes.bool,
      style: _react.PropTypes.object
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      type: 'primary',
      disabled: false,
      inverse: false,
      isSubmit: false
    },
    enumerable: true
  }]);

  return Button;
})(_react.Component);

exports['default'] = Button;
module.exports = exports['default'];