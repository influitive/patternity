const React = require('react');
const Icon = require('../icon');

class InputIcon extends React.Component {
  static propTypes = {
    type:     React.PropTypes.oneOf(['text', 'password', 'url', 'email', 'search', 'number', '']),
    required: React.PropTypes.bool
  }
  static defaultProps = {
    type:     'text',
    required: false
  }

  render() {
    if (this.props.type === 'search') {
      return <span className="search-input">
        <Icon icon='search' />
      </span>;
    }

    if (this.props.required) {
      return <span className="required-input">
        <Icon icon='asterisk' />
      </span>;
    }

    return null;
  }
}

module.exports = InputIcon;
