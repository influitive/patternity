'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _accordionBody = require('./accordion-body');

var _accordionBody2 = _interopRequireDefault(_accordionBody);

var _accordionHeader = require('./accordion-header');

var _accordionHeader2 = _interopRequireDefault(_accordionHeader);

// import style from './_accordion.scss';

var Accordion = (function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion() {
    var _this = this;

    _classCallCheck(this, Accordion);

    _get(Object.getPrototypeOf(Accordion.prototype), 'constructor', this).apply(this, arguments);

    this._buildSection = function (section, index) {
      return _react2['default'].createElement(
        'li',
        { className: 'accordion-section', key: 'accordion-section-' + index },
        _react2['default'].createElement(_accordionHeader2['default'], _extends({}, section, { index: index,
          open: _this._isSectionOpen(index, section.isEnabled),
          toggleOne: _this._toggleOne })),
        _react2['default'].createElement(_accordionBody2['default'], { open: _this._isSectionOpen(index, section.isEnabled), body: section.body })
      );
    };

    this._isSectionOpen = function (index, isEnabled) {
      return index === _this.state.openSectionIndex && isEnabled;
    };

    this._toggleOne = function (id) {
      if (_this.state.openSectionIndex === id) {
        _this.setState({ openSectionIndex: -1 });
      } else {
        _this.setState({ openSectionIndex: id });
      }
    };

    this._uniqueIdentifier = null;
  }

  _createClass(Accordion, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ openSectionIndex: nextProps.openSectionIndex });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this._uniqueIdentifier !== this.props.uniqueIdentifier) {
        this.setState({
          openSectionIndex: this.props.openSectionIndex
        });
      }
      this._uniqueIdentifier = this.props.uniqueIdentifier;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'ul',
        { className: 'accordion' },
        this.props.sections.map(this._buildSection)
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      sections: _react.PropTypes.array.isRequired,
      uniqueIdentifier: _react.PropTypes.string,
      openSectionIndex: function openSectionIndex(props) {
        var n = props.openSectionIndex;

        if (n == null) return;
        if (typeof n !== 'number' || n !== parseInt(n, 10) || n < 0) {
          return new Error('Invalid `openSectionIndex` supplied to `Accordion`' + ', expected a positive integer');
        }
      }
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      openSectionIndex: null,
      sections: []
    },
    enumerable: true
  }]);

  return Accordion;
})(_react.Component);

exports['default'] = Accordion;
module.exports = exports['default'];