const React = require('react');

const SimplePopover = require('./simple_popover');
const MultiSelectOption = require('./multi_select_option');

class MultiSelectOptionsList extends React.Component {
  static displayName = 'MultiSelectOptionsList'

  static propTypes = {
    options:            React.PropTypes.array.isRequired,
    handleOptionSelect: React.PropTypes.func.isRequired,
    showOptions:        React.PropTypes.bool.isRequired,
    onOptionHasFocus:   React.PropTypes.func.isRequired,
    focusedOption:      React.PropTypes.object.isRequired,
    anyOptionsToShow:   React.PropTypes.func.isRequired
  }

  render() {
    return <SimplePopover isOpen={this.props.showOptions}>
      {this._buildMultiSelectOptions()}
    </SimplePopover>;
  }

  _buildMultiSelectOptions() {
    if (!this.props.anyOptionsToShow()) {
      return <span className="pt-multi-select-option">No Results Found</span>;
    }

    const that = this; // TODO (Shane Keulen): investigate this
    return this.props.options.map(function(option, index) {
      return <MultiSelectOption
        key={index}
        name={option.name}
        value={option.value}
        optionIsSelected={option.optionIsSelected}
        filteredOption={option.filteredOption}
        onClick={that.props.handleOptionSelect}
        onOptionHasFocus={that.props.onOptionHasFocus}
        focusedOption={that.props.focusedOption} />;
    });
  }
}

export default MultiSelectOptionsList;
