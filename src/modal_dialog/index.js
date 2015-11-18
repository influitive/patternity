import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

// React Utils
import classNames from 'classnames';

// Main Container Class
export default class Modal extends Component {

  static propTypes = {
    id:            PropTypes.string,
    closeable:     PropTypes.bool,
    size:          PropTypes.oneOf(['small', 'medium', 'large']),
    onClose:       PropTypes.func,
    isModalOpen:   PropTypes.bool,
    scrollingBody: PropTypes.bool,
    lightbox:      PropTypes.bool,
    keyboard:      PropTypes.bool
  };

  static defaultProps = {
    id:            '',
    closeable:     true,
    size:          'medium',
    onClose:       function() {},
    isModalOpen:   true,
    scrollingBody: false,
    lightbox:      true,
    keyboard:      true
  };

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: this.props.isModalOpen,
      isModalClosing: false
    }
  }

  componentWillReceiveProps(newProps) {

  }

  componentWillMount() {

  }

  render() {

    return (
      <div id={ this.props.id } className={ this._classNames().ptModalDialog } ref='modalDialog'onClick={ this._closeDialog }>

        <section className = {'pt-modal ' + this.props.size} ref = 'modal'>
          <span className={this._classNames().span} onClick={this._closeDialog} ref='close'></span>

          { this.props.children }
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
    }
  }

  _closeDialog(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    if (_.get(this.props.closeable)) {
      this._dismissDialog();
    }
  }

  _dismissDialog() {
    this.state = {
      isModalOpen: false,
    }

    this._onClose();
  }

  _handleEscape() {
    if (!this._isEscapable) return;
    // TODO: Fix following to not use jQuery
    // $(window).off('keydown.escapePressed')
    window.removeEventListener('keydown.escapePressed');
    this._dismissDialog();
  }

  _isEscapable(ev) {
    const ESCAPE_KEY_CODE = 27;

    return event.keyCode === ESCAPE_KEY_CODE && this.props.closeable && this.props.keyboard;
  }

  _onClose() {
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
