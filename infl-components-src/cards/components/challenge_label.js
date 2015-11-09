const React = require('react');
const Icon = require('../../icon');

class ChallengeLabel extends React.Component {
  static defaultProps = {
    label:   '',
    onClick: function() {}
  }

  static propTypes = {
    label:   React.PropTypes.string,
    onClick: React.PropTypes.func
  }

  render() {
    return this._showLabel();
  }

  _showLabel() {
    if (typeof this.props.label !== 'string') return null;

    return <span className={'pt-challenge-label ' + this._formatChallengeTypeClassName()} onClick={this.props.onClick}>
      {this._lowerCaseLabel()}
    </span>;
  }

  _formatChallengeTypeClassName() {
    const labelArray = this.props.label.split(' ');
    let labelClassName = '';
    for (let i = 0; i < labelArray.length; i++) {
      labelClassName += labelArray[i].toLowerCase() + '-';
    }
    return labelClassName.substring(0, labelClassName.length - 1);
  }

  _lowerCaseLabel(label) {
    return this.props.label.toLowerCase();
  }
}

export default ChallengeLabel;
