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

var _button2 = require('../button2');

var _button22 = _interopRequireDefault(_button2);

var _buttonDropdown = require('../button-dropdown');

var _buttonDropdown2 = _interopRequireDefault(_buttonDropdown);

var _buttonGroup = require('../button-group');

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var SplitButtonDropdown = (function (_Component) {
  _inherits(SplitButtonDropdown, _Component);

  function SplitButtonDropdown() {
    _classCallCheck(this, SplitButtonDropdown);

    _get(Object.getPrototypeOf(SplitButtonDropdown.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SplitButtonDropdown, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _buttonGroup2['default'],
        { grouped: true },
        _react2['default'].createElement(_button22['default'], { icon: this.getIcon(),
          type: this.props.type,
          onClick: this.props.onPrimaryClick,
          disabled: this.props.disabled }),
        _react2['default'].createElement(_buttonDropdown2['default'], { type: this.props.type,
          options: this.props.options,
          alignDropdown: 'right',
          onChange: this.props.onDropdownItemSelect,
          disabled: this.props.disabled })
      );
    }
  }], [{
    key: 'defaultProps',
    value: {
      icon: '',
      type: 'primary',
      disabled: false,
      style: {},
      options: [],
      onDropdownItemSelect: function onDropdownItemSelect() {}
    },
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      icon: _react.PropTypes.string,
      type: _react.PropTypes.oneOf(['primary', 'secondary', 'important', 'success', 'danger', 'text']),
      onPrimaryClick: _react.PropTypes.func.isRequired,
      disabled: _react.PropTypes.bool,
      style: _react.PropTypes.shape({
        borderColor: function borderColor(props, propName) {
          var type = props.type;

          if (type != 'secondary') {
            return new Error('Cannot use border with non-secondary type.');
          }
        }
      }),
      options: _react.PropTypes.array,
      onDropdownItemSelect: _react.PropTypes.func
    },
    enumerable: true
  }]);

  return SplitButtonDropdown;
})(_react.Component);

exports['default'] = SplitButtonDropdown;
module.exports = exports['default'];