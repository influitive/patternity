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

var _lodash = require('lodash');

// import styles from './_save-button.scss';

var _button2 = require('../button2');

var _button22 = _interopRequireDefault(_button2);

var SaveButton = (function (_Component) {
  _inherits(SaveButton, _Component);

  function SaveButton() {
    var _this = this;

    _classCallCheck(this, SaveButton);

    _get(Object.getPrototypeOf(SaveButton.prototype), 'constructor', this).apply(this, arguments);

    this.buttonStatus = function () {
      var _props = _this.props;
      var saveStatus = _props.saveStatus;
      var customText = _props.customText;

      var defaultButtonState = {
        'error': { text: 'Error', type: 'danger', icon: 'exclamation-circle-o' },
        'saved': { text: 'Saved', type: 'success', icon: 'check-circle-o' },
        'unsaved': { text: 'Save', type: 'primary' },
        'saving': { text: 'Saving', type: 'primary', icon: 'circle-empty' }
      };

      _lodash.forIn(customText, function (value, key) {
        defaultButtonState[key].text = value;
      });

      return defaultButtonState[saveStatus];
    };
  }

  _createClass(SaveButton, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var saveStatus = _props2.saveStatus;
      var onClick = _props2.onClick;

      var status = this.buttonStatus();
      return _react2['default'].createElement(
        'span',
        { className: 'pt-save-button' },
        _react2['default'].createElement(
          _button22['default'],
          {
            onClick: onClick,
            type: status.type,
            icon: status.icon },
          status.text
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      saveStatus: _react.PropTypes.oneOf(['unsaved', 'saved', 'saving', 'error']).isRequired,
      onClick: _react.PropTypes.func,

      customText: _react.PropTypes.shape({
        unsaved: _react.PropTypes.string,
        saved: _react.PropTypes.string,
        saving: _react.PropTypes.string,
        error: _react.PropTypes.string
      })
    },
    enumerable: true
  }]);

  return SaveButton;
})(_react.Component);

exports['default'] = SaveButton;
module.exports = exports['default'];