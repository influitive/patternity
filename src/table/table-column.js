import {Component, PropTypes} from 'react';

export default class Column extends Component {
  static propTypes = {
    header: PropTypes.any.isRequired,
    cell: PropTypes.func.isRequired
  }

  render() {
    return null;
  }
}
