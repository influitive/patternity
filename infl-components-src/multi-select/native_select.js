const React = require('react');

class NativeSelect extends React.Component {
  static displayName = 'NativeSelect'

  static propTypes = {
    selectedOptions: React.PropTypes.array.isRequired,
    name:            React.PropTypes.string.isRequired
  }

  render() {
    return <select name={this.props.name} multiple="multiple" className="pt-multi-select-native default" value={this._buildSelectedValues()}>
      {this._buildOptions()}
    </select>;
  }

  _buildOptions() {
    return this.props.selectedOptions.map(function(option, index) {
      return <option key={index} value={option.value}>{option.name}</option>;
    });
  }

  _buildSelectedValues() {
    return this.props.selectedOptions.map(function(option, index) {
      return option.value;
    });
  }
}

export default NativeSelect;
