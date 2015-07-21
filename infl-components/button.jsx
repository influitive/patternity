var React = require('react');

var buttonTypes = ['primary', 'secondary', 'important', 'success', 'danger', 'text'];

var Button = React.createClass({

  propTypes : {
    icon: React.PropTypes.string,
    className: React.PropTypes.string,
    type: React.PropTypes.string,
    onClick: React.PropTypes.func,
    href: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    inverse: React.PropTypes.bool
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

    if (this.props.disabled) {
      classes += ' disabled';
    }
    else if (this.props.type && buttonTypes.indexOf(this.props.type)>-1) {
      classes += ' ' + this.props.type;

      if ((this.props.type==='secondary' || this.props.type==='text') && this.props.inverse) {
        classes += ' inverse';
      }
    }

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
