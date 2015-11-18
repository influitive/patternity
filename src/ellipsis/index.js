import React, { Component, PropTypes } from 'react';

export default class Ellipsis extends Component {
  static propTypes = {
    text:     PropTypes.string.isRequired,
    maxLines: PropTypes.number
  }

  static defaultProps = {
    maxLines: 3
  }

  text = ''

  componentDidUpdate() {
    this.text = this.props.text;
    this._applyEllipsis(true);
  }

  componentDidMount() {
    this.text = this.props.text;
    this._applyEllipsis(false);
  }

  render() {
    return (
      <div ref="ellipsis" style={this._getTextStyle()}>
        <div ref="text" >{this.text}</div>
      </div>
    );
  }

  _getTextStyle = () => {
    let style = {};
    if (this.props.maxLines < 1) {
      style.display = 'none';
    }
    return style;
  }

  _applyEllipsis = (didTextChange) => {
    if (this.props.maxLines > 0) {
      let ellipsisElement = React.findDOMNode(this.refs.ellipsis);

      let lineHeight = this._getLineHeight(ellipsisElement);
      ellipsisElement.style.maxHeight = (lineHeight * this.props.maxLines) + 'px';
      this._applyEllipsisToText(didTextChange);
    }
  }

  _applyEllipsisToText = (didTextChange) => {
    if (didTextChange || this._isTextOutOfBounds()) {
      this._shrinkText();
    }
  }

  _isTextOutOfBounds() {
    let textElement = React.findDOMNode(this.refs.text);
    let ellipsisElement = React.findDOMNode(this.refs.ellipsis);
    return textElement.getBoundingClientRect().height > ellipsisElement.getBoundingClientRect().height + 2;
  }

  _shrinkText = () => {
    let textElement = React.findDOMNode(this.refs.text);
    this.text = this._removeLastWord();
    textElement.innerHTML = this.text;
    this._applyEllipsisToText(false);
  }

  _removeLastWord = () => {
    let lastIndex = this.text.lastIndexOf(' ');
    return this.text.substring(0, lastIndex) + '...';
  }

  _getLineHeight = (elem) => {
    return parseInt(window.getComputedStyle(elem).getPropertyValue('line-height'), 10);
  }
}
