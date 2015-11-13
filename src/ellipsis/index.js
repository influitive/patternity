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

  componentDidUpdate(nextProps) {
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
      <div ref="ellipsis">
        <div ref="text" dangerouslySetInnerHTML={this.state.text}></div>
      </div>
    );
  }

  _determineMaxHeight = () => {
    var ellipsisElement = React.findDOMNode(this.refs.ellipsis);
    var lineHeight = this._getLineHeight(ellipsisElement);
    var maxLines = this.props.maxLines < 1 ? 1 : this.props.maxLines;
    ellipsisElement.style.maxHeight = (lineHeight * maxLines) + 'px';
  }

  _applyEllipsisToText = () => {
    var textElement = React.findDOMNode(this.refs.text);
    var ellipsisElement = React.findDOMNode(this.refs.ellipsis);
    if( textElement.getBoundingClientRect().height > ellipsisElement.getBoundingClientRect().height + 2){
      this._shrinkText();
    }
  }

  _shrinkText = () => {
    this.setState({
      text: this._removeLastWord()
    });
  }

  _removeLastWord = () => {
    var lastIndex = this.state.text.lastIndexOf(" ");
    return this.state.text.substring(0, lastIndex) + "...";
  }

  _getLineHeight = (elem) =>{
    return parseInt(window.getComputedStyle(elem).getPropertyValue("line-height"), 10);
  }
}
