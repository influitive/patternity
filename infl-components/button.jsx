var React = require('react');

var Button = React.createClass({

  propTypes : {
    icon: React.PropTypes.string,
    className: React.PropTypes.string,
    primary: React.PropTypes.bool,
    secondary: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    href: React.PropTypes.string,
    disabled: React.PropTypes.bool
  },

  render : function() {
    return (
      <button disabled={ this.props.disabled } className={ this._getClasses() } onClick={ this._onClick }>
        { this.props.children }
      </button>
    );
  },

  _getClasses : function() {
    var classes = 'button';
    if (this.props.primary) classes += ' primary';
    else if (this.props.secondary) classes += ' secondary';
    if (this.props.className) classes += ' '+this.props.className;
    if (this.props.icon) classes += ' ic ic-'+this.props.icon;
    return classes;
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
