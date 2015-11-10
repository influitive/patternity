import React, { Component, PropTypes} from 'react';
import TextInput from '../../infl-components/text_input';
import classNames from 'classnames';

export default class RecommendedLengthInput extends Component {
  state = {
    remainingLength: this.props.recommendedLength
  }

  static propTypes = {
    recommendedLength: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  }

  componentWillMount(){
    this._setRemainingLength(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this._setRemainingLength(nextProps);
  }

  render(){
    return (
      <div className='pt-recommended-length-input'>
        <TextInput {...this.props} onChange={this._handleChange}/>
        {this._getRemainingLength()}
      </div>
    );
  }

  _handleChange = (e) => {
    this.setState({
      remainingLength: this.props.recommendedLength - e.target.value.length
    })
    this.props.onChange(e);
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

  _setRemainingLength(props){
    var value = props.value || "";
    this.setState({
      remainingLength: props.recommendedLength - value.length
    });
  }
}
