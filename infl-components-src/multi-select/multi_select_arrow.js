const React = require('react');

import { Icon } from 'infl-icons';

class MultiSelectArrow extends React.Component {
  static displayName = 'MultiSelectArrow'

  static propTypes = {
    hideOptions:    React.PropTypes.func.isRequired,
    showOptions:    React.PropTypes.func.isRequired,
    areOptionsOpen: React.PropTypes.bool.isRequired
  }

  render() {
    return (
      <span className="pt-multi-select-arrow" onClick={this._toggleOptions}>
        <Icon icon={this._determineArrowDirection()} />
      </span>
    );
  }

  _determineArrowDirection() {
    return this.props.areOptionsOpen ? 'chevron-up' : 'chevron-down';
  }

  _toggleOptions = (event) => {
    if (this.props.areOptionsOpen) {
      this.props.hideOptions(event);
    } else {
      this.props.showOptions(event);
    }
  }
}

export default MultiSelectArrow;
