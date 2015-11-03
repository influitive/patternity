import React, { Component, PropTypes } from 'react';

class AccordionBody extends Component {
  componentDidMount() {
    this.poll = setInterval(this.applyRealMaxHeight, 200);
  }

  componentDidUnmount() {
    clearInterval(this.poll);
  }

  state = {
    maxHeight: 0
  }

  render() {
    const { maxHeight } = this.state;
    return <div className="section-details" style={this.props.open ? {maxHeight} : null}>
      <div className="section-details-inner" ref="details">
        {this.props.body}
      </div>
    </div>;
  }

  applyRealMaxHeight = () => {
    const detailsHeight = this.refs.details.getDOMNode().offsetHeight;
    if (detailsHeight !== this.state.maxHeight) this.setState({maxHeight: detailsHeight});
  }

}

export default AccordionBody;
