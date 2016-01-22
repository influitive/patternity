const React   = require('react');

class Loading extends React.Component {
  static displayName = 'Loading'

  static propTypes = {
    size:    React.PropTypes.oneOf(['small', 'medium', 'large']),
    type:    React.PropTypes.oneOf(['dark', 'light']),
    isModal: React.PropTypes.bool,
    isBlock: React.PropTypes.bool
  }

  static defaultProps = {
    size:    'medium',
    type:    'dark',
    isModal: false,
    isBlock: false
  }
  render() {
    return (
      <span className={`loading-spinner ${this.props.size} ${this.props.type} ${this._isModal()} ${this._isInline()}`}
        ref='loading'></span>
    );
  }

  _isModal() {
    return this.props.isModal ? 'is-modal' : '';
  }

  _isInline() {
    return this.props.isBlock ? 'is-block' : '';
  }
}

export default Loading;
