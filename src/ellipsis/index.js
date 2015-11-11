import React, { Component, PropTypes } from 'react';

export default class Ellipsis extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    maxLines: PropTypes.number
  }

  static defaultProps = {
    maxLines: 3
  }

  state = {
    text: this.props.text
  }

  componentDidUpdate() {
    this._determineMaxHeight();
    this._applyEllipsisToText();
  }

  componentDidMount() {
    this._determineMaxHeight();
    this._applyEllipsisToText();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      text: nextProps.text
    });
  }

  render() {
    return (
      <p ref="ellipsis">
        <span ref="text">{this.state.text}</span>
      </p>
    );
  }

  _determineMaxHeight = () => {
    var ellipsisElement = React.findDOMNode(this.refs.ellipsis);
    var lineHeight = this._getLineHeight(ellipsisElement);

    ellipsisElement.style.maxHeight = (lineHeight * this.props.maxLines) + 'px';
  }

  _applyEllipsisToText = () => {
    var textElement = React.findDOMNode(this.refs.text);
    var ellipsisElement = React.findDOMNode(this.refs.ellipsis);

    if( textElement.getBoundingClientRect().height > ellipsisElement.getBoundingClientRect().height){
      this._shrinkText();
    }
  }

  _shrinkText = () => {
    this.setState({
      text: this._removeLastWord()
    }, this._applyEllipsisToText);
  }

  _removeLastWord = () => {
    var lastIndex = this.state.text.lastIndexOf(" ");
    return this.state.text.substring(0, lastIndex) + "...";
  }

  _getLineHeight = (elem) =>{
    return parseInt(window.getComputedStyle(elem).getPropertyValue("line-height"), 10);
  }
}
