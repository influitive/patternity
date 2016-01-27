import React, { Component, PropTypes } from 'react';

export default class Ellipsis extends Component {
  static propTypes = {
    text:     PropTypes.string.isRequired,
    maxLines: PropTypes.number
  }

  static defaultProps = {
    maxLines: 3
  }

  componentDidUpdate(prevProps) {
    this._resetText(this.props.maxLines !== prevProps.maxLines);
    this._applyEllipsis();
  }

  componentDidMount() {
    this._applyEllipsis();
  }

  render() {
    return (
      <div ref="ellipsis" style={this._getTextStyle()}>
        <div ref="text">{this.props.text}</div>
      </div>
    );
  }

  _resetText = (maxLinesChanged) => {
    if (maxLinesChanged) {
      let textElement = this.refs.text;
      textElement.innerHTML = this.props.text;
    }
  }

  _getTextStyle = () => {
    return this.props.maxLines < 1 ? {display: 'none'} : {};
  }

  _applyEllipsis = () => {
    if (this.props.maxLines > 0) {
      let ellipsisElement = this.refs.ellipsis;

      let lineHeight = this._getLineHeight(ellipsisElement);
      ellipsisElement.style.maxHeight = (lineHeight * this.props.maxLines) + 'px';
      this._applyEllipsisToText();
    }
  }

  _getLineHeight(elem) {
    return parseInt(window.getComputedStyle(elem).getPropertyValue('line-height'), 10);
  }

  _applyEllipsisToText = () => {
    if (this._isTextOutOfBounds()) {
      this._shrinkText();
    }
  }

  _isTextOutOfBounds() {
    let textElement = this.refs.text;
    let ellipsisElement = this.refs.ellipsis;

    return textElement.getBoundingClientRect().height > ellipsisElement.getBoundingClientRect().height + 2;
  }

  _shrinkText = () => {
    let textElement = this.refs.text;
    let text = this._removeLastWord(textElement);
    textElement.innerHTML = text;
    this._applyEllipsisToText();
  }

  _removeLastWord(textElement) {
    if (textElement.childNodes.length === 0) {
      return '';
    }

    let text = textElement.childNodes[0].nodeValue;
    let lastIndex = text.lastIndexOf(' ');
    return text.substring(0, lastIndex) + '...';
  }
}
