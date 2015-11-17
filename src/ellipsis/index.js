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
    this._applyEllipsis();
  }

  componentDidMount() {
    this._applyEllipsis();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      text: nextProps.text
    });
  }

  render() {
    return (
      <div ref="ellipsis" style={this._getTextStyle()}>
        <div ref="text" >{this.state.text}</div>
      </div>
    );
  }

  _getTextStyle = () => {
    let style = {};
    if(this.props.maxLines < 1){
      style.display = 'none';
    }
    return style;
  }

  _applyEllipsis = () => {
    if(this.props.maxLines > 0){
      let ellipsisElement = React.findDOMNode(this.refs.ellipsis);

      let lineHeight = this._getLineHeight(ellipsisElement);
      ellipsisElement.style.maxHeight = (lineHeight * this.props.maxLines) + 'px';
      this._applyEllipsisToText();
    }
  }

  _applyEllipsisToText = () => {
    let textElement = React.findDOMNode(this.refs.text);
    let ellipsisElement = React.findDOMNode(this.refs.ellipsis);
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
    let lastIndex = this.state.text.lastIndexOf(" ");
    return this.state.text.substring(0, lastIndex) + "...";
  }

  _getLineHeight = (elem) =>{
    return parseInt(window.getComputedStyle(elem).getPropertyValue("line-height"), 10);
  }
}
