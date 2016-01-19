const React = require('react');

import '../shared-scss/infl_base.scss';

class PanelLeftSideBar extends React.Component {
  static displayName = 'PanelLeftSideBar'

  static propTypes = {
    id: React.PropTypes.string
  }

  static defaultProps = {
    id: ''
  }

  render() {
    return (
      <section id={this.props.id} className="panel">
          {this.props.children}
      </section>
    );
  }
}

export default PanelLeftSideBar;
