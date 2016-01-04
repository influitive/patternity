import React, { Component, PropTypes } from 'react';

export default class Dropdown extends Component {

  static propTypes = {
    ref:       PropTypes.string,
    classList: PropTypes.string,
    type:      PropTypes.string,
    children:  PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    onChange:  PropTypes.func,
    open:      PropTypes.bool
  }

  static defaultProps = {
    children:  '',
    type:      '',
    classList: '',
    ref:       'dropdown',
    open:      false,
    onChange:  () => {}
  }

  state = {
    maxHeight: 0
  }

  componentDidMount() {
    setInterval(this._applyRealMaxHeight(), 20);
  }

  render() {
    const { children, classList, ref } = this.props;

    return (
      <ul className={this._getClasses(classList)} ref={ref}>
        {this._renderChildren(children)}
      </ul>
    );
  }

  _applyRealMaxHeight = () => {
    const detailsHeight = this.refs[this.props.ref].offsetHeight;
    if (detailsHeight !== this.state.maxHeight) this.setState({maxHeight: detailsHeight});
  };

  _getClasses = (classList) => {
    return 'options ' + this.props.type  + ' ' + classList;
  };

  _renderChildren = (children) => {
    if (children.length === 0) return null;

    return [].concat(children).map( (opt, i) => {
      return <li className="option" key={opt + '-' + i} ref={opt}>{opt}</li>
    });
  };
}
