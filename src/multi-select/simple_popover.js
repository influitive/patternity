const React = require('react');

class SimplePopover extends React.Component {
  static displayName = 'SimplePopover'

  static propTypes = {
    isOpen: React.PropTypes.bool
  }

  static defaultProps = {
    isOpen: false
  }

  render() {
    return <span className={'pt-simple-popover ' + this._isPopoverOpen()}>
      {this.props.children}
    </span>;
  }

  _isPopoverOpen() {
    return this.props.isOpen ? 'open' : ''
  }
}

export default SimplePopover;
