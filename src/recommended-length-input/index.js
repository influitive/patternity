import { Component, PropTypes} from 'react';
import TextInput from '../../infl-components/text_input';
import classNames from 'ClassNames';

export default class RecommendedLengthInput extends Component {
  state = {
    remainingLength: this.props.recommendedLength
  }

  static propTypes = {
    recommendedLength: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    var value = nextProps.value || "";
    this.setState({
      remainingLength: nextProps.recommendedLength - value.length
    });
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
}
