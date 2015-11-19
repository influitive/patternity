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
    this._applyEllipsis(this.props.text !== prevProps.text);
  }

  componentDidMount() {
    this._applyEllipsis(false);
  }

  render() {
    return (
      <div ref="ellipsis" style={this._getTextStyle()}>
        <div ref="text" >{this.props.text}</div>
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
    let text = this._removeLastWord(textElement);
    textElement.innerHTML = text;
    this._applyEllipsisToText(false);
  }

  _removeLastWord = (textElement) => {
    let text = textElement.childNodes.length === 0 ? '' : textElement.childNodes[0].nodeValue;
    let lastIndex = text.lastIndexOf(' ');
    return text.substring(0, lastIndex) + '...';
  }

  _getLineHeight = (elem) => {
    return parseInt(window.getComputedStyle(elem).getPropertyValue('line-height'), 10);
  }
}
