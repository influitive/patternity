const React = require('react');

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
