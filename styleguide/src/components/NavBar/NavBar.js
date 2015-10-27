import { Component, PropTypes } from 'react';
import SearchFilter from '../SearchFilter';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: ''
    };
  }

  static propTypes = {
    components: PropTypes.array.isRequired
  }

  onChange = (filter) => {
    this.setState({
      currentFilter: filter
    });
  }

  renderLinks() {
    let { components } = this.props;

    return components.filter((component) => {
      if (this.state.currentFilter != '' && this.state.currentFilter != null) {
        return component.name.toLowerCase().includes(this.state.currentFilter.toLowerCase());
      }
      else {
        return true;
      }
    }).map((component) => {
      return (
        <div>
          <a href={this._buildLink(component)} data-component={component.props}>{component.name}</a>
        </div>
      );
    });
  }

  _buildLink(component) {
    return '#' + component.name;
  }

  render() {
    return (
      <div>
        <SearchFilter components={this.props.components} filter={this.state.currentFilter} onChange={this.onChange}/>
        <div>
          {this.renderLinks()}
        </div>
      </div>
    );
  }
}
