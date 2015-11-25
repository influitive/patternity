import React, { Component, PropTypes } from 'react';
import Tag from './tag.js';

// Component File Template
export default class Tagger extends Component {

  static propTypes = {
    tags:           PropTypes.arrayOf(PropTypes.string),
    onTagged:       PropTypes.func.isRequired,
    onUnTagged:     PropTypes.func.isRequired,
    placeholder:    PropTypes.string,
    validationType: PropTypes.string,
  };

  static defaultProps = {
    tags:           [],
    breakOn:        /(\s|,)/g,
    placeholder:    'Please enter an email...',
    validationType: null
  };

  state = {
    currentTag: '',
  };

  render() {
    const { tags, placeholder, onUnTagged, children } = this.props;
    const { currentTag } = this.state;

    return (
      <div className="pt-tagger">
        <ul className="pt-tagger-taglist">
          { this._renderTags() }
        </ul>
        <input value = { currentTag } placeholder = { placeholder } onChange={ this._handleChange } onKeyDown={ this._handleKeyDown } />
      </div>
    );
  };

  _returnValidationType = (arg) => {

    // This object is for adding in different types of input
    // validation as necessary.
    const validationMap = {
      email: this._isValidEmail
    }

    // If validationMap[arg] doesn't exist, it returns false
    return validationMap[arg] || false;
  };

  _isValidEmail = (str) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(str);
  };

  _handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this._handleChange(e, true);
    }
  };

  _handleChange = (e, skipCheck) => {
    const { breakOn, onTagged, validationType } = this.props;
    const { value } = e.target;

    if ( value.match(breakOn) || skipCheck) {
      if (validationType && !this._returnValidationType(validationType)(value)) return;

      onTagged(this._returnTag(breakOn, value));
      this.setState({currentTag: ''});
    } else {
      this.setState({currentTag: value});
    }
  };

  _returnTag = (breakOn, value) => {
    return value
      .split(breakOn)
      .filter( x => !x.match(breakOn))
      .filter( x => x.length > 0);
  };

  _renderTags = () => {
    const { tags, onUnTagged } = this.props;

    return tags.map( (tag) => {
      return (
        <Tag key={ tag } unTag={ onUnTagged } tag={ tag } />
      );
    });
  };
}
