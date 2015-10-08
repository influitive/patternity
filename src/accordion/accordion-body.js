import React, { Component, PropTypes } from 'react';

class AccordionBody extends Component {
  componentDidMount() {
    const details = this.refs.details.getDOMNode();
    this.setState({maxHeight: details.offsetHeight});
  }

  state = {
    maxheight: 0
  }

  render() {
    const { maxHeight } = this.state;
    return <div className="section-details" style={this.props.open ? {maxHeight} : null}>
      <div className="section-details-inner" ref="details">
        {this.props.body}
      </div>
    </div>;
  }

}

export default AccordionBody;
