var React = require('react');
var Icon = require('./icon.jsx');

var Button = React.createClass({

  propTypes : {
    icon: React.PropTypes.string,
    className: React.PropTypes.string,
    primary: React.PropTypes.bool,
    secondary: React.PropTypes.bool,
    onClick: React.PropTypes.function,
    href: React.PropTypes.string,
    disabled: React.PropTypes.bool
  },

  render : function() {
    var icon;
    if (this.props.icon) {
        icon = (<Icon icon={ this.props.icon } />);
    }

    var classes = 'button';
    if (this.props.primary) classes += ' primary';
    else if (this.props.secondary) classes += ' secondary';
    if (this.props.className) classes += ' '+this.props.className;

    return (
      <button disabled={ this.props.disabled } className={ classes } onClick={ this._onClick }>
        { icon }
        <span className="text">
            { this.props.children }
        </span>
      </button>

    );
  },

  _onClick : function(e) {
    if (this.props.onClick) {
        var ret = this.props.onClick(e);
        if (ret === false) return;
    }
    if (this.props.href) {
        document.location.href = this.props.href;
    }
  }

});

module.exports = Button;
