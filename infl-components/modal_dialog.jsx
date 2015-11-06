var React = require('react');
var $ = require('jquery');
var classNames = require('classnames');

class ModalDialog extends React.Component {
  static displayName = 'ModalDialog'

  static propTypes = {
    id:            React.PropTypes.string,
    closeable:     React.PropTypes.bool,
    size:          React.PropTypes.oneOf(['small', 'medium', 'large']),
    onClose:       React.PropTypes.func,
    isModalOpen:   React.PropTypes.bool,
    scrollingBody: React.PropTypes.bool,
    lightbox:      React.PropTypes.bool,
    keyboard:      React.PropTypes.bool
  }

  static defaultProps = {
    id:            '',
    closeable:     true,
    size:          'medium',
    onClose:       function() {},
    isModalOpen:   false,
    scrollingBody: false,
    lightbox:      true,
    keyboard:      true
  }

  state = {
    isModalOpen:    props.isModalOpen,
    isModalClosing: false
  }

  componentWillReceiveProps(newProps) {
    // TODO this should go away once modal_dialog doesn't care about its state anymore
    // For now we're tracking whether or not a modal was *previously* open and is now closing
    // so as to trigger the onClose callbacks only once in that case (in case this component)
    // were still rendered in the DOM
    var isClosing = this.props.isModalOpen && newProps.isModalOpen === false;

    this.setState({
      isModalOpen:    newProps.isModalOpen,
      isModalClosing: isClosing
    });
  }

  componentDidUpdate() {
    if (this.state.isModalOpen) {
      $(window).on('keydown.escapePressed', this._handleEscape);
      this._disableBodyScroll();
    } else if (this.state.isModalClosing) {
      this._onClose();
    }
  }

  componentDidMount() {
    if (this.props.isModalOpen) { this._disableBodyScroll(); }
  }

  componentWillUnmount() {
    this._onClose();
  }

  render() {
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
  }

  _classNames() {
    return {
      ptModalDialog: classNames({
        'pt-modal-dialog': true,
        'close':           !this.state.isModalOpen,
        'scrolling-body':  this.props.scrollingBody,
        'lightbox':        this.props.lightbox
      }),
      span: classNames({
        'close-dialog':  true,
        'ic':            true,
        'ic-times':      true,
        'disable-close': !this.props.closeable
      })
    };
  }

  _closeDialog = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (this.props.closeable && this._isClosableElement(event.target)) {
      this._dismissDialog();
    }
  }

  _isClosableElement(target) {
    return target.className.indexOf('close-dialog') > -1 || target.className.indexOf('pt-modal-dialog') > -1;
  }

  _dismissDialog() {
    this.setState({
      isModalOpen: false
    }, this._onClose);
  }

  _handleEscape = (event) => {
    var ESCAPE_KEY_CODE = 27;
    if (event.keyCode === ESCAPE_KEY_CODE && this.props.closeable && this.props.keyboard) {
      $(window).off('keydown.escapePressed');
      this._dismissDialog();
    }
  }

  _onClose = () => {
    this.props.onClose();
    this._enableBodyScroll();
  }

  _disableBodyScroll() {
    document.body.style.overflow = 'hidden';
  }

  _enableBodyScroll() {
    document.body.style.overflow = 'auto';
  }
}

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

export default ModalDialog;