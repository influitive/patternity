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

// import styles from './_button.scss';

var ButtonDropdown = (function (_Component) {
  _inherits(ButtonDropdown, _Component);

  function ButtonDropdown() {
    var _this = this;

    _classCallCheck(this, ButtonDropdown);

    _get(Object.getPrototypeOf(ButtonDropdown.prototype), 'constructor', this).call(this);

    this._toggleDropdownOptions = function (event) {
      if (_this.props.disabled) return;
      _this.setState({
        isDropdownOpen: !_this.state.isDropdownOpen
      });
    };

    this._isDropdownOpen = function () {
      return _this.state.isDropdownOpen ? 'show' : '';
    };

    this._buildDropdown = function () {
      return _this._populateOptions().map(_this._buildOption);
    };

    this._populateOptions = function () {
      return _this.props.children.length > 0 ? _this.props.children : _this.props.options;
    };

    this._buildOption = function (option, index) {
      return _react2['default'].createElement(
        'li',
        { className: 'option', key: 'option-' + index, onClick: _this._handleChange },
        option
      );
    };

    this._handleChange = function (key) {
      _this.props.onChange(key);
      _this.setState({
        isDropdownOpen: false
      });
    };

    this._getOptionsClasses = function () {
      var classes = 'options options-aligned-' + _this.props.alignDropdown;
      return classes;
    };

    this.state = {
      isDropdownOpen: false
    };
  }

  _createClass(ButtonDropdown, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { style: this.props.style, className: 'button-dropdown ' + this._isDropdownOpen(), disabled: this.props.disabled, ref: 'buttonDropdown' },
        _react2['default'].createElement(
          'button',
          { className: this.props.type, onClick: this._toggleDropdownOptions, ref: 'button' },
          _react2['default'].createElement(
            'span',
            { ref: 'title' },
            this.props.title
          ),
          _react2['default'].createElement('span', { className: 'arrow ic ic-chevron-down', ref: 'icon' })
        ),
        _react2['default'].createElement(
          'ul',
          { className: this._getOptionsClasses(), ref: 'options' },
          this._buildDropdown()
        )
      );
    }
  }], [{
    key: 'defaultProps',
    value: {
      title: '',
      type: '',
      options: [],
      children: [],
      alignDropdown: 'left',
      onChange: function onChange() {},
      style: {},
      disabled: false
    },
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      title: _react.PropTypes.string,
      type: _react.PropTypes.oneOf(['success', 'danger', 'primary', 'important', 'secondary', '']),
      options: _react.PropTypes.array,
      children: _react.PropTypes.array,
      alignDropdown: _react.PropTypes.oneOf(['left', 'right']),
      onChange: _react.PropTypes.func,
      style: _react.PropTypes.shape({
        borderColor: function borderColor(props, propName) {
          var type = props.type;

          if (type != 'secondary') {
            return new Error('Cannot use border with non-secondary type.');
          }
        }
      }),
      disabled: _react.PropTypes.bool
    },
    enumerable: true
  }]);

  return ButtonDropdown;
})(_react.Component);

exports['default'] = ButtonDropdown;
module.exports = exports['default'];