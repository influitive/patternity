var React = require('react');
var $ = require('jquery');
var classNames = require('classnames');

var ModalDialog = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    closeable: React.PropTypes.bool,
    size: React.PropTypes.oneOf(['small', 'medium', 'large']),
    scrollingBody: React.PropTypes.bool,
    lightbox: React.PropTypes.bool,
    keyboard: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      id: '',
      closeable: true,
      size: 'medium',
      onClose: function() {},
      isModalOpen: false,
      scrollingBody: false,
      lightbox: true,
      keyboard: true
    };
  },

  getInitialState: function() {
    // TODO remove all open/closed state from modal and let calling container handle it
    return {
      isModalOpen: this.props.isModalOpen,
      isModalClosing: false
    };
  },

  componentWillReceiveProps: function(newProps) {
    // TODO this should go away once modal_dialog doesn't care about its state anymore
    // For now we're tracking whether or not a modal was *previously* open and is now closing
    // so as to trigger the onClose callbacks only once in that case (in case this component)
    // were still rendered in the DOM
    var isClosing = this.props.isModalOpen && newProps.isModalOpen === false;

    this.setState({
      isModalOpen: newProps.isModalOpen,
      isModalClosing: isClosing
    });
  },

  componentDidUpdate: function() {
    if (this.state.isModalOpen) {
      $(window).on('keydown.escapePressed', this._handleEscape);
      this._disableBodyScroll();
    } else if (this.state.isModalClosing) {
      this._onClose();
    }
  },

  componentDidMount: function() {
    if (this.props.isModalOpen) { this._disableBodyScroll(); }
  },

  componentWillUnmount: function() {
    this._onClose();
  },

  render: function() {
    return (
      <div id={this.props.id} className={this._classNames().ptModalDialog}
        onClick={this._closeDialog}
        ref='modalDialog'>
        <section className={'pt-modal ' + this.props.size} ref='modal'>
          <span className={this._classNames().span} onClick={this._closeDialog} ref='close'></span>
          {this.props.children}
        </section>
      </div>
    );
  },

  _classNames: function() {
    return {
      ptModalDialog: classNames({
        'pt-modal-dialog': true,
        'close': !this.state.isModalOpen,
        'scrolling-body': this.props.scrollingBody,
        'lightbox': this.props.lightbox
      }),
      span: classNames({
        'close-dialog': true,
        'ic': true,
        'ic-times': true,
        'disable-close': !this.props.closeable
      })
    };
  },

  _closeDialog: function(event) {
    if(this.props.closeable && this._isClosableElement(event.target)) {
      this._dismissDialog();
    }
  },

  _isClosableElement: function(target) {
    return target.className.indexOf('close-dialog') > -1 || target.className.indexOf('pt-modal-dialog') > -1;
  },

  _dismissDialog: function() {
    this.setState({
      isModalOpen: false
    }, this._onClose);
  },

  _handleEscape: function() {
    if(event.keyCode === 27 && this.props.closeable && this.props.keyboard) {
      $(window).off('keydown.escapePressed');
      this._dismissDialog();
    }
  },

  _onClose: function() {
    this.props.onClose();
    this._enableBodyScroll();
  },

  _disableBodyScroll: function() {
    document.body.style.overflow = 'hidden';
  },

  _enableBodyScroll: function() {
    document.body.style.overflow = 'auto';
  }
});

ModalDialog.Header = React.createClass({
  getDefaultProps: function() {
    return {
      title: ''
    };
  },

  propTypes: {
    title: React.PropTypes.string
  },

  render: function() {
    return (
      <div className='pt-modal-header'>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
});

ModalDialog.Body = React.createClass({
  render: function() {
    return (
      <div className='pt-modal-body'>
        {this.props.children}
      </div>
    );
  }
});

ModalDialog.Footer = React.createClass({
  render: function() {
    return (
      <div className='pt-modal-footer'>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ModalDialog;
