import React, { Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class RecommendedLength extends Component {
  state = {
    remainingLength: this.props.recommendedLength
  }

  static propTypes = {
    recommendedLength: PropTypes.number.isRequired
  }

  componentWillMount() {
    this._setRemainingLength(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this._setRemainingLength(nextProps);
  }

  render() {
    return (
      <div className='pt-recommended-length'>
        {this._processChildInput()}
        {this._getRemainingLength()}
      </div>
    );
  }

  _processChildInput = () => {
    let that = this;
    let child = React.Children.only(this.props.children);

    if (!this._hasValidProps(child)) {
      console.warn('Recommended length requires a child with value and onChange props.');
      return null;
    }

    return React.cloneElement(child, {onChange: function(e) {
      child.props.onChange(e);
      that._handleChange(e);
    }});
  }

  _hasValidProps(child) {
    return child && typeof child.props.value === 'string' && typeof child.props.onChange === 'function';
  }

  _handleChange = (e) => {
    this.setState({
      remainingLength: this.props.recommendedLength - e.target.value.length
    });
  }

  _getRemainingLength = () => {
    return (
      <span className={this._getClassNames()}>{this.state.remainingLength}</span>
    );
  }

  _getClassNames = () => {
    return classNames(
      'pt-remaining-length',
      {
        'negative': this.state.remainingLength < 0
      }
    );
  }

  _setRemainingLength(props) {
    let child = React.Children.only(props.children);
    let value = child.props.value || '';
    this.setState({
      remainingLength: props.recommendedLength - value.length
    });
  }
}
