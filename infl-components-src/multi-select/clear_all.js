const React = require('react');

const Icon = require('../icon');

class ClearAll extends React.Component {
  static displayName = 'ClearAll'

  static propTypes = {
    hasSelectedOptions: React.PropTypes.bool.isRequired,
    onClearAll:         React.PropTypes.func.isRequired
  }

  render() {
    return <span className={'clear-all ' + this._showClearAll()} onClick={this.props.onClearAll}>
      <Icon icon="close" />
    </span>;
  }

  _showClearAll() {
    return this.props.hasSelectedOptions ? 'show' : '';
  }
}

export default ClearAll;
