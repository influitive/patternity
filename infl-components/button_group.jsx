var React      = require('react'),
    classNames = require('classnames');

var ButtonGroup = React.createClass({
  getDefaultProps: function() {
    return {
      layout:    'inline',
      grouped:   false,
      className: {}
    };
  },

  propTypes: {
    layout:     React.PropTypes.oneOf(['inline', 'stacked']),
    grouped:    React.PropTypes.bool,
    className:  React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object,
    ])
  },

  render: function() {
    return (
      <div className={this._classNames()} ref='buttonGroup'>
        {this.props.children}
      </div>
    );
  }
  _classNames: function () {
    return classNames(this.props.layout, this.props.className, {
      "button-group": true,
      "grouped"     : this.props.grouped
    });
  }
});

module.exports = ButtonGroup;
