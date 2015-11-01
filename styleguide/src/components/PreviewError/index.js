
// Unfortunately, this error component isn't run through babel because react-transform-catch-errors doesn't run this content
// through babel.
'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

//import s from './Error.css'

var PreviewError = (function (_Component) {
  _inherits(PreviewError, _Component);

  function PreviewError() {
    _classCallCheck(this, PreviewError);

    _Component.apply(this, arguments);
  }

  PreviewError.prototype.render = function render() {
    var error = this.props.error;

    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'div',
        {className: 'PreviewError'},
        error.name,
        ': ',
        error.message
      )
    );
  };

  _createClass(PreviewError, null, [{
    key: 'propTypes',
    value: {
      error: _react.PropTypes.instanceOf(Error).isRequired
    },
    enumerable: true
  }]);

  return PreviewError;
})(_react.Component);

exports['default'] = PreviewError;
module.exports = exports['default'];
