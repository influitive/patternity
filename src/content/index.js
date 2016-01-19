const React = require('react');

import '../shared-scss/infl_base.scss';

class Content extends React.Component {
  static displayName = 'Content'

  static propTypes = {
    hasInnerPanel:       React.PropTypes.bool,
    hasBackgroundColour: React.PropTypes.bool
  }

  static defaultProps = {
    hasInnerPanel:       true,
    hasBackgroundColour: true
  }

  render() {
    return <div className={'panel-content ' + this._doesContentHaveBackgroundColour()} ref='contentPannel'>
      {this._contentHasInnerPanel()}
    </div>;
  }

  _doesContentHaveBackgroundColour() {
    return this.props.hasBackgroundColour
      ? ''
      : 'no-colour';
  }

  _contentHasInnerPanel() {
    if (this.props.hasInnerPanel) {
      return <div className="panel-content-inner" ref="contentInnerPannel">
        {this.props.children}
      </div>;
    } else {
      return (this.props.children);
    }
  }
}

export default Content;
